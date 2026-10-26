
"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  full_name: string;
  comment: string;
  level: string;
  avatar_url: string | null;
};

// فشرده‌سازی عکس قبل از ارسال
async function compressImage(file: File): Promise<File> {
  const bitmap = await createImageBitmap(file);

  try {
    const maxSize = 512;
    const scale = Math.min(
      1,
      maxSize / Math.max(bitmap.width, bitmap.height)
    );

    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Image processing failed");
    }

    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (result && result.type === "image/webp") {
            resolve(result);
          } else {
            reject(new Error("WebP conversion failed"));
          }
        },
        "image/webp",
        0.75
      );
    });

    const name = file.name.replace(/\.[^.]+$/, "") || "avatar";

    return new File([blob], `${name}.webp`, {
      type: "image/webp",
    });
  } finally {
    bitmap.close();
  }
}

// تبدیل اعداد فارسی و عربی به انگلیسی
function normalizePhone(value: string): string {
  return value.trim().replace(/[۰-۹٠-٩]/g, (digit) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
    const persianIndex = persianDigits.indexOf(digit);

    return String(
      persianIndex !== -1
        ? persianIndex
        : arabicDigits.indexOf(digit)
    );
  });
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageName, setSelectedImageName] = useState("");

  const [active, setActive] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [longReviews, setLongReviews] = useState<number[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const commentRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const randomTriggerRef = useRef<HTMLHeadingElement | null>(null);
  const activeIndexRef = useRef(0);
  const hasRandomizedRef = useRef(false);

  // دریافت نظرات از API سایت
  useEffect(() => {
    let isMounted = true;

    const getReviews = async () => {
      try {
        const response = await fetch("/api/reviews", {
          cache: "no-store",
          signal: AbortSignal.timeout(15000),
        });

        if (!response.ok) {
          throw new Error(`خطا در دریافت نظرات: ${response.status}`);
        }

        const data: Review[] = await response.json();

        if (!isMounted) return;

        const loadedReviews = Array.isArray(data) ? data : [];

        setReviews(loadedReviews);

        if (
          loadedReviews.length === 0 ||
          activeIndexRef.current >= loadedReviews.length
        ) {
          activeIndexRef.current = 0;
          setActive(0);
        }
      } catch (error) {
        if (isMounted) {
          console.error("خطای دریافت نظرات:", error);
        }
      } finally {
        if (isMounted) {
          setIsLoadingReviews(false);
        }
      }
    };

    void getReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  // تشخیص نظرات طولانی برای نمایش «ادامه مطلب»
  useEffect(() => {
    const checkLongReviews = () => {
      const long: number[] = [];

      commentRefs.current.forEach((element, index) => {
        if (element && element.scrollHeight > element.clientHeight) {
          long.push(index);
        }
      });

      setLongReviews(long);
    };

    const frame = requestAnimationFrame(checkLongReviews);

    window.addEventListener("resize", checkLongReviews);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", checkLongReviews);
    };
  }, [reviews, active, expandedReview]);

  // انتخاب تصادفی نظر هنگام ورود دوباره به بخش نظرات
  useEffect(() => {
    const trigger = randomTriggerRef.current;

    if (!trigger || reviews.length < 2) {
      return;
    }

    let wasVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting && !wasVisible) {
          const currentIndex =
            activeIndexRef.current % reviews.length;

          let nextIndex: number;

          if (!hasRandomizedRef.current) {
            nextIndex = Math.floor(Math.random() * reviews.length);
          } else {
            const randomIndex = Math.floor(
              Math.random() * (reviews.length - 1)
            );

            nextIndex =
              randomIndex >= currentIndex
                ? randomIndex + 1
                : randomIndex;
          }

          hasRandomizedRef.current = true;
          activeIndexRef.current = nextIndex;
          setActive(nextIndex);
          setExpandedReview(null);
        }

        wasVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, [reviews.length]);

  // نظر بعدی
  const nextReview = () => {
    if (reviews.length <= 1) return;

    const nextIndex = (activeIndexRef.current + 1) % reviews.length;

    activeIndexRef.current = nextIndex;
    setActive(nextIndex);
    setExpandedReview(null);
  };

  // نظر قبلی
  const prevReview = () => {
    if (reviews.length <= 1) return;

    const previousIndex =
      activeIndexRef.current === 0
        ? reviews.length - 1
        : activeIndexRef.current - 1;

    activeIndexRef.current = previousIndex;
    setActive(previousIndex);
    setExpandedReview(null);
  };

  // ثبت نظر از طریق API سرور
  const submitReview = async () => {
    if (isSubmitting) return;

    const cleanName = name.trim();
    const cleanComment = text.trim();
    const convertedPhone = normalizePhone(phone);

    if (!cleanName || !level || !cleanComment || !convertedPhone) {
      alert("لطفاً همه فیلدهای ضروری را تکمیل کنید.");
      return;
    }

    if (!/^09\d{9}$/.test(convertedPhone)) {
      alert("شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.");
      return;
    }

    if (!["A1", "A2", "B1", "B2"].includes(level)) {
      alert("لطفاً سطح زبان را انتخاب کنید.");
      return;
    }

    if (selectedImage && selectedImage.size > 10 * 1024 * 1024) {
      alert("حجم عکس اولیه نباید بیشتر از ۱۰ مگابایت باشد.");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageToUpload: File | null = selectedImage;

      if (selectedImage) {
        try {
          imageToUpload = await compressImage(selectedImage);
        } catch (error) {
          console.error("خطا در فشرده‌سازی عکس:", error);
          alert("تبدیل عکس ناموفق بود. لطفاً عکس دیگری انتخاب کنید.");
          return;
        }
      }

      const formData = new FormData();
      formData.append("name", cleanName);
      formData.append("level", level);
      formData.append("comment", cleanComment);
      formData.append("phone", convertedPhone);

      if (imageToUpload) {
        formData.append("image", imageToUpload);
      }

      const response = await fetch("/api/reviews", {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(30000),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 409) {
          alert("شما قبلاً با این شماره نظر ثبت کرده‌اید.");
        } else {
          alert(
            result?.error ||
              "ثبت نظر ناموفق بود. لطفاً دوباره تلاش کنید."
          );
        }

        return;
      }

      alert("نظر شما با موفقیت ثبت شد.");

      setName("");
      setLevel("");
      setText("");
      setPhone("");
      setSelectedImage(null);
      setSelectedImageName("");
      setShowForm(false);

      // دریافت دوباره نظرات برای نمایش اطلاعات تازه
      try {
        const refreshResponse = await fetch("/api/reviews", {
          cache: "no-store",
          signal: AbortSignal.timeout(15000),
        });

        if (refreshResponse.ok) {
          const updatedReviews: Review[] = await refreshResponse.json();

          if (Array.isArray(updatedReviews)) {
            setReviews(updatedReviews);
          }
        }
      } catch (refreshError) {
        console.error("خطا در به‌روزرسانی نظرات:", refreshError);
      }
    } catch (error) {
      console.error("خطای ثبت نظر:", error);

      if (error instanceof Error && error.name === "TimeoutError") {
        alert(
          "زمان درخواست تمام شد. قبل از تلاش دوباره، بررسی کن که نظر ثبت نشده باشد."
        );
      } else {
        alert(
          "ارتباط با سرور برقرار نشد. لطفاً اتصال را بررسی و دوباره تلاش کنید."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
      className="py-20 px-6 bg-gray-50 text-center overflow-hidden"
    >
      <h2
        ref={randomTriggerRef}
        className="text-3xl font-bold text-blue-900 mb-12"
      >
        نظرات زبان‌آموزان
      </h2>

      <div className="relative flex flex-row-reverse justify-center items-center h-[380px] md:h-80">
        {isLoadingReviews ? (
          <p className="text-gray-500">در حال بارگذاری نظرات...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500">
            هنوز نظری برای نمایش وجود ندارد.
          </p>
        ) : (
          reviews.map((review, index) => {
            let position = "";

            if (index === active) {
              position =
                "translate-x-0 scale-100 opacity-100 blur-0 z-20";
            } else if (index === (active + 1) % reviews.length) {
              position =
                "translate-x-40 md:translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
            } else {
              position =
                "-translate-x-40 md:-translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
            }

            return (
              <div
                key={`${review.full_name}-${index}`}
                className={`
                  absolute
                  w-[85vw] max-w-[300px] min-h-[350px]
                  md:w-80 md:min-h-[300px]
                  bg-white rounded-3xl
                  shadow-xl p-8
                  transition-all duration-700 ease-in-out
                  ${position}
                `}
              >
                <div className="flex flex-col">
                  <div className="flex-1 flex justify-center items-center pt-16">
                    <div className="absolute top-4 left-5 text-6xl text-blue-200 font-serif opacity-80 select-none">
                      ❝
                    </div>

                    <div className="w-full text-center" dir="rtl">
                      <p
                        ref={(element) => {
                          commentRefs.current[index] = element;
                        }}
                        className={`text-gray-700 leading-7 break-words whitespace-normal px-2 ${
                          expandedReview === index
                            ? "mt-6"
                            : "line-clamp-7"
                        }`}
                      >
                        "{review.comment}"
                      </p>

                      {longReviews.includes(index) && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedReview(
                              expandedReview === index ? null : index
                            )
                          }
                          className="text-blue-600 text-sm mt-2"
                        >
                          {expandedReview === index
                            ? "بستن"
                            : "ادامه مطلب"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div
                    className="absolute top-4 right-5 flex flex-row-reverse items-center gap-3"
                    dir="ltr"
                  >
                    {review.avatar_url ? (
                      <img
                        src={review.avatar_url}
                        alt={review.full_name}
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                        className="w-12 h-12 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                        {review.full_name?.charAt(0)}
                      </div>
                    )}

                    <div className="flex flex-col order-2">
                      <h3 className="font-bold text-blue-900">
                        {review.full_name}
                      </h3>

                      <span className="text-gray-500 text-sm">
                        سطح {review.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <span className="px-4 py-1 rounded-full bg-white shadow text-gray-600 text-sm font-medium">
          {reviews.length === 0 ? 0 : active + 1} / {reviews.length}
        </span>
      </div>

      <div className="flex flex-row-reverse justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prevReview}
          disabled={reviews.length <= 1}
          className="bg-gray-200 px-6 py-3 rounded-full disabled:opacity-50"
        >
          قبلی
        </button>

        <button
          type="button"
          onClick={nextReview}
          disabled={reviews.length <= 1}
          className="bg-blue-900 text-white px-6 py-3 rounded-full disabled:opacity-50"
        >
          بعدی
        </button>

        <button
          type="button"
          onClick={() => setShowForm((previous) => !previous)}
          className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full"
        >
          ثبت نظر
        </button>
      </div>

      {showForm && (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-6">
            ثبت نظر شما
          </h3>

          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={name}
            maxLength={100}
            onChange={(event) => setName(event.target.value)}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <input
            type="tel"
            inputMode="tel"
            placeholder="شماره تلفن"
            value={phone}
            maxLength={15}
            onChange={(event) => setPhone(event.target.value)}
            className="w-full border rounded-xl p-3 mb-4"
          />

          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="w-full border rounded-xl p-3 mb-4"
          >
            <option value="">انتخاب سطح زبان</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
          </select>

          <textarea
            placeholder="نظر شما"
            value={text}
            maxLength={3000}
            onChange={(event) => setText(event.target.value)}
            className="w-full border rounded-xl p-3 h-32 mb-4"
          />

          <label className="w-full border rounded-xl p-3 mb-2 block text-gray-600 cursor-pointer text-center">
            {selectedImageName
              ? "عکس انتخاب شد ✅"
              : "انتخاب پروفایل (اختیاری)"}

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => {
                const file = event.target.files?.[0];

                if (file) {
                  setSelectedImage(file);
                  setSelectedImageName(file.name);
                }
              }}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={submitReview}
            disabled={isSubmitting}
            className="w-full bg-blue-900 text-white py-3 rounded-xl disabled:opacity-50"
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال نظر"}
          </button>
        </div>
      )}
    </section>
  );
}
