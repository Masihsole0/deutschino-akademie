import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "آموزش زبان آلمانی از صفر در اصفهان | دویچینو",
  description:
    "آموزش زبان آلمانی A1 از صفر در آکادمی دویچینو؛ کلاس خصوصی و گروهی با ظرفیت حداکثر ۶ نفر، حضوری در اصفهان و آنلاین، همراه با پشتیبانی آموزشی.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/a1",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره آموزش زبان آلمانی A1",
  description:
    "آموزش زبان آلمانی A1 از صفر در آکادمی دویچینو؛ کلاس خصوصی و گروهی، حضوری در اصفهان و آنلاین، همراه با پشتیبانی آموزشی.",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "A1",
};

const whatsappNumber = "989130061984";

export default function A1Page() {
  const generalMessage =
    "سلام، برای ثبت‌نام دوره زبان آلمانی A1 و دریافت مشاوره راهنمایی می‌خواهم.";

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
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            کلاس زبان آلمانی A1 از صفر
          </h1>

        </section>

        {/* Banner */}
        <div className="flex justify-center mt-6">
          <Image
            src="/books.jpg"
            alt="کتاب‌های آموزش زبان آلمانی سطح A1"
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
              پیش‌نیاز
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              ندارد؛ شروع از صفر
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
              رفع اشکال و بررسی تمرین‌ها
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
              ۳ کتاب و جزوه اختصاصی
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            در پایان سطح A1 چه مهارت‌هایی خواهید داشت؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              معرفی خود و صحبت درباره اطلاعات شخصی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              مکالمه درباره خانواده، کار و زندگی روزمره
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              ساخت جمله و استفاده از گرامر پایه
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              پرسیدن و پاسخ دادن به سؤال‌های متداول
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              درک مکالمات ساده و تقویت مهارت شنیداری
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس زبان آلمانی A1
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-5">
            کلاس خصوصی یا گروهی؛ متناسب با شرایط و هدف شما
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Private */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس خصوصی A1
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۸٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۸۹۰٬۰۰۰ تومان
                  <br />
                  ۹۰ دقیقه
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، برای ثبت‌نام کلاس خصوصی زبان آلمانی A1 پیام می‌دهم. لطفاً راهنمایی‌ام کنید."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  ثبت‌نام کلاس خصوصی
                </a>
              </div>
            </div>

            {/* Group */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  کلاس گروهی A1
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  بسته ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۳٬۹۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان
                </p>

                <p className="text-xs text-gray-600 mb-1">
                  هر جلسه ۳۹۰٬۰۰۰ تومان
                </p>

                <p className="text-xs text-gray-600 mb-2">۹۰ دقیقه</p>

                <p className="text-xs font-semibold text-blue-900 mb-3">
                  حداکثر ۶ نفر
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "سلام، برای ثبت‌نام کلاس گروهی زبان آلمانی A1 پیام می‌دهم. لطفاً درباره زمان شروع و ظرفیت کلاس راهنمایی‌ام کنید."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  ثبت‌نام کلاس گروهی
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-4">
            شهریه هر دو نوع کلاس به‌صورت بسته‌های ۱۰ جلسه‌ای پرداخت می‌شود.
          </p>

          {/* Free Consultation Card */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <p className="text-sm md:text-base font-semibold text-[#0A2540] mb-2">
              هنوز برای انتخاب کلاس مطمئن نیستید؟
            </p>

            <p className="text-sm text-gray-600 mb-3">
              قبل از ثبت‌نام، از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "سلام، برای دریافت مشاوره اولیه رایگان درباره کلاس زبان آلمانی A1 پیام می‌دهم."
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
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              سؤالات متداول
            </h2>

            <div className="space-y-0 text-gray-700 leading-8">
              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  آیا برای شرکت در کلاس A1 باید زبان آلمانی بلد باشم؟
                </h3>
                <p className="text-sm mt-1">
                  خیر. آموزش از پایه شروع می‌شود و به هیچ پیش‌نیازی نیاز ندارید.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  کلاس‌ها حضوری هستند یا آنلاین؟
                </h3>
                <p className="text-sm mt-1">
                  امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  ظرفیت کلاس گروهی چند نفر است؟
                </h3>
                <p className="text-sm mt-1">
                  برای حفظ کیفیت آموزش، ظرفیت هر کلاس گروهی حداکثر ۶ نفر است.
                </p>
              </div>

              <div className="py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  آیا خارج از کلاس هم پشتیبانی دارم؟
                </h3>
                <p className="text-sm mt-1">
                  بله. می‌توانید سؤالات و تمرین‌های خود را برای بررسی و رفع اشکال ارسال کنید.
                </p>
              </div>

              <div className="pt-3">
                <h3 className="font-bold text-sm md:text-base text-[#0A2540]">
                  چطور می‌توانم ثبت‌نام کنم؟
                </h3>
                <p className="text-sm mt-1">
                  از طریق دکمه‌های ثبت‌نام همین صفحه در واتساپ پیام بدهید تا برای انتخاب کلاس و شروع دوره راهنمایی شوید.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-12 max-w-4xl mx-auto text-right"
          aria-labelledby="a1-course-guide"
        >
          <h2
            id="a1-course-guide"
            className="text-xl md:text-2xl font-bold mb-4"
          >
            آموزش زبان آلمانی A1 در اصفهان و آنلاین
          </h2>

          <p className="text-sm md:text-base leading-8 text-gray-700">
            دوره زبان آلمانی A1 آکادمی دویچینو برای افرادی طراحی شده است که
            قصد دارند یادگیری زبان آلمانی را از صفر آغاز کنند. در این دوره،
            واژگان و گرامر پایه، مکالمات روزمره، معرفی خود و دیگران و مهارت
            درک جملات ساده را تمرین می‌کنید. امکان شرکت در کلاس خصوصی یا گروهی،
            به‌صورت حضوری در اصفهان و آنلاین فراهم است. برای اطلاع از شرایط
            ثبت‌نام و انتخاب کلاس مناسب می‌توانید از طریق واتساپ با آکادمی
            دویچینو در ارتباط باشید.
          </p>
        </section>

        {/* Final Registration CTA */}
        <section dir="rtl" className="max-w-3xl mx-auto mt-10 mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            آماده شروع یادگیری زبان آلمانی هستید؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 mb-5">
            برای اطلاع از شرایط کلاس‌ها و شروع ثبت‌نام A1 با ما در ارتباط باشید.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              generalMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-colors"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}