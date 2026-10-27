
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
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "A2",
};

export default function A2Page() {
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
            src="/books2.jpg"
            alt="کتاب‌های آموزش زبان آلمانی سطح A2"
            width={900}
    height={350}
    className="rounded-2xl shadow-xl object-cover md:max-w-[650px] md:w-full"
    priority
          />
        </div>

        {/* Title */}
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            دوره زبان آلمانی A2
          </h1>

          <p
            dir="rtl"
            className="mt-5 text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            در دوره زبان آلمانی A2 آکادمی دویچینو، مطالب سطح A1 را تقویت
            می‌کنید و با گرامر، واژگان و مکالمه‌های متنوع‌تر آشنا می‌شوید.
          </p>

          <p
            dir="rtl"
            className="text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            این دوره به‌صورت خصوصی و گروهی برگزار می‌شود و امکان شرکت
            حضوری در اصفهان یا آنلاین نیز وجود دارد. هدف دوره، تقویت
            مهارت‌های زبان آلمانی و آماده‌شدن برای ادامه یادگیری در سطح B1 است.
          </p>
        </div>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-16 mb-12 text-right"
        >
          <h2 className="text-2xl font-bold mb-5">
            آموزش حضوری زبان آلمانی A2 در اصفهان و آنلاین
          </h2>

          <p className="text-base leading-9 mb-6">
            اگر سطح A1 زبان آلمانی را گذرانده‌اید، دوره A2 در آکادمی
            دویچینو به شما کمک می‌کند دانش زبانی خود را گسترش دهید و
            برای برقراری ارتباط در موقعیت‌های روزمره آماده‌تر شوید.
            این دوره به‌صورت خصوصی و گروهی، حضوری در اصفهان و آنلاین برگزار می‌شود.
          </p>

          <h2 className="text-xl font-bold mb-4">
            در سطح A2 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <p className="text-base leading-9 mb-4">
            در این سطح، گرامر و واژگان زبان آلمانی را عمیق‌تر یاد
            می‌گیرید و برای صحبت‌کردن درباره موضوعات روزمره، تجربه‌ها،
            برنامه‌ها و نیازهای شخصی تمرین می‌کنید. تمرکز کلاس فقط بر
            کتاب نیست و تقویت مهارت‌های شنیدن، صحبت‌کردن، خواندن و
            نوشتن نیز اهمیت دارد.
          </p>

          <ul className="list-disc pr-6 space-y-3 leading-8 mb-6">
            <li>تقویت گرامر و ساختار جمله در سطح A2</li>
            <li>افزایش دایره واژگان کاربردی زبان آلمانی</li>
            <li>تمرین مکالمه در موقعیت‌های روزمره</li>
            <li>تقویت مهارت‌های شنیدن، خواندن و نوشتن</li>
            <li>آمادگی برای ادامه مسیر یادگیری در سطح B1</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">
            کلاس خصوصی یا گروهی A2؛ کدام مناسب شماست؟
          </h2>

          <p className="text-base leading-9 mb-6">
            در کلاس خصوصی می‌توانید با توجه به زمان، سرعت یادگیری و
            نیازهای خود پیش بروید. کلاس گروهی نیز فرصت تمرین مکالمه و
            تعامل با زبان‌آموزان دیگر را فراهم می‌کند. برای انتخاب
            دوره مناسب، می‌توانید از طریق واتساپ درباره شرایط کلاس‌ها سؤال کنید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            پیش‌نیاز شرکت در دوره A2
          </h2>

          <p className="text-base leading-9 mb-6">
            برای شروع این دوره، آشنایی با مطالب سطح A1 زبان آلمانی
            لازم است. اگر مدتی از مطالعه شما گذشته یا درباره سطح فعلی
            خود مطمئن نیستید، پیش از ثبت‌نام می‌توانید درباره تعیین
            سطح و انتخاب دوره مناسب مشورت بگیرید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            ثبت‌نام کلاس زبان آلمانی A2 در دویچینو
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
                <span className="font-bold">A2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  Menschen A2.1 / A2.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح A1</span>
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
                    ۹۴۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / هر جلسه</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس خصوصی A2 ثبت نام کنم."
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
                <span className="font-bold">A2</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold break-words">
                  Menschen A2.1 / A2.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3 shrink-0">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-5">
                <span className="font-bold">سطح A1</span>
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
                    ۱۰,۷۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / ترمیک</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس A2 گروهی ثبت نام کنم."
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
