
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
  title: "کلاس زبان آلمانی B2 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی B2 در اصفهان و آنلاین؛ کلاس خصوصی و گروهی با تمرکز بر گرامر پیشرفته، واژگان، مکالمه و تقویت چهار مهارت زبان آلمانی در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/b2",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی B2",
  description:
    "آموزش زبان آلمانی سطح B2 در آکادمی دویچینو، با کلاس‌های خصوصی و گروهی، حضوری در اصفهان و آنلاین، با تمرکز بر گرامر پیشرفته، واژگان، خواندن، شنیدن، صحبت کردن و نوشتن.",
  provider: {
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "B2",
};

export default function B2Page() {
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
            alt="کتاب‌های آموزش زبان آلمانی سطح B2"
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
          <h1 className="text-2xl font-bold mb-5">
            آموزش حضوری زبان آلمانی B2 در اصفهان و آنلاین
          </h1>

          <p className="text-base leading-9 mb-6">
            اگر سطح B1 زبان آلمانی را گذرانده‌اید، دوره B2 در آکادمی
            دویچینو فرصتی برای تقویت توانایی شما در استفاده مستقل‌تر و
            دقیق‌تر از زبان آلمانی است. این دوره به‌صورت خصوصی و گروهی،
            حضوری در اصفهان و آنلاین برگزار می‌شود.
          </p>

          <h2 className="text-xl font-bold mb-4">
            در سطح B2 چه مهارت‌هایی تقویت می‌شوند؟
          </h2>

          <p className="text-base leading-9 mb-4">
            در سطح B2 روی درک متن‌ها و مکالمه‌های پیچیده‌تر، بیان روشن
            دیدگاه‌ها، استدلال، گسترش واژگان و استفاده دقیق‌تر از ساختارهای
            گرامری کار می‌کنید. تمرین چهار مهارت اصلی به شما کمک می‌کند
            برای موقعیت‌های تحصیلی، شغلی و ارتباطی آماده‌تر شوید.
          </p>

          <ul className="list-disc pr-6 space-y-3 leading-8 mb-6">
            <li>تقویت گرامر و واژگان سطح B2</li>
            <li>تمرین مکالمه و بیان استدلال و دیدگاه</li>
            <li>درک مکالمه‌ها و فایل‌های صوتی طولانی‌تر</li>
            <li>خواندن و تحلیل متن‌های پیچیده‌تر</li>
            <li>تمرین نوشتن متن‌های منسجم و رسمی‌تر</li>
            <li>آمادگی برای استفاده از زبان آلمانی در محیط‌های تحصیلی و کاری</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">
            کلاس خصوصی یا گروهی B2؛ کدام مناسب شماست؟
          </h2>

          <p className="text-base leading-9 mb-6">
            کلاس خصوصی برای افرادی مناسب است که می‌خواهند با برنامه و
            سرعت متناسب با نیازهای خود پیش بروند. کلاس گروهی نیز فرصت
            تعامل با دیگر زبان‌آموزان و تمرین مکالمه را فراهم می‌کند.
            برای انتخاب دوره متناسب با سطح، هدف و زمان خود می‌توانید
            از طریق واتساپ مشورت بگیرید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            پیش‌نیاز شرکت در دوره B2
          </h2>

          <p className="text-base leading-9 mb-6">
            برای شروع دوره B2، تسلط مناسب به مطالب سطح B1 زبان آلمانی
            توصیه می‌شود. اگر درباره سطح فعلی خود مطمئن نیستید، پیش از
            ثبت‌نام می‌توانید درباره تعیین سطح و انتخاب کلاس مناسب سؤال کنید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            ثبت‌نام کلاس زبان آلمانی B2 در دویچینو
          </h2>

          <p className="text-base leading-9">
            برای اطلاع از زمان برگزاری کلاس‌های خصوصی و گروهی، شرایط دوره
            و امکان شرکت حضوری در اصفهان یا آنلاین، از دکمه‌های ثبت‌نام
            همین صفحه استفاده کنید.
          </p>
        </section>

        {/* Course Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Private Course */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">
            <div className="bg-[#F4F8FF] border-b px-6 py-4">
              <h2 className="text-xl font-bold text-right">
                اطلاعات دوره خصوصی
              </h2>
            </div>

            <div className="divide-y">
              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">با هماهنگی مدرس</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">با هماهنگی مدرس</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">B2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  منابع متناسب با سطح B2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح B1</span>
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
                    ۱٬۵۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / هر جلسه</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام،%20می‌خواهم%20برای%20کلاس%20خصوصی%20B2%20زبان%20آلمانی%20ثبت‌نام%20کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
              >
                ثبت‌نام دوره خصوصی
              </a>

              <p className="mt-2 text-xs text-gray-700 text-center">
                ثبت‌نام از طریق واتساپ انجام می‌شود.
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
                <span className="font-bold">با هماهنگی مدرس</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">با هماهنگی مدرس</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">B2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  منابع متناسب با سطح B2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح B1</span>
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
                    ۱۸٬۰۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / هر ترم</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام،%20می‌خواهم%20برای%20کلاس%20گروهی%20B2%20زبان%20آلمانی%20ثبت‌نام%20کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
              >
                ثبت‌نام دوره گروهی
              </a>

              <p className="mt-2 text-xs text-gray-700 text-center">
                ثبت‌نام از طریق واتساپ انجام می‌شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
