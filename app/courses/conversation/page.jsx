
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
    "@type": "Organization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
  inLanguage: "de",
  educationalLevel: "B1",
};

export default function ConversationPage() {
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
            src="/conv.jpg"
            alt="کلاس مکالمه زبان آلمانی در آکادمی دویچینو"
            width={700}
            height={240}
            className="w-full max-w-[700px] rounded-3xl shadow-xl object-cover"
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center mt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A2540]">
            دوره مکالمه زبان آلمانی
          </h1>

          <p
            dir="rtl"
            className="mt-5 text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            در دوره مکالمه زبان آلمانی آکادمی دویچینو، برای صحبت‌کردن
            در موقعیت‌های روزمره و کاری تمرین می‌کنید و توانایی بیان
            منظور خود را به زبان آلمانی تقویت می‌کنید.
          </p>

          <p
            dir="rtl"
            className="text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            تمرین‌ها بر صحبت‌کردن، افزایش روانی گفتار و استفاده از
            عبارت‌های کاربردی تمرکز دارند. این دوره برای زبان‌آموزانی
            طراحی شده است که سطح B1 زبان آلمانی را دارند.
          </p>
        </div>

        {/* SEO Content */}
        <section
          dir="rtl"
          className="max-w-4xl mx-auto mt-16 mb-12 text-right"
        >
          <h2 className="text-2xl font-bold mb-5">
            کلاس حضوری مکالمه زبان آلمانی در اصفهان و آنلاین
          </h2>

          <p className="text-base leading-9 mb-6">
            اگر گرامر و واژگان زبان آلمانی را می‌دانید اما هنگام صحبت‌کردن
            مکث می‌کنید یا برای پیدا کردن کلمات مناسب مشکل دارید، تمرین
            هدفمند مکالمه می‌تواند به شما کمک کند. در دوره مکالمه دویچینو،
            فرصت دارید آموخته‌های خود را در گفت‌وگوهای کاربردی به کار ببرید.
            کلاس‌ها به‌صورت حضوری در اصفهان و آنلاین برگزار می‌شوند.
          </p>

          <h2 className="text-xl font-bold mb-4">
            در کلاس مکالمه آلمانی چه تمرین‌هایی انجام می‌دهید؟
          </h2>

          <ul className="list-disc pr-6 space-y-3 leading-8 mb-6">
            <li>تمرین گفت‌وگو درباره موضوعات روزمره و آشنا</li>
            <li>بیان نظرها، تجربه‌ها و برنامه‌های شخصی به زبان آلمانی</li>
            <li>گسترش واژگان و استفاده از عبارت‌های پرکاربرد</li>
            <li>تقویت روانی گفتار و ساختن جمله هنگام صحبت‌کردن</li>
            <li>تمرین مکالمه در موقعیت‌های اجتماعی و کاری</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">
            این دوره برای چه کسانی مناسب است؟
          </h2>

          <p className="text-base leading-9 mb-6">
            این دوره برای زبان‌آموزانی مناسب است که پایه زبان آلمانی
            دارند و می‌خواهند راحت‌تر و روان‌تر صحبت کنند. آشنایی با
            سطح B1 پیش‌نیاز اعلام‌شده این دوره است. اگر درباره سطح خود
            مطمئن نیستید، پیش از ثبت‌نام برای انتخاب دوره مناسب مشورت بگیرید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            کلاس مکالمه خصوصی یا آنلاین
          </h2>

          <p className="text-base leading-9 mb-6">
            امکان شرکت آنلاین به شما اجازه می‌دهد بدون نیاز به حضور
            فیزیکی در کلاس، تمرین مکالمه را دنبال کنید. اگر در اصفهان
            هستید، امکان شرکت حضوری نیز وجود دارد. برای اطلاع از زمان
            برگزاری و جزئیات کلاس، از طریق واتساپ پیام دهید.
          </p>

          <h2 className="text-xl font-bold mb-4">
            ثبت‌نام دوره مکالمه زبان آلمانی
          </h2>

          <p className="text-base leading-9">
            دوره شامل ۱۰ جلسه ۶۰ دقیقه‌ای است. هزینه هر جلسه ۹۰۰ هزار
            تومان است. برای پرسیدن سؤال یا ثبت‌نام، از دکمه واتساپ همین
            صفحه استفاده کنید.
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
                ۱۰ جلسه
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <BookOpen size={18} />
                <span className="font-semibold">تعداد جلسات</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]" dir="rtl">
                ۱۰ ساعت
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Clock3 size={18} />
                <span className="font-semibold">مدت زمان دوره</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">مکالمه</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <GraduationCap size={18} />
                <span className="font-semibold">نوع دوره</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">ندارد</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Book size={18} />
                <span className="font-semibold">کتاب آموزشی</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">سطح B1</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <CircleHelp size={18} />
                <span className="font-semibold">پیش‌نیاز</span>
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
                    ۹۰۰,۰۰۰
                  </p>
                  <span className="text-gray-500 text-lg">تومان</span>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[#0A2540]">
                    هر جلسه
                  </p>
                  <span className="text-gray-500">
                    <bdi>۶۰ دقیقه‌ای</bdi>
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس مکالمه ثبت نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mx-auto flex w-full sm:w-fit justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-16 py-3 rounded-xl font-bold transition"
              >
                ثبت‌نام
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
