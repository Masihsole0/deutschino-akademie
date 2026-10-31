
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
  title: "کلاس زبان آلمانی A2 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی A2 در اصفهان و آنلاین؛ کلاس خصوصی و گروهی با تمرکز بر گرامر، واژگان، مکالمه و تقویت چهار مهارت زبان آلمانی در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a2",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی A2",
  description:
    "آموزش زبان آلمانی سطح A2 در آکادمی دویچینو، به‌صورت خصوصی و گروهی، حضوری در اصفهان و آنلاین، با تمرکز بر گرامر، واژگان و مهارت‌های زبان آلمانی.",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "A2",
};

const whatsappNumber = "989130061984";

export default function A2Page() {
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

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس زبان آلمانی A2 در اصفهان
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-7 md:leading-8">
            آموزش زبان آلمانی سطح A2 به‌صورت خصوصی و گروهی، حضوری در اصفهان و
            آنلاین؛ مناسب افرادی که سطح A1 را گذرانده‌اند و می‌خواهند دانش
            زبان آلمانی خود را گسترش دهند.
          </p>
        </section>

        {/* Banner */}
        <div className="flex justify-center">
          <Image
            src="/books2.jpg"
            alt="کتاب‌های آموزش زبان آلمانی سطح A2"
            width={900}
            height={350}
            className="rounded-2xl shadow-xl object-cover w-full max-w-[260px] md:max-w-[500px] h-auto"
            priority
          />
        </div>

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
            <p className="text-sm text-gray-600">سطح A1</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Headphones size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">پشتیبانی</p>
            <p className="text-sm text-gray-600">خارج از ساعات کلاس</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <BookOpen size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">منابع آموزشی</p>
            <p className="text-sm text-gray-600">Menschen A2.1 / A2.2</p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در دوره زبان آلمانی A2 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت گرامر و ساختار جمله در سطح A2
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              افزایش دایره واژگان کاربردی زبان آلمانی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین مکالمه در موقعیت‌های روزمره
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت مهارت‌های شنیدن، خواندن و نوشتن
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              آمادگی برای ادامه مسیر یادگیری در سطح B1
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی A2
          </h2>

          <p className="text-gray-600 text-center mb-7">
            امکان انتخاب کلاس خصوصی یا گروهی متناسب با شرایط شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-3 md:px-5 py-3 md:py-4">
                <h3 className="text-base md:text-xl font-bold">
                  کلاس خصوصی A2
                </h3>
              </div>

              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between gap-1 mb-4 md:mb-5">
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-green-700">
                      ۹۴۰٬۰۰۰
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
                    "سلام، می‌خواهم برای کلاس خصوصی زبان آلمانی A2 ثبت‌نام کنم."
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
                  کلاس گروهی A2
                </h3>
              </div>

              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between gap-1 mb-4 md:mb-5">
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-green-700">
                      ۴۵۰٬۰۰۰
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
                    "سلام، می‌خواهم برای کلاس گروهی زبان آلمانی A2 ثبت‌نام کنم."
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
          aria-labelledby="a2-course-guide"
        >
          <h2
            id="a2-course-guide"
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            آموزش حضوری زبان آلمانی A2 در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            اگر سطح A1 زبان آلمانی را گذرانده‌اید، دوره A2 در آکادمی
            دویچینو به شما کمک می‌کند دانش زبانی خود را گسترش دهید و
            برای برقراری ارتباط در موقعیت‌های روزمره آماده‌تر شوید.
            این دوره به‌صورت خصوصی و گروهی، حضوری در اصفهان و آنلاین برگزار می‌شود.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            در سطح A2 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در این سطح، گرامر و واژگان زبان آلمانی را عمیق‌تر یاد
            می‌گیرید و برای صحبت‌کردن درباره موضوعات روزمره، تجربه‌ها،
            برنامه‌ها و نیازهای شخصی تمرین می‌کنید. تمرکز کلاس فقط بر
            کتاب نیست و تقویت مهارت‌های شنیدن، صحبت‌کردن، خواندن و
            نوشتن نیز اهمیت دارد.
          </p>

          <ul className="list-disc pr-6 space-y-2 text-base md:text-lg leading-8">
            <li>تقویت گرامر و ساختار جمله در سطح A2</li>
            <li>افزایش دایره واژگان کاربردی زبان آلمانی</li>
            <li>تمرین مکالمه در موقعیت‌های روزمره</li>
            <li>تقویت مهارت‌های شنیدن، خواندن و نوشتن</li>
            <li>آمادگی برای ادامه مسیر یادگیری در سطح B1</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس خصوصی یا گروهی A2؛ کدام مناسب شماست؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در کلاس خصوصی می‌توانید با توجه به زمان، سرعت یادگیری و
            نیازهای خود پیش بروید. کلاس گروهی نیز فرصت تمرین مکالمه و
            تعامل با زبان‌آموزان دیگر را فراهم می‌کند. برای انتخاب
            دوره مناسب، می‌توانید از طریق واتساپ درباره شرایط کلاس‌ها سؤال کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            پیش‌نیاز شرکت در دوره A2
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            برای شروع این دوره، آشنایی با مطالب سطح A1 زبان آلمانی
            لازم است. اگر مدتی از مطالعه شما گذشته یا درباره سطح فعلی
            خود مطمئن نیستید، پیش از ثبت‌نام می‌توانید درباره تعیین
            سطح و انتخاب دوره مناسب مشورت بگیرید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            ثبت‌نام کلاس زبان آلمانی A2 در دویچینو
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
