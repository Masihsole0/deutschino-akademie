
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

const whatsappNumber = "989130061984";

export default function A1Page() {
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
    src="/books.jpg"
    alt="کتاب‌های آموزش زبان آلمانی سطح A1"
    width={900}
    height={350}
    className="rounded-2xl shadow-xl object-cover w-full max-w-[260px] md:max-w-[500px] h-auto"
    priority
  />
</div>

{/* Course Introduction */}
<section dir="rtl" className="max-w-4xl mx-auto mt-4 md:mt-8 text-center">
  <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
    کلاس زبان آلمانی A1 از صفر
  </h1>

  <p className="text-sm md:text-lg text-gray-600 leading-7 md:leading-8">
    آموزش زبان آلمانی به‌صورت خصوصی و گروهی، حضوری در اصفهان و آنلاین؛
    مناسب افرادی که می‌خواهند یادگیری زبان آلمانی را از ابتدا شروع کنند.
  </p>
</section>

        {/* Course Features */}
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
            <p className="font-bold mb-1">پیش‌نیاز</p>
            <p className="text-sm text-gray-600">ندارد؛ شروع از صفر</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <Headphones size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">پشتیبانی</p>
            <p className="text-sm text-gray-600">خارج از ساعات کلاس</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-4 text-center">
            <BookOpen size={25} className="mx-auto mb-2 text-[#0A2540]" />
            <p className="font-bold mb-1">منابع آموزشی</p>
            <p className="text-sm text-gray-600">۳ کتاب و جزوه</p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در دوره زبان آلمانی A1 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              معرفی خود و دیگران و صحبت درباره اطلاعات شخصی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              واژگان مربوط به خانواده، کار، خرید و زندگی روزمره
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              یادگیری گرامر پایه و ساخت جمله‌های ساده آلمانی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              پرسیدن و پاسخ دادن به سؤال‌های متداول
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین مکالمه و درک جمله‌های ساده آلمانی
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی A1
          </h2>

          <p className="text-gray-600 text-center mb-7">
            امکان انتخاب کلاس خصوصی یا گروهی متناسب با شرایط شما
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Private */}
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-5 py-4">
                <h3 className="text-xl font-bold">کلاس خصوصی A1</h3>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-3xl font-bold text-green-700">
                      ۸۹۰٬۰۰۰
                    </p>
                    <span className="text-sm text-gray-500">
                      تومان برای هر جلسه
                    </span>
                  </div>
                  <Wallet size={30} />
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم برای کلاس خصوصی زبان آلمانی A1 ثبت‌نام کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-5 py-4">
                <h3 className="text-xl font-bold">کلاس گروهی A1</h3>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-3xl font-bold text-green-700">
                      ۳۹۰٬۰۰۰
                    </p>
                    <span className="text-sm text-gray-500">
                      تومان برای هر جلسه
                    </span>
                  </div>
                  <Wallet size={30} />
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم برای کلاس گروهی زبان آلمانی A1 ثبت‌نام کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center leading-8 mt-5">
            تعداد جلسات ثابت نیست و متناسب با روند یادگیری و پیشرفت زبان‌آموز
            تعیین می‌شود. مدت هر جلسه ۹۰ دقیقه است.
          </p>
        </section>

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
      </div>
    </main>
  );
}
