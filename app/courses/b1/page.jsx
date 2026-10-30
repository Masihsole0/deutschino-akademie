
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Book,
  CircleHelp,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "کلاس زبان آلمانی B1 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی B1 در اصفهان و آنلاین؛ کلاس خصوصی و گروهی با تمرکز بر گرامر، واژگان، مکالمه و تقویت چهار مهارت زبان آلمانی در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/b1",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی B1",
  description:
    "آموزش زبان آلمانی سطح B1 در آکادمی دویچینو، با کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین، با تمرکز بر گرامر، واژگان، خواندن، شنیدن، صحبت کردن و نوشتن.",
  provider: {
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "B1",
};

const whatsappNumber = "989130061984";

export default function B1Page() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-6">
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

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس زبان آلمانی B1 در اصفهان
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-7 md:leading-8">
            آموزش زبان آلمانی سطح B1 به‌صورت خصوصی و گروهی، حضوری در اصفهان و
            آنلاین؛ مناسب افرادی که سطح A2 را گذرانده‌اند و می‌خواهند توانایی
            ارتباط مستقل‌تر به زبان آلمانی را تقویت کنند.
          </p>
        </section>

        {/* Course Features */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Clock3 size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">مدت زمان</p>
            <p className="text-sm text-gray-600">بدون محدودیت زمانی</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <GraduationCap
              size={25}
              className="mx-auto mb-2 text-[#0A2540]"
            />
            <p className="font-bold mb-1">پیش‌نیاز</p>
            <p className="text-sm text-gray-600">سطح A2</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Headphones size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">پشتیبانی</p>
            <p className="text-sm text-gray-600">خارج از ساعات کلاس</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <BookOpen size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">منابع آموزشی</p>
            <p className="text-sm text-gray-600">Menschen B1.1 / B1.2</p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در دوره زبان آلمانی B1 چه مهارت‌هایی تقویت می‌شوند؟
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
              خواندن متن‌ها و تمرین درک مطلب
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
        <section dir="rtl" className="max-w-4xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی B1
          </h2>

          <p className="text-gray-600 text-center mb-7">
            امکان انتخاب کلاس خصوصی یا گروهی متناسب با شرایط شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-3 md:px-5 py-3 md:py-4">
                <h3 className="text-base md:text-xl font-bold">
                  کلاس خصوصی B1
                </h3>
              </div>

              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between gap-1 mb-4 md:mb-5">
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-green-700">
                      ۱٬۳۰۰٬۰۰۰
                    </p>
                    <span className="text-xs md:text-sm text-gray-500">
                      تومان برای هر جلسه
                    </span>
                  </div>
                  <Wallet
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم برای کلاس خصوصی زبان آلمانی B1 ثبت‌نام کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center text-xs md:text-base py-3 md:py-4 px-1 rounded-xl font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-3 md:px-5 py-3 md:py-4">
                <h3 className="text-base md:text-xl font-bold">
                  کلاس گروهی B1
                </h3>
              </div>

              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between gap-1 mb-4 md:mb-5">
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-green-700">
                      ۵۰۰٬۰۰۰
                    </p>
                    <span className="text-xs md:text-sm text-gray-500">
                      تومان برای هر جلسه
                    </span>
                  </div>
                  <Wallet
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم برای کلاس گروهی زبان آلمانی B1 ثبت‌نام کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center text-xs md:text-base py-3 md:py-4 px-1 rounded-xl font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center leading-8 mt-5">
            تعداد جلسات و مدت دوره ثابت نیست و متناسب با روند یادگیری و پیشرفت
            زبان‌آموز تعیین می‌شود.
          </p>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
          aria-labelledby="b1-course-guide"
        >
          <h2
            id="b1-course-guide"
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            آموزش حضوری زبان آلمانی B1 در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            اگر سطح A2 زبان آلمانی را گذرانده‌اید، دوره B1 در آکادمی
            دویچینو به شما کمک می‌کند توانایی ارتباط به زبان آلمانی را
            در موقعیت‌های مختلف تقویت کنید. این دوره به‌صورت خصوصی و
            گروهی، حضوری در اصفهان و آنلاین برگزار می‌شود.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            در سطح B1 چه مهارت‌هایی تقویت می‌شوند؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در سطح B1، علاوه بر گسترش گرامر و واژگان، روی بیان نظر،
            توضیح تجربه‌ها، صحبت درباره موضوعات آشنا و درک متن‌ها و
            مکالمه‌های روزمره کار می‌کنید. تمرین منظم چهار مهارت به
            شما کمک می‌کند برای استفاده مستقل‌تر از زبان آلمانی آماده شوید.
          </p>

          <ul className="list-disc pr-6 space-y-2 text-base md:text-lg leading-8">
            <li>تقویت گرامر و واژگان کاربردی سطح B1</li>
            <li>تمرین مکالمه و بیان نظر به زبان آلمانی</li>
            <li>تقویت مهارت شنیدن و درک مکالمه‌ها</li>
            <li>خواندن متن‌ها و تمرین درک مطلب</li>
            <li>تمرین نوشتن متن‌ها و پیام‌های کاربردی</li>
            <li>آمادگی برای ادامه یادگیری در سطح B2</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس خصوصی یا گروهی B1؛ کدام مناسب شماست؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            کلاس خصوصی برای افرادی مناسب است که می‌خواهند با برنامه و
            سرعت متناسب با نیازهای خود پیش بروند. در کلاس گروهی نیز
            فرصت تعامل با دیگر زبان‌آموزان و تمرین مکالمه فراهم می‌شود.
            برای انتخاب دوره متناسب با هدف و زمان خود، می‌توانید از طریق
            واتساپ مشورت بگیرید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            پیش‌نیاز شرکت در دوره B1
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            برای شروع دوره B1، آشنایی با مطالب سطح A2 زبان آلمانی لازم
            است. اگر درباره سطح فعلی خود مطمئن نیستید، پیش از ثبت‌نام
            می‌توانید درباره تعیین سطح و انتخاب کلاس مناسب سؤال کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            ثبت‌نام کلاس زبان آلمانی B1 در دویچینو
          </h2>

          <p className="text-base md:text-lg leading-9">
            برای اطلاع از زمان برگزاری کلاس‌های خصوصی و گروهی، هزینه
            دوره و امکان شرکت حضوری در اصفهان یا آنلاین، از دکمه‌های
            ثبت‌نام همین صفحه استفاده کنید.
          </p>
        </section>
      </div>
    </main>
  );
}
