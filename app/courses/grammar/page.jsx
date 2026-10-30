
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

const whatsappNumber = "989130061984";

export default function GrammarPage() {
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
            src="/books5.jpg"
            alt="دوره گرامر زبان آلمانی A1 تا B2 در آکادمی دویچینو"
            width={900}
            height={350}
            className="rounded-2xl shadow-xl object-cover w-full max-w-[260px] md:max-w-[500px] h-auto"
            priority
          />
        </div>

        {/* Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس گرامر زبان آلمانی از A1 تا B2
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-7 md:leading-8">
            آموزش قواعد زبان آلمانی، حل تمرین و رفع اشکال متناسب با سطح
            شما؛ به‌صورت حضوری در اصفهان و آنلاین.
          </p>
        </section>

        {/* Features */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Clock3 size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">مدت هر جلسه</p>
            <p className="text-sm text-gray-600">۹۰ دقیقه</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <GraduationCap
              size={25}
              className="mx-auto mb-2 text-[#0A2540]"
            />
            <p className="font-bold mb-1">سطوح آموزشی</p>
            <p className="text-sm text-gray-600">A1 تا B2</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Headphones size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">پشتیبانی</p>
            <p className="text-sm text-gray-600">خارج از ساعات کلاس</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <BookOpen size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">منابع آموزشی</p>
            <p className="text-sm text-gray-600">Grammatik Aktiv</p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در کلاس گرامر آلمانی چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              گرامر پایه A1 و A2؛ صرف افعال، آرتیکل‌ها، ضمایر و ساختار جمله
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              حالت‌های دستوری Nominativ، Akkusativ و Dativ و حروف اضافه
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              گرامر B1؛ جمله‌های فرعی، افعال با حروف اضافه و ساختارهای مصدر با zu
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              گرامر B2؛ ساختارهای پیچیده‌تر جمله و قواعد پیشرفته‌تر
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              حل تمرین و بررسی اشتباهات رایج
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              رفع اشکال متناسب با سطح و نیاز زبان‌آموز
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-center mb-2">
            هزینه کلاس گرامر زبان آلمانی
          </h2>

          <p className="text-gray-600 text-center mb-7">
            تعداد جلسات و مباحث آموزشی با توجه به نیاز شما تعیین می‌شود.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-3 md:px-5 py-3 md:py-4">
                <h3 className="text-base md:text-xl font-bold">
                  کلاس گرامر
                </h3>
              </div>

              <div className="p-3 md:p-6">
                <div className="flex items-center justify-between gap-1 mb-4 md:mb-5">
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-green-700">
                      ۱٬۰۰۰٬۰۰۰
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
                    "سلام، می‌خواهم برای کلاس گرامر زبان آلمانی A1 تا B2 ثبت‌نام کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center text-xs md:text-base py-3 md:py-4 px-1 rounded-xl font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>

            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-3 md:px-5 py-3 md:py-4">
                <h3 className="text-base md:text-xl font-bold">
                  مشخصات دوره
                </h3>
              </div>

              <div className="p-3 md:p-6 space-y-3">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm md:text-base font-bold">
                    ۹۰ دقیقه
                  </span>
                  <Clock3 size={21} className="shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm md:text-base font-bold">
                    A1 تا B2
                  </span>
                  <GraduationCap size={21} className="shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm md:text-base font-bold">
                    با هماهنگی مدرس
                  </span>
                  <BookOpen size={21} className="shrink-0" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center leading-8 mt-5">
            کلاس‌ها به‌صورت حضوری در اصفهان و آنلاین برگزار می‌شوند.
            تعداد جلسات موردنیاز با توجه به سطح و مباحث انتخابی مشخص خواهد شد.
          </p>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
          aria-labelledby="grammar-course-guide"
        >
          <h2
            id="grammar-course-guide"
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            کلاس گرامر زبان آلمانی از A1 تا B2 در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            اگر در یادگیری قواعد زبان آلمانی مشکل دارید، هنگام جمله‌سازی
            اشتباه می‌کنید یا می‌خواهید گرامر را اصولی‌تر یاد بگیرید، این
            دوره برای شماست. در کلاس گرامر دویچینو، قواعد متناسب با سطح
            شما از A1 تا B2 آموزش داده می‌شوند و با حل تمرین و مثال‌های
            کاربردی، فرصت پیدا می‌کنید آموخته‌های خود را بهتر تثبیت کنید.
            کلاس‌ها با هماهنگی قبلی به‌صورت حضوری در اصفهان یا آنلاین
            برگزار می‌شوند.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            در کلاس گرامر آلمانی چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="list-disc pr-6 space-y-2 text-base md:text-lg leading-8">
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
            <li>گرامر B2؛ ساختارهای پیچیده‌تر جمله و قواعد پیشرفته‌تر</li>
            <li>حل تمرین، بررسی اشتباهات رایج و رفع اشکال متناسب با سطح زبان‌آموز</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            این دوره برای چه کسانی مناسب است؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            این کلاس برای زبان‌آموزانی مناسب است که می‌خواهند گرامر یک
            سطح مشخص را بهتر یاد بگیرند، مطالب قبلی را مرور کنند یا
            نقاط ضعف خود را برطرف کنند. لازم نیست همه مباحث A1 تا B2 را
            از ابتدا بخوانید؛ محتوای کلاس بر اساس سطح فعلی و نیاز آموزشی
            شما تعیین می‌شود.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس خصوصی گرامر آلمانی
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در کلاس گرامر، موضوعات موردنیاز شما با مثال و تمرین بررسی
            می‌شوند و زمان آموزش بر مباحثی متمرکز می‌شود که به تقویت
            آن‌ها نیاز دارید. امکان برگزاری کلاس به‌صورت حضوری در اصفهان
            و آنلاین وجود دارد. برای هماهنگی زمان کلاس و انتخاب مباحث،
            از طریق واتساپ پیام دهید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            هزینه و ثبت‌نام دوره گرامر زبان آلمانی
          </h2>

          <p className="text-base md:text-lg leading-9">
            هزینه هر جلسه کلاس گرامر A1 تا B2 برابر با ۱٬۰۰۰٬۰۰۰ تومان
            است. تعداد جلسات موردنیاز با توجه به سطح، مباحث انتخابی و
            هدف زبان‌آموز مشخص می‌شود. برای مشاوره و ثبت‌نام از دکمه
            واتساپ همین صفحه استفاده کنید.
          </p>
        </section>
      </div>
    </main>
  );
}
