
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "کلاس زبان آلمانی B2 در اصفهان | خصوصی و گروهی | دویچینو",
  description:
    "آموزش زبان آلمانی B2 در اصفهان و آنلاین؛ کلاس خصوصی و گروهی با تدریس مستقیم مسیح سلیمانی، منابع متناسب با سطح B2 و مشاوره رایگان.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/b2",
  },
  openGraph: {
    title: "کلاس زبان آلمانی B2 در اصفهان | آکادمی دویچینو",
    description:
      "آموزش زبان آلمانی سطح B2 با کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین.",
    url: "https://www.deutschino.ir/courses/b2",
    siteName: "Deutschino",
    locale: "fa_IR",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی B2",
  description:
    "آموزش زبان آلمانی سطح B2 شامل گرامر پیشرفته، واژگان، مکالمه و مهارت‌های چهارگانه، به‌صورت خصوصی و گروهی در اصفهان و آنلاین.",
  url: "https://www.deutschino.ir/courses/b2",
  inLanguage: "de",
  educationalLevel: "B2",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "صفحه اصلی",
      item: "https://www.deutschino.ir/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "دوره‌های زبان آلمانی",
      item: "https://www.deutschino.ir/#courses",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "کلاس زبان آلمانی B2",
      item: "https://www.deutschino.ir/courses/b2",
    },
  ],
};

const whatsappNumber = "989130061984";

const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const features = [
  {
    icon: Clock3,
    title: "زمان‌بندی کلاس",
    description: "با هماهنگی مدرس",
  },
  {
    icon: GraduationCap,
    title: "پیش‌نیاز",
    description: "تسلط به سطح B1",
  },
  {
    icon: BookOpen,
    title: "منابع آموزشی",
    description: "منابع متناسب با سطح B2",
  },
  {
    icon: Headphones,
    title: "پشتیبانی",
    description: "رفع اشکال و بررسی تمرین‌ها",
  },
];

const outcomes = [
  "استفاده از گرامر و واژگان پیشرفته سطح B2",
  "بیان دیدگاه‌ها، استدلال‌ها و نظرات با جزئیات بیشتر",
  "درک مکالمات و فایل‌های صوتی پیچیده‌تر",
  "خواندن و تحلیل متن‌های متنوع و تخصصی‌تر",
  "نوشتن متن‌های منسجم، رسمی و استدلالی",
  "استفاده مستقل‌تر از زبان آلمانی در محیط‌های تحصیلی و کاری",
];

const faqs = [
  {
    question: "برای شرکت در کلاس B2 چه پیش‌نیازی لازم است؟",
    answer:
      "برای شرکت در دوره B2 لازم است سطح B1 زبان آلمانی را گذرانده باشید و با مباحث گرامری و واژگان این سطح آشنایی داشته باشید.",
  },
  {
    question: "کلاس‌ها حضوری هستند یا آنلاین؟",
    answer:
      "هر دو امکان وجود دارد؛ کلاس حضوری در محدوده حکیم نظامی اصفهان برگزار می‌شود.",
  },
  {
    question: "ظرفیت کلاس گروهی چقدر است؟",
    answer:
      "برای حفظ کیفیت آموزش، هر گروه حداکثر ۶ زبان‌آموز دارد.",
  },
  {
    question: "چه کسی کلاس‌های B2 را تدریس می‌کند؟",
    answer:
      "تمام کلاس‌های خصوصی و گروهی مستقیماً توسط مسیح سلیمانی برگزار می‌شوند.",
  },
  {
    question: "چطور در دوره B2 ثبت‌نام کنم؟",
    answer:
      "از طریق دکمه ثبت‌نام در واتساپ پیام بدهید تا درباره شرایط و زمان‌بندی کلاس راهنمایی شوید.",
  },
];

export default function B2Page() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-7">

        {/* Logo */}
        <div className="mb-5 flex justify-center md:mb-8">
          <Link href="/" aria-label="صفحه اصلی دویچینو">
            <Image
              src="/logo.jpg"
              alt="لوگوی آکادمی دویچینو"
              width={120}
              height={120}
              className="h-16 w-auto md:h-20"
              priority
            />
          </Link>
        </div>

        {/* Introduction */}
        <section
          dir="rtl"
          className="mx-auto mt-3 max-w-4xl text-center md:mt-6"
        >
          <h1 className="mb-3 text-2xl font-bold leading-relaxed md:text-4xl">
            کلاس زبان آلمانی B2 در اصفهان؛ تقویت مهارت‌های پیشرفته
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-8 text-gray-600 md:text-base">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید، در دوره B2 توانایی خود
            را برای استفاده دقیق‌تر و مستقل‌تر از زبان آلمانی گسترش دهید.
            کلاس‌ها به‌صورت خصوصی و گروهی، حضوری در اصفهان و آنلاین برگزار
            می‌شوند.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center md:mt-8">
          <Image
            src="/books4.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی سطح B2"
            width={900}
            height={350}
            className="h-auto w-full max-w-[220px] rounded-xl object-cover md:max-w-[380px]"
            priority
          />
        </div>

        {/* Features */}
        <section
          dir="rtl"
          className="mx-auto mt-7 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-5 border-y border-gray-100 py-5 md:mt-8 md:grid-cols-4 md:gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className="mb-2 text-[#0A2540]"
                />

                <p className="mb-1 text-sm font-semibold">
                  {feature.title}
                </p>

                <p className="text-xs leading-6 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Learning Outcomes */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-4xl md:mt-12"
        >
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            در پایان سطح B2 چه مهارت‌هایی خواهید داشت؟
          </h2>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm leading-8 text-gray-700 md:grid-cols-2 md:text-base">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-1 text-[#0A2540]">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Teaching Advantage */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-4xl rounded-xl bg-[#F7F9FC] p-5 md:mt-12 md:p-7"
        >
          <h2 className="text-lg font-bold md:text-xl">
            آموزش مستقیم با مسیح سلیمانی
          </h2>

          <p className="mt-2 text-sm leading-8 text-gray-600 md:text-base">
            تمام کلاس‌های خصوصی و گروهی را خودم برگزار می‌کنم.
            در طول دوره، متناسب با نیاز آموزشی از منابع سطح B2،
            جزوه‌های اختصاصی، تمرین‌های تکمیلی و نمونه سؤالات آزمون‌های
            Goethe، telc و ECL استفاده می‌کنیم.
          </p>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-3xl md:mt-14"
        >
          <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
            هزینه دوره B2
          </h2>

          <p className="mb-5 text-center text-xs text-gray-500 md:text-sm">
            بسته خصوصی ۱۰ جلسه‌ای و بسته گروهی ۱۰ ساعته
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">

            {/* Private */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  کلاس خصوصی
                </h3>
              </div>

              <div className="p-3 text-center md:p-5">
                <p className="mb-2 text-xs text-gray-500">
                  ۱۰ جلسه
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۱۵٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-4 text-xs leading-6 text-gray-600">
                  هر جلسه ۱٬۵۰۰٬۰۰۰ تومان
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی B2 پیام می‌دهم. لطفاً درباره زمان‌بندی کلاس راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس خصوصی B2"
                  className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-[#12385c] md:text-sm"
                >
                  ثبت‌نام خصوصی
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  کلاس گروهی
                </h3>
              </div>

              <div className="p-3 text-center md:p-5">
                <p className="mb-2 text-xs text-gray-500">
                  ۱۰ ساعت
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۶٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-4 text-xs leading-6 text-gray-600">
                  هر ساعت ۶۹۰٬۰۰۰ تومان
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام کلاس گروهی زبان آلمانی B2 پیام می‌دهم. لطفاً درباره شرایط و زمان‌بندی کلاس راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس گروهی B2"
                  className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-[#12385c] md:text-sm"
                >
                  ثبت‌نام گروهی
                </a>
              </div>
            </div>
          </div>

          {/* Consultation */}
          <div className="mt-5 rounded-xl bg-[#F7F9FC] px-4 py-5 text-center md:py-6">
            <p className="mb-2 text-sm font-bold text-[#0A2540] md:text-base">
              هنوز برای انتخاب کلاس مطمئن نیستید؟
            </p>

            <p className="mb-3 text-xs text-gray-600 md:text-sm">
              قبل از ثبت‌نام، ۱۵ دقیقه مشاوره رایگان دریافت کنید.
            </p>

            <a
              href={whatsappLink(
                "سلام، برای دریافت مشاوره رایگان درباره دوره B2 پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان دوره B2"
              className="inline-flex items-center justify-center rounded-lg border border-[#0A2540] px-5 py-2 text-xs font-semibold text-[#0A2540] transition-colors hover:bg-white md:text-sm"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="mx-auto mt-12 max-w-4xl md:mt-14"
        >
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            سؤالات متداول
          </h2>

          <div className="divide-y divide-gray-100 border-y border-gray-100">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group py-3"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold leading-7 text-[#0A2540] marker:hidden md:text-base">
                  <span>{faq.question}</span>

                  <span className="shrink-0 text-lg font-normal text-gray-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-2 pr-1 text-sm leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-4xl text-right md:mt-12"
        >
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            آموزش زبان آلمانی B2 در اصفهان و آنلاین
          </h2>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            دوره B2 آکادمی دویچینو برای زبان‌آموزانی طراحی شده که سطح B1
            را گذرانده‌اند و می‌خواهند توانایی خود را در استفاده از زبان
            آلمانی در موقعیت‌های تحصیلی، کاری و اجتماعی گسترش دهند.
            در این سطح، گرامر پیشرفته، واژگان گسترده‌تر، مکالمه و
            مهارت‌های چهارگانه زبان آلمانی تمرین می‌شوند.
          </p>

          <p className="mt-3 text-sm leading-8 text-gray-600 md:text-base">
            کلاس زبان آلمانی B2 به‌صورت خصوصی و گروهی، حضوری در محدوده
            حکیم نظامی اصفهان و آنلاین برگزار می‌شود. پس از پایان این
            سطح می‌توانید با توجه به هدف خود یادگیری را ادامه دهید یا
            در{" "}
            <Link
              href="/courses/conversation"
              className="font-semibold text-[#0A2540] underline underline-offset-4"
            >
              کلاس مکالمه زبان آلمانی
            </Link>{" "}
            مهارت صحبت کردن خود را بیشتر تقویت کنید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl border-t border-gray-100 pt-8 text-center md:mt-12"
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            برای شروع دوره B2 آماده‌اید؟
          </h2>

          <p className="mb-4 text-sm leading-7 text-gray-600">
            برای اطلاع از شرایط کلاس‌ها و شروع ثبت‌نام پیام بدهید.
          </p>

          <a
            href={whatsappLink(
              "سلام، برای ثبت‌نام دوره زبان آلمانی B2 در آکادمی دویچینو پیام می‌دهم."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره B2 در واتساپ"
            className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام
          </a>
        </section>

      </div>
    </main>
  );
}
