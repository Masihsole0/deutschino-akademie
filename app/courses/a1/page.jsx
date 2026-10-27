
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
  title: "کلاس زبان آلمانی A1 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی A1 از صفر در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، همراه با تمرین گرامر، واژگان و مکالمه‌های روزمره.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a1",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی A1",
  description:
    "آموزش زبان آلمانی A1 از صفر در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین.",
  provider: {
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "A1",
};

export default function A1Page() {
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
            src="/books.jpg"
            alt="کتاب‌های آموزش زبان آلمانی سطح A1"
            width={900}
            height={350}
            className="rounded-2xl shadow-xl object-cover"
            priority
          />
        </div>

        {/* Main Title */}
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            دوره زبان آلمانی A1
          </h1>

          <p
            dir="rtl"
            className="mt-5 text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            در دوره زبان آلمانی A1 آکادمی دویچینو، یادگیری را از پایه شروع
            می‌کنید و با واژگان پرکاربرد، گرامر مقدماتی و مکالمه‌های روزمره
            آشنا می‌شوید.
          </p>

          <p
            dir="rtl"
            className="text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            این دوره به‌صورت خصوصی و گروهی ارائه می‌شود و امکان شرکت در کلاس
            حضوری در اصفهان یا آنلاین نیز وجود دارد. در پایان سطح A1، برای
            ادامه یادگیری در سطح A2 آماده‌تر خواهید بود.
          </p>
        </div>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
          aria-labelledby="a1-course-guide"
        >
          <h2
            id="a1-course-guide"
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            آموزش حضوری زبان آلمانی A1 در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            اگر می‌خواهید یادگیری زبان آلمانی را از صفر شروع کنید، دوره A1
            آکادمی دویچینو برای آشنایی با واژگان پایه، گرامر مقدماتی و
            مکالمه‌های روزمره مناسب است. در این سطح یاد می‌گیرید خودتان را
            معرفی کنید، درباره خانواده و علایق خود صحبت کنید، سؤال‌های ساده
            بپرسید و در موقعیت‌های روزمره ارتباط برقرار کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس زبان آلمانی A1 به‌صورت خصوصی و گروهی
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در دویچینو می‌توانید با توجه به شرایط و برنامه خود، کلاس خصوصی یا
            گروهی انتخاب کنید. کلاس خصوصی امکان تمرکز بیشتر بر نیازهای فردی را
            فراهم می‌کند و در کلاس گروهی فرصت تمرین و تعامل با زبان‌آموزان دیگر
            را دارید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس حضوری آلمانی در اصفهان یا آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            کلاس‌های A1 آکادمی دویچینو به‌صورت حضوری در اصفهان و همچنین آنلاین
            برگزار می‌شوند. بنابراین، چه در اصفهان باشید و چه امکان حضور در
            کلاس را نداشته باشید، می‌توانید متناسب با شرایط خود یادگیری زبان
            آلمانی را شروع کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            در دوره آلمانی A1 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <ul className="list-disc pr-6 space-y-2 text-base md:text-lg leading-8">
            <li>معرفی خود و دیگران و صحبت درباره اطلاعات شخصی</li>
            <li>واژگان مربوط به خانواده، کار، خرید و زندگی روزمره</li>
            <li>گرامر پایه و ساخت جمله‌های ساده آلمانی</li>
            <li>پرسیدن و پاسخ دادن به سؤال‌های متداول</li>
            <li>تمرین مکالمه و درک جمله‌های ساده آلمانی</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            آیا برای شرکت در دوره A1 به پیش‌نیاز نیاز دارم؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            خیر. این دوره برای افرادی طراحی شده است که می‌خواهند زبان آلمانی
            را از ابتدا شروع کنند و به دانش قبلی زبان آلمانی نیاز ندارند.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            ثبت‌نام کلاس زبان آلمانی A1
          </h2>

          <p className="text-base md:text-lg leading-9">
            برای انتخاب کلاس خصوصی یا گروهی و دریافت اطلاعات بیشتر درباره شروع
            دوره، می‌توانید از طریق دکمه‌های ثبت‌نام همین صفحه با آکادمی
            دویچینو در ارتباط باشید.
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
              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">بدون محدودیت جلسه</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">بدون محدودیت زمانی</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">A1</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">
                  Menschen A1.1 / A1.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">ندارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18} />
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18} />
                  <span>پشتیبانی</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold text-green-700">
                    ۸۹۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / هر جلسه</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس A1 خصوصی ثبت نام کنم."
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
              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۳۰ جلسه</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18} />
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۴۵ ساعت</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18} />
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">A1</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18} />
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">
                  Menschen A1.1 / A1.2
                </span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Book size={18} />
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">ندارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18} />
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>
                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18} />
                  <span>پشتیبانی</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-t p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold text-green-700">
                    ۱۰,۷۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500">تومان / ترمیک</span>
                </div>
                <Wallet size={30} />
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس A1 گروهی ثبت نام کنم."
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
