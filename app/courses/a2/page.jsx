import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "کلاس زبان آلمانی A2 در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی A2 در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، با منابع Menschen A2.1 و A2.2 و همراه با پشتیبانی آموزشی.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a2",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی A2",
  description:
    "آموزش زبان آلمانی A2 در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، همراه با پشتیبانی آموزشی.",
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

        {/* Course Introduction */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس زبان آلمانی A2
          </h1>

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
          className="max-w-4xl mx-auto mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
        >
          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <Clock3
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              مدت دوره
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              متناسب با روند یادگیری
            </p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <GraduationCap
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پیش‌نیاز
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              تسلط به سطح A1
            </p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <Headphones
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پشتیبانی آموزشی
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              پاسخ به سؤالات و بررسی تمرین‌ها
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
              Menschen A2.1 و A2.2
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در دوره زبان آلمانی A2 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              صحبت درباره موضوعات روزمره، تجربیات و اتفاقات گذشته
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              گسترش واژگان مربوط به زندگی روزمره، سفر، کار و اوقات فراغت
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              یادگیری گرامر سطح A2 و ساخت جمله‌های پیچیده‌تر
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              بیان خواسته‌ها، علایق، برنامه‌ها و نظرات شخصی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت مهارت شنیدن، خواندن، نوشتن و مکالمه
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی A2
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
            امکان انتخاب کلاس خصوصی یا گروهی متناسب با شرایط شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس خصوصی A2
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  هزینه بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۹٬۴۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۹۴۰٬۰۰۰ تومان
                  <br />
                  ۹۰ دقیقه
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم درباره ثبت‌نام کلاس خصوصی زبان آلمانی A2 و بسته ۱۰ جلسه‌ای اطلاعات بیشتری دریافت کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس گروهی A2
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  هزینه بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۴٬۵۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-1">
                  هر جلسه ۴۵۰٬۰۰۰ تومان
                </p>

                <p className="text-xs text-gray-600 mb-2">
                  ۹۰ دقیقه
                </p>

                <p className="text-xs font-semibold text-blue-900 mb-3">
                  ظرفیت کلاس: حداکثر ۶ نفر
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، می‌خواهم درباره ثبت‌نام کلاس گروهی زبان آلمانی A2 و ظرفیت کلاس اطلاعات بیشتری دریافت کنم."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  مشاوره و ثبت‌نام
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-4">
            شهریه کلاس‌های خصوصی و گروهی به‌صورت بسته‌های ۱۰ جلسه‌ای
            دریافت می‌شود. تعداد کل جلسات دوره ثابت نیست و متناسب با
            روند یادگیری و پیشرفت زبان‌آموز تعیین می‌شود.
          </p>

          {/* Free Consultation Card */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <p className="text-sm md:text-base font-semibold text-[#0A2540] mb-2">
              برای انتخاب کلاس مناسب نیاز به راهنمایی دارید؟
            </p>

            <p className="text-sm text-gray-600 mb-3">
              پیش از ثبت‌نام می‌توانید از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "سلام، برای دریافت مشاوره اولیه رایگان ۱۵ دقیقه‌ای درباره کلاس زبان آلمانی A2 پیام می‌دهم."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#0A2540] px-5 py-2.5 text-sm font-bold text-[#0A2540] hover:bg-white transition-colors"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-14 md:mt-16 border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              سؤالات متداول درباره کلاس زبان آلمانی A2
            </h2>

            <div className="space-y-0 text-gray-700 leading-8">
              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  برای شرکت در کلاس A2 چه پیش‌نیازی لازم است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  برای شرکت در دوره A2 لازم است سطح A1 زبان آلمانی را گذرانده
                  باشید و با مباحث پایه این زبان آشنایی داشته باشید.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  در دوره A2 از چه منابعی استفاده می‌شود؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  منابع آموزشی این دوره شامل کتاب‌های Menschen A2.1 و
                  Menschen A2.2 است.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  شهریه کلاس زبان آلمانی A2 چگونه پرداخت می‌شود؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  پرداخت شهریه در هر دو نوع کلاس خصوصی و گروهی به‌صورت
                  بسته‌های ۱۰ جلسه‌ای انجام می‌شود. هزینه بسته خصوصی
                  ۹٬۴۰۰٬۰۰۰ تومان و هزینه بسته گروهی ۴٬۵۰۰٬۰۰۰ تومان است.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  آیا امکان شرکت در کلاس آنلاین وجود دارد؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  بله. دوره زبان آلمانی A2 به‌صورت حضوری در اصفهان
                  و همچنین آنلاین برگزار می‌شود.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  آیا خارج از زمان کلاس هم پشتیبانی دارم؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  بله. در طول دوره می‌توانید سؤالات خود را مطرح کنید،
                  تمرین‌هایتان را برای بررسی ارسال کنید و برای رفع اشکال
                  از پشتیبانی آموزشی بهره‌مند شوید.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  مدت زمان اتمام دوره A2 چقدر است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  مدت دوره و تعداد جلسات ثابت نیست و با توجه به روند یادگیری،
                  میزان تمرین و پیشرفت زبان‌آموز تعیین می‌شود.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  چطور می‌توانم برای کلاس A2 ثبت‌نام کنم؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  می‌توانید از طریق واتساپ با آکادمی دویچینو ارتباط بگیرید،
                  درباره کلاس خصوصی یا گروهی مشاوره دریافت کنید و
                  شرایط ثبت‌نام را بررسی کنید.
                </p>
              </div>
            </div>
          </div>
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
            اگر سطح مقدماتی A1 زبان آلمانی را گذرانده‌اید، دوره A2 آکادمی
            دویچینو به شما کمک می‌کند دانش زبانی خود را گسترش دهید. در این
            سطح با واژگان و ساختارهای گرامری بیشتری آشنا می‌شوید و می‌توانید
            درباره موضوعات روزمره، تجربیات، برنامه‌ها و اتفاقات گذشته صحبت کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس زبان آلمانی A2 به‌صورت خصوصی و گروهی
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در دویچینو می‌توانید با توجه به شرایط و برنامه خود، کلاس خصوصی یا
            گروهی انتخاب کنید. کلاس خصوصی امکان تمرکز بیشتر بر نیازهای فردی را
            فراهم می‌کند و در کلاس گروهی فرصت تمرین و تعامل با زبان‌آموزان دیگر
            را دارید. ظرفیت کلاس‌های گروهی حداکثر ۶ نفر است.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            کلاس حضوری آلمانی در اصفهان یا آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            کلاس‌های A2 آکادمی دویچینو به‌صورت حضوری در اصفهان و همچنین آنلاین
            برگزار می‌شوند. بنابراین، می‌توانید متناسب با شرایط خود در کلاس
            شرکت کنید و مهارت‌های زبان آلمانی خود را در سطح A2 تقویت کنید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            در دوره آلمانی A2 چه چیزهایی یاد می‌گیرید؟
          </h2>

          <ul className="list-disc pr-6 space-y-2 text-base md:text-lg leading-8">
            <li>صحبت درباره موضوعات روزمره، تجربیات و اتفاقات گذشته</li>
            <li>گسترش واژگان مربوط به زندگی روزمره، سفر، کار و اوقات فراغت</li>
            <li>گرامر سطح A2 و ساخت جمله‌های پیچیده‌تر</li>
            <li>بیان خواسته‌ها، علایق، برنامه‌ها و نظرات شخصی</li>
            <li>تقویت مهارت شنیدن، خواندن، نوشتن و مکالمه</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            برای شرکت در دوره A2 به چه پیش‌نیازی نیاز دارم؟
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            برای شروع دوره A2 لازم است با مباحث پایه زبان آلمانی در سطح A1
            آشنا باشید. در این دوره آموخته‌های سطح قبلی را گسترش می‌دهید و
            برای استفاده مستقل‌تر از زبان آلمانی آماده می‌شوید.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            منابع آموزشی دوره A2
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در دوره زبان آلمانی A2 از کتاب‌های Menschen A2.1 و Menschen A2.2
            استفاده می‌شود. محتوای آموزشی این منابع در کنار تمرین‌های کلاسی
            به تقویت مهارت‌های زبانی شما کمک می‌کند.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            پشتیبانی آموزشی در دوره A2
          </h2>

          <p className="text-base md:text-lg leading-9 mb-5">
            در طول دوره، زبان‌آموزان می‌توانند سؤالات خود را خارج از زمان کلاس
            مطرح کنند، تمرین‌هایشان را برای بررسی ارسال کنند و برای رفع اشکال
            از پشتیبانی آموزشی بهره‌مند شوند.
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
            ثبت‌نام کلاس زبان آلمانی A2
          </h2>

          <p className="text-base md:text-lg leading-9">
            برای انتخاب کلاس خصوصی یا گروهی و دریافت اطلاعات بیشتر درباره شروع
            دوره، می‌توانید از طریق دکمه‌های ثبت‌نام همین صفحه با آکادمی
            دویچینو در ارتباط باشید. همچنین پیش از ثبت‌نام امکان دریافت
            مشاوره اولیه رایگان ۱۵ دقیقه‌ای وجود دارد.
          </p>
        </section>
      </div>
    </main>
  );
}