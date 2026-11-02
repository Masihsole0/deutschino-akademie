
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Headphones,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "کلاس مکالمه زبان آلمانی در اصفهان | دویچینو",
  description:
    "کلاس مکالمه زبان آلمانی در اصفهان و آنلاین؛ تمرین صحبت‌کردن، افزایش روانی گفتار و تقویت مکالمه در موقعیت‌های روزمره و کاری در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/conversation",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره مکالمه زبان آلمانی",
  description:
    "تمرین مکالمه زبان آلمانی در آکادمی دویچینو با تمرکز بر روانی گفتار و استفاده از زبان آلمانی در موقعیت‌های روزمره و کاری؛ به‌صورت حضوری در اصفهان و آنلاین.",
  provider: {
    "@id": "https://www.deutschino.ir/#organization",
  },
  inLanguage: "de",
  educationalLevel: "B1",
};

const whatsappNumber = "989130061984";

export default function ConversationPage() {
  const generalMessage =
    "سلام، می‌خواهم برای ثبت‌نام دوره ۱۰ جلسه‌ای مکالمه زبان آلمانی اطلاعات بیشتری دریافت کنم.";

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
            کلاس مکالمه زبان آلمانی
          </h1>
        </section>

        {/* Banner */}
        <div className="flex justify-center">
          <Image
            src="/conv.jpg"
            alt="کلاس مکالمه زبان آلمانی در آکادمی دویچینو"
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
            <p className="text-xs md:text-sm text-gray-600">
              ۶۰ دقیقه
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
              سطح B1
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
              Hören Sprechen B1
            </p>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section dir="rtl" className="max-w-4xl mx-auto mt-10 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            در کلاس مکالمه آلمانی چه مهارت‌هایی تقویت می‌شوند؟
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base leading-8">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین گفت‌وگو درباره موضوعات روزمره و آشنا
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              بیان نظرها، تجربه‌ها و برنامه‌های شخصی به زبان آلمانی
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              گسترش واژگان و استفاده از عبارت‌های پرکاربرد
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تقویت روانی گفتار و ساختن جمله هنگام صحبت‌کردن
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              تمرین مکالمه در موقعیت‌های اجتماعی و کاری
            </li>
          </ul>
        </section>

        {/* Pricing */}
        <section
          dir="rtl"
          className="max-w-3xl mx-auto mt-10 md:mt-14"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس مکالمه زبان آلمانی
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
            دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Course Price */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-xl font-bold">
                  دوره مکالمه
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  هزینه پکیج ۱۰ جلسه‌ای
                </p>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet size={21} className="shrink-0 md:w-7 md:h-7" />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۱۰٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان برای ۱۰ جلسه
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۶۰ دقیقه
                  <br />
                  هر جلسه ۱٬۰۰۰٬۰۰۰ تومان
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    generalMessage
                  )}`}
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
                <h3 className="text-sm md:text-xl font-bold">
                  مشخصات دوره
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <BookOpen
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    ۱۰ جلسه
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <Clock3
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    ۶۰ دقیقه
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1 md:gap-2 mb-3">
                  <GraduationCap
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <span className="text-xs md:text-sm text-gray-600">
                    سطح B1
                  </span>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    generalMessage
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
            هزینه پکیج ۱۰ جلسه‌ای مکالمه زبان آلمانی ۱۰٬۰۰۰٬۰۰۰ تومان
            است. هر جلسه ۶۰ دقیقه برگزار می‌شود و هزینه هر جلسه
            ۱٬۰۰۰٬۰۰۰ تومان محاسبه می‌شود.
          </p>

          {/* Free Consultation Card */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <p className="text-sm md:text-base font-semibold text-[#0A2540] mb-2">
              برای شروع کلاس مکالمه نیاز به راهنمایی دارید؟
            </p>

            <p className="text-sm text-gray-600 mb-3">
              پیش از ثبت‌نام می‌توانید برای بررسی سطح زبان و آشنایی با دوره،
              از مشاوره اولیه رایگان ۱۵ دقیقه‌ای استفاده کنید.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "سلام، برای دریافت مشاوره اولیه رایگان ۱۵ دقیقه‌ای درباره کلاس مکالمه زبان آلمانی پیام می‌دهم."
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
              سؤالات متداول درباره کلاس مکالمه زبان آلمانی
            </h2>

            <div className="space-y-0 text-gray-700 leading-8">
              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  پیش‌نیاز شرکت در کلاس مکالمه چیست؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  پیش‌نیاز اعلام‌شده برای این دوره، سطح B1 زبان آلمانی است.
                  اگر درباره سطح خود مطمئن نیستید، پیش از ثبت‌نام مشورت بگیرید.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  دوره مکالمه چند جلسه است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  این دوره شامل ۱۰ جلسه است و مدت هر جلسه ۶۰ دقیقه خواهد بود.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  در کلاس مکالمه چه موضوعاتی تمرین می‌شوند؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  گفت‌وگو درباره موضوعات روزمره، بیان نظرها و تجربه‌های شخصی،
                  گسترش واژگان و تمرین مکالمه در موقعیت‌های اجتماعی و کاری
                  از محورهای این دوره هستند.
                </p>
              </div>

              <div className="py-4 border-b border-gray-200">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  کلاس مکالمه حضوری است یا آنلاین؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-base md:text-lg text-[#0A2540]">
                  هزینه کلاس مکالمه زبان آلمانی چقدر است؟
                </h3>
                <p className="text-sm md:text-base mt-1">
                  هزینه پکیج ۱۰ جلسه‌ای ۱۰٬۰۰۰٬۰۰۰ تومان است. هزینه هر جلسه
                  ۱٬۰۰۰٬۰۰۰ تومان و مدت هر جلسه ۶۰ دقیقه است.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            کلاس مکالمه زبان آلمانی در اصفهان و آنلاین
          </h2>

          <p className="text-base md:text-lg leading-9">
            اگر گرامر و واژگان زبان آلمانی را می‌دانید اما هنگام صحبت‌کردن
            مکث می‌کنید یا برای پیدا کردن کلمات مناسب مشکل دارید، تمرین
            هدفمند مکالمه می‌تواند به شما کمک کند. در دوره مکالمه آکادمی
            دویچینو، با تمرین گفت‌وگو درباره موضوعات روزمره و کاری، بیان
            نظرها و تجربه‌های شخصی و استفاده از عبارت‌های پرکاربرد، روانی
            گفتار خود را تقویت می‌کنید. این کلاس برای زبان‌آموزان دارای
            سطح B1 طراحی شده و به‌صورت حضوری در اصفهان و آنلاین برگزار
            می‌شود.
          </p>
        </section>

        {/* Final CTA */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-10 md:mt-12 mb-8 text-center"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            آماده تقویت مکالمه زبان آلمانی خود هستید؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            برای دریافت اطلاعات بیشتر و ثبت‌نام در دوره مکالمه زبان آلمانی
            با آکادمی دویچینو در ارتباط باشید.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              generalMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            شروع ثبت‌نام در واتساپ
          </a>
        </section>
      </div>
    </main>
  );
}
