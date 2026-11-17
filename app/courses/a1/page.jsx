
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
    "ثبت‌نام کلاس زبان آلمانی A1 از صفر در اصفهان؛ دوره خصوصی و گروهی در محدوده حکیم نظامی و آنلاین، با پشتیبانی آموزشی و مشاوره اولیه رایگان در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a1",
  },
  openGraph: {
    title: "کلاس زبان آلمانی A1 در اصفهان | آکادمی دویچینو",
    description:
      "آموزش زبان آلمانی از صفر در کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین. آشنایی با شرایط دوره A1 و ثبت‌نام.",
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
    "دوره آموزش زبان آلمانی سطح A1 از صفر در آکادمی دویچینو؛ شامل آموزش واژگان، گرامر پایه، مکالمه و مهارت‌های چهارگانه زبان آلمانی. امکان شرکت در کلاس خصوصی و گروهی به‌صورت حضوری در اصفهان و آنلاین.",
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

const generalMessage =
  "سلام، برای ثبت‌نام دوره زبان آلمانی A1 و دریافت مشاوره راهنمایی می‌خواهم.";

const features = [
  {
    icon: Clock3,
    title: "مدت هر جلسه",
    description: "۹۰ دقیقه",
  },
  {
    icon: GraduationCap,
    title: "پیش‌نیاز",
    description: "ندارد؛ شروع از صفر",
  },
  {
    icon: Headphones,
    title: "پشتیبانی آموزشی",
    description: "رفع اشکال و بررسی تمرین‌ها",
  },
  {
    icon: BookOpen,
    title: "منابع آموزشی",
    description: "۳ کتاب و جزوه اختصاصی",
  },
];

const outcomes = [
  "معرفی خود و صحبت درباره اطلاعات شخصی",
  "مکالمه درباره خانواده، کار و زندگی روزمره",
  "ساخت جمله و استفاده از گرامر پایه",
  "پرسیدن و پاسخ دادن به سؤال‌های متداول",
  "درک مکالمات ساده و تقویت مهارت شنیداری",
  "خواندن و نوشتن متن‌های ساده آلمانی",
];

const faqs = [
  {
    question: "آیا برای شرکت در کلاس A1 باید زبان آلمانی بلد باشم؟",
    answer:
      "خیر. آموزش از پایه شروع می‌شود و به هیچ پیش‌نیازی نیاز ندارید.",
  },
  {
    question:
      "کلاس‌های زبان آلمانی دویچینو در کدام منطقه اصفهان برگزار می‌شوند؟",
    answer:
      "کلاس‌های حضوری آکادمی دویچینو در محدوده حکیم نظامی اصفهان برگزار می‌شوند. امکان شرکت در دوره به‌صورت آنلاین نیز وجود دارد.",
  },
  {
    question: "کلاس‌ها حضوری هستند یا آنلاین؟",
    answer:
      "امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.",
  },
  {
    question: "ظرفیت کلاس گروهی چند نفر است؟",
    answer:
      "برای حفظ کیفیت آموزش، ظرفیت هر کلاس گروهی حداکثر ۶ نفر است.",
  },
  {
    question: "آیا خارج از کلاس هم پشتیبانی دارم؟",
    answer:
      "بله. می‌توانید سؤالات و تمرین‌های خود را برای بررسی و رفع اشکال ارسال کنید.",
  },
  {
    question: "تفاوت کلاس خصوصی و گروهی A1 چیست؟",
    answer:
      "در کلاس خصوصی آموزش متناسب با شرایط و سرعت یادگیری شما پیش می‌رود. کلاس گروهی با ظرفیت حداکثر ۶ نفر برگزار می‌شود و فرصت تمرین مکالمه با زبان‌آموزان دیگر را فراهم می‌کند.",
  },
  {
    question: "چطور می‌توانم در دوره A1 ثبت‌نام کنم؟",
    answer:
      "از طریق دکمه‌های ثبت‌نام همین صفحه در واتساپ پیام بدهید تا برای انتخاب کلاس و شروع دوره راهنمایی شوید.",
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
              alt="لوگوی آکادمی آموزش زبان آلمانی دویچینو"
              width={120}
              height={120}
              className="h-16 w-auto md:h-20"
              priority
            />
          </Link>
        </div>

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="mx-auto mt-3 max-w-4xl text-center md:mt-6"
        >
          <h1 className="mb-3 text-2xl font-bold leading-relaxed md:text-4xl">
            کلاس زبان آلمانی A1 در اصفهان؛ آموزش از صفر
          </h1>

          <p className="mx-auto max-w-3xl text-sm leading-8 text-gray-600 md:text-base">
            دوره A1 آکادمی دویچینو برای شروع یادگیری زبان آلمانی از پایه
            طراحی شده است. کلاس‌ها به‌صورت خصوصی و گروهی، حضوری در اصفهان
            و آنلاین برگزار می‌شوند و واژگان، گرامر پایه و مهارت‌های
            مکالمه، شنیداری، خواندن و نوشتن را پوشش می‌دهند.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center md:mt-8">
          <Image
            src="/books.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی سطح A1"
            width={900}
            height={350}
            className="h-auto w-full max-w-[220px] rounded-xl object-cover md:max-w-[380px]"
            priority
          />
        </div>

        {/* Course Features */}
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
            در پایان سطح A1 چه مهارت‌هایی خواهید داشت؟
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

        {/* Pricing */}
        <section
          dir="rtl"
          className="mx-auto mt-10 max-w-3xl md:mt-14"
        >
          <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
            هزینه کلاس زبان آلمانی A1
          </h2>

          <p className="mb-5 text-center text-xs text-gray-500 md:text-sm">
            کلاس خصوصی یا گروهی؛ متناسب با شرایط و هدف شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">

            {/* Private */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  کلاس خصوصی A1
                </h3>
              </div>

              <div className="p-3 text-center md:p-5">
                <p className="mb-2 text-xs text-gray-500">
                  بسته ۱۰ جلسه‌ای
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۸٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-4 text-xs leading-6 text-gray-600">
                  هر جلسه ۸۹۰٬۰۰۰ تومان
                  <br />
                  ۹۰ دقیقه
                </p>

                <a
                  href={whatsappLink(
                    "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی A1 پیام می‌دهم. لطفاً راهنمایی‌ام کنید."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس خصوصی زبان آلمانی A1 در واتساپ"
                  className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-[#12385c] md:text-sm"
                >
                  ثبت‌نام کلاس خصوصی
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-2 py-3 text-center md:py-4">
                <h3 className="text-sm font-bold md:text-lg">
                  کلاس گروهی A1
                </h3>
              </div>

              <div className="p-3 text-center md:p-5">
                <p className="mb-2 text-xs text-gray-500">
                  بسته ۱۰ جلسه‌ای
                </p>

                <div className="mb-1 flex items-center justify-center gap-1">
                  <Wallet size={19} className="shrink-0 text-[#0A2540]" />

                  <p className="text-lg font-bold text-[#0A2540] md:text-2xl">
                    ۳٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="mb-3 text-xs text-gray-500">تومان</p>

                <p className="mb-1 text-xs text-gray-600">
                  هر جلسه ۳۹۰٬۰۰۰ تومان
                </p>

                <p className="mb-2 text-xs text-gray-600">
                  ۹۰ دقیقه
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
                  aria-label="ثبت‌نام کلاس گروهی زبان آلمانی A1 در واتساپ"
                  className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-[#12385c] md:text-sm"
                >
                  ثبت‌نام کلاس گروهی
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-7 text-gray-500 md:text-sm">
            شهریه هر دو نوع کلاس به‌صورت بسته‌های ۱۰ جلسه‌ای پرداخت می‌شود.
          </p>

          {/* Free Consultation */}
          <div className="mt-5 rounded-xl bg-[#F7F9FC] px-4 py-5 text-center md:py-6">
            <p className="mb-2 text-sm font-bold text-[#0A2540] md:text-base">
              برای انتخاب کلاس به راهنمایی نیاز دارید؟
            </p>

            <p className="mb-3 text-xs text-gray-600 md:text-sm">
              از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={whatsappLink(
                "سلام، برای دریافت مشاوره اولیه رایگان درباره کلاس زبان آلمانی A1 پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان درباره دوره A1"
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
            سؤالات متداول درباره کلاس زبان آلمانی A1
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
          aria-labelledby="a1-course-guide"
        >
          <h2
            id="a1-course-guide"
            className="mb-3 text-xl font-bold md:text-2xl"
          >
            کلاس زبان آلمانی A1 در اصفهان و آنلاین
          </h2>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            اگر به دنبال کلاس زبان آلمانی در اصفهان هستید و می‌خواهید
            یادگیری را از سطح مبتدی آغاز کنید، دوره A1 آکادمی دویچینو برای
            شروع مسیر یادگیری زبان آلمانی طراحی شده است. در این دوره با
            واژگان پرکاربرد، ساختار جمله، گرامر مقدماتی و مکالمات روزمره
            آشنا می‌شوید و به‌تدریج توانایی استفاده از زبان آلمانی در
            موقعیت‌های ساده را به دست می‌آورید. کلاس‌ها به‌صورت خصوصی و
            گروهی برگزار می‌شوند و زبان‌آموزان می‌توانند با توجه به شرایط
            خود، کلاس حضوری در اصفهان یا دوره آنلاین را انتخاب کنند.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            در دوره A1 زبان آلمانی چه چیزهایی یاد می‌گیرید؟
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            سطح A1 نقطه شروع یادگیری زبان آلمانی است. در این سطح، موضوعاتی
            مانند معرفی خود، احوال‌پرسی، اعداد، ساعت، خانواده، خرید،
            آدرس پرسیدن، شغل و فعالیت‌های روزمره آموزش داده می‌شوند.
            همچنین با قواعد پایه مانند صرف فعل‌ها، ضمایر شخصی، ساختار
            جمله‌های ساده، آرتیکل اسم‌ها و پرسش و پاسخ آشنا خواهید شد.
            هدف این است که بتوانید در موقعیت‌های ساده و آشنا، جمله‌های
            ابتدایی آلمانی را درک کنید و به کار ببرید.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            کلاس خصوصی و گروهی زبان آلمانی در اصفهان
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            در آکادمی دویچینو امکان انتخاب بین کلاس خصوصی و گروهی وجود
            دارد. کلاس خصوصی برای افرادی مناسب است که ترجیح می‌دهند با
            برنامه و سرعت متناسب با شرایط خود پیش بروند. در کلاس گروهی،
            تعداد زبان‌آموزان حداکثر ۶ نفر است تا فرصت مشارکت و تمرین
            مکالمه برای همه فراهم باشد. هر جلسه ۹۰ دقیقه طول می‌کشد و
            شهریه دوره‌ها در بسته‌های ۱۰ جلسه‌ای محاسبه می‌شود.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            محل برگزاری کلاس‌های حضوری دویچینو در اصفهان
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            کلاس‌های حضوری آموزش زبان آلمانی آکادمی دویچینو در محدوده
            حکیم نظامی اصفهان برگزار می‌شوند. اگر در اصفهان زندگی می‌کنید
            و به دنبال کلاس زبان آلمانی در این محدوده هستید، می‌توانید
            برای اطلاع از شرایط حضور، آدرس دقیق و زمان‌بندی کلاس‌ها از
            طریق واتساپ با آکادمی در ارتباط باشید. برای افرادی که امکان
            حضور در کلاس را ندارند نیز دوره آنلاین در نظر گرفته شده است.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            منابع آموزشی و پشتیبانی در طول دوره
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            در مسیر یادگیری A1، علاوه بر کتاب‌های آموزشی، از جزوه‌های
            اختصاصی و تمرین‌های تکمیلی استفاده می‌شود. تمرین مهارت‌های
            چهارگانه، به‌ویژه شنیدن و صحبت کردن، بخش مهمی از فرایند
            یادگیری است. همچنین زبان‌آموزان می‌توانند خارج از زمان کلاس
            سؤالات و تمرین‌های خود را برای بررسی و رفع اشکال مطرح کنند.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            مدرس دوره A1 آکادمی دویچینو
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            دوره‌های زبان آلمانی دویچینو با تدریس مسیح سلیمانی برگزار
            می‌شوند. در این دوره تلاش می‌شود آموزش گرامر و واژگان در کنار
            تمرین مکالمه و کاربرد عملی زبان پیش برود تا زبان‌آموز از همان
            ابتدای مسیر بتواند آموخته‌های خود را در جمله‌سازی و ارتباطات
            روزمره استفاده کند.
          </p>

          <h3 className="mb-2 text-base font-bold md:text-lg">
            بعد از پایان سطح A1 چه مسیری پیش رو دارید؟
          </h3>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            پس از یادگیری مباحث پایه در سطح A1، می‌توانید مسیر خود را با
            سطح A2 ادامه دهید و توانایی بیشتری در مکالمات و موقعیت‌های
            روزمره به دست آورید. اگر هدف شما تقویت مکالمه است، شرکت در
            دوره‌های مکالمه زبان آلمانی نیز می‌تواند در کنار مسیر آموزشی
            به شما کمک کند.
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm leading-8">
            <Link
              href="/courses/a2"
              className="text-[#0A2540] underline underline-offset-4"
            >
              آشنایی با کلاس زبان آلمانی A2
            </Link>

            <Link
              href="/courses/conversation"
              className="text-[#0A2540] underline underline-offset-4"
            >
              دوره مکالمه زبان آلمانی
            </Link>
          </div>
        </section>

        {/* Final Registration CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl border-t border-gray-100 pt-8 text-center md:mt-12"
        >
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            آماده شروع یادگیری زبان آلمانی هستید؟
          </h2>

          <p className="mb-4 text-sm leading-7 text-gray-600">
            برای اطلاع از شرایط کلاس‌ها و شروع ثبت‌نام A1 با ما در ارتباط باشید.
          </p>

          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره زبان آلمانی A1 در واتساپ"
            className="inline-flex items-center justify-center rounded-lg bg-[#0A2540] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>

      </div>
    </main>
  );
}
