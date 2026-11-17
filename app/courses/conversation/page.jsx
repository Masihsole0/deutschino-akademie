
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "کلاس مکالمه زبان آلمانی در اصفهان | دویچینو",
  description:
    "کلاس مکالمه زبان آلمانی در اصفهان و آنلاین با تمرکز بر روانی گفتار، افزایش اعتمادبه‌نفس و تمرین مکالمه در موقعیت‌های روزمره و کاری در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/conversation",
  },
  openGraph: {
    title: "کلاس مکالمه زبان آلمانی در اصفهان | دویچینو",
    description:
      "تمرین مکالمه زبان آلمانی برای زبان‌آموزان سطح B1؛ حضوری در اصفهان و آنلاین در آکادمی دویچینو.",
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
    "دوره مکالمه زبان آلمانی در آکادمی دویچینو با تمرکز بر تقویت روانی گفتار، گسترش واژگان و استفاده از زبان آلمانی در موقعیت‌های روزمره، اجتماعی و کاری؛ مناسب زبان‌آموزان سطح B1 و به‌صورت حضوری در اصفهان و آنلاین.",
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
      item: "https://www.deutschino.ir",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "دوره‌های آموزشی",
      item: "https://www.deutschino.ir/courses",
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

const features = [
  {
    title: "مدت هر جلسه",
    description: "۶۰ دقیقه",
  },
  {
    title: "پیش‌نیاز",
    description: "سطح B1",
  },
  {
    title: "پشتیبانی آموزشی",
    description: "خارج از ساعات کلاس",
  },
  {
    title: "منابع آموزشی",
    description: "Hören Sprechen B1",
  },
];

const outcomes = [
  "تمرین گفت‌وگو درباره موضوعات روزمره و آشنا",
  "بیان نظرها، تجربه‌ها و برنامه‌های شخصی به زبان آلمانی",
  "گسترش واژگان و استفاده از عبارت‌های پرکاربرد",
  "تقویت روانی گفتار و ساختن جمله هنگام صحبت‌کردن",
  "تمرین مکالمه در موقعیت‌های اجتماعی و کاری",
];

const faqs = [
  {
    question: "پیش‌نیاز شرکت در کلاس مکالمه چیست؟",
    answer:
      "پیش‌نیاز اعلام‌شده برای این دوره، سطح B1 زبان آلمانی است. اگر درباره سطح خود مطمئن نیستید، پیش از ثبت‌نام می‌توانید برای دریافت راهنمایی و مشاوره اقدام کنید.",
  },
  {
    question: "دوره مکالمه چند جلسه است؟",
    answer:
      "این دوره شامل ۱۰ جلسه است و مدت هر جلسه ۶۰ دقیقه خواهد بود.",
  },
  {
    question: "در کلاس مکالمه از چه منابعی استفاده می‌شود؟",
    answer:
      "یکی از منابع آموزشی این دوره کتاب Hören Sprechen B1 است. در کنار آن، تمرین‌های گفتاری و موضوعات متناسب با سطح زبان‌آموز برای تقویت مهارت مکالمه استفاده می‌شوند.",
  },
  {
    question: "کلاس مکالمه حضوری است یا آنلاین؟",
    answer:
      "امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.",
  },
  {
    question: "هزینه کلاس مکالمه زبان آلمانی چقدر است؟",
    answer:
      "هزینه پکیج ۱۰ جلسه‌ای ۱۰٬۰۰۰٬۰۰۰ تومان است. هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان و مدت هر جلسه ۶۰ دقیقه است.",
  },
];

function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function ConversationPage() {
  const generalMessage =
    "سلام، می‌خواهم برای ثبت‌نام دوره ۱۰ جلسه‌ای مکالمه زبان آلمانی اطلاعات بیشتری دریافت کنم.";

  const whatsappUrl = whatsappLink(generalMessage);

  const consultationUrl = whatsappLink(
    "سلام، برای دریافت مشاوره اولیه رایگان ۱۵ دقیقه‌ای درباره کلاس مکالمه زبان آلمانی پیام می‌دهم."
  );

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
              alt="لوگوی آکادمی دویچینو"
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
            کلاس مکالمه زبان آلمانی در اصفهان
          </h1>

          <p className="text-sm leading-8 text-gray-600 md:text-base">
            اگر با گرامر و واژگان زبان آلمانی آشنا هستید اما هنگام صحبت‌کردن
            مکث می‌کنید یا برای بیان منظورتان به دنبال کلمات مناسب می‌گردید،
            کلاس مکالمه آلمانی می‌تواند به تقویت مهارت گفتاری شما کمک کند.
            در دوره مکالمه آکادمی دویچینو، با تمرین گفت‌وگو و صحبت درباره
            موضوعات مختلف، روانی گفتار و اعتمادبه‌نفس خود را افزایش می‌دهید.
            این دوره برای زبان‌آموزان سطح B1 طراحی شده و به‌صورت حضوری در
            اصفهان و آنلاین برگزار می‌شود.
          </p>
        </section>

        {/* Banner */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/conv.jpg"
            alt="کلاس مکالمه زبان آلمانی در آکادمی دویچینو"
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
            در کلاس مکالمه آلمانی چه مهارت‌هایی تقویت می‌شوند؟
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
            هزینه کلاس مکالمه زبان آلمانی
          </h2>

          <p className="mb-5 text-center text-xs text-gray-600 md:text-sm">
            دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Course Price */}
            <div className="rounded-xl border border-gray-200 p-3 text-center md:p-5">
              <h3 className="mb-3 text-sm font-bold md:text-xl">
                دوره مکالمه
              </h3>

              <p className="mb-2 text-xs text-gray-500 md:text-sm">
                هزینه پکیج ۱۰ جلسه‌ای
              </p>

              <p className="text-lg font-bold md:text-2xl">
                ۱۰٬۰۰۰٬۰۰۰
              </p>

              <p className="mb-3 text-xs text-gray-500 md:text-sm">
                تومان برای ۱۰ جلسه
              </p>

              <p className="mb-4 text-xs leading-7 text-gray-600">
                هر جلسه ۶۰ دقیقه
                <br />
                هر جلسه ۱٬۰۰۰٬۰۰۰ تومان
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="مشاوره و ثبت‌نام دوره مکالمه زبان آلمانی"
                className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#12385c] md:text-sm"
              >
                مشاوره و ثبت‌نام
              </a>
            </div>

            {/* Course Details */}
            <div className="rounded-xl border border-gray-200 p-3 text-center md:p-5">
              <h3 className="mb-3 text-sm font-bold md:text-xl">
                مشخصات دوره
              </h3>

              <div className="mb-3">
                <p className="text-xs text-gray-600 md:text-sm">
                  تعداد جلسات
                </p>
                <p className="mt-1 font-bold">۱۰ جلسه</p>
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-600 md:text-sm">
                  مدت هر جلسه
                </p>
                <p className="mt-1 font-bold">۶۰ دقیقه</p>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-600 md:text-sm">
                  سطح مورد نیاز
                </p>
                <p className="mt-1 font-bold">B1</p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="دریافت اطلاعات دوره مکالمه زبان آلمانی"
                className="block w-full rounded-lg bg-[#0A2540] px-1 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#12385c] md:text-sm"
              >
                مشاوره و ثبت‌نام
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-7 text-gray-600 md:text-sm">
            هزینه پکیج ۱۰ جلسه‌ای مکالمه زبان آلمانی ۱۰٬۰۰۰٬۰۰۰ تومان
            است. هر جلسه ۶۰ دقیقه برگزار می‌شود و هزینه هر جلسه
            ۱٬۰۰۰٬۰۰۰ تومان محاسبه می‌شود.
          </p>

          {/* Free Consultation */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 text-center md:p-6">
            <p className="mb-2 text-sm font-semibold text-[#0A2540] md:text-base">
              برای شروع کلاس مکالمه نیاز به راهنمایی دارید؟
            </p>

            <p className="mb-3 text-sm text-gray-600">
              پیش از ثبت‌نام می‌توانید برای بررسی سطح زبان و آشنایی با دوره،
              از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان درباره کلاس مکالمه"
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
            سؤالات متداول درباره کلاس مکالمه زبان آلمانی
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
        >
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            کلاس مکالمه زبان آلمانی در اصفهان و آنلاین
          </h2>

          <p className="mb-6 text-sm leading-8 text-gray-700 md:text-base">
            شرکت در کلاس مکالمه زبان آلمانی به زبان‌آموزان کمک می‌کند
            دانسته‌های گرامری و واژگان خود را در گفت‌وگوهای واقعی به کار
            بگیرند. در دوره مکالمه آکادمی دویچینو، تمرکز اصلی بر صحبت‌کردن،
            ساختن جمله، بیان نظرها و تجربه‌های شخصی و استفاده از عبارت‌های
            پرکاربرد زبان آلمانی است. این دوره برای زبان‌آموزانی طراحی شده
            است که سطح B1 را دارند و می‌خواهند مهارت گفتاری خود را تقویت کنند.
          </p>

          <h3 className="mb-3 text-lg font-bold md:text-xl">
            تمرین مکالمه برای موقعیت‌های روزمره و کاری
          </h3>

          <p className="mb-6 text-sm leading-8 text-gray-700 md:text-base">
            در طول دوره، زبان‌آموزان درباره موضوعات مختلف صحبت می‌کنند،
            نظرها و دیدگاه‌های خود را بیان می‌کنند و برای گفت‌وگو در
            موقعیت‌های اجتماعی و کاری آماده‌تر می‌شوند. گسترش دایره واژگان،
            استفاده درست از عبارت‌ها و تمرین پاسخ‌دادن به پرسش‌ها از بخش‌های
            مهم این کلاس است.
          </p>

          <h3 className="mb-3 text-lg font-bold md:text-xl">
            کلاس مکالمه آلمانی حضوری در اصفهان و آنلاین
          </h3>

          <p className="mb-6 text-sm leading-8 text-gray-700 md:text-base">
            کلاس مکالمه زبان آلمانی در آکادمی دویچینو به دو شکل حضوری در
            اصفهان و آنلاین برگزار می‌شود. بنابراین زبان‌آموزان می‌توانند
            متناسب با شرایط و محل زندگی خود، شیوه مناسب شرکت در کلاس را
            انتخاب کنند. دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است و در کنار تمرین
            مکالمه، امکان استفاده از پشتیبانی آموزشی خارج از ساعات کلاس
            نیز وجود دارد.
          </p>

          <h3 className="mb-3 text-lg font-bold md:text-xl">
            منابع آموزشی کلاس مکالمه زبان آلمانی
          </h3>

          <p className="mb-6 text-sm leading-8 text-gray-700 md:text-base">
            در این دوره از کتاب Hören Sprechen B1 به‌عنوان یکی از منابع
            آموزشی استفاده می‌شود. تمرین‌های شنیداری و گفتاری این منبع
            در کنار فعالیت‌های کلاسی به زبان‌آموز کمک می‌کنند مهارت
            درک گفتار و توانایی صحبت‌کردن خود را تقویت کند.
          </p>

          <h3 className="mb-3 text-lg font-bold md:text-xl">
            هزینه و شرایط ثبت‌نام کلاس مکالمه
          </h3>

          <p className="mb-6 text-sm leading-8 text-gray-700 md:text-base">
            دوره مکالمه زبان آلمانی دویچینو در قالب پکیج ۱۰ جلسه‌ای ارائه
            می‌شود. هزینه این پکیج ۱۰٬۰۰۰٬۰۰۰ تومان است و هر جلسه ۶۰ دقیقه
            زمان دارد. پیش از ثبت‌نام نیز می‌توانید از مشاوره اولیه رایگان
            ۱۵ دقیقه‌ای برای بررسی سطح زبان و آشنایی بیشتر با دوره استفاده
            کنید.
          </p>

          <h3 className="mb-3 text-lg font-bold md:text-xl">
            ثبت‌نام در کلاس مکالمه آکادمی دویچینو
          </h3>

          <p className="text-sm leading-8 text-gray-700 md:text-base">
            اگر سطح B1 زبان آلمانی را دارید و می‌خواهید در صحبت‌کردن
            روان‌تر و مطمئن‌تر شوید، می‌توانید برای دریافت اطلاعات بیشتر
            و ثبت‌نام در کلاس مکالمه با آکادمی دویچینو در ارتباط باشید.
            همچنین اگر قصد دارید دانش زبانی خود را در قالب یک دوره
            ساختارمند ادامه دهید، می‌توانید صفحه{" "}
            <Link
              href="/courses/b1"
              className="font-semibold text-blue-700 hover:underline"
            >
              کلاس زبان آلمانی B1
            </Link>{" "}
            را نیز مشاهده کنید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="mx-auto mb-8 mt-10 max-w-4xl text-center md:mt-12"
        >
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            آماده تقویت مکالمه زبان آلمانی خود هستید؟
          </h2>

          <p className="mb-5 text-sm leading-8 text-gray-600 md:text-base">
            برای دریافت اطلاعات بیشتر و ثبت‌نام در دوره مکالمه زبان آلمانی
            با آکادمی دویچینو در ارتباط باشید.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره مکالمه زبان آلمانی در واتساپ"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A2540] px-6 py-3 font-bold text-white transition-colors hover:bg-[#12385c]"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}
