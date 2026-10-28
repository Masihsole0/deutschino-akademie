
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Book,
  CircleHelp,
  Headphones,
} from "lucide-react";

export const metadata = {
  title: "کلاس گرامر زبان آلمانی A1 تا B2 در اصفهان | دویچینو",
  description:
    "کلاس گرامر زبان آلمانی از سطح A1 تا B2 در اصفهان و آنلاین؛ آموزش قواعد، حل تمرین و رفع اشکال در آکادمی دویچینو. هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/grammar",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره گرامر زبان آلمانی A1 تا B2",
  description:
    "آموزش گرامر زبان آلمانی از سطح A1 تا B2 با تمرکز بر یادگیری قواعد، حل تمرین و رفع اشکال در آکادمی دویچینو.",
  provider: {
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "A1–B2",
};

export default function GrammarPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 pt-0 pb-10">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.jpg"
            alt="لوگوی آکادمی دویچینو"
            width={100}
            height={100}
            className="h-28 w-auto"
            priority
          />
        </div>

        {/* Banner */}
        <div className="flex justify-center">
          <Image
            src="/books3.jpg"
            alt="دوره گرامر زبان آلمانی A1 تا B2 در آکادمی دویچینو"
            width={700}
            height={240}
            className="w-full max-w-[700px] rounded-3xl shadow-xl object-cover"
            priority
          />
        </div>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-16 mb-12 text-right"
        >
          <h1 className="text-2xl font-bold mb-5">
            کلاس گرامر زبان آلمانی از A1 تا B2 در اصفهان و آنلاین
          </h1>

          <p className="text-base leading-9 mb-6">
            اگر در یادگیری قواعد زبان آلمانی مشکل دارید، هنگام جمله‌سازی
            اشتباه می‌کنید یا می‌خواهید گرامر را اصولی‌تر یاد بگیرید، این
            دوره برای شماست. در کلاس گرامر دویچینو، قواعد متناسب با سطح
            شما از A1 تا B2 آموزش داده می‌شوند و با حل تمرین و مثال‌های
            کاربردی، فرصت پیدا می‌کنید آموخته‌های خود را بهتر تثبیت کنید.
            کلاس‌ها با هماهنگی قبلی به‌صورت حضوری در اصفهان یا آنلاین
            برگزار می‌شوند.
          </p>

          <h2 className="text-xl font-bold mb-4">
            در کلاس گرامر آلمانی چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="list-disc pr-6 space-y-3 leading-8 mb-6">
            <li>
              گرامر پایه A1 و A2؛ صرف افعال، آرتیکل‌ها، ضمایر و ساختار جمله
            </li>
            <li>
              حالت‌های دستوری Nominativ، Akkusativ و Dativ و حروف اضافه
            </li>
            <li>
              گرامر B1؛ جمله‌های فرعی، افعال با حروف اضافه و ساختارهای
              مصدر با zu
            </li>
            <li>
              گرامر B2؛ ساختارهای پیچیده‌تر جمله و قواعد پیشرفته‌تر
            </li>
            <li>
              حل تمرین، بررسی اشتباهات رایج و رفع اشکال متناسب با سطح
              زبان‌آموز
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4">
            این دوره برای چه کسانی مناسب است؟
          </h2>

          <p className="text-base leading-9 mb-6">
            این کلاس برای زبان‌آموزانی مناسب است که می‌خواهند گرامر یک
            سطح مشخص را بهتر یاد بگیرند، مطالب قبلی را مرور کنند یا
            نقاط ضعف خود را برطرف کنند. لازم نیست همه مباحث A1 تا B2 را
            از ابتدا بخوانید؛ محتوای کلاس بر اساس سطح فعلی و نیاز آموزشی
            شما تعیین می‌شود.
          </p>

          <h2 className="text-xl font-bold mb-4">
            کلاس خصوصی گرامر آلمانی
          </h2>

          <p className="text-base leading-9 mb-6">
            در کلاس گرامر، موضوعات موردنیاز شما با مثال و تمرین بررسی
            می‌شوند و زمان آموزش بر مباحثی متمرکز می‌شود که به تقویت
            آن‌ها نیاز دارید. امکان برگزاری کلاس به‌صورت حضوری در اصفهان
            و آنلاین وجود دارد. برای هماهنگی زمان کلاس و انتخاب مباحث،
            از طریق واتساپ پیام دهید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            هزینه و ثبت‌نام دوره گرامر زبان آلمانی
          </h2>

          <p className="text-base leading-9">
            هزینه هر جلسه کلاس گرامر A1 تا B2 برابر با ۱٬۰۰۰٬۰۰۰ تومان
            است. تعداد جلسات موردنیاز با توجه به سطح، مباحث انتخابی و
            هدف زبان‌آموز مشخص می‌شود. برای مشاوره و ثبت‌نام از دکمه
            واتساپ همین صفحه استفاده کنید.
          </p>
        </section>

        {/* Course Information */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-[#F4F8FF]">
            <h2 className="text-xl font-bold text-[#0A2540] text-right">
              اطلاعات دوره
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]" dir="rtl">
                با هماهنگی مدرس
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <BookOpen size={18} />
                <span className="font-semibold">تعداد جلسات</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]" dir="rtl">
                با توجه به نیاز زبان‌آموز
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Clock3 size={18} />
                <span className="font-semibold">مدت زمان دوره</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">
                گرامر زبان آلمانی
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <GraduationCap size={18} />
                <span className="font-semibold">نوع دوره</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">
                منابع متناسب با سطح
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Book size={18} />
                <span className="font-semibold">منابع آموزشی</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">A1 تا B2</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <CircleHelp size={18} />
                <span className="font-semibold">سطوح آموزشی</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-green-600">دارد</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Headphones size={18} />
                <span className="font-semibold">پشتیبانی</span>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="mt-8 rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white">
            <div className="px-6 py-4">
              <div className="flex flex-wrap justify-between items-center gap-5">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-green-700">
                    ۱٬۰۰۰٬۰۰۰
                  </p>
                  <span className="text-gray-500 text-lg">تومان</span>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[#0A2540]">
                    هر جلسه
                  </p>
                  <span className="text-gray-500">
                    با هماهنگی قبلی
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام، می‌خواهم برای کلاس گرامر زبان آلمانی A1 تا B2 ثبت‌نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mx-auto flex w-full sm:w-fit justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-16 py-3 rounded-xl font-bold transition"
              >
                ثبت‌نام
              </a>

              <p className="mt-2 text-xs text-gray-700 text-center">
                ثبت‌نام از طریق واتساپ انجام می‌شود. لطفاً در صورت نیاز
                فیلترشکن خود را روشن کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
