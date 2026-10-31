import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
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
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "A1–B2",
};

const whatsappNumber = "989130061984";

export default function GrammarPage() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "سلام، می‌خواهم برای کلاس گرامر زبان آلمانی A1 تا B2 ثبت‌نام کنم."
  )}`;

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

        {/* Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-6 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس گرامر زبان آلمانی از A1 تا B2
          </h1>

          <p className="text-sm md:text-lg text-gray-600 leading-7 md:leading-8">
            آموزش قواعد زبان آلمانی، حل تمرین و رفع اشکال متناسب با سطح
            شما؛ به‌صورت حضوری در اصفهان و آنلاین. در این کلاس مباحث
            گرامری از سطح A1 تا B2 با مثال‌های کاربردی و تمرین‌های هدفمند
            بررسی می‌شوند.
          </p>
        </section>

        {/* Banner */}
        <div className="flex justify-center mt-4 md:mt-6">
          <Image
            src="/books5.jpg"
            alt="دوره گرامر زبان آلمانی A1 تا B2 در آکادمی دویچینو"
            width={900}
            height={350}
            className="rounded-2xl shadow-xl object-cover w-full max-w-[260px] md:max-w-[500px] h-auto"
            priority
          />
        </div>

        {/* Features */}
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
              مدت هر جلسه
            </p>
            <p className="text-xs md:text-sm text-gray-600">۹۰ دقیقه</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <GraduationCap
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              سطوح آموزشی
            </p>
            <p className="text-xs md:text-sm text-gray-600">A1 تا B2</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <Headphones
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پشتیبانی
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              خارج از ساعات کلاس
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
              Grammatik Aktiv
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
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
        <section dir="rtl" className="max-w-3xl mx-auto mt-10 md:mt-14">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس گرامر زبان آلمانی
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
            تعداد جلسات و مباحث آموزشی با توجه به نیاز شما تعیین می‌شود.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private Class */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-lg font-bold">
                  کلاس گرامر
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۱٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان برای هر جلسه
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  مدت هر جلسه: ۹۰ دقیقه
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  مباحث متناسب با سطح شما
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>

            {/* Course Details */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-lg font-bold">
                  مشخصات دوره
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <Clock3
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    ۹۰ دقیقه
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <GraduationCap
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    A1 تا B2
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <BookOpen
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    با هماهنگی مدرس
                  </span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 md:leading-8 mt-5">
            کلاس‌ها به‌صورت حضوری در اصفهان و آنلاین برگزار می‌شوند.
            تعداد جلسات موردنیاز و مباحث آموزشی با توجه به سطح و نیاز
            زبان‌آموز مشخص خواهد شد.
          </p>

          {/* Free Consultation */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <h3 className="text-base md:text-lg font-bold mb-2">
              برای انتخاب مباحث گرامری مناسب خودتان مشورت کنید
            </h3>

            <p className="text-xs md:text-sm text-gray-600 leading-7 mb-4">
              اگر نمی‌دانید از کدام مباحث گرامری شروع کنید یا در بخش
              مشخصی از دستور زبان آلمانی مشکل دارید، برای بررسی سطح و
              انتخاب مسیر آموزشی مناسب پیام دهید.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-6 rounded-lg font-bold transition-colors"
            >
              دریافت مشاوره در واتساپ
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-14 md:mt-16 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-5">
              سوالات متداول درباره کلاس گرامر زبان آلمانی
            </h2>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                آیا می‌توانم فقط یک سطح مشخص از گرامر را یاد بگیرم؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                بله. لازم نیست تمام مباحث A1 تا B2 را از ابتدا بخوانید.
                محتوای کلاس با توجه به سطح فعلی، نقاط ضعف و نیاز آموزشی
                شما انتخاب می‌شود.
              </p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                در کلاس گرامر چه کتابی تدریس می‌شود؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                از منابع آموزشی متناسب با سطح زبان‌آموز، از جمله
                Grammatik Aktiv، برای آموزش قواعد و حل تمرین استفاده می‌شود.
              </p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                هزینه کلاس گرامر زبان آلمانی چقدر است؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                هزینه هر جلسه کلاس گرامر ۱٬۰۰۰٬۰۰۰ تومان است و مدت هر
                جلسه ۹۰ دقیقه خواهد بود.
              </p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                کلاس‌ها حضوری برگزار می‌شوند یا آنلاین؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                امکان شرکت در کلاس به‌صورت حضوری در اصفهان و همچنین
                آنلاین وجود دارد.
              </p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                آیا خارج از ساعات کلاس هم می‌توانم سوال بپرسم؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                بله. برای پرسیدن سوال‌ها و رفع اشکال‌های مرتبط با مباحث
                آموزشی، امکان پشتیبانی خارج از ساعات کلاس وجود دارد.
              </p>
            </div>

            <div className="border-b border-gray-200 py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                تعداد جلسات کلاس گرامر چطور مشخص می‌شود؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                تعداد جلسات به سطح فعلی شما، مباحثی که نیاز به یادگیری
                یا مرور دارند و سرعت پیشرفتتان بستگی دارد و با هماهنگی
                مدرس تعیین می‌شود.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                چطور می‌توانم برای کلاس گرامر ثبت‌نام کنم؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                برای دریافت اطلاعات بیشتر، بررسی نیاز آموزشی و هماهنگی
                زمان کلاس، از طریق واتساپ با آکادمی دویچینو در ارتباط باشید.
              </p>
            </div>

            <div className="mt-4 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-6 rounded-lg font-bold transition-colors"
              >
                سوال دارید؟ در واتساپ بپرسید
              </a>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
          aria-labelledby="grammar-course-guide"
        >
          <h2
            id="grammar-course-guide"
            className="text-xl md:text-2xl font-bold mb-5"
          >
            کلاس گرامر زبان آلمانی از A1 تا B2 در اصفهان و آنلاین
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            اگر در یادگیری قواعد زبان آلمانی مشکل دارید، هنگام جمله‌سازی
            اشتباه می‌کنید یا می‌خواهید گرامر را اصولی‌تر یاد بگیرید،
            کلاس گرامر آکادمی دویچینو می‌تواند به شما کمک کند. در این
            کلاس، قواعد متناسب با سطح شما از A1 تا B2 آموزش داده می‌شوند.
            با حل تمرین و بررسی مثال‌های کاربردی، فرصت پیدا می‌کنید
            آموخته‌های خود را بهتر تثبیت کنید. کلاس‌ها به‌صورت حضوری در
            اصفهان و آنلاین برگزار می‌شوند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            در کلاس گرامر آلمانی چه مباحثی آموزش داده می‌شود؟
          </h2>

          <ul className="list-disc pr-6 space-y-2 text-sm md:text-base text-gray-600 leading-8">
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
              حل تمرین، بررسی اشتباهات رایج و رفع اشکال متناسب با سطح زبان‌آموز
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            این دوره برای چه کسانی مناسب است؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            این کلاس برای زبان‌آموزانی مناسب است که می‌خواهند گرامر یک
            سطح مشخص را بهتر یاد بگیرند، مطالب قبلی را مرور کنند یا
            نقاط ضعف خود را برطرف کنند. لازم نیست همه مباحث A1 تا B2 را
            از ابتدا بخوانید؛ محتوای کلاس بر اساس سطح فعلی و نیاز آموزشی
            شما تعیین می‌شود.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            کلاس خصوصی گرامر زبان آلمانی
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            در کلاس گرامر، موضوعات موردنیاز شما با مثال و تمرین بررسی
            می‌شوند و زمان آموزش بر مباحثی متمرکز می‌شود که به تقویت
            آن‌ها نیاز دارید. امکان برگزاری کلاس به‌صورت حضوری در اصفهان
            و آنلاین وجود دارد. مدت هر جلسه ۹۰ دقیقه است و زمان برگزاری
            با هماهنگی مدرس تعیین می‌شود.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            هزینه و ثبت‌نام کلاس گرامر زبان آلمانی
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8">
            هزینه هر جلسه کلاس گرامر A1 تا B2 برابر با ۱٬۰۰۰٬۰۰۰ تومان
            است. تعداد جلسات موردنیاز با توجه به سطح، مباحث انتخابی و
            هدف زبان‌آموز مشخص می‌شود. برای مشاوره، انتخاب مباحث آموزشی
            و ثبت‌نام در کلاس گرامر زبان آلمانی در اصفهان یا آنلاین،
            از طریق واتساپ با آکادمی دویچینو در ارتباط باشید.
          </p>
        </section>
      </div>
    </main>
  );
}