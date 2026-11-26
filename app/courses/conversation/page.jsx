
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
  title: "کلاس مکالمه زبان آلمانی در اصفهان | خصوصی و گروهی | دویچینو",
  description:
    "کلاس مکالمه زبان آلمانی در اصفهان و آنلاین برای سطح B1؛ با تدریس مستقیم مسیح سلیمانی، تمرین گفت‌وگو و مشاوره رایگان در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/conversation",
  },
  openGraph: {
    title: "کلاس مکالمه زبان آلمانی در اصفهان | آکادمی دویچینو",
    description:
      "تقویت مکالمه زبان آلمانی با کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین.",
    url: "https://www.deutschino.ir/courses/conversation",
    siteName: "Deutschino",
    locale: "fa_IR",
    type: "website",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره مکالمه زبان آلمانی",
  description:
    "دوره مکالمه زبان آلمانی برای زبان‌آموزان سطح B1 با تمرکز بر روانی گفتار، گسترش واژگان و استفاده از زبان آلمانی در موقعیت‌های روزمره، اجتماعی و کاری؛ به‌صورت حضوری در اصفهان و آنلاین.",
  url: "https://www.deutschino.ir/courses/conversation",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "B1",
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
      name: "کلاس مکالمه زبان آلمانی",
      item: "https://www.deutschino.ir/courses/conversation",
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
    description: "۶۰ دقیقه",
  },
  {
    icon: GraduationCap,
    title: "پیش‌نیاز",
    description: "سطح B1",
  },
  {
    icon: BookOpen,
    title: "منابع آموزشی",
    description: "Hören Sprechen B1",
  },
  {
    icon: Headphones,
    title: "پشتیبانی",
    description: "رفع اشکال خارج از کلاس",
  },
];

const outcomes = [
  "تمرین گفت‌وگو درباره موضوعات روزمره و آشنا",
  "بیان نظرها، تجربه‌ها و برنامه‌های شخصی به آلمانی",
  "گسترش واژگان و استفاده از عبارت‌های پرکاربرد",
  "تقویت روانی گفتار و جمله‌سازی هنگام صحبت‌کردن",
  "تمرین مکالمه در موقعیت‌های اجتماعی و کاری",
];

const faqs = [
  {
    question: "پیش‌نیاز شرکت در کلاس مکالمه چیست؟",
    answer:
      "پیش‌نیاز این دوره سطح B1 زبان آلمانی است. اگر درباره سطح خود مطمئن نیستید، می‌توانید پیش از ثبت‌نام مشاوره بگیرید.",
  },
  {
    question: "کلاس‌ها حضوری هستند یا آنلاین؟",
    answer:
      "هر دو امکان وجود دارد؛ کلاس حضوری در محدوده حکیم نظامی اصفهان برگزار می‌شود.",
  },
  {
    question: "ظرفیت کلاس گروهی چقدر است؟",
    answer:
      "برای حفظ کیفیت تمرین و تعامل، هر گروه حداکثر ۶ زبان‌آموز دارد.",
  },
  {
    question: "چه کسی کلاس مکالمه را تدریس می‌کند؟",
    answer:
      "تمام کلاس‌های خصوصی و گروهی مستقیماً توسط مسیح سلیمانی برگزار می‌شوند.",
  },
  {
    question: "چطور در دوره مکالمه ثبت‌نام کنم؟",
    answer:
      "از طریق دکمه ثبت‌نام در واتساپ پیام بدهید تا درباره زمان‌بندی و شروع دوره راهنمایی شوید.",
  },
];

export default function ConversationPage() {
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
            کلاس مکالمه زبان آلمانی در اصفهان؛ روان‌تر صحبت کنید
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-8 text-gray-600 md:text-base">
            اگر با گرامر و واژگان آلمانی آشنا هستید اما هنگام صحبت‌کردن
            مکث می‌کنید، این دوره به شما کمک می‌کند با تمرین گفت‌وگو،
            روانی گفتار و اعتمادبه‌نفس خود را افزایش دهید.
            کلاس برای زبان‌آموزان سطح B1 و به‌صورت حضوری و آنلاین برگزار می‌شود.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center md:mt-8">
          <Image
            src="/conv.jpg"
            alt="کلاس مکالمه زبان آلمانی در آکادمی دویچینو"
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
            در کلاس مکالمه چه مهارت‌هایی تقویت می‌شوند؟
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
            تمرین مکالمه با مسیح سلیمانی
          </h2>

          <p className="mt-2 text-sm leading-8 text-gray-600 md:text-base">
            تمام کلاس‌های خصوصی و گروهی را خودم برگزار می‌کنم.
            در این دوره با استفاده از کتاب Hören Sprechen B1،
            تمرین‌های گفتاری و موضوعات متنوع، فرصت بیشتری برای صحبت‌کردن
            و استفاده عملی از زبان آلمانی خواهید داشت.
          </p>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-3xl md:mt-14"
        >
          <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
            هزینه دوره مکالمه زبان آلمانی
          </h2>

          <p className="mb-5 text-center text-xs text-gray-500 md:text-sm">
            بسته ۱۰ جلسه‌ای؛ هر جلسه ۶۰ دقیقه
          </p>

          <div className="mx-auto grid max-w-md grid-cols-1 gap-3 md:gap-5">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  دوره مکالمه
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
                    "سلام، برای ثبت‌نام دوره ۱۰ جلسه‌ای مکالمه زبان آلمانی پیام می‌دهم. لطفاً درباره زمان‌بندی کلاس راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام دوره مکالمه زبان آلمانی"
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
              برای شروع کلاس مکالمه نیاز به راهنمایی دارید؟
            </p>

            <p className="mb-3 text-xs text-gray-600 md:text-sm">
              قبل از ثبت‌نام، ۱۵ دقیقه مشاوره رایگان دریافت کنید.
            </p>

            <a
              href={whatsappLink(
                "سلام، برای دریافت مشاوره رایگان درباره کلاس مکالمه زبان آلمانی پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان دوره مکالمه"
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
            کلاس مکالمه زبان آلمانی در اصفهان و آنلاین
          </h2>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            دوره مکالمه آلمانی دویچینو برای زبان‌آموزان سطح B1 طراحی شده
            است که می‌خواهند دانسته‌های خود را در گفت‌وگوهای واقعی به کار
            بگیرند. تمرین صحبت درباره موضوعات روزمره، بیان نظرها و تجربه‌ها،
            گسترش واژگان و استفاده از عبارت‌های کاربردی بخش اصلی این دوره است.
            کلاس‌ها حضوری در محدوده حکیم نظامی اصفهان و به‌صورت آنلاین برگزار
            می‌شوند.
          </p>

          <p className="mt-3 text-sm leading-8 text-gray-600 md:text-base">
            این دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است و از کتاب
            Hören Sprechen B1 در کنار تمرین‌های گفتاری استفاده می‌شود.
            تمام جلسات مستقیماً توسط مسیح سلیمانی تدریس می‌شوند و ظرفیت
            کلاس گروهی حداکثر ۶ نفر است. اگر می‌خواهید دانش زبانی خود را
            در قالب یک دوره ساختارمند ادامه دهید، صفحه{" "}
            <Link
              href="/courses/b1"
              className="font-semibold text-[#0A2540] underline underline-offset-4"
            >
              کلاس زبان آلمانی B1
            </Link>{" "}
            را نیز ببینید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl border-t border-gray-100 pt-8 text-center md:mt-12"
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            آماده تقویت مکالمه زبان آلمانی خود هستید؟
          </h2>

          <p className="mb-4 text-sm leading-7 text-gray-600">
            برای اطلاع از زمان شروع کلاس و ثبت‌نام پیام بدهید.
          </p>

          <a
            href={whatsappLink(
              "سلام، برای ثبت‌نام دوره مکالمه زبان آلمانی در آکادمی دویچینو پیام می‌دهم."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره مکالمه در واتساپ"
            className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام
          </a>
        </section>

      </div>
    </main>
  );
}
