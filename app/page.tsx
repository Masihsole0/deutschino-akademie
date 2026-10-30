
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
      title: "A1",
      description: "شروع یادگیری زبان آلمانی از صفر و ساختن پایه‌ای قوی",
      href: "/courses/a1",
    },
    {
      title: "A2",
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
      title: "B2",
      description: "تقویت مهارت‌های زبان آلمانی در سطح پیشرفته",
      href: "/courses/b2",
    },
    {
      title: "کلاس مکالمه",
      description: "تمرین مکالمه و افزایش توانایی صحبت‌کردن به زبان آلمانی",
      href: "/courses/conversation",
    },
    {
      title: "گرامر A1 تا B1",
      description: "یادگیری و تقویت گرامر آلمانی از پایه تا پیشرفته",
      href: "/courses/grammar",
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
            یادگیری زبان آلمانی در اصفهان حضوری و آنلاین
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-xl">
            با مسیح سلیمانی؛ کلاس‌های خصوصی و گروهی زبان آلمانی از A1 تا B2
            در آکادمی دویچینو.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاوره و ثبت‌نام کلاس زبان آلمانی در واتساپ"
              className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-green-800 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              مشاوره و ثبت‌نام در واتساپ
            </a>

            <a
              href="#courses"
              className="text-base font-medium text-white underline underline-offset-8 transition hover:text-gray-200"
            >
              مشاهده دوره‌ها ↓
            </a>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="scroll-mt-[-10px] bg-gray-50 px-6 pt-10 py-24"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            دوره‌های آموزش زبان آلمانی
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
            دوره مناسب خودت رو انتخاب کن
          </p>

          <div
            dir="rtl"
            className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {courses.map((course, index) => (
              <article
                key={course.href}
                className={`flex h-full flex-col rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md sm:rounded-2xl sm:p-4 lg:p-5 ${
                  index >= 4 ? "lg:col-span-2" : ""
                }`}
              >
                <h3 className="text-base font-bold leading-7 text-blue-900 sm:text-lg md:text-xl">
                  {course.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {course.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={course.href}
                    className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-blue-900 px-2 py-2 text-sm font-medium text-white transition hover:bg-blue-800 sm:rounded-xl sm:px-4 sm:py-2.5"
                  >
                    مشاهده دوره ←
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
              و همچنین{" "}
              <Link
                href="/courses/b2"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره B2
              </Link>{" "}
              را ببینید. اگر می‌خواهید گرامر زبان آلمانی را از سطح پایه تا
              پیشرفته یاد بگیرید، صفحه{" "}
              <Link
                href="/courses/grammar"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                کلاس گرامر A1 تا B2
              </Link>{" "}
              را بررسی کنید. اگر می‌خواهید بیشتر روی صحبت‌کردن تمرکز کنید،
              صفحه{" "}
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
      <section
        id="about"
        className="scroll-mt-[-10px] bg-white px-6 py-24"
      >
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

              {/* TEACHER CREDENTIALS */}
              <div
                dir="rtl"
                className="grid grid-cols-2 gap-3 py-2 text-center"
              >
                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">۳+</p>
                  <p className="mt-1 text-sm text-gray-600">سال تجربه تدریس</p>
                </div>

                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">۵۱</p>
                  <p className="mt-1 text-sm text-gray-600">زبان‌آموز</p>
                </div>

                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">telc B2</p>
                  <p className="mt-1 text-sm text-gray-600">مدرک زبان آلمانی</p>
                </div>

                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">A1–B2</p>
                  <p className="mt-1 text-sm text-gray-600">سطوح تدریس</p>
                </div>
              </div>

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
      <section
        id="why-us"
        className="scroll-mt-[-10px] bg-blue-900 pb-24 pt-10"
      >
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
      <section id="reviews" className="scroll-mt-[-10px]">
        <Reviews />
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative mt-16 scroll-mt-[-10px] overflow-hidden bg-blue-950 text-white"
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/footer-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-15"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-blue-950/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-9">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

            {/* ACADEMY INFORMATION */}
            <div className="order-2 flex flex-col items-center justify-center md:order-2">
              <div className="flex flex-col items-center gap-3 md:flex-row-reverse">
                <img
                  src="/logo.jpg"
                  alt="لوگوی آکادمی دویچینو"
                  width={100}
                  height={100}
                  loading="lazy"
                  className="h-20 w-20 object-contain md:h-24 md:w-24"
                />

                <div className="text-center md:text-right">
                  <h2 className="text-xl font-bold md:text-2xl">
                    Deutschino Akademie
                  </h2>
                  <p className="mt-1 text-sm text-blue-200">
                    German Language Academy
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-md text-center text-sm leading-7 text-blue-100 md:text-right">
                آموزش زبان آلمانی از سطح مقدماتی تا سطح هدف، با تمرکز بر
                یادگیری کاربردی برای مکالمه، تحصیل، کار و مهاجرت.
              </p>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="order-1 text-right">
              <h2 className="mb-4 text-xl font-bold">
                اطلاعات تماس
              </h2>

              <div className="space-y-4 text-sm leading-7 text-blue-100">

                {/* ADDRESS */}
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
                  <div className="mt-3 w-full max-w-sm overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d839.9743064287111!2d51.653918485331474!3d32.63556027577545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2s!4v1792160428117!5m2!1sde!2s"
                      width="100%"
                      height="150"
                      style={{ border: 0, pointerEvents: "none" }}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="موقعیت آکادمی دویچینو"
                    />
                  </div>

                  {/* DIRECTIONS */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=32.635704%2C51.653748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm text-white transition hover:bg-green-800"
                  >
                    مسیریابی به آکادمی دویچینو
                  </a>
                </div>

                {/* PHONE */}
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

                {/* WHATSAPP */}
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

          {/* COPYRIGHT */}
          <div className="mt-7 border-t border-blue-800/80 pt-4 text-center text-xs text-blue-300">
            © 2026 Deutschino Akademie | تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
