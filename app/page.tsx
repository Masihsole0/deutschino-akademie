
"use client";

import Reviews from "@/components/reviews";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BackToTop from "@/components/BackToTop";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {
  const whatsappUrl =
    "https://wa.me/989130061984?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%88%20%D8%AB%D8%A8%D8%AA%E2%80%8C%D9%86%D8%A7%D9%85%20%DA%A9%D9%84%D8%A7%D8%B3%20%D8%B2%D8%A8%D8%A7%D9%86%20%D8%A2%D9%84%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D8%AF%D8%A7%D8%B1%D9%85.";

  const trackEvent = (eventName: string, location: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        link_location: location,
        transport_type: "beacon",
      });
    }
  };

  const courses = [
    {
      title: "A1",
      description: "شروع یادگیری زبان آلمانی از صفر",
      href: "/courses/a1",
    },
    {
      title: "A2",
      description: "تقویت پایه و ادامه مسیر یادگیری",
      href: "/courses/a2",
    },
    {
      title: "B1",
      description: "رسیدن به سطح مستقل در زبان آلمانی",
      href: "/courses/b1",
    },
    {
      title: "B2",
      description: "تقویت مهارت‌های پیشرفته زبان",
      href: "/courses/b2",
    },
    {
      title: "کلاس مکالمه",
      description: "تمرین صحبت کردن و افزایش اعتمادبه‌نفس",
      href: "/courses/conversation",
    },
    {
      title: "گرامر A1 تا B1",
      description: "یادگیری و تسلط بر قواعد زبان آلمانی",
      href: "/courses/grammar",
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
            آموزش زبان آلمانی از A1 تا B2
            <br />
            با متود اصولی و تخصصی
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-xl">
            کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین
            با تدریس مستقیم مسیح سلیمانی
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href={whatsappUrl}
              onClick={() => trackEvent("whatsapp_click", "hero")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاوره و ثبت‌نام کلاس زبان آلمانی در واتساپ"
              className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-xl bg-green-800 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              دریافت مشاوره رایگان
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
        className="scroll-mt-[-90px] bg-gray-50 px-6 pt-10 py-24"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
            دوره‌های آموزش زبان آلمانی
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
            از شروع یادگیری تا آمادگی برای سطوح پیشرفته، دوره مناسب خودت را انتخاب کن.
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
          <div className="mx-auto mt-12 max-w-4xl text-right">
            <h3 className="text-xl font-bold text-blue-900 md:text-2xl">
              کلاس زبان آلمانی حضوری در اصفهان و آنلاین
            </h3>

            <p className="mt-4 leading-9 text-gray-700">
              در آکادمی دویچینو می‌توانید متناسب با سطح و هدف خود، یادگیری زبان
              آلمانی را از پایه شروع کنید یا مهارت‌های خود را در سطوح بالاتر
              تقویت کنید. کلاس‌ها به صورت خصوصی و گروهی، حضوری در اصفهان و
              آنلاین برگزار می‌شوند و آموزش شامل گرامر، واژگان، شنیداری،
              خواندن، نوشتن و مکالمه است.
            </p>

            <p className="mt-3 leading-9 text-gray-700">
              برای شروع از صفر،{" "}
              <Link
                href="/courses/a1"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره زبان آلمانی A1
              </Link>{" "}
              را انتخاب کنید. اگر قبلاً یادگیری را شروع کرده‌اید، اطلاعات{" "}
              <Link
                href="/courses/a2"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره A2
              </Link>
              ،{" "}
              <Link
                href="/courses/b1"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره B1
              </Link>{" "}
              و{" "}
              <Link
                href="/courses/b2"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                دوره B2
              </Link>{" "}
              را بررسی کنید. همچنین برای تقویت قواعد زبان می‌توانید در{" "}
              <Link
                href="/courses/grammar"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                کلاس گرامر زبان آلمانی
              </Link>{" "}
              شرکت کنید و برای بهبود مهارت صحبت کردن،{" "}
              <Link
                href="/courses/conversation"
                className="font-semibold text-blue-900 underline underline-offset-4 hover:text-blue-700"
              >
                کلاس مکالمه زبان آلمانی
              </Link>{" "}
              را انتخاب کنید.
            </p>

            <p className="mt-3 leading-9 text-gray-700">
              برای انتخاب سطح مناسب و اطلاع از شرایط کلاس‌ها، می‌توانید قبل
              از ثبت‌نام از مشاوره رایگان استفاده کنید.
            </p>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                onClick={() => trackEvent("whatsapp_click", "courses")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800 sm:w-auto"
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
        className="scroll-mt-[-160px] bg-white px-6 py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row-reverse">
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-3xl font-bold leading-relaxed text-blue-900 md:text-4xl">
              مسیح سلیمانی؛ مدرس زبان آلمانی در اصفهان
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
              <p className="font-semibold text-gray-800">سلام 👋🏻</p>

              <p>
                من مسیح سلیمانی هستم؛ مدرس زبان آلمانی با بیش از ۳ سال تجربه
                تدریس در آموزشگاه‌های زبان. در آکادمی دویچینو از سطح A1 تا B2
                همراه زبان‌آموزان هستم.
              </p>

              {/* TEACHER CREDENTIALS */}
              <div
                dir="rtl"
                className="grid grid-cols-2 gap-3 py-2 text-center"
              >
                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">۴+</p>
                  <p className="mt-1 text-sm text-gray-600">سال تجربه تدریس</p>
                </div>

                <div className="rounded-lg bg-gray-50 px-3 py-3">
                  <p className="text-2xl font-bold text-blue-900">۱۰۰+</p>
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
                در کلاس‌ها علاوه بر گرامر و واژگان، روی هر چهار مهارت اصلی
                زبان آلمانی تمرکز می‌کنیم تا بتوانید آموخته‌های خود را در
                موقعیت‌های واقعی به کار ببرید.
              </p>

              <p>
                همچنین با جزوه‌های اختصاصی، تمرین‌های تکمیلی و پشتیبانی
                آموزشی بین جلسات، در مسیر یادگیری تنها نخواهید بود.
              </p>

              <p>
                هدف من این است که متناسب با سطح و هدف شما، مسیر یادگیری
                منظم و کاربردی داشته باشیم؛ چه برای مهاجرت و تحصیل، چه برای
                کار، آزمون یا مکالمه روزمره.
              </p>

              <a
                href="tel:+989130061984"
                onClick={() => trackEvent("phone_click", "about")}
                aria-label="تماس با مسیح سلیمانی با شماره 09130061984"
                className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800"
              >
                تماس با مدرس
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
        className="scroll-mt-[-90px] bg-blue-900 pb-24 pt-10"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              چرا آکادمی دویچینو؟
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-9 text-blue-100 md:text-lg">
              در دویچینو علاوه بر آموزش در کلاس، با منابع تکمیلی و پشتیبانی
              آموزشی در مسیر یادگیری زبان آلمانی همراه شما هستیم.
            </p>

            <div className="mb-2 mt-8 flex items-center justify-center">
              <div className="h-px w-24 bg-blue-300/40" />

              <div className="mx-4 flex h-5 w-5 rotate-45 items-center justify-center rounded-sm border-2 border-blue-300">
                <div className="h-2 w-2 rounded-sm bg-blue-300" />
              </div>

              <div className="h-px w-24 bg-blue-300/40" />
            </div>
          </div>

          <div
            dir="rtl"
            className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          >
            <article className="rounded-2xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                📚
              </div>

              <h3 className="mb-3 text-base font-bold text-blue-900 sm:text-xl">
                آموزش با ۳ کتاب
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                استفاده از سه کتاب و منبع آموزشی برای یادگیری عمیق‌تر و
                تمرین بیشتر.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                📝
              </div>

              <h3 className="mb-3 text-base font-bold text-blue-900 sm:text-xl">
                جزوه‌های اختصاصی
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                جزوه‌های آموزشی برای مرور درس‌ها، تمرین و تثبیت مطالب کلاس.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                🎯
              </div>

              <h3 className="mb-3 text-base font-bold text-blue-900 sm:text-xl">
                آزمون‌های Goethe و telc
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                تمرین با نمونه آزمون‌های استاندارد برای آشنایی با ساختار
                آزمون‌های زبان آلمانی.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl sm:h-16 sm:w-16 sm:text-3xl">
                💬
              </div>

              <h3 className="mb-3 text-base font-bold text-blue-900 sm:text-xl">
                پشتیبانی خارج از کلاس
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                امکان پرسیدن سؤال و دریافت راهنمایی آموزشی بین جلسات.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-[-30px]">
        <Reviews />
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative mt-16 scroll-mt-[-30px] overflow-hidden bg-blue-950 text-white"
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
                آموزش زبان آلمانی از سطح مقدماتی تا پیشرفته، با تمرکز بر
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
                    onClick={() => trackEvent("whatsapp_click", "footer")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block underline underline-offset-4 transition hover:text-white"
                  >
                    پیام در واتساپ
                  </a>
                </div>

                {/* BLOG */}
                <div>
                  <a
                    href="/blog"
                    className="inline-block font-semibold text-blue-200 underline underline-offset-4 transition hover:text-white"
                  >
                    مقالات آموزش زبان آلمانی
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
