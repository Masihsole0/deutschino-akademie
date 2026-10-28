
"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Reviews from "@/components/reviews";
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
      <section className="relative flex min-h-[560px] flex-col items-center justify-center px-5 py-16 text-center sm:px-6 md:min-h-[600px] md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/germany.jpg')" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <h1 className="text-3xl font-bold leading-relaxed text-white md:text-4xl">
            کلاس زبان آلمانی در اصفهان و آنلاین
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-100 md:mt-6 md:text-xl">
            کلاس‌های خصوصی و گروهی زبان آلمانی با مسیح سلیمانی در آکادمی
            دویچینو؛ از یادگیری پایه تا تقویت مهارت‌های زبان آلمانی.
          </p>

          <div className="mx-auto mt-8 grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <Link
              href="#courses"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-base font-medium text-white transition hover:bg-blue-800"
            >
              <span aria-hidden="true">📚</span>
              مشاهده دوره‌ها
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاوره و ثبت‌نام کلاس زبان آلمانی در واتساپ"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3 text-base font-medium text-white transition hover:bg-green-800"
            >
              <span aria-hidden="true">💬</span>
              مشاوره و ثبت‌نام
            </a>
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="scroll-mt-20 bg-gray-50 px-5 py-16 sm:px-6 md:py-20"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold leading-relaxed text-gray-900 md:text-4xl">
            دوره‌های آموزش زبان آلمانی
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            دوره مناسب خود را انتخاب کنید و برای اطلاع از شرایط کلاس‌ها
            و ثبت‌نام اقدام کنید.
          </p>

          <div
            dir="rtl"
            className="mt-7 grid grid-cols-2 items-stretch gap-3 sm:mt-9 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
          >
            {courses.map((course) => (
              <article
                key={course.href}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-3 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md sm:rounded-2xl sm:p-4"
              >
                <h3 className="text-base font-bold leading-7 text-blue-900 sm:text-lg">
                  {course.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                  {course.description}
                </p>

                <Link
                  href={course.href}
                  className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-blue-900 px-2 py-2 text-sm font-medium text-white transition hover:bg-blue-800 sm:mt-5 sm:rounded-xl sm:px-3"
                >
                  مشاهده دوره
                </Link>
              </article>
            ))}
          </div>

          {/* ADDITIONAL COURSE INFORMATION */}
          <div className="mx-auto mt-12 max-w-4xl text-right md:mt-16">
            <h3 className="text-xl font-bold leading-relaxed text-blue-900 md:text-2xl">
              کلاس‌های زبان آلمانی به صورت حضوری و آنلاین
            </h3>

            <p className="mt-4 leading-8 text-gray-700 md:leading-9">
              اگر به دنبال یادگیری زبان آلمانی در اصفهان یا شرکت در کلاس آنلاین
              هستید، آکادمی دویچینو امکان آشنایی با دوره‌های مختلف زبان آلمانی
              را برای شما فراهم می‌کند. بسته به سطح فعلی و هدف شما، از یادگیری
              زبان آلمانی از پایه تا تقویت مکالمه و ادامه مسیر در سطوح بالاتر،
              می‌توانید دوره مناسب خود را بررسی کنید.
            </p>

            <p className="mt-3 leading-8 text-gray-700 md:leading-9">
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
              را ببینید. اگر می‌خواهید گرامر زبان آلمانی را یاد بگیرید، صفحه{" "}
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
              را ببینید.
            </p>

            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800 sm:w-auto"
              >
                مشاوره و انتخاب دوره
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEACHER SECTION */}
      <section
        id="about"
        className="scroll-mt-20 bg-white px-5 py-16 sm:px-6 md:py-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-8 md:flex-row-reverse md:gap-12">
          <div className="min-w-0 flex-1 text-center md:text-right">
            <h2 className="text-2xl font-bold leading-relaxed text-blue-900 md:text-4xl">
              مسیح سلیمانی؛ مدرس زبان آلمانی در اصفهان
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-gray-600 md:mt-6 md:text-lg">
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
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800"
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
              className="h-56 w-56 rounded-full border-4 border-blue-900 object-cover shadow-lg sm:h-64 sm:w-64 md:h-80 md:w-80"
            />
          </div>
        </div>
      </section>

      {/* WHY DEUTSCHINO */}
      <section
        id="why-us"
        className="scroll-mt-20 bg-blue-900 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold leading-relaxed text-white md:text-4xl">
              چرا آکادمی دویچینو؟
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-blue-100 md:mt-6 md:text-lg md:leading-9">
              یادگیری زبان آلمانی فقط حفظ واژگان و مطالعه گرامر نیست. تمرین
              مستمر، استفاده از زبان در موقعیت‌های واقعی و داشتن مسیر آموزشی
              متناسب با هدف، به پیشرفت بهتر کمک می‌کند.
            </p>

            <div className="mb-2 mt-8 flex items-center justify-center md:mt-10">
              <div className="h-px w-16 bg-blue-300/40 sm:w-24" />

              <div className="mx-4 flex h-5 w-5 rotate-45 items-center justify-center rounded-sm border-2 border-blue-300">
                <div className="h-2 w-2 rounded-sm bg-blue-300" />
              </div>

              <div className="h-px w-16 bg-blue-300/40 sm:w-24" />
            </div>
          </div>

          <div
            dir="rtl"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
          >
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-6 md:p-7"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-3xl leading-none sm:h-16 sm:w-16"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>

                <h3 className="mb-3 text-lg font-bold leading-7 text-blue-900 sm:text-xl">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
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
        className="relative mt-16 overflow-hidden bg-blue-950 py-1 text-white md:mt-24"
      >
        <img
          src="/footer-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute right-0 top-0 h-64 w-full object-cover opacity-10"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 md:py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
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
              <h2 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                اطلاعات تماس
              </h2>

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

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=32.635704%2C51.653748"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-10 items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm text-white transition hover:bg-green-800"
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
