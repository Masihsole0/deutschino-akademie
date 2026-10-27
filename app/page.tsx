
"use client";

import Reviews from "@/components/reviews";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/989130061984?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%88%20%D8%AB%D8%A8%D8%AA%E2%80%8C%D9%86%D8%A7%D9%85%20%DA%A9%D9%84%D8%A7%D8%B3%20%D8%B2%D8%A8%D8%A7%D9%86%20%D8%A2%D9%84%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D8%AF%D8%A7%D8%B1%D9%85.";

  const courses = [
    {
      title: "A1 مقدماتی",
      description: "شروع یادگیری زبان آلمانی از صفر و ساختن پایه‌ای قوی",
      href: "/courses/a1",
    },
    {
      title: "A2 متوسط",
      description: "تقویت گرامر، واژگان و مکالمه در موقعیت‌های روزمره",
      href: "/courses/a2",
    },
    {
      title: "B1",
      description:
        "تقویت مهارت‌های زبانی برای موقعیت‌های واقعی و اهداف تحصیلی و شغلی",
      href: "/courses/b1",
    },
    {
      title: "کلاس مکالمه",
      description: "تمرین مکالمه و افزایش توانایی صحبت‌کردن به زبان آلمانی",
      href: "/courses/conversation",
    },
  ];

  const benefits = [
    {
      icon: "👨‍🏫",
      title: "تدریس مستقیم توسط مدرس",
      description:
        "کلاس‌ها توسط خودم برگزار می‌شوند تا مسیر یادگیری و کیفیت آموزش یکپارچه باشد.",
    },
    {
      icon: "📖",
      title: "جزوه‌های آموزشی",
      description:
        "جزوه‌های آموزشی برای کمک به درک بهتر مطالب و مرور درس‌ها در اختیار زبان‌آموزان قرار می‌گیرد.",
    },
    {
      icon: "🗣️",
      title: "آلمانی کاربردی",
      description:
        "در کنار یادگیری کتاب و گرامر، بر مکالمه و استفاده از زبان در موقعیت‌های روزمره تمرکز می‌کنیم.",
    },
    {
      icon: "📈",
      title: "پشتیبانی و بازخورد",
      description:
        "پیشرفت زبان‌آموز بررسی می‌شود و در طول دوره بازخورد و پشتیبانی بین جلسات ارائه می‌شود.",
    },
    {
      icon: "🎯",
      title: "آموزش متناسب با هدف",
      description:
        "مسیر یادگیری با توجه به سطح فعلی و هدف زبان‌آموز، مانند مهاجرت، تحصیل، کار یا مکالمه تنظیم می‌شود.",
    },
    {
      icon: "🚀",
      title: "تمرکز بر پیشرفت واقعی",
      description:
        "هدف کلاس‌ها فقط تمام‌کردن کتاب نیست؛ بلکه استفاده بهتر و مستقل‌تر از زبان آلمانی است.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[600px] flex-col items-center justify-center px-6 py-16 text-center md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/germany.jpg')" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <h1 className="text-3xl font-bold leading-relaxed text-white md:text-4xl">
            آموزش حرفه‌ای زبان آلمانی با متد تخصصی
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-xl">
            کلاس‌های خصوصی و گروهی زبان آلمانی با مسیح سلیمانی در آکادمی
            دویچینو؛ حضوری در اصفهان و آنلاین.
          </p>

          {/* QUICK NAVIGATION BUTTONS */}
          <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                const coursesSection = document.getElementById("courses");

                if (coursesSection) {
                  coursesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                } else {
                  window.location.href = "/#courses";
                }
              }}
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-900 px-3 py-3 text-sm text-white transition hover:bg-blue-800 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">📚</span>
              <span>کلاس‌ها</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاوره و ثبت‌نام کلاس زبان آلمانی در واتساپ"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-800 px-3 py-3 text-sm text-white transition hover:bg-green-700 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">💬</span>
              <span>مشاوره و ثبت‌نام</span>
            </a>

            <a
              href="#about"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-300 px-3 py-3 text-sm text-blue-900 transition hover:bg-gray-300 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">👨‍🏫</span>
              <span>درباره مدرس</span>
            </a>

            <a
              href="#reviews"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-300 px-3 py-3 text-sm text-blue-900 transition hover:bg-gray-300 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">⭐</span>
              <span>نظرات زبان‌آموزان</span>
            </a>

            <a
              href="#why-us"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-300 px-3 py-3 text-sm text-blue-900 transition hover:bg-gray-300 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">✨</span>
              <span>چرا دویچینو؟</span>
            </a>

            <a
              href="#contact"
              className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-300 px-3 py-3 text-sm text-blue-900 transition hover:bg-gray-300 sm:rounded-xl sm:px-5 sm:text-base"
            >
              <span aria-hidden="true">📍</span>
              <span>ارتباط با ما</span>
            </a>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="scroll-mt-20 bg-gray-50 px-6 pt-10 py-24"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            دوره‌های آموزش زبان آلمانی
          </h2>

          <p
            dir="rtl"
            className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600"
          >
            در آکادمی دویچینو می‌توانید یادگیری زبان آلمانی را از سطح{" "}
            <span dir="ltr" className="inline-block">
              A1
            </span>{" "}
            شروع کنید، در سطح‌های{" "}
            <span dir="ltr" className="inline-block">
              A2
            </span>{" "}
            و{" "}
            <span dir="ltr" className="inline-block">
              B1
            </span>{" "}
            ادامه دهید یا در کلاس مکالمه، مهارت صحبت‌کردن خود را تقویت کنید.
            دوره‌ها با توجه به سطح و هدف زبان‌آموز انتخاب می‌شوند.
          </p>

          <div
            dir="ltr"
            className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {courses.map((course) => (
              <article
                key={course.href}
                dir="rtl"
                className="flex h-full flex-col rounded-2xl border border-transparent bg-white p-6 text-center shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-blue-900 md:text-2xl">
                  {course.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {course.description}
                </p>

                <div className="mt-auto pt-6">
                  <Link
                    href={course.href}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800"
                  >
                    مشاهده دوره
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* ADDITIONAL COURSE INFORMATION */}
          <div className="mx-auto mt-16 max-w-4xl text-right">
            <h3 className="text-xl font-bold text-blue-900 md:text-2xl">
              کلاس‌های زبان آلمانی به صورت حضوری و آنلاین
            </h3>

            <p className="mt-4 leading-9 text-gray-700">
              اگر به دنبال یادگیری زبان آلمانی در اصفهان یا شرکت در کلاس آنلاین
              هستید، آکادمی دویچینو امکان آشنایی با دوره‌های مختلف زبان آلمانی
              را برای شما فراهم می‌کند. بسته به سطح فعلی و هدف شما، از یادگیری
              زبان آلمانی از پایه تا تقویت مکالمه و ادامه مسیر در سطوح بالاتر،
              می‌توانید دوره مناسب خود را بررسی کنید. انتخاب دوره بر اساس سطح
              و هدف یادگیری، به شما کمک می‌کند برنامه منظم‌تری برای پیشرفت در
              زبان آلمانی داشته باشید.
            </p>

            <p className="mt-3 leading-9 text-gray-700">
              اگر در ابتدای مسیر هستید، دوره{" "}
              <Link
                href="/courses/a1"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                زبان آلمانی A1
              </Link>{" "}
              برای شروع از پایه در نظر گرفته شده است. برای ادامه یادگیری
              می‌توانید اطلاعات{" "}
              <Link
                href="/courses/a2"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره A2
              </Link>{" "}
              و{" "}
              <Link
                href="/courses/b1"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره B1
              </Link>{" "}
              را ببینید. اگر می‌خواهید بیشتر روی صحبت‌کردن تمرکز کنید، صفحه{" "}
              <Link
                href="/courses/conversation"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                کلاس مکالمه زبان آلمانی
              </Link>{" "}
              را بررسی کنید.
            </p>

            <p className="mt-3 leading-9 text-gray-700">
              برای اطلاع از شرایط کلاس‌ها و انتخاب دوره مناسب، می‌توانید از
              طریق واتساپ پیام بدهید.
            </p>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800 sm:w-auto"
              >
                دریافت مشاوره و انتخاب دوره
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEACHER SECTION */}
      <section id="about" className="scroll-mt-20 bg-white px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row-reverse">
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-3xl font-bold leading-relaxed text-blue-900 md:text-4xl">
              مسیح سلیمانی؛ مدرس زبان آلمانی در اصفهان
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
              <p className="font-semibold text-gray-800">سلام 👋🏻</p>

              <p>
                من مسیح سلیمانی هستم؛ مدرس زبان آلمانی در اصفهان با بیش از
                ۳ سال تجربه تدریس در آموزشگاه‌های زبان.
              </p>

              <p>
                حدود ۵ سال است که به‌صورت جدی با زبان آلمانی درگیرم و با
                چالش‌هایی که زبان‌آموزان در مسیر یادگیری این زبان تجربه
                می‌کنند آشنا هستم. هدفم این است که یادگیری زبان آلمانی را
                ساده‌تر، کاربردی‌تر و لذت‌بخش‌تر کنم.
              </p>

              <p>
                در کلاس‌های من فقط به مطالعه کتاب اکتفا نمی‌کنیم؛ بلکه روی
                مهارت‌هایی کار می‌کنیم که برای مکالمه و استفاده از زبان
                آلمانی در موقعیت‌های واقعی اهمیت دارند.
              </p>

              <p>
                اگر برای یادگیری زبان آلمانی به برنامه‌ای منظم، بازخورد و
                پشتیبانی نیاز دارید، می‌توانید برای بررسی شرایط کلاس‌ها با
                من در ارتباط باشید.
              </p>

              <a
                href="tel:+989130061984"
                aria-label="تماس با مسیح سلیمانی با شماره 09130061984"
                className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800"
              >
                تماس با مسیح سلیمانی
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src="/mee.jpg"
              alt="مسیح سلیمانی، مدرس زبان آلمانی در آکادمی دویچینو اصفهان"
              width={320}
              height={320}
              loading="lazy"
              className="h-64 w-64 rounded-full border-4 border-blue-900 object-cover shadow-lg md:h-80 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* WHY DEUTSCHINO */}
      <section id="why-us" className="bg-blue-900 pb-24 pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              چرا آکادمی دویچینو؟
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-9 text-blue-100 md:text-lg">
              یادگیری زبان آلمانی فقط حفظ واژگان و مطالعه گرامر نیست. تمرین
              مستمر، استفاده از زبان در موقعیت‌های واقعی و داشتن مسیر آموزشی
              متناسب با هدف، به پیشرفت بهتر کمک می‌کند.
            </p>

            <div className="mb-2 mt-10 flex items-center justify-center">
              <div className="h-px w-24 bg-blue-300/40" />

              <div className="mx-4 flex h-5 w-5 rotate-45 items-center justify-center rounded-sm border-2 border-blue-300">
                <div className="h-2 w-2 rounded-sm bg-blue-300" />
              </div>

              <div className="h-px w-24 bg-blue-300/40" />
            </div>
          </div>

          <div
            dir="rtl"
            className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl leading-none"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-blue-900">
                  {benefit.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-20">
        <Reviews />
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative mt-24 overflow-hidden bg-blue-950 py-1 text-white"
      >
        <img
          src="/footer-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute right-0 top-0 h-64 w-full object-cover opacity-10"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* ACADEMY INFORMATION */}
            <div className="order-2 md:order-2">
              <div className="flex flex-col items-center gap-3 md:flex-row-reverse md:items-center">
                <img
                  src="/logo.jpg"
                  alt="لوگوی آکادمی دویچینو"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-24 w-24 object-contain md:h-28 md:w-28"
                />

                <div className="text-center md:text-right">
                  <h2 className="text-xl font-bold md:text-3xl">
                    Deutschino Akademie
                  </h2>

                  <p className="text-sm text-blue-200">
                    German Language Academy
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-center leading-8 text-blue-100 md:text-right">
                آموزش زبان آلمانی از سطح مقدماتی تا سطح هدف، با تمرکز بر
                یادگیری کاربردی برای مکالمه، تحصیل، کار و مهاجرت.
              </p>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="order-1 text-right">
              <h2 className="mb-6 text-2xl font-bold">اطلاعات تماس</h2>

              <div className="space-y-5 leading-8 text-blue-100">
                <div>
                  <p className="mb-1 font-semibold text-white">
                    📍 آدرس آکادمی دویچینو
                  </p>

                  <address className="not-italic">
                    اصفهان، خیابان حکیم نظامی، از سمت پل فلزی، بعد از چهارراه
                    نظر، اولین کوچه سمت راست (میدان کوچک ۱۰)، بالای کافه
                    قهوینه، آکادمی دویچینو
                  </address>

                  {/* GOOGLE MAP */}
                  <div className="mt-3 w-full max-w-sm overflow-hidden rounded-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d839.9743064287111!2d51.653918485331474!3d32.63556027577545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2s!4v1792160428117!5m2!1sde!2s"
                      width="100%"
                      height="180"
                      style={{ border: 0, pointerEvents: "none" }}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="موقعیت آکادمی دویچینو"
                    />
                  </div>

                  {/* DIRECTIONS BUTTON */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=32.635704%2C51.653748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm text-white transition hover:bg-green-800"
                  >
                    مسیریابی به آکادمی دویچینو
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    📞 شماره تماس
                  </p>

                  <a
                    href="tel:+989130061984"
                    dir="ltr"
                    className="inline-block hover:text-white"
                  >
                    09130061984
                  </a>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    💬 مشاوره و ثبت‌نام
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block underline underline-offset-4 transition hover:text-white"
                  >
                    پیام در واتساپ
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-blue-800 pt-5 text-center text-sm text-blue-300">
            © 2026 Deutschino Akademie | تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
