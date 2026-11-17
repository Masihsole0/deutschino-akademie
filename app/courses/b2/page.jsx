
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "کلاس زبان آلمانی B2 در اصفهان | خصوصی و گروهی | دویچینو",
  description:
    "ثبت‌نام کلاس زبان آلمانی B2 در اصفهان؛ دوره خصوصی و گروهی با منابع متناسب با سطح B2، حضوری در محدوده حکیم نظامی و آنلاین، همراه با پشتیبانی آموزشی و مشاوره اولیه رایگان در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/b2",
  },
  openGraph: {
    title: "کلاس زبان آلمانی B2 در اصفهان | آکادمی دویچینو",
    description:
      "آموزش زبان آلمانی سطح B2 در کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین. آشنایی با شرایط دوره، منابع آموزشی و ثبت‌نام.",
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
    "دوره آموزش زبان آلمانی سطح B2 در آکادمی دویچینو؛ شامل آموزش واژگان، گرامر پیشرفته، مکالمه و مهارت‌های چهارگانه زبان آلمانی. امکان شرکت در کلاس خصوصی و گروهی به‌صورت حضوری در اصفهان و آنلاین.",
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

const features = [
  {
    title: "زمان‌بندی کلاس",
    description: "با هماهنگی مدرس",
  },
  {
    title: "پیش‌نیاز",
    description: "تسلط به سطح B1",
  },
  {
    title: "پشتیبانی آموزشی",
    description: "رفع اشکال و بررسی تمرین‌ها",
  },
  {
    title: "منابع آموزشی",
    description: "منابع متناسب با سطح B2",
  },
];

const outcomes = [
  "استفاده از گرامر و واژگان پیشرفته سطح B2",
  "بیان دیدگاه‌ها، استدلال‌ها و نظرات با جزئیات بیشتر",
  "درک مکالمات و فایل‌های صوتی طولانی‌تر و پیچیده‌تر",
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
    question: "در دوره B2 از چه منابعی استفاده می‌شود؟",
    answer:
      "منابع آموزشی متناسب با سطح B2 و نیازهای آموزشی زبان‌آموز انتخاب می‌شوند.",
  },
  {
    question: "شهریه کلاس زبان آلمانی B2 چقدر است؟",
    answer:
      "هزینه بسته ۱۰ جلسه‌ای کلاس خصوصی ۱۵٬۰۰۰٬۰۰۰ تومان و هزینه بسته ۱۰ ساعته کلاس گروهی ۶٬۹۰۰٬۰۰۰ تومان است.",
  },
  {
    question: "کلاس‌های زبان آلمانی دویچینو در کدام منطقه اصفهان برگزار می‌شوند؟",
    answer:
      "کلاس‌های حضوری آکادمی دویچینو در محدوده حکیم نظامی اصفهان برگزار می‌شوند. امکان شرکت در دوره به‌صورت آنلاین نیز وجود دارد.",
  },
  {
    question: "زمان‌بندی کلاس‌های B2 چگونه تعیین می‌شود؟",
    answer:
      "زمان‌بندی برگزاری کلاس‌ها با توجه به شرایط زبان‌آموز و هماهنگی با مدرس تعیین می‌شود.",
  },
  {
    question: "آیا خارج از کلاس هم پشتیبانی آموزشی دارم؟",
    answer:
      "بله. می‌توانید سؤالات و تمرین‌های خود را برای بررسی و رفع اشکال ارسال کنید و در طول دوره از پشتیبانی آموزشی بهره‌مند شوید.",
  },
  {
    question: "تفاوت کلاس خصوصی و گروهی B2 چیست؟",
    answer:
      "در کلاس خصوصی آموزش متناسب با شرایط و سرعت یادگیری شما پیش می‌رود. کلاس گروهی فرصت تعامل و تمرین مکالمه با زبان‌آموزان دیگر را فراهم می‌کند.",
  },
  {
    question: "چطور می‌توانم در دوره B2 ثبت‌نام کنم؟",
    answer:
      "از طریق دکمه‌های ثبت‌نام همین صفحه در واتساپ پیام بدهید تا برای انتخاب کلاس و شروع دوره راهنمایی شوید.",
  },
];

function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function B2Page() {
  const generalMessage =
    "سلام، برای ثبت‌نام دوره زبان آلمانی B2 و دریافت مشاوره راهنمایی می‌خواهم.";

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

      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        {/* Logo */}
        <div className="mb-3 flex justify-center md:mb-6">
          <Link href="/" aria-label="صفحه اصلی آکادمی دویچینو">
            <Image
              src="/logo.jpg"
              alt="لوگوی آکادمی آموزش زبان آلمانی دویچینو"
              width={120}
              height={120}
              className="h-20 w-auto md:h-24"
              priority
            />
          </Link>
        </div>

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="mx-auto mt-4 max-w-4xl text-center md:mt-8"
        >
          <h1 className="mb-3 text-2xl font-bold md:text-4xl">
            کلاس زبان آلمانی B2 در اصفهان؛ تقویت مهارت‌های پیشرفته
          </h1>

          <p className="text-sm leading-8 text-gray-700 md:text-base">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید، دوره B2 آکادمی دویچینو
            به شما کمک می‌کند توانایی خود را در استفاده دقیق‌تر و مستقل‌تر
            از زبان آلمانی گسترش دهید. این دوره به‌صورت خصوصی و گروهی،
            حضوری در اصفهان و آنلاین برگزار می‌شود و مهارت‌های مکالمه،
            شنیداری، خواندن و نوشتن را در کنار واژگان و گرامر پیشرفته
            سطح B2 پوشش می‌دهد.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/books4.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی سطح B2"
            width={900}
            height={350}
            className="h-auto w-full max-w-[260px] rounded-xl object-cover md:max-w-[380px]"
            priority
          />
        </div>

        {/* Course Features */}
        <section
          dir="rtl"
          className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-6"
        >
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <p className="mb-1 text-sm font-bold md:text-base">
                {feature.title}
              </p>
              <p className="text-xs leading-6 text-gray-600 md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="mx-auto mt-10 max-w-4xl md:mt-12">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            در پایان سطح B2 چه مهارت‌هایی خواهید داشت؟
          </h2>

          <ul className="grid grid-cols-1 gap-2 text-sm leading-8 md:grid-cols-2 md:text-base">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
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
            هزینه کلاس زبان آلمانی B2
          </h2>

          <p className="mb-5 text-center text-xs text-gray-600 md:text-sm">
            کلاس خصوصی یا گروهی؛ متناسب با شرایط و هدف شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="rounded-xl border border-gray-200 p-3 text-center md:p-5">
              <h3 className="mb-3 text-sm font-bold md:text-xl">
                کلاس خصوصی B2
              </h3>

              <p className="mb-2 text-xs text-gray-500 md:text-sm">
                بسته ۱۰ جلسه‌ای
              </p>

              <p className="text-lg font-bold md:text-2xl">
                ۱۵٬۰۰۰٬۰۰۰
              </p>

              <p className="mb-3 text-xs text-gray-500 md:text-sm">
                تومان
              </p>

              <p className="mb-4 text-xs leading-7 text-gray-600">
                هر جلسه ۱٬۵۰۰٬۰۰۰ تومان
                <br />
                ۹۰ دقیقه
              </p>

              <a
                href={whatsappLink(
                  "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی B2 پیام می‌دهم. لطفاً راهنمایی‌ام کنید."
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ثبت‌نام کلاس خصوصی زبان آلمانی B2 در واتساپ"
                className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#12385c] md:text-sm"
              >
                ثبت‌نام کلاس خصوصی
              </a>
            </div>

            {/* Group */}
            <div className="rounded-xl border border-gray-200 p-3 text-center md:p-5">
              <h3 className="mb-3 text-sm font-bold md:text-xl">
                کلاس گروهی B2
              </h3>

              <p className="mb-2 text-xs text-gray-500 md:text-sm">
                بسته ۱۰ ساعته
              </p>

              <p className="text-lg font-bold md:text-2xl">
                ۶٬۹۰۰٬۰۰۰
              </p>

              <p className="mb-3 text-xs text-gray-500 md:text-sm">
                تومان
              </p>

              <p className="mb-4 text-xs leading-7 text-gray-600">
                هر ساعت ۶۹۰٬۰۰۰ تومان
              </p>

              <a
                href={whatsappLink(
                  "سلام، برای ثبت‌نام کلاس گروهی زبان آلمانی B2 پیام می‌دهم. لطفاً درباره شرایط و زمان‌بندی کلاس راهنمایی‌ام کنید."
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ثبت‌نام کلاس گروهی زبان آلمانی B2 در واتساپ"
                className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#12385c] md:text-sm"
              >
                ثبت‌نام کلاس گروهی
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-7 text-gray-600 md:text-sm">
            شهریه کلاس خصوصی به‌صورت بسته ۱۰ جلسه‌ای و کلاس گروهی
            به‌صورت بسته ۱۰ ساعته محاسبه می‌شود. زمان‌بندی برگزاری
            کلاس‌ها با هماهنگی مدرس تعیین می‌شود.
          </p>

          {/* Free Consultation */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 text-center md:p-6">
            <p className="mb-2 text-sm font-semibold text-[#0A2540] md:text-base">
              هنوز برای انتخاب کلاس مطمئن نیستید؟
            </p>

            <p className="mb-3 text-sm text-gray-600">
              قبل از ثبت‌نام، از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={whatsappLink(
                "سلام، برای دریافت مشاوره اولیه رایگان درباره کلاس زبان آلمانی B2 پیام می‌دهم."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان درباره دوره B2"
              className="inline-flex items-center justify-center rounded-lg border border-[#0A2540] px-5 py-2.5 text-sm font-bold text-[#0A2540] transition-colors hover:bg-white"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="mx-auto mt-14 max-w-4xl md:mt-16"
        >
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            سؤالات متداول درباره کلاس زبان آلمانی B2
          </h2>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="py-3" open={index === 0}>
                <summary className="cursor-pointer text-sm font-bold leading-7 text-[#0A2540] md:text-base">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-8 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mx-auto mt-12 max-w-4xl text-right"
          aria-labelledby="b2-course-guide"
        >
          <h2
            id="b2-course-guide"
            className="mb-4 text-xl font-bold md:text-2xl"
          >
            کلاس زبان آلمانی B2 در اصفهان و آنلاین
          </h2>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید و به دنبال ادامه یادگیری
            زبان آلمانی در اصفهان هستید، دوره B2 آکادمی دویچینو برای تقویت
            توانایی استفاده مستقل‌تر و دقیق‌تر از زبان طراحی شده است. در
            این سطح با واژگان گسترده‌تر، ساختارهای گرامری پیشرفته و موضوعات
            متنوع‌تر آشنا می‌شوید. کلاس‌ها به‌صورت خصوصی و گروهی برگزار
            می‌شوند و می‌توانید با توجه به شرایط خود، کلاس حضوری در اصفهان
            یا دوره آنلاین را انتخاب کنید.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            در دوره B2 زبان آلمانی چه چیزهایی یاد می‌گیرید؟
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            در سطح B2، توانایی شما در استفاده از زبان آلمانی در موضوعات
            پیچیده‌تر و موقعیت‌های تحصیلی، کاری و اجتماعی گسترش پیدا می‌کند.
            موضوعاتی مانند بیان و دفاع از دیدگاه‌ها، ارائه استدلال، تحلیل
            متن‌ها و درک مکالمات طولانی‌تر در این سطح تمرین می‌شوند.
            همچنین با ساختارهای گرامری پیشرفته‌تر و واژگان متنوع‌تر آشنا
            خواهید شد. هدف این است که بتوانید منظور خود را دقیق‌تر بیان
            کنید و متون و مکالمات پیچیده‌تری را درک کنید.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            کلاس خصوصی و گروهی زبان آلمانی B2 در اصفهان
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            در آکادمی دویچینو امکان انتخاب بین کلاس خصوصی و گروهی زبان
            آلمانی B2 وجود دارد. کلاس خصوصی برای افرادی مناسب است که
            ترجیح می‌دهند با برنامه و سرعت متناسب با شرایط خود پیش بروند.
            کلاس گروهی نیز فرصت تعامل و تمرین مکالمه با زبان‌آموزان دیگر
            را فراهم می‌کند. هزینه کلاس خصوصی در بسته‌های ۱۰ جلسه‌ای و
            هزینه کلاس گروهی در بسته‌های ۱۰ ساعته محاسبه می‌شود.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            محل برگزاری کلاس‌های حضوری دویچینو در اصفهان
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            کلاس‌های حضوری آموزش زبان آلمانی آکادمی دویچینو در محدوده
            حکیم نظامی اصفهان برگزار می‌شوند. اگر در اصفهان زندگی می‌کنید
            و به دنبال کلاس زبان آلمانی در این محدوده هستید، می‌توانید
            برای اطلاع از شرایط حضور، آدرس دقیق و زمان‌بندی کلاس‌ها از
            طریق واتساپ با آکادمی در ارتباط باشید. برای افرادی که امکان
            حضور در کلاس را ندارند نیز دوره آنلاین در نظر گرفته شده است.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            منابع آموزشی و پشتیبانی در طول دوره B2
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            در دوره B2 آکادمی دویچینو منابع آموزشی متناسب با سطح زبانی
            و نیازهای هر زبان‌آموز انتخاب می‌شوند. در کنار مطالعه منابع،
            تمرین مهارت‌های چهارگانه، به‌ویژه شنیدن، صحبت کردن و نوشتن
            متن‌های منسجم، بخش مهمی از فرایند یادگیری است. همچنین
            زبان‌آموزان می‌توانند خارج از زمان کلاس سؤالات و تمرین‌های
            خود را برای بررسی و رفع اشکال مطرح کنند.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            مدرس دوره B2 آکادمی دویچینو
          </h3>

          <p className="mb-5 text-sm leading-8 text-gray-700 md:text-base">
            دوره‌های زبان آلمانی دویچینو با تدریس مسیح سلیمانی برگزار
            می‌شوند. در این دوره تلاش می‌شود آموزش گرامر و واژگان در کنار
            تمرین مکالمه، درک متون و کاربرد عملی زبان پیش برود تا
            زبان‌آموز بتواند آموخته‌های خود را در موقعیت‌های متنوع
            تحصیلی، کاری و اجتماعی به کار ببرد.
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            پس از پایان سطح B2 چه مسیری پیش رو دارید؟
          </h3>

          <p className="text-sm leading-8 text-gray-700 md:text-base">
            پس از یادگیری مباحث سطح B2، می‌توانید با توجه به هدف خود،
            یادگیری زبان آلمانی را در سطوح بالاتر ادامه دهید یا روی
            تقویت مهارت‌های خاص مانند مکالمه و آمادگی برای آزمون‌های
            زبان آلمانی تمرکز کنید. انتخاب مسیر بعدی به نیازهای
            تحصیلی، شغلی و شخصی شما بستگی دارد.
          </p>

          <div className="mt-3 text-sm leading-8 md:text-base">
            <Link
              href="/courses/b1"
              className="text-blue-800 underline underline-offset-4"
            >
              آشنایی با کلاس زبان آلمانی B1
            </Link>
            {" و "}
            <Link
              href="/courses/conversation"
              className="text-blue-800 underline underline-offset-4"
            >
              دوره مکالمه زبان آلمانی
            </Link>
            {" را نیز ببینید."}
          </div>
        </section>

        {/* Final Registration CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-3xl text-center"
        >
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            آماده تقویت مهارت‌های زبان آلمانی خود هستید؟
          </h2>

          <p className="mb-5 text-sm text-gray-600 md:text-base">
            برای اطلاع از شرایط کلاس‌ها و شروع ثبت‌نام B2 با ما در ارتباط باشید.
          </p>

          <a
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره زبان آلمانی B2 در واتساپ"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A2540] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#12385c] md:text-base"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}
