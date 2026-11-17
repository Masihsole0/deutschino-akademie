import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
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
      item: "https://www.deutschino.ir",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "کلاس گرامر زبان آلمانی",
      item: "https://www.deutschino.ir/courses/grammar",
    },
  ],
};

const whatsappNumber = "989130061984";

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
    icon: Headphones,
    title: "پشتیبانی آموزشی",
    description: "خارج از ساعات کلاس",
  },
  {
    icon: BookOpen,
    title: "منبع آموزشی",
    description: "Grammatik Aktiv",
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
    question: "در کلاس گرامر از چه منبعی استفاده می‌شود؟",
    answer:
      "از منابع آموزشی متناسب با سطح زبان‌آموز، از جمله Grammatik Aktiv، برای آموزش قواعد و حل تمرین استفاده می‌شود.",
  },
  {
    question: "هزینه کلاس گرامر زبان آلمانی چقدر است؟",
    answer:
      "هزینه پکیج ۱۰ جلسه‌ای ۱۰٬۰۰۰٬۰۰۰ تومان است. هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان و مدت هر جلسه ۹۰ دقیقه است.",
  },
  {
    question: "کلاس‌ها حضوری برگزار می‌شوند یا آنلاین؟",
    answer:
      "امکان شرکت در کلاس به‌صورت حضوری در اصفهان و همچنین آنلاین وجود دارد.",
  },
  {
    question: "آیا خارج از ساعات کلاس هم می‌توانم سؤال بپرسم؟",
    answer:
      "بله. برای پرسیدن سؤال‌ها و رفع اشکال‌های مرتبط با مباحث آموزشی، امکان پشتیبانی خارج از ساعات کلاس وجود دارد.",
  },
];

export default function GrammarPage() {
  const generalMessage =
    "سلام، می‌خواهم برای ثبت‌نام پکیج ۱۰ جلسه‌ای کلاس گرامر زبان آلمانی A1 تا B2 اطلاعات بیشتری دریافت کنم.";

  const consultationMessage =
    "سلام، برای دریافت مشاوره اولیه رایگان ۱۵ دقیقه‌ای درباره کلاس گرامر زبان آلمانی پیام می‌دهم.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    generalMessage
  )}`;

  const consultationLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    consultationMessage
  )}`;

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

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex justify-center mb-3 md:mb-6">
          <Link href="/" aria-label="صفحه اصلی آکادمی دویچینو">
            <Image
              src="/logo.jpg"
              alt="لوگوی آکادمی دویچینو"
              width={120}
              height={120}
              className="w-auto h-20 md:h-24"
              priority
            />
          </Link>
        </div>

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            کلاس گرامر زبان آلمانی از A1 تا B2
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-8">
            در کلاس گرامر آکادمی دویچینو، قواعد زبان آلمانی متناسب با سطح
            و نیاز شما آموزش داده می‌شوند. از مباحث پایه مانند صرف افعال،
            آرتیکل‌ها و ساختار جمله تا قواعد پیشرفته‌تر سطوح B1 و B2؛
            همراه با حل تمرین، بررسی اشتباهات و رفع اشکال. کلاس‌ها به‌صورت
            حضوری در اصفهان و آنلاین برگزار می‌شوند.
          </p>
        </section>

        {/* Banner */}
        <div className="flex justify-center mt-5 md:mt-6">
          <Image
            src="/books5.jpg"
            alt="منابع آموزشی کلاس گرامر زبان آلمانی A1 تا B2 در آکادمی دویچینو"
            width={900}
            height={350}
            className="object-cover w-full max-w-[260px] md:max-w-[380px] h-auto rounded-xl"
            priority
          />
        </div>

        {/* Course Features */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="text-center py-3">
                <Icon
                  size={23}
                  className="mx-auto mb-2 text-[#0A2540]"
                />
                <p className="font-bold text-sm md:text-base mb-1">
                  {feature.title}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در کلاس گرامر آلمانی چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base leading-8">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-600 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس گرامر زبان آلمانی
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-5">
            پکیج شامل ۱۰ جلسه ۹۰ دقیقه‌ای است.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Grammar Package */}
            <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center">
              <h3 className="text-base md:text-lg font-bold mb-4">
                پکیج کلاس گرامر
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                هزینه پکیج ۱۰ جلسه‌ای
              </p>

              <p className="text-2xl md:text-3xl font-bold mb-1">
                ۱۰٬۰۰۰٬۰۰۰
              </p>

              <p className="text-xs md:text-sm text-gray-500 mb-4">
                تومان برای ۱۰ جلسه
              </p>

              <div className="text-sm text-gray-600 leading-8 mb-4">
                <p>هر جلسه ۹۰ دقیقه</p>
                <p>هر جلسه ۱٬۰۰۰٬۰۰۰ تومان</p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-sm text-center py-3 px-2 rounded-lg font-bold transition-colors"
              >
                مشاوره و ثبت‌نام
              </a>
            </div>

            {/* Course Details */}
            <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center">
              <h3 className="text-base md:text-lg font-bold mb-4">
                مشخصات دوره
              </h3>

              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock3 size={19} />
                <span className="text-sm text-gray-600">
                  ۱۰ جلسه ۹۰ دقیقه‌ای
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4">
                <GraduationCap size={19} />
                <span className="text-sm text-gray-600">
                  سطح A1 تا B2
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mb-5">
                <BookOpen size={19} />
                <span className="text-sm text-gray-600">
                  مباحث متناسب با سطح شما
                </span>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-sm text-center py-3 px-2 rounded-lg font-bold transition-colors"
              >
                مشاوره و ثبت‌نام
              </a>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-5">
            پکیج شامل ۱۰ جلسه ۹۰ دقیقه‌ای است. هزینه هر جلسه
            ۱٬۰۰۰٬۰۰۰ تومان و هزینه کل پکیج ۱۰٬۰۰۰٬۰۰۰ تومان است.
            مباحث آموزشی با توجه به سطح و نیاز زبان‌آموز انتخاب می‌شوند.
          </p>

          {/* Free Consultation */}
          <div className="mt-6 text-center">
            <p className="text-sm md:text-base font-semibold mb-2">
              برای انتخاب مباحث گرامری مناسب خودتان نیاز به راهنمایی دارید؟
            </p>

            <p className="text-sm text-gray-600 leading-7 mb-4">
              پیش از ثبت‌نام می‌توانید برای بررسی سطح و انتخاب مسیر آموزشی
              مناسب از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={consultationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[#0A2540] px-5 py-2.5 text-sm font-bold text-[#0A2540] hover:bg-gray-50 transition-colors"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-14 md:mt-16"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            سؤالات متداول درباره کلاس گرامر زبان آلمانی
          </h2>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="py-4 group"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-sm md:text-base text-[#0A2540]">
                  <span>{faq.question}</span>
                  <span className="text-xl font-normal text-gray-500 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>

                <p className="text-sm md:text-base text-gray-600 leading-8 mt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            کلاس گرامر زبان آلمانی از A1 تا B2 در اصفهان و آنلاین
          </h2>

          <p className="text-sm md:text-base leading-9 text-gray-700">
            اگر در یادگیری قواعد زبان آلمانی مشکل دارید، هنگام جمله‌سازی
            اشتباه می‌کنید یا می‌خواهید گرامر را اصولی‌تر یاد بگیرید،
            کلاس گرامر آکادمی دویچینو می‌تواند به شما کمک کند. در این
            کلاس، قواعد متناسب با سطح شما از A1 تا B2 آموزش داده می‌شوند.
            با استفاده از منبع Grammatik Aktiv، حل تمرین و بررسی مثال‌های
            کاربردی، فرصت پیدا می‌کنید آموخته‌های خود را بهتر تثبیت کنید.
            کلاس‌ها به‌صورت حضوری در اصفهان و آنلاین برگزار می‌شوند و
            مباحث آموزشی بر اساس سطح فعلی و نیاز شما انتخاب خواهند شد.
          </p>

          <p className="text-sm md:text-base leading-9 mt-4 text-gray-700">
            اگر در کنار تقویت گرامر، قصد دارید مهارت‌های زبانی خود را
            به‌صورت کامل‌تر تقویت کنید، می‌توانید{" "}
            <Link
              href="/courses/a1"
              className="text-[#0A2540] font-bold underline underline-offset-4"
            >
              دوره‌های آموزش زبان آلمانی دویچینو
            </Link>{" "}
            را نیز بررسی کنید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-10 md:mt-12 mb-8 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            آماده تقویت گرامر زبان آلمانی خود هستید؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            برای دریافت مشاوره و اطلاع از شرایط ثبت‌نام کلاس گرامر
            از سطح A1 تا B2 با آکادمی دویچینو در ارتباط باشید.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-6 py-3 rounded-lg font-bold transition-colors"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}