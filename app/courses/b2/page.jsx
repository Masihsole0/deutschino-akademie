
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex justify-center mb-3 md:mb-6">
          <Image
            src="/logo.jpg"
            alt="لوگوی آکادمی آموزش زبان آلمانی دویچینو"
            width={120}
            height={120}
            className="w-auto h-20 md:h-24"
            priority
          />
        </div>

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            کلاس زبان آلمانی B2 در اصفهان؛ تقویت مهارت‌های پیشرفته
          </h1>

          <p className="text-sm md:text-base leading-8 text-gray-700">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید، دوره B2 آکادمی دویچینو
            به شما کمک می‌کند توانایی خود را در استفاده دقیق‌تر و مستقل‌تر
            از زبان آلمانی گسترش دهید. این دوره به‌صورت خصوصی و گروهی،
            حضوری در اصفهان و آنلاین برگزار می‌شود و مهارت‌های مکالمه،
            شنیداری، خواندن و نوشتن را در کنار واژگان و گرامر پیشرفته
            سطح B2 پوشش می‌دهد.
          </p>
        </section>

        {/* Banner */}
        <div className="flex justify-center mt-6">
          <Image
            src="/books4.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی سطح B2"
            width={900}
            height={350}
            className="rounded-2xl shadow-xl object-cover w-full max-w-[260px] md:max-w-[500px] h-auto"
            priority
          />
        </div>

        {/* Course Features */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <Clock3
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              زمان‌بندی کلاس
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              با هماهنگی مدرس
            </p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <GraduationCap
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پیش‌نیاز
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              تسلط به سطح B1
            </p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <Headphones
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پشتیبانی آموزشی
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              رفع اشکال و بررسی تمرین‌ها
            </p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <BookOpen
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              منابع آموزشی
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              منابع متناسب با سطح B2
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            در پایان سطح B2 چه مهارت‌هایی خواهید داشت؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              استفاده از گرامر و واژگان پیشرفته سطح B2
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              بیان دیدگاه‌ها، استدلال‌ها و نظرات با جزئیات بیشتر
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              درک مکالمات و فایل‌های صوتی طولانی‌تر و پیچیده‌تر
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              خواندن و تحلیل متن‌های متنوع و تخصصی‌تر
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              نوشتن متن‌های منسجم، رسمی و استدلالی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              استفاده مستقل‌تر از زبان آلمانی در محیط‌های تحصیلی و کاری
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی B2
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-5">
            کلاس خصوصی یا گروهی؛ متناسب با شرایط و هدف شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس خصوصی B2
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۱۵٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۱٬۵۰۰٬۰۰۰ تومان
                  <br />
                  ۹۰ دقیقه
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی B2 پیام می‌دهم. لطفاً راهنمایی‌ام کنید."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس خصوصی زبان آلمانی B2 در واتساپ"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  ثبت‌نام کلاس خصوصی
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس گروهی B2
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  بسته ۱۰ ساعته
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۶٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر ساعت ۶۹۰٬۰۰۰ تومان
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، برای ثبت‌نام کلاس گروهی زبان آلمانی B2 پیام می‌دهم. لطفاً درباره شرایط و زمان‌بندی کلاس راهنمایی‌ام کنید."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ثبت‌نام کلاس گروهی زبان آلمانی B2 در واتساپ"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  ثبت‌نام کلاس گروهی
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-4">
            شهریه کلاس خصوصی به‌صورت بسته ۱۰ جلسه‌ای و کلاس گروهی
            به‌صورت بسته ۱۰ ساعته محاسبه می‌شود. زمان‌بندی برگزاری
            کلاس‌ها با هماهنگی مدرس تعیین می‌شود.
          </p>

          {/* Free Consultation Card */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <p className="text-sm md:text-base font-semibold text-[#0A2540] mb-2">
              هنوز برای انتخاب کلاس مطمئن نیستید؟
            </p>

            <p className="text-sm text-gray-600 mb-3">
              قبل از ثبت‌نام، از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "سلام، برای دریافت مشاوره اولیه رایگان درباره کلاس زبان آلمانی B2 پیام می‌دهم."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="دریافت مشاوره رایگان درباره دوره B2"
              className="inline-flex items-center justify-center rounded-xl border border-[#0A2540] px-5 py-2.5 text-sm font-bold text-[#0A2540] hover:bg-white transition-colors"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-14 md:mt-16 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              سؤالات متداول درباره کلاس زبان آلمانی B2
            </h2>

            <div className="space-y-0 text-gray-700 leading-8">
              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  برای شرکت در کلاس B2 چه پیش‌نیازی لازم است؟
                </h3>
                <p className="text-sm mt-1">
                  برای شرکت در دوره B2 لازم است سطح B1 زبان آلمانی را گذرانده
                  باشید و با مباحث گرامری و واژگان این سطح آشنایی داشته باشید.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  در دوره B2 از چه منابعی استفاده می‌شود؟
                </h3>
                <p className="text-sm mt-1">
                  منابع آموزشی متناسب با سطح B2 و نیازهای آموزشی زبان‌آموز
                  انتخاب می‌شوند.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  شهریه کلاس زبان آلمانی B2 چقدر است؟
                </h3>
                <p className="text-sm mt-1">
                  هزینه بسته ۱۰ جلسه‌ای کلاس خصوصی ۱۵٬۰۰۰٬۰۰۰ تومان و
                  هزینه بسته ۱۰ ساعته کلاس گروهی ۶٬۹۰۰٬۰۰۰ تومان است.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  کلاس‌های زبان آلمانی دویچینو در کدام منطقه اصفهان برگزار می‌شوند؟
                </h3>
                <p className="text-sm mt-1">
                  کلاس‌های حضوری آکادمی دویچینو در محدوده حکیم نظامی اصفهان
                  برگزار می‌شوند. امکان شرکت در دوره به‌صورت آنلاین نیز وجود دارد.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  زمان‌بندی کلاس‌های B2 چگونه تعیین می‌شود؟
                </h3>
                <p className="text-sm mt-1">
                  زمان‌بندی برگزاری کلاس‌ها با توجه به شرایط زبان‌آموز
                  و هماهنگی با مدرس تعیین می‌شود.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  آیا خارج از کلاس هم پشتیبانی آموزشی دارم؟
                </h3>
                <p className="text-sm mt-1">
                  بله. می‌توانید سؤالات و تمرین‌های خود را برای بررسی و رفع اشکال
                  ارسال کنید و در طول دوره از پشتیبانی آموزشی بهره‌مند شوید.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  تفاوت کلاس خصوصی و گروهی B2 چیست؟
                </h3>
                <p className="text-sm mt-1">
                  در کلاس خصوصی آموزش متناسب با شرایط و سرعت یادگیری شما پیش
                  می‌رود. کلاس گروهی فرصت تعامل و تمرین مکالمه با زبان‌آموزان
                  دیگر را فراهم می‌کند.
                </p>
              </div>

              <div className="pt-3">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  چطور می‌توانم در دوره B2 ثبت‌نام کنم؟
                </h3>
                <p className="text-sm mt-1">
                  از طریق دکمه‌های ثبت‌نام همین صفحه در واتساپ پیام بدهید تا
                  برای انتخاب کلاس و شروع دوره راهنمایی شوید.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-12 max-w-4xl mx-auto text-right"
          aria-labelledby="b2-course-guide"
        >
          <h2
            id="b2-course-guide"
            className="text-xl md:text-2xl font-bold mb-4"
          >
            کلاس زبان آلمانی B2 در اصفهان و آنلاین
          </h2>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید و به دنبال ادامه یادگیری
            زبان آلمانی در اصفهان هستید، دوره B2 آکادمی دویچینو برای تقویت
            توانایی استفاده مستقل‌تر و دقیق‌تر از زبان طراحی شده است. در
            این سطح با واژگان گسترده‌تر، ساختارهای گرامری پیشرفته و موضوعات
            متنوع‌تر آشنا می‌شوید. کلاس‌ها به‌صورت خصوصی و گروهی برگزار
            می‌شوند و می‌توانید با توجه به شرایط خود، کلاس حضوری در اصفهان
            یا دوره آنلاین را انتخاب کنید.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            در دوره B2 زبان آلمانی چه چیزهایی یاد می‌گیرید؟
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            در سطح B2، توانایی شما در استفاده از زبان آلمانی در موضوعات
            پیچیده‌تر و موقعیت‌های تحصیلی، کاری و اجتماعی گسترش پیدا می‌کند.
            موضوعاتی مانند بیان و دفاع از دیدگاه‌ها، ارائه استدلال، تحلیل
            متن‌ها و درک مکالمات طولانی‌تر در این سطح تمرین می‌شوند.
            همچنین با ساختارهای گرامری پیشرفته‌تر و واژگان متنوع‌تر آشنا
            خواهید شد. هدف این است که بتوانید منظور خود را دقیق‌تر بیان
            کنید و متون و مکالمات پیچیده‌تری را درک کنید.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            کلاس خصوصی و گروهی زبان آلمانی B2 در اصفهان
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            در آکادمی دویچینو امکان انتخاب بین کلاس خصوصی و گروهی زبان
            آلمانی B2 وجود دارد. کلاس خصوصی برای افرادی مناسب است که
            ترجیح می‌دهند با برنامه و سرعت متناسب با شرایط خود پیش بروند.
            کلاس گروهی نیز فرصت تعامل و تمرین مکالمه با زبان‌آموزان دیگر
            را فراهم می‌کند. هزینه کلاس خصوصی در بسته‌های ۱۰ جلسه‌ای و
            هزینه کلاس گروهی در بسته‌های ۱۰ ساعته محاسبه می‌شود.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            محل برگزاری کلاس‌های حضوری دویچینو در اصفهان
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            کلاس‌های حضوری آموزش زبان آلمانی آکادمی دویچینو در محدوده
            حکیم نظامی اصفهان برگزار می‌شوند. اگر در اصفهان زندگی می‌کنید
            و به دنبال کلاس زبان آلمانی در این محدوده هستید، می‌توانید
            برای اطلاع از شرایط حضور، آدرس دقیق و زمان‌بندی کلاس‌ها از
            طریق واتساپ با آکادمی در ارتباط باشید. برای افرادی که امکان
            حضور در کلاس را ندارند نیز دوره آنلاین در نظر گرفته شده است.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            منابع آموزشی و پشتیبانی در طول دوره B2
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            در دوره B2 آکادمی دویچینو منابع آموزشی متناسب با سطح زبانی
            و نیازهای هر زبان‌آموز انتخاب می‌شوند. در کنار مطالعه منابع،
            تمرین مهارت‌های چهارگانه، به‌ویژه شنیدن، صحبت کردن و نوشتن
            متن‌های منسجم، بخش مهمی از فرایند یادگیری است. همچنین
            زبان‌آموزان می‌توانند خارج از زمان کلاس سؤالات و تمرین‌های
            خود را برای بررسی و رفع اشکال مطرح کنند.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            مدرس دوره B2 آکادمی دویچینو
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700 mb-5">
            دوره‌های زبان آلمانی دویچینو با تدریس مسیح سلیمانی برگزار
            می‌شوند. در این دوره تلاش می‌شود آموزش گرامر و واژگان در کنار
            تمرین مکالمه، درک متون و کاربرد عملی زبان پیش برود تا
            زبان‌آموز بتواند آموخته‌های خود را در موقعیت‌های متنوع
            تحصیلی، کاری و اجتماعی به کار ببرد.
          </p>

          <h3 className="text-lg md:text-xl font-bold mb-2">
            پس از پایان سطح B2 چه مسیری پیش رو دارید؟
          </h3>

          <p className="text-sm md:text-base leading-8 text-gray-700">
            پس از یادگیری مباحث سطح B2، می‌توانید با توجه به هدف خود،
            یادگیری زبان آلمانی را در سطوح بالاتر ادامه دهید یا روی
            تقویت مهارت‌های خاص مانند مکالمه و آمادگی برای آزمون‌های
            زبان آلمانی تمرکز کنید. انتخاب مسیر بعدی به نیازهای
            تحصیلی، شغلی و شخصی شما بستگی دارد.
          </p>

          <div className="text-sm md:text-base leading-8 mt-3">
            <Link
              href="/courses/b1"
              className="text-blue-800 underline underline-offset-4"
            >
              آشنایی با کلاس زبان آلمانی B1
            </Link>
            {" "}
            و{" "}
            <Link
              href="/courses/conversation"
              className="text-blue-800 underline underline-offset-4"
            >
              دوره مکالمه زبان آلمانی
            </Link>
            {" "}
            را نیز ببینید.
          </div>
        </section>

        {/* Final Registration CTA */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 mb-8 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            آماده تقویت مهارت‌های زبان آلمانی خود هستید؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 mb-5">
            برای اطلاع از شرایط کلاس‌ها و شروع ثبت‌نام B2 با ما در ارتباط باشید.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              generalMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="شروع ثبت‌نام دوره زبان آلمانی B2 در واتساپ"
            className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-colors"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}
