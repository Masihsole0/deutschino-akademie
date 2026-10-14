
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
    "کلاس مکالمه زبان آلمانی در آکادمی دویچینو با تمرکز بر تمرین صحبت کردن، افزایش روانی گفتار و استفاده از زبان آلمانی در موقعیت‌های روزمره؛ حضوری و آنلاین.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/conversation",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره مکالمه زبان آلمانی",
  description:
    "تمرین مکالمه زبان آلمانی در آکادمی دویچینو با تمرکز بر روانی گفتار و استفاده از زبان آلمانی در موقعیت‌های روزمره و کاری؛ به‌صورت حضوری و آنلاین.",
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
            src="/logot.png"
            alt="لوگوی آکادمی دویچینو"
            width={100}
            height={100}
            className="h-30 w-auto"
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
            className="rounded-3xl shadow-xl object-cover"
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
            در دوره مکالمه زبان آلمانی آکادمی دویچینو، برای صحبت‌کردن در
            موقعیت‌های روزمره و کاری تمرین می‌کنید و مهارت بیان منظور خود را
            به زبان آلمانی تقویت می‌کنید.
          </p>

          <p
            dir="rtl"
            className="text-base md:text-lg leading-9 max-w-3xl mx-auto text-center"
          >
            تمرین‌ها بر صحبت‌کردن، افزایش روانی گفتار و استفاده از عبارت‌های
            کاربردی تمرکز دارند. این دوره برای زبان‌آموزان دارای سطح B1 طراحی
            شده است.
          </p>
        </div>

        {/* اطلاعات دوره */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b bg-[#F4F8FF]">
            <h2 className="text-xl font-bold text-[#0A2540] text-right">
              اطلاعات دوره
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]" dir="rtl">
                ۱۰ جلسه
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <BookOpen size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  تعداد جلسات
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]" dir="rtl">
                ۱۰ ساعت
              </span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Clock3 size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  مدت زمان
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">مکالمه</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <GraduationCap size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  سطح دوره
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">ندارد</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Book size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  کتاب آموزشی
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-[#0A2540]">B1 سطح</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <CircleHelp size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  پیش‌نیاز
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between px-8 py-5 hover:bg-[#F8FBFF] transition">
              <span className="font-bold text-green-600">دارد</span>
              <div className="flex flex-row-reverse items-center gap-3 text-[#0A2540]">
                <Headphones size={18} color="#0A2540" />
                <span className="font-semibold text-[#0A2540]">
                  پشتیبانی
                </span>
              </div>
            </div>
          </div>

          {/* بخش ثبت‌نام */}
          <div className="mt-8 rounded-2xl border border-gray-200 shadow-lg overflow-hidden bg-white">
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                {/* قیمت */}
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-green-700">
                    ۹۰۰,۰۰۰
                  </p>
                  <span className="text-gray-500 text-lg">تومان</span>
                </div>

                {/* مدت جلسه */}
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold text-[#0A2540]">
                    هر جلسه
                  </p>
                  <span className="text-gray-500">
                    <bdi>۶۰ دقیقه‌ای</bdi>
                  </span>
                </div>
              </div>

              {/* دکمه */}
              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس مکالمه ثبت نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mx-auto flex w-fit justify-center bg-[#0A2540] hover:bg-[#12385c] text-white px-16 py-3 rounded-xl font-bold transition"
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
