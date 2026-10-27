
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Book,
  CircleHelp,
  Headphones,
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

export default function B1Page() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.jpg"
            alt="لوگوی آکادمی دویچینو"
            width={120}
            height={120}
            className="w-auto h-28"
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
    className="rounded-2xl shadow-xl object-cover md:max-w-[650px] md:w-full"
    priority
          />
        </div>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-16 mb-12 text-right"
        >
          <h2 className="text-2xl font-bold mb-5">
            آموزش حضوری زبان آلمانی B1 در اصفهان و آنلاین
          </h2>

          <p className="text-base leading-9 mb-6">
            اگر سطح A2 زبان آلمانی را گذرانده‌اید، دوره B1 در آکادمی
            دویچینو به شما کمک می‌کند توانایی ارتباط به زبان آلمانی را
            در موقعیت‌های مختلف تقویت کنید. این دوره به‌صورت خصوصی و
            گروهی، حضوری در اصفهان و آنلاین برگزار می‌شود.
          </p>

          <h2 className="text-xl font-bold mb-4">
            در سطح B1 چه مهارت‌هایی تقویت می‌شوند؟
          </h2>

          <p className="text-base leading-9 mb-4">
            در سطح B1، علاوه بر گسترش گرامر و واژگان، روی بیان نظر،
            توضیح تجربه‌ها، صحبت درباره موضوعات آشنا و درک متن‌ها و
            مکالمه‌های روزمره کار می‌کنید. تمرین منظم چهار مهارت به
            شما کمک می‌کند برای استفاده مستقل‌تر از زبان آلمانی آماده شوید.
          </p>

          <ul className="list-disc pr-6 space-y-3 leading-8 mb-6">
            <li>تقویت گرامر و واژگان کاربردی سطح B1</li>
            <li>تمرین مکالمه و بیان نظر به زبان آلمانی</li>
            <li>تقویت مهارت شنیدن و درک مکالمه‌ها</li>
            <li>خواندن متن‌ها و تمرین درک مطلب</li>
            <li>تمرین نوشتن متن‌ها و پیام‌های کاربردی</li>
            <li>آمادگی برای ادامه یادگیری در سطح B2</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">
            کلاس خصوصی یا گروهی B1؛ کدام مناسب شماست؟
          </h2>

          <p className="text-base leading-9 mb-6">
            کلاس خصوصی برای افرادی مناسب است که می‌خواهند با برنامه و
            سرعت متناسب با نیازهای خود پیش بروند. در کلاس گروهی نیز
            فرصت تعامل با دیگر زبان‌آموزان و تمرین مکالمه فراهم می‌شود.
            برای انتخاب دوره متناسب با هدف و زمان خود، می‌توانید از طریق
            واتساپ مشورت بگیرید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            پیش‌نیاز شرکت در دوره B1
          </h2>

          <p className="text-base leading-9 mb-6">
            برای شروع دوره B1، آشنایی با مطالب سطح A2 زبان آلمانی لازم
            است. اگر درباره سطح فعلی خود مطمئن نیستید، پیش از ثبت‌نام
            می‌توانید درباره تعیین سطح و انتخاب کلاس مناسب سؤال کنید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            ثبت‌نام کلاس زبان آلمانی B1 در دویچینو
          </h2>

          <p className="text-base leading-9">
            برای اطلاع از زمان برگزاری کلاس‌های خصوصی و گروهی، هزینه
            دوره و امکان شرکت حضوری در اصفهان یا آنلاین، از دکمه‌های
            ثبت‌نام همین صفحه استفاده کنید.
          </p>
        </section>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Private */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
            <div className="bg-[#F4F8FF] border-b px-6 py-4">
              <h2 className="text-xl font-bold text-right">
                اطلاعات دوره خصوصی
              </h2>
            </div>

            <div className="divide-y">
              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">بدون محدودیت جلسه</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">بدون محدودیت زمانی</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">B1</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  Menschen B1.1 / B1.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح A2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18} />
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18} />
                  <span>پشتیبانی</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t p-8">
              <div className="flex justify-between items-center gap-3 mb-6">
                <div>
                  <p className="text-3xl font-bold text-green-700">
                    ۱,۳۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / هر جلسه</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس B1 خصوصی ثبت نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
              >
                ثبت‌نام دوره خصوصی
              </a>

              <p className="mt-2 text-xs text-gray-700 text-center">
                ثبت‌نام از طریق واتساپ انجام می‌شود. لطفاً فیلترشکن خود را
                روشن کنید.
              </p>
            </div>
          </div>

          {/* Group Course */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
            <div className="bg-[#F4F8FF] border-b px-6 py-4">
              <h2 className="text-xl font-bold text-right">
                اطلاعات دوره گروهی
              </h2>
            </div>

            <div className="divide-y">
              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">۳۵ جلسه</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">۵۳ ساعت</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">B1</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  Menschen B1.1 / B1.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح A2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18} />
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18} />
                  <span>پشتیبانی</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t p-8">
              <div className="flex justify-between items-center gap-3 mb-6">
                <div>
                  <p className="text-3xl font-bold text-green-700">
                    ۱۳,۷۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / ترمیک</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس B1 گروهی ثبت نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
              >
                ثبت‌نام دوره گروهی
              </a>

              <p className="mt-2 text-xs text-gray-700 text-center">
                ثبت‌نام از طریق واتساپ انجام می‌شود. لطفاً فیلترشکن خود را
                روشن کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
