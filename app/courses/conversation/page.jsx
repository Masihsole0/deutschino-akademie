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
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "سلام، می‌خواهم برای ثبت‌نام دوره ۱۰ جلسه‌ای مکالمه زبان آلمانی اطلاعات بیشتری دریافت کنم."
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
          className="max-w-4xl mx-auto mt-4 md:mt-8 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            کلاس مکالمه زبان آلمانی
          </h1>

        </section>

        {/* Banner */}
        <div className="flex justify-center mt-4 md:mt-6">
          <Image
            src="/conv.jpg"
            alt="کلاس مکالمه زبان آلمانی در آکادمی دویچینو"
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
            <p className="text-xs md:text-sm text-gray-600">۶۰ دقیقه</p>
          </div>

          <div className="bg-[#F4F8FF] rounded-xl p-3 md:p-4 text-center">
            <GraduationCap
              size={22}
              className="mx-auto mb-1 md:mb-2 text-[#0A2540]"
            />
            <p className="font-bold text-sm md:text-base mb-1">
              پیش‌نیاز
            </p>
            <p className="text-xs md:text-sm text-gray-600">سطح B1</p>
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
              hören sprechen B1
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
        <section dir="rtl" className="max-w-3xl mx-auto mt-10 md:mt-14">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2">
            هزینه کلاس مکالمه زبان آلمانی
          </h2>

          <p className="text-xs md:text-sm text-gray-600 text-center mb-4">
            دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-lg font-bold">
                  دوره مکالمه
                </h3>
              </div>

              <div className="p-3 md:p-5 text-center">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
                  <Wallet
                    size={21}
                    className="shrink-0 md:w-7 md:h-7"
                  />
                  <p className="text-lg md:text-2xl font-bold text-green-700">
                    ۱۰٬۰۰۰٬۰۰۰
                  </p>
                </div>

                <p className="text-[11px] md:text-sm text-gray-500 mb-3">
                  تومان برای پکیج ۱۰ جلسه‌ای
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  هر جلسه ۱٬۰۰۰٬۰۰۰ تومان
                  <br />
                  ۱۰ جلسه ۶۰ دقیقه‌ای
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-xs md:text-sm text-center py-2.5 md:py-3 px-1 rounded-lg font-bold transition-colors"
                >
                  ثبت‌نام از طریق واتساپ
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#F4F8FF] px-2 py-3 md:px-5 md:py-4 text-center">
                <h3 className="text-sm md:text-lg font-bold">
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

          <p className="text-xs md:text-sm text-gray-600 text-center leading-7 mt-4">
            مجموع دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای و هزینه کل آن ۱۰٬۰۰۰٬۰۰۰
            تومان است. هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان محاسبه می‌شود.
            امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.
          </p>

          {/* Free Consultation */}
          <div className="mt-5 rounded-xl bg-[#F4F8FF] p-5 md:p-6 text-center">
            <h3 className="text-base md:text-lg font-bold mb-2">
              برای شروع کلاس مکالمه مشاوره بگیرید
            </h3>

            <p className="text-xs md:text-sm text-gray-600 leading-7 mb-4">
              برای بررسی سطح زبان آلمانی و آشنایی با جزئیات دوره مکالمه،
              می‌توانید از طریق واتساپ با آکادمی دویچینو در ارتباط باشید.
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              سوالات متداول درباره کلاس مکالمه زبان آلمانی
            </h2>

            <div className="py-4 border-b border-gray-200">
              <h3 className="font-bold text-sm md:text-base mb-2">
                پیش‌نیاز شرکت در کلاس مکالمه چیست؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                پیش‌نیاز اعلام‌شده برای این دوره، سطح B1 زبان آلمانی است.
                اگر درباره سطح خود مطمئن نیستید، پیش از ثبت‌نام مشورت بگیرید.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <h3 className="font-bold text-sm md:text-base mb-2">
                دوره مکالمه چند جلسه است؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                این دوره شامل ۱۰ جلسه است و مدت هر جلسه ۶۰ دقیقه خواهد بود.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <h3 className="font-bold text-sm md:text-base mb-2">
                در کلاس مکالمه چه موضوعاتی تمرین می‌شوند؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                گفت‌وگو درباره موضوعات روزمره، بیان نظرها و تجربه‌های شخصی،
                گسترش واژگان و تمرین مکالمه در موقعیت‌های اجتماعی و کاری
                از محورهای این دوره هستند.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <h3 className="font-bold text-sm md:text-base mb-2">
                کلاس مکالمه حضوری است یا آنلاین؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                امکان شرکت در کلاس به‌صورت حضوری در اصفهان و آنلاین وجود دارد.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <h3 className="font-bold text-sm md:text-base mb-2">
                هزینه کلاس مکالمه زبان آلمانی چقدر است؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                هزینه پکیج ۱۰ جلسه‌ای ۱۰٬۰۰۰٬۰۰۰ تومان است. هزینه هر جلسه
                ۱٬۰۰۰٬۰۰۰ تومان و مدت هر جلسه ۶۰ دقیقه است.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-bold text-sm md:text-base mb-2">
                چطور می‌توانم در دوره مکالمه ثبت‌نام کنم؟
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-7">
                برای دریافت اطلاعات بیشتر و ثبت‌نام، از طریق واتساپ
                با آکادمی دویچینو در ارتباط باشید.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="mt-16 max-w-4xl mx-auto text-right"
          aria-labelledby="conversation-course-guide"
        >
          <h2
            id="conversation-course-guide"
            className="text-xl md:text-2xl font-bold mb-5"
          >
            کلاس مکالمه زبان آلمانی در اصفهان و آنلاین
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            اگر گرامر و واژگان زبان آلمانی را می‌دانید اما هنگام صحبت‌کردن
            مکث می‌کنید یا برای پیدا کردن کلمات مناسب مشکل دارید، تمرین
            هدفمند مکالمه می‌تواند به شما کمک کند. در دوره مکالمه دویچینو،
            فرصت دارید آموخته‌های خود را در گفت‌وگوهای کاربردی به کار ببرید.
            کلاس‌ها به‌صورت حضوری در اصفهان و آنلاین برگزار می‌شوند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            در کلاس مکالمه آلمانی چه تمرین‌هایی انجام می‌دهید؟
          </h2>

          <ul className="list-disc pr-6 space-y-2 text-sm md:text-base text-gray-600 leading-8">
            <li>تمرین گفت‌وگو درباره موضوعات روزمره و آشنا</li>
            <li>بیان نظرها، تجربه‌ها و برنامه‌های شخصی به زبان آلمانی</li>
            <li>گسترش واژگان و استفاده از عبارت‌های پرکاربرد</li>
            <li>تقویت روانی گفتار و ساختن جمله هنگام صحبت‌کردن</li>
            <li>تمرین مکالمه در موقعیت‌های اجتماعی و کاری</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            این دوره برای چه کسانی مناسب است؟
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            این دوره برای زبان‌آموزانی مناسب است که پایه زبان آلمانی
            دارند و می‌خواهند راحت‌تر و روان‌تر صحبت کنند. آشنایی با
            سطح B1 پیش‌نیاز اعلام‌شده این دوره است. اگر درباره سطح خود
            مطمئن نیستید، پیش از ثبت‌نام برای انتخاب دوره مناسب مشورت بگیرید.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            کلاس مکالمه زبان آلمانی حضوری و آنلاین
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8 mb-5">
            امکان شرکت آنلاین به شما اجازه می‌دهد بدون نیاز به حضور
            فیزیکی در کلاس، تمرین مکالمه را دنبال کنید. اگر در اصفهان
            هستید، امکان شرکت حضوری نیز وجود دارد. برای اطلاع از زمان
            برگزاری و جزئیات کلاس، از طریق واتساپ پیام دهید.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-8 mb-4">
            ثبت‌نام دوره مکالمه زبان آلمانی
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-8">
            دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است. هزینه پکیج ۱۰ جلسه‌ای
            ۱۰٬۰۰۰٬۰۰۰ تومان است و هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان محاسبه
            می‌شود. برای پرسیدن سؤال یا ثبت‌نام، از دکمه واتساپ همین صفحه
            استفاده کنید.
          </p>
        </section>
      </div>
    </main>
  );
}