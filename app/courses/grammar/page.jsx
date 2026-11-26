
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
  title: "کلاس گرامر زبان آلمانی A1 تا B2 در اصفهان | دویچینو",
  description:
    "کلاس گرامر زبان آلمانی از سطح A1 تا B2 در اصفهان و آنلاین؛ آموزش قواعد، حل تمرین و رفع اشکال با منبع Grammatik Aktiv در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/grammar",
  },
  openGraph: {
    title: "کلاس گرامر زبان آلمانی A1 تا B2 در اصفهان | دویچینو",
    description:
      "آموزش گرامر آلمانی از A1 تا B2، حل تمرین و رفع اشکال؛ حضوری در اصفهان و آنلاین.",
    url: "https://www.deutschino.ir/courses/grammar",
    siteName: "آکادمی دویچینو",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/books5.jpg",
        width: 900,
        height: 350,
        alt: "کلاس گرامر زبان آلمانی در آکادمی دویچینو",
      },
    ],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره گرامر زبان آلمانی A1 تا B2",
  description:
    "آموزش گرامر زبان آلمانی از سطح A1 تا B2 با تمرکز بر یادگیری قواعد، حل تمرین و رفع اشکال در آکادمی دویچینو.",
  url: "https://www.deutschino.ir/courses/grammar",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "A1–B2",
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
      name: "کلاس گرامر زبان آلمانی",
      item: "https://www.deutschino.ir/courses/grammar",
    },
  ],
};

const whatsappNumber = "989130061984";

const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const features = [
  {
    icon: Clock3,
    title: "مدت هر جلسه",
    description: "۹۰ دقیقه",
  },
  {
    icon: GraduationCap,
    title: "سطوح آموزشی",
    description: "A1 تا B2",
  },
  {
    icon: BookOpen,
    title: "منبع آموزشی",
    description: "Grammatik Aktiv",
  },
  {
    icon: Headphones,
    title: "پشتیبانی",
    description: "رفع اشکال خارج از کلاس",
  },
];

const outcomes = [
  "گرامر پایه A1 و A2؛ صرف افعال، آرتیکل‌ها، ضمایر و ساختار جمله",
  "حالت‌های دستوری Nominativ، Akkusativ و Dativ و حروف اضافه",
  "گرامر B1؛ جمله‌های فرعی، افعال با حروف اضافه و ساختارهای مصدر با zu",
  "گرامر B2؛ ساختارهای پیچیده‌تر جمله و قواعد پیشرفته‌تر",
  "حل تمرین و بررسی اشتباهات رایج",
  "رفع اشکال متناسب با سطح و نیاز زبان‌آموز",
];

const faqs = [
  {
    question: "آیا می‌توانم فقط یک سطح مشخص از گرامر را یاد بگیرم؟",
    answer:
      "بله. لازم نیست تمام مباحث A1 تا B2 را از ابتدا بخوانید. محتوای کلاس با توجه به سطح فعلی، نقاط ضعف و نیاز آموزشی شما انتخاب می‌شود.",
  },
  {
    question: "کلاس‌ها حضوری برگزار می‌شوند یا آنلاین؟",
    answer:
      "امکان شرکت در کلاس به‌صورت حضوری در اصفهان و همچنین آنلاین وجود دارد.",
  },
  {
    question: "در کلاس گرامر از چه منبعی استفاده می‌شود؟",
    answer:
      "از کتاب Grammatik Aktiv و منابع تکمیلی متناسب با سطح زبان‌آموز برای آموزش قواعد و حل تمرین استفاده می‌شود.",
  },
  {
    question: "چه کسی کلاس گرامر را تدریس می‌کند؟",
    answer:
      "تمام کلاس‌های خصوصی و گروهی مستقیماً توسط مسیح سلیمانی برگزار می‌شوند.",
  },
  {
    question: "آیا خارج از ساعات کلاس هم می‌توانم سؤال بپرسم؟",
    answer:
      "بله. برای پرسیدن سؤال‌ها و رفع اشکال‌های مرتبط با مباحث آموزشی، امکان پشتیبانی خارج از ساعات کلاس وجود دارد.",
  },
];

export default function GrammarPage() {
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
          <Link href="/" aria-label="صفحه اصلی آکادمی دویچینو">
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
            کلاس گرامر زبان آلمانی از A1 تا B2
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-8 text-gray-600 md:text-base">
            قواعد زبان آلمانی را متناسب با سطح و نیاز خود یاد بگیرید؛
            از مباحث پایه مانند صرف افعال و آرتیکل‌ها تا ساختارهای
            پیشرفته‌تر B1 و B2. همراه با حل تمرین، بررسی اشتباهات
            و رفع اشکال در کلاس‌های حضوری اصفهان و آنلاین.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center md:mt-8">
          <Image
            src="/books5.jpg"
            alt="منابع آموزشی کلاس گرامر زبان آلمانی"
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
            در کلاس گرامر چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm leading-8 text-gray-700 md:grid-cols-2 md:text-base">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-[#0A2540]">✓</span>
                <span>{item}</span>
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
            در این دوره، مباحث گرامری را با مثال‌های کاربردی،
            حل تمرین و بررسی اشتباهات رایج یاد می‌گیرید تا بتوانید
            قواعد را در جمله‌سازی و استفاده واقعی از زبان آلمانی به کار ببرید.
          </p>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-3xl md:mt-14"
        >
          <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
            هزینه کلاس گرامر زبان آلمانی
          </h2>

          <p className="mb-5 text-center text-xs text-gray-500 md:text-sm">
            بسته ۱۰ جلسه‌ای؛ هر جلسه ۹۰ دقیقه
          </p>

          <div className="mx-auto grid max-w-md grid-cols-1 gap-3 md:gap-5">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  پکیج کلاس گرامر
                </h3>
              </div>

              <div className="p-4 text-center md:p-5">
                <p className="mb-2 text-xs text-gray-500">
                  ۱۰ جلسه
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۱۰٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-4 text-xs leading-6 text-gray-600">
                  هر جلسه ۱٬۰۰۰٬۰۰۰ تومان
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام پکیج ۱۰ جلسه‌ای کلاس گرامر زبان آلمانی A1 تا B2 اطلاعات بیشتری می‌خواهم."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس گرامر زبان آلمانی"
                  className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-[#12385c] md:text-sm"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>
          </div>

          {/* Consultation */}
          <div className="mt-5 rounded-xl bg-[#F7F9FC] px-4 py-5 text-center md:py-6">
            <p className="mb-2 text-sm font-bold text-[#0A2540] md:text-base">
              نمی‌دانید از کدام مباحث گرامری شروع کنید؟
            </p>

            <p className="mb-3 text-xs text-gray-600 md:text-sm">
              پیش از ثبت‌نام، ۱۵ دقیقه مشاوره رایگان دریافت کنید.
            </p>

            <a
              href={whatsappLink(
                "سلام، برای دریافت مشاوره رایگان درباره کلاس گرامر زبان آلمانی پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان کلاس گرامر"
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
            کلاس گرامر زبان آلمانی A1 تا B2 در اصفهان و آنلاین
          </h2>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            کلاس گرامر آلمانی دویچینو برای زبان‌آموزانی طراحی شده است
            که می‌خواهند قواعد زبان را بهتر یاد بگیرند و در جمله‌سازی
            اشتباهات کمتری داشته باشند. مباحث آموزشی از سطح A1 تا B2
            و متناسب با سطح فعلی و نیاز شما انتخاب می‌شوند. با استفاده
            از کتاب Grammatik Aktiv، حل تمرین و مثال‌های کاربردی،
            قواعد را بهتر درک می‌کنید و در استفاده از زبان آلمانی به کار می‌برید.
          </p>

          <p className="mt-3 text-sm leading-8 text-gray-600 md:text-base">
            این دوره شامل ۱۰ جلسه ۹۰ دقیقه‌ای است و کلاس‌ها به‌صورت
            حضوری در محدوده حکیم نظامی اصفهان و آنلاین برگزار می‌شوند.
            اگر قصد دارید در کنار گرامر، مهارت‌های دیگر زبان آلمانی را
            نیز تقویت کنید، می‌توانید{" "}
            <Link
              href="/courses/a1"
              className="font-semibold text-[#0A2540] underline underline-offset-4"
            >
              دوره‌های آموزش زبان آلمانی دویچینو
            </Link>{" "}
            را بررسی کنید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl border-t border-gray-100 pt-8 text-center md:mt-12"
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            آماده تقویت گرامر زبان آلمانی خود هستید؟
          </h2>

          <p className="mb-4 text-sm leading-7 text-gray-600">
            برای دریافت مشاوره و اطلاع از شرایط ثبت‌نام پیام بدهید.
          </p>

          <a
            href={whatsappLink(
              "سلام، برای ثبت‌نام کلاس گرامر زبان آلمانی در آکادمی دویچینو پیام می‌دهم."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام کلاس گرامر در واتساپ"
            className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام
          </a>
        </section>

      </div>
    </main>
  );
}
