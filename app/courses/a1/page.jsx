
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
  title: "کلاس زبان آلمانی A1 در اصفهان | خصوصی و گروهی | دویچینو",
  description:
    "آموزش زبان آلمانی A1 از صفر در اصفهان و آنلاین؛ کلاس خصوصی و گروهی با تدریس مستقیم مسیح سلیمانی، منابع اختصاصی و مشاوره رایگان.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a1",
  },
  openGraph: {
    title: "کلاس زبان آلمانی A1 در اصفهان | آکادمی دویچینو",
    description:
      "شروع زبان آلمانی از صفر با کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین.",
    url: "https://www.deutschino.ir/courses/a1",
    siteName: "Deutschino",
    locale: "fa_IR",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی A1",
  description:
    "آموزش زبان آلمانی از سطح صفر با تمرکز بر گرامر، واژگان، مکالمه و چهار مهارت اصلی؛ به‌صورت خصوصی و گروهی در اصفهان و آنلاین.",
  url: "https://www.deutschino.ir/courses/a1",
  inLanguage: "de",
  educationalLevel: "A1",
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
      name: "کلاس زبان آلمانی A1",
      item: "https://www.deutschino.ir/courses/a1",
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
    title: "پیش‌نیاز",
    description: "بدون نیاز به دانش قبلی",
  },
  {
    icon: BookOpen,
    title: "منابع آموزشی",
    description: "۳ کتاب و جزوه اختصاصی",
  },
  {
    icon: Headphones,
    title: "پشتیبانی",
    description: "رفع اشکال بین جلسات",
  },
];

const outcomes = [
  "معرفی خود و صحبت درباره اطلاعات شخصی",
  "مکالمه درباره خانواده، کار و زندگی روزمره",
  "ساخت جمله و استفاده از گرامر پایه",
  "درک مکالمات ساده آلمانی",
  "خواندن و نوشتن متن‌های کوتاه",
  "پرسیدن و پاسخ دادن به سؤال‌های متداول",
];

const faqs = [
  {
    question: "آیا برای شروع A1 باید آلمانی بلد باشم؟",
    answer:
      "خیر. دوره از صفر شروع می‌شود و به هیچ پیش‌نیازی نیاز ندارید.",
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
    question: "چه کسی کلاس‌ها را تدریس می‌کند؟",
    answer:
      "تمام کلاس‌های خصوصی و گروهی مستقیماً توسط مسیح سلیمانی برگزار می‌شوند.",
  },
  {
    question: "چطور ثبت‌نام کنم؟",
    answer:
      "از طریق دکمه ثبت‌نام در واتساپ پیام بدهید تا درباره زمان شروع و انتخاب کلاس راهنمایی شوید.",
  },
];

export default function A1Page() {
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
            کلاس زبان آلمانی A1 در اصفهان؛ شروع از صفر
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-8 text-gray-600 md:text-base">
            اولین قدم یادگیری زبان آلمانی را اصولی بردارید.
            آموزش خصوصی و گروهی، حضوری در اصفهان و آنلاین،
            با تدریس مستقیم مسیح سلیمانی.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center md:mt-8">
          <Image
            src="/books.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی A1"
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
            بعد از A1 چه چیزهایی یاد می‌گیرید؟
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
            در طول دوره، علاوه بر کتاب‌های آموزشی، از جزوه‌های اختصاصی،
            تمرین‌های تکمیلی و نمونه سؤالات آزمون‌های Goethe، telc و ECL
            استفاده می‌کنیم.
          </p>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-3xl md:mt-14"
        >
          <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
            هزینه دوره A1
          </h2>

          <p className="mb-5 text-center text-xs text-gray-500 md:text-sm">
            بسته‌های ۱۰ جلسه‌ای؛ هر جلسه ۹۰ دقیقه
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
                    ۸٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-4 text-xs leading-6 text-gray-600">
                  هر جلسه ۸۹۰ هزار تومان
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی A1 پیام می‌دهم. لطفاً درباره زمان‌بندی کلاس راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس خصوصی A1"
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
                  ۱۰ جلسه
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۳٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-1 text-xs text-gray-600">
                  هر جلسه ۳۹۰ هزار تومان
                </p>

                <p className="mb-3 text-xs font-semibold text-[#0A2540]">
                  حداکثر ۶ نفر
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام کلاس گروهی زبان آلمانی A1 پیام می‌دهم. لطفاً درباره زمان شروع و ظرفیت کلاس راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس گروهی A1"
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
                "سلام، برای دریافت مشاوره رایگان درباره دوره A1 پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان دوره A1"
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
            آموزش زبان آلمانی A1 در اصفهان و آنلاین
          </h2>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            دوره A1 آکادمی دویچینو برای افرادی طراحی شده که می‌خواهند
            یادگیری زبان آلمانی را از پایه شروع کنند. در این سطح با
            واژگان پرکاربرد، ساختار جمله، گرامر مقدماتی و مکالمات روزمره
            آشنا می‌شوید. کلاس زبان آلمانی در اصفهان به‌صورت حضوری در
            محدوده حکیم نظامی برگزار می‌شود و امکان شرکت آنلاین نیز وجود دارد.
          </p>

          <p className="mt-3 text-sm leading-8 text-gray-600 md:text-base">
            پس از پایان A1 می‌توانید یادگیری را در{" "}
            <Link
              href="/courses/a2"
              className="font-semibold text-[#0A2540] underline underline-offset-4"
            >
              دوره A2
            </Link>{" "}
            ادامه دهید یا برای تقویت مهارت صحبت کردن در{" "}
            <Link
              href="/courses/conversation"
              className="font-semibold text-[#0A2540] underline underline-offset-4"
            >
              کلاس مکالمه زبان آلمانی
            </Link>{" "}
            شرکت کنید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl border-t border-gray-100 pt-8 text-center md:mt-12"
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            شروع یادگیری آلمانی از همین‌جا
          </h2>

          <p className="mb-4 text-sm leading-7 text-gray-600">
            برای اطلاع از زمان شروع کلاس و ثبت‌نام پیام بدهید.
          </p>

          <a
            href={whatsappLink(
              "سلام، برای ثبت‌نام دوره زبان آلمانی A1 در آکادمی دویچینو پیام می‌دهم."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره A1 در واتساپ"
            className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام
          </a>
        </section>

      </div>
    </main>
  );
}
