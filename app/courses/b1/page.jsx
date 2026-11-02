
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "کلاس زبان آلمانی B1 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی B1 در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، با تمرکز بر گرامر، واژگان، مکالمه و تقویت چهار مهارت زبان آلمانی.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/b1",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی B1",
  description:
    "آموزش زبان آلمانی سطح B1 در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، با تمرکز بر گرامر، واژگان، خواندن، شنیدن، صحبت کردن و نوشتن.",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "B1",
};

const whatsappNumber = "989130061984";

export default function B1Page() {
  const generalMessage =
    "سلام، برای ثبت‌نام دوره زبان آلمانی B1 و دریافت مشاوره راهنمایی می‌خواهم.";

  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex justify-center mb-3 md:mb-6">
          <Image
            src="/logo.jpg"
            alt="لوگوی آکادمی دویچینو"
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
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس زبان آلمانی B1
          </h1>
        </section>

        {/* Banner */}
        <div className="flex justify-center">
          <Image
            src="/books3.jpg"
            alt="کتاب‌های آموزش زبان آلمانی سطح B1"
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
              مدت دوره
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              هر جلسه ۹۰ دقیقه
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
              تسلط به سطح A2
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
              پاسخ به سؤالات و بررسی تمرین‌ها
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
              Menschen B1.1 و B1.2
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در پایان سطح B1 چه مهارت‌هایی خواهید داشت؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت گرامر و واژگان کاربردی سطح B1
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین مکالمه و بیان نظر به زبان آلمانی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت مهارت شنیدن و درک مکالمه‌ها
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              خواندن متن‌ها و تقویت مهارت درک مطلب
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین نوشتن متن‌ها و پیام‌های کاربردی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              آمادگی برای ادامه یادگیری در سطح B2
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی B1
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
            امکان انتخاب کلاس خصوصی یا گروهی متناسب با شرایط شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس خصوصی B1
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  هزینه بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۱۳٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۱٬۳۰۰٬۰۰۰ تومان
                  <br />
                  ۹۰ دقیقه
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم درباره ثبت‌نام کلاس خصوصی زبان آلمانی B1 و بسته ۱۰ جلسه‌ای اطلاعات بیشتری دریافت کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس گروهی B1
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  هزینه بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۵٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-1">
                  هر جلسه ۵۰۰٬۰۰۰ تومان
                </p>

                <p className="text-xs text-gray-600 mb-2">
                  ۹۰ دقیقه
                </p>

                <p className="text-xs font-semibold text-blue-900 mb-3">
                  ظرفیت کلاس: حداکثر ۶ نفر
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم درباره ثبت‌نام کلاس گروهی زبان آلمانی B1 و ظرفیت کلاس اطلاعات بیشتری دریافت کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-4">
            شهریه کلاس‌های خصوصی و گروهی به‌صورت بسته‌های ۱۰ جلسه‌ای
            دریافت می‌شود. هر جلسه ۹۰ دقیقه است و ادامه دوره متناسب با
            روند یادگیری و پیشرفت زبان‌آموز تعیین می‌شود.
          </p>

          {/* Free Consultation Card */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <p className="text-sm md:text-base font-semibold text-[#0A2540] mb-2">
              برای انتخاب کلاس مناسب نیاز به راهنمایی دارید؟
            </p>

            <p className="text-sm text-gray-600 mb-3">
              پیش از ثبت‌نام می‌توانید از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "سلام، برای دریافت مشاوره اولیه رایگان ۱۵ دقیقه‌ای درباره کلاس زبان آلمانی B1 پیام می‌دهم."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              سؤالات متداول درباره کلاس زبان آلمانی B1
            </h2>

            <div className="space-y-0 text-gray-700 leading-8">
              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  برای شرکت در کلاس B1 چه پیش‌نیازی لازم است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  برای شرکت در دوره B1 لازم است سطح A2 زبان آلمانی را گذرانده
                  باشید و با مباحث پایه و متوسط این زبان آشنایی داشته باشید.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  در دوره B1 از چه منابعی استفاده می‌شود؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  منابع آموزشی این دوره شامل کتاب‌های Menschen B1.1 و
                  Menschen B1.2 است.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  هزینه کلاس زبان آلمانی B1 چقدر است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  هزینه بسته ۱۰ جلسه‌ای کلاس خصوصی ۱۳٬۰۰۰٬۰۰۰ تومان و کلاس
                  گروهی ۵٬۰۰۰٬۰۰۰ تومان است. هر جلسه ۹۰ دقیقه برگزار می‌شود.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  آیا امکان شرکت در کلاس آنلاین وجود دارد؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  بله. دوره زبان آلمانی B1 به‌صورت حضوری در اصفهان و همچنین
                  آنلاین برگزار می‌شود.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  آیا خارج از زمان کلاس هم پشتیبانی آموزشی دارم؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  بله. در طول دوره می‌توانید سؤالات خود را مطرح کنید،
                  تمرین‌هایتان را برای بررسی ارسال کنید و برای رفع اشکال
                  از پشتیبانی آموزشی بهره‌مند شوید.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            آموزش زبان آلمانی B1 در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9">
            اگر سطح A2 زبان آلمانی را گذرانده‌اید، در دوره B1 آکادمی دویچینو
            می‌توانید دانش زبانی خود را گسترش دهید و برای برقراری ارتباط
            مستقل‌تر در موقعیت‌های مختلف آماده شوید. در این دوره با استفاده
            از کتاب‌های Menschen B1.1 و B1.2، گرامر و واژگان سطح B1 را تقویت
            می‌کنید و مهارت‌های شنیدن، خواندن، نوشتن و مکالمه خود را توسعه
            می‌دهید. کلاس زبان آلمانی B1 به‌صورت خصوصی و گروهی، حضوری در
            اصفهان و آنلاین برگزار می‌شود. برای دریافت اطلاعات بیشتر و
            انتخاب کلاس مناسب می‌توانید از طریق واتساپ با آکادمی دویچینو
            ارتباط بگیرید.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-10 md:mt-12 mb-8 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            آماده شروع یادگیری زبان آلمانی هستید؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            برای دریافت مشاوره و اطلاع از شرایط ثبت‌نام کلاس خصوصی یا گروهی B1
            با آکادمی دویچینو در ارتباط باشید.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              generalMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}
