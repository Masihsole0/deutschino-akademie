"use client";

import { supabase } from "@/lib/supabase";
import { useState, useEffect, useRef } from "react";

type Review = {
  full_name: string;
  comment: string;
  level: string;
  avatar_url: string | null;
};

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
    if (!context) throw new Error("Image processing failed");

    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) =>
          result
            ? resolve(result)
            : reject(new Error("Image compression failed")),
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

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const commentRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const [active, setActive] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [selectedImageName, setSelectedImageName] = useState("");
  const [expandedReview, setExpandedReview] = useState<number | null>(null);
  const [longReviews, setLongReviews] = useState<number[]>([]);

  const [name, setName] = useState("");
const [level, setLevel] = useState("");
const [text, setText] = useState("");
const [phone, setPhone] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false)

useEffect(() => {
  const getReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setReviews(data || []);
  };

  getReviews();
}, []);

useEffect(() => {
  const checkLongReviews = () => {
    const long: number[] = [];

    commentRefs.current.forEach((el, index) => {
      if (el && el.scrollHeight > el.clientHeight) {
        long.push(index);
      }
    });

    setLongReviews(long);
  };

  checkLongReviews();
}, [reviews]);

  const nextReview = () => {
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActive((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const submitReview = async () => {
    setIsSubmitting(true)
  const convertedPhone = phone.trim().replace(/[۰-۹]/g, function (d) {
    return String("۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  });

  if (!/^09\d{9}$/.test(convertedPhone)) {
    alert("شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.");
    setIsSubmitting(false);
    return;
  }

  const { data: existingReview, error: checkError } = await supabase
  .from("reviews")
  .select("phone")
  .eq("phone", convertedPhone)
  .limit(1);

if (checkError) {
  console.log(checkError);
  alert("خطا در بررسی شماره");
  setIsSubmitting(false);
  return;
}

if (existingReview && existingReview.length > 0) {
  alert("شما قبلاً با این شماره نظر ثبت کرده‌اید.");
  setIsSubmitting(false);
  return;
}
  let avatarUrl = "";

if (selectedImage) {
  try {
    const bitmap = await createImageBitmap(selectedImage);
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
      bitmap.close();
      throw new Error("Image processing failed");
    }

    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) =>
          result
            ? resolve(result)
            : reject(new Error("Image compression failed")),
        "image/webp",
        0.75
      );
    });

    const imageName =
      selectedImage.name.replace(/\.[^.]+$/, "") || "avatar";

    const compressedImage = new File([blob], `${imageName}.webp`, {
      type: "image/webp",
    });

    const fileName = `${Date.now()}-${compressedImage.name}`;

    const { error: uploadError } = await supabase.storage
      .from("review-images")
      .upload(fileName, compressedImage, {
        contentType: "image/webp",
      });

    if (uploadError) {
      console.error(uploadError);
      alert("خطا در آپلود عکس");
      setIsSubmitting(false);
      return;
    }

    const { data } = supabase.storage
      .from("review-images")
      .getPublicUrl(fileName);

    avatarUrl = data.publicUrl;
  } catch (error) {
    console.error(error);
    alert("خطا در فشرده‌سازی عکس");
    setIsSubmitting(false);
    return;
  }
}

  const { error } = await supabase
    .from("reviews")
    .insert([
      {
        full_name: name,
        level,
        comment: text,
        phone: convertedPhone,
        avatar_url: avatarUrl,
      },
    ]);

  if (error) {
    alert("خطا در ثبت نظر");
    console.log(error);
    return;
  }

  alert("نظر شما ثبت شد");

  setName("");
  setLevel("");
  setText("");
  setPhone("");

  setIsSubmitting(false);
};
 return (
  <section className="py-20 px-6 bg-gray-50 text-center overflow-hidden">

    <h2 className="text-3xl font-bold text-blue-900 mb-12">
      نظرات زبان‌آموزان
    </h2>

    <div className="relative flex flex-row-reverse justify-center items-center h-[380px] md:h-80">

  {reviews.length === 0 ? (
    <p className="text-gray-500">
     ... در حال بارگذاری نظرات 
    </p>
  ) : (

  reviews.map((review, index) => {

    let position = ""

    if (index === active) {
      position =
        "translate-x-0 scale-100 opacity-100 blur-0 z-20";
    } else if (
      index === (active + 1) % reviews.length
    ) {
      position =
        "translate-x-40 md:translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
    } else {
      position =
        "-translate-x-40 md:-translate-x-72 scale-95 opacity-70 blur-[1px] z-10";
    }

    return (
      <div
        key={index}
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
  ref={(el) => {
  commentRefs.current[index] = el;
}}
  className={`text-gray-700 leading-7 break-words whitespace-normal px-2 ${
    expandedReview === index ? "mt-6" : "line-clamp-7"
  }`}
>
    "{review.comment}"
  </p>

  {longReviews.includes(index) && (
    <button
      onClick={() =>
        setExpandedReview(
          expandedReview === index ? null : index
        )
      }
      className="text-blue-600 text-sm mt-2"
    >
      {expandedReview === index ? "بستن" : "ادامه مطلب"}
    </button>
  )}
</div>
          </div>

          <div className="absolute top-4 right-5 flex flex-row-reverse items-center gap-3" dir="ltr">

{review.avatar_url ? (
  <img
    src={review.avatar_url}
    alt={review.full_name}
    width={48}
    height={48}
    loading="lazy"
    decoding="async"
    className="w-12 h-12 rounded-full object-cover border"
  />
) : (
  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
    {review.full_name?.charAt(0)}
  </div>
)}
```

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
    {active + 1} / {reviews.length}
  </span>
</div>

      <div className="flex flex-row-reverse justify-center gap-4 mt-8">

  <button
    onClick={prevReview}
    className="bg-gray-200 px-6 py-3 rounded-full"
  >
    قبلی
  </button>

  <button
    onClick={nextReview}
    className="bg-blue-900 text-white px-6 py-3 rounded-full"
  >
    بعدی
  </button>

  <button
  onClick={() => setShowForm(!showForm)}
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
  onChange={(e) => setName(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
/>

    <input
  type="text"
  placeholder="شماره تلفن"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
/>

    <select
  value={level}
  onChange={(e) => setLevel(e.target.value)}
  className="w-full border rounded-xl p-3 mb-4"
>
      <option>انتخاب سطح زبان</option>
      <option>A1</option>
      <option>A2</option>
      <option>B1</option>
      <option>B2</option>
    </select>

    <textarea
  placeholder="نظر شما"
  value={text}
  onChange={(e) => setText(e.target.value)}
  className="w-full border rounded-xl p-3 h-32 mb-4"
/>

<label className="w-full border rounded-xl p-3 mb-2 block text-gray-600 cursor-pointer text-center">
  {selectedImageName ? "عکس انتخاب شد ✅" : "انتخاب پروفایل (اختیاری)"}

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      if (e.target.files?.[0]) {
        setSelectedImage(e.target.files[0]);
        setSelectedImageName(e.target.files[0].name);
      }
    }}
    className="hidden"
  />
</label>

<button
  onClick={submitReview}
  disabled={isSubmitting}
  className="w-full bg-blue-900 text-white py-3 rounded-xl disabled:opacity-50"
>
  {isSubmitting ? "... در حال ارسال" : "ارسال نظر"}
</button>

</div>
)}


    </section>
  );
}