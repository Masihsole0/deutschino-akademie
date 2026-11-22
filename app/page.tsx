
"use client";

import { useEffect, useRef, useState } from "react";
import Reviews from "@/components/reviews";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BackToTop from "@/components/BackToTop";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function TrustSignals() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);
  const [years, setYears] = useState(1);
  const [students, setStudents] = useState(1);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setYears(Math.min(4, Math.floor(1 + 3 * progress)));
      setStudents(Math.min(100, Math.floor(1 + 99 * progress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setYears(4);
        setStudents(100);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  return (
    <div
      ref={containerRef}
      aria-label="اطلاعات و اعتبار مدرس زبان آلمانی"
      dir="rtl"
      className="mx-auto mt-5 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
    >
      <div className="rounded-md border border-gray-200 bg-white/95 px-2 py-1.5 text-center">
        <p className="text-lg font-bold text-blue-950">
          {years}+
        </p>
        <p className="text-[11px] leading-4 text-gray-600">
          سال تجربه تدریس
        </p>
      </div>

      <div className="rounded-md border border-gray-200 bg-white/95 px-2 py-1.5 text-center">
        <p className="text-lg font-bold text-blue-950">
          {students}+
        </p>
        <p className="text-[11px] leading-4 text-gray-600">
          زبان‌آموز
        </p>
      </div>

      <div className="rounded-md border border-gray-200 bg-white/95 px-2 py-1.5 text-center">
        <p className="text-lg font-bold text-blue-950">telc B2</p>
        <p className="text-[11px] leading-4 text-gray-600">
          مدرک زبان آلمانی
        </p>
      </div>

      <div className="rounded-md border border-gray-200 bg-white/95 px-2 py-1.5 text-center">
        <p className="text-lg font-bold text-blue-950">A1–B2</p>
        <p className="text-[11px] leading-4 text-gray-600">
          سطوح تدریس
        </p>
      </div>
    </div>
  );
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
      description: "تقویت مهارت صحبت کردن و روان‌تر صحبت کردن",
      href: "/courses/conversation",
    },
    {
      title: "کلاس گرامر",
      description: "یادگیری قواعد زبان آلمانی از A1 تا B1",
      href: "/courses/grammar",
    },
  ];

  const benefits = [
    {
      icon: "📚",
      title: "منابع آموزشی متنوع",
      description:
        "استفاده از سه کتاب و منابع تکمیلی برای یادگیری عمیق‌تر.",
    },
    {
      icon: "📝",
      title: "جزوه‌های اختصاصی",
      description:
        "جزوه‌ها و تمرین‌های تکمیلی برای مرور و تثبیت مطالب.",
    },
    {
      icon: "🎯",
      title: "آمادگی آزمون",
      description:
        "تمرین با نمونه آزمون‌های استاندارد Goethe و telc و ECL.",
    },
    {
      icon: "💬",
      title: "پشتیبانی آموزشی",
      description:
        "امکان پرسیدن سؤال و دریافت راهنمایی بین جلسات.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[590px] items-center justify-center overflow-hidden px-6 py-12 text-center md:min-h-[650px] md:py-14">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/germany.jpg')" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-black/60"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-4xl">

          <h1 className="text-3xl font-extrabold leading-[1.7] tracking-tight text-white md:text-5xl md:leading-[1.6]">
            یادگیری زبان آلمانی،
            <br />
            از <span className="text-amber-300">A1 تا B2</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-100 md:text-lg md:leading-9">
            زبان آلمانی را اصولی و هدفمند، با تدریس مستقیم مسیح سلیمانی یاد بگیرید.
            کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین.
          </p>

          {/* TRUST SIGNALS */}
          <TrustSignals />

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href={whatsappUrl}
              onClick={() => trackEvent("whatsapp_click", "hero")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاوره و ثبت‌نام کلاس زبان آلمانی در واتساپ"
              className="inline-flex min-h-14 w-full max-w-xs items-center justify-center rounded-xl bg-green-700 px-9 py-4 text-base font-bold text-white transition hover:bg-green-600 sm:w-auto"
            >
              دریافت مشاوره رایگان
            </a>

            <a
              href="#courses"
              className="inline-flex min-h-12 items-center justify-center gap-2 text-base font-medium text-white underline decoration-white/60 underline-offset-8 transition hover:text-amber-300"
            >
              <span>مشاهده دوره‌ها</span>
              <span className="text-lg no-underline" aria-hidden="true">↓</span>
            </a>

          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        className="scroll-mt-[-110px] bg-gray-50 px-5 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-2xl font-bold text-blue-950 md:text-3xl">
              دوره‌های زبان آلمانی
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-600 md:text-base">
              از شروع یادگیری تا سطوح پیشرفته، مسیر مناسب خودت را انتخاب کن.
            </p>
          </div>

          <div
            dir="rtl"
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
          >
            {courses.map((course) => (
              <article
                key={course.href}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:rounded-2xl sm:p-6"
              >
                <h3 className="text-base font-bold text-blue-950 sm:text-xl">
                  {course.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  {course.description}
                </p>

                <Link
                  href={course.href}
                  className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-950 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-800 sm:rounded-xl sm:py-3"
                >
                  مشاهده دوره
                </Link>
              </article>
            ))}
          </div>

          {/* SEO CONTENT */}
          <div className="mx-auto mt-12 max-w-4xl text-right">

            <h3 className="text-xl font-bold text-blue-950 md:text-2xl">
              کلاس زبان آلمانی حضوری در اصفهان و آنلاین
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-700 md:text-base md:leading-9">
              آکادمی دویچینو برگزارکننده کلاس‌های خصوصی و گروهی زبان آلمانی
              در اصفهان و به صورت آنلاین است. آموزش از سطح مبتدی تا B2،
              با تمرکز بر گرامر، واژگان، شنیداری، خواندن، نوشتن و مکالمه
              انجام می‌شود.
            </p>

            <p className="mt-3 text-sm leading-8 text-gray-700 md:text-base md:leading-9">
              اگر قصد شروع از صفر را دارید،{" "}
              <Link href="/courses/a1" className="font-semibold text-blue-900 underline underline-offset-4">
                دوره A1
              </Link>{" "}
              مناسب شماست. برای ادامه مسیر می‌توانید دوره‌های{" "}
              <Link href="/courses/a2" className="font-semibold text-blue-900 underline underline-offset-4">
                A2
              </Link>
              ،{" "}
              <Link href="/courses/b1" className="font-semibold text-blue-900 underline underline-offset-4">
                B1
              </Link>{" "}
              و{" "}
              <Link href="/courses/b2" className="font-semibold text-blue-900 underline underline-offset-4">
                B2
              </Link>{" "}
              را بررسی کنید. همچنین کلاس‌های{" "}
              <Link href="/courses/conversation" className="font-semibold text-blue-900 underline underline-offset-4">
                مکالمه
              </Link>{" "}
              و{" "}
              <Link href="/courses/grammar" className="font-semibold text-blue-900 underline underline-offset-4">
                گرامر زبان آلمانی
              </Link>{" "}
              برای تقویت مهارت‌های تخصصی‌تر در دسترس هستند.
            </p>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                onClick={() => trackEvent("whatsapp_click", "courses")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                مشاوره و انتخاب دوره
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT TEACHER */}
      <section
        id="about"
        className="scroll-mt-[-140px] bg-white px-6 py-20 md:py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row-reverse md:gap-16">

          <div className="flex-1 text-center md:text-right">

            <h2 className="text-2xl font-bold leading-relaxed text-blue-950 md:text-3xl">
              مسیح سلیمانی
              <span className="block text-lg font-medium text-gray-500 md:mt-2">
                مدرس زبان آلمانی در اصفهان
              </span>
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-8 text-gray-600 md:text-base md:leading-9">

              <p className="font-semibold text-gray-800">
                سلام، خوش اومدی 👋
              </p>

              <p>
                من مسیح سلیمانی هستم؛ دانشجوی رشته‌ی فیزیوتراپی و مدرس زبان آلمانی با بیش از ۴ سال تجربه
                تدریس در آموزشگاه‌های زبان. در آکادمی دویچینو از سطح A1 تا B2
                همراه زبان‌آموزان هستم.
              </p>

              <p>
                در کلاس‌ها روی هر چهار مهارت اصلی زبان آلمانی تمرکز می‌کنیم
                تا بتوانید آموخته‌های خود را در موقعیت‌های واقعی به کار ببرید.
              </p>

              <p>
                با استفاده از جزوه‌های اختصاصی، تمرین‌های تکمیلی و پشتیبانی
                آموزشی بین جلسات، در مسیر یادگیری همراه شما هستم.
              </p>

              <p>
                چه برای مهاجرت و تحصیل، چه برای کار، آزمون یا مکالمه روزمره،
                هدف ما یادگیری اصولی و کاربردی زبان آلمانی است.
              </p>

              <a
                href="tel:+989130061984"
                onClick={() => trackEvent("phone_click", "about")}
                aria-label="تماس با مسیح سلیمانی"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
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
              className="h-64 w-64 rounded-full object-cover shadow-md md:h-80 md:w-80"
            />
          </div>

        </div>
      </section>

      {/* WHY DEUTSCHINO */}
      <section
        id="why-us"
        className="scroll-mt-[-40px] bg-blue-900 px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <h2 className="text-2xl font-bold text-white md:text-3xl">
              چرا آکادمی دویچینو؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-blue-100 md:text-base">
              یادگیری زبان آلمانی با منابع آموزشی، تمرین و پشتیبانی
              در خارج از کلاس.
            </p>

          </div>

          <div
            dir="rtl"
            className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
          >
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl border border-white/20 bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-6"
              >
                <div className="mb-4 text-3xl">
                  {benefit.icon}
                </div>

                <h3 className="text-sm font-bold text-blue-950 sm:text-lg">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-gray-600 sm:text-sm sm:leading-8">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="scroll-mt-[-90px] bg-white py-16 md:py-20"
      >
        <Reviews />
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="relative scroll-mt-[-80px] overflow-hidden bg-blue-950 text-white"
      >

        <img
          src="/footer-bg.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-blue-950/75" />

        <div className="relative mx-auto max-w-6xl px-6 py-12">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

            {/* CONTACT */}
            <div dir="rtl" className="text-right">

              <h2 className="mb-6 text-xl font-bold">
                اطلاعات تماس
              </h2>

              <div className="space-y-5 text-sm leading-8 text-blue-100">

                {/* ADDRESS */}
                <div>
                  <p className="mb-2 font-semibold text-white">
                    آدرس آکادمی
                  </p>

                  <address className="not-italic">
                    اصفهان، خیابان حکیم نظامی، از سمت پل فلزی، بعد از چهارراه
                    نظر، اولین کوچه سمت راست (میدان کوچک ۱۰)، بالای کافه
                    قهوینه، آکادمی دویچینو
                  </address>

                  <div className="mt-3 max-w-sm overflow-hidden rounded-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d839.9743064287111!2d51.653918485331474!3d32.63556027577545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2s!4v1792160428117!5m2!1sde!2s"
                      width="100%"
                      height="160"
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
                    className="mt-3 inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm text-white transition hover:bg-green-600"
                  >
                    مسیریابی به آکادمی
                  </a>
                </div>

                {/* PHONE */}
                <div>
                  <p className="mb-1 font-semibold text-white">
                    شماره تماس
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
                    مشاوره و ثبت‌نام
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

              </div>
            </div>

            {/* ACADEMY */}
            <div className="flex flex-col items-center justify-center md:items-start">

              <div className="flex flex-col items-center gap-3 md:flex-row-reverse">

                <img
                  src="/logo.jpg"
                  alt="لوگوی آکادمی دویچینو"
                  width={90}
                  height={90}
                  loading="lazy"
                  className="h-20 w-20 object-contain"
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

              <p className="mt-5 max-w-md text-center text-sm leading-8 text-blue-100 md:text-right">
                آموزش زبان آلمانی از سطح مقدماتی تا پیشرفته، با تمرکز
                بر یادگیری کاربردی برای مکالمه، تحصیل، کار و مهاجرت.
              </p>

              <Link
                href="/blog"
                className="mt-5 text-sm text-blue-200 underline underline-offset-4 transition hover:text-white"
              >
                مقالات آموزش زبان آلمانی
              </Link>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-blue-200">
            © 2026 Deutschino Akademie | تمامی حقوق محفوظ است.
          </div>

        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
