
import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Book,
  CircleHelp,
  Headphones,
  Wallet,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "دوره گرامر زبان آلمانی A1 تا B2 در اصفهان | دویچینو",
  description:
    "کلاس گرامر زبان آلمانی از سطح A1 تا B2 در آکادمی دویچینو؛ آموزش مرحله‌به‌مرحله قواعد، حل تمرین و رفع اشکال متناسب با سطح زبان‌آموز. هزینه هر جلسه ۱٬۰۰۰٬۰۰۰ تومان.",
  alternates: {
    canonical: "https://www.deutschino.ir/courses/grammar",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "دوره گرامر زبان آلمانی A1 تا B2",
  description:
    "دوره آموزش گرامر زبان آلمانی از سطح A1 تا B2 با تمرکز بر یادگیری قواعد، حل تمرین و رفع اشکال.",
  inLanguage: "fa",
  educationalLevel: "A1–B2",
  provider: {
    "@type": "EducationalOrganization",
    name: "آکادمی دویچینو",
    url: "https://www.deutschino.ir",
  },
};

export default function GrammarPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" aria-label="صفحه اصلی دویچینو">
            <Image
              src="/logo.jpg"
              alt="لوگوی آکادمی دویچینو"
              width={145}
              height={60}
              className="h-auto w-28 sm:w-36"
              priority
            />
          </a>

          <a
            href="/"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm transition hover:bg-gray-50"
          >
            صفحه اصلی
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-800">
            آموزش گرامر آلمانی از A1 تا B2
          </span>

          <h1 className="mb-5 text-3xl font-extrabold leading-relaxed text-gray-900 sm:text-4xl">
            کلاس گرامر زبان آلمانی از سطح A1 تا B2
          </h1>

          <p className="mb-6 text-base leading-8 text-gray-600">
            اگر در یادگیری قواعد زبان آلمانی مشکل داری یا می‌خواهی گرامر را
            اصولی‌تر یاد بگیری، در این دوره مباحث متناسب با سطح تو آموزش داده
            می‌شوند. تمرکز کلاس بر درک قواعد، حل تمرین و رفع اشکال است تا
            بتوانی آموخته‌هایت را در جمله‌سازی و استفاده از زبان آلمانی به کار
            ببری.
          </p>

          <div className="mb-7 flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
              <GraduationCap size={18} className="text-purple-700" />
              سطح A1 تا B2
            </span>
            <span className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2">
              <Wallet size={18} className="text-purple-700" />
              هر جلسه ۱٬۰۰۰٬۰۰۰ تومان
            </span>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-purple-800 px-6 py-3 font-bold text-white transition hover:bg-purple-900"
          >
            مشاوره و ثبت‌نام
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gray-50">
          <Image
            src="/books3.jpg"
            alt="کتاب‌ها و منابع آموزش زبان آلمانی"
            width={900}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              در کلاس گرامر چه چیزهایی یاد می‌گیری؟
            </h2>
            <p className="mx-auto max-w-3xl leading-8 text-gray-600">
              مباحث بر اساس سطح فعلی، نقاط ضعف و هدف آموزشی زبان‌آموز انتخاب
              می‌شوند.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <BookOpen className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">گرامر پایه A1 و A2</h3>
              <p className="leading-7 text-gray-600">
                ساختار جمله، صرف افعال، آرتیکل‌ها، حالت‌های دستوری، ضمایر،
                حروف اضافه و قواعد پایه زبان آلمانی.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <GraduationCap className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">گرامر سطح B1</h3>
              <p className="leading-7 text-gray-600">
                جمله‌های فرعی، افعال با حروف اضافه، ساختارهای مصدر با zu،
                مجهول و سایر قواعد مهم این سطح.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <Book className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">گرامر سطح B2</h3>
              <p className="leading-7 text-gray-600">
                ساختارهای پیشرفته‌تر جمله، ترکیب‌های دستوری و تمرین کاربرد
                دقیق‌تر قواعد در جمله‌سازی و نوشتار.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <CheckCircle2 className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">حل تمرین و مثال</h3>
              <p className="leading-7 text-gray-600">
                تمرین‌های متناسب با موضوع درس برای تثبیت قواعد و یادگیری
                کاربرد آن‌ها در موقعیت‌های مختلف.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <CircleHelp className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">رفع اشکال هدفمند</h3>
              <p className="leading-7 text-gray-600">
                شناسایی اشتباهات رایج زبان‌آموز و تمرکز بر قواعدی که به تمرین
                بیشتری نیاز دارند.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6">
              <Headphones className="mb-4 text-purple-800" size={28} />
              <h3 className="mb-3 text-lg font-bold">کاربرد گرامر در زبان</h3>
              <p className="leading-7 text-gray-600">
                تمرین استفاده از قواعد در جمله‌سازی، مکالمه و نوشتار، متناسب
                با سطح و نیاز زبان‌آموز.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            هزینه کلاس گرامر زبان آلمانی
          </h2>
          <p className="leading-8 text-gray-600">
            تعداد جلسات و مباحث آموزشی با توجه به سطح و نیاز زبان‌آموز تعیین
            می‌شود.
          </p>
        </div>

        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-800">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                کلاس گرامر A1 تا B2
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                آموزش متناسب با سطح زبان‌آموز
              </p>
            </div>
          </div>

          <div className="mb-6 rounded-2xl bg-gray-50 p-5">
            <p className="mb-2 text-sm text-gray-600">هزینه هر جلسه</p>
            <p className="text-2xl font-extrabold text-purple-900">
              ۱٬۰۰۰٬۰۰۰ تومان
            </p>
          </div>

          <ul className="mb-7 space-y-3 text-sm leading-7 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={19}
                className="mt-1 shrink-0 text-purple-700"
              />
              <span>انتخاب مباحث بر اساس سطح و نیاز زبان‌آموز</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={19}
                className="mt-1 shrink-0 text-purple-700"
              />
              <span>توضیح قواعد همراه با مثال و تمرین</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2
                size={19}
                className="mt-1 shrink-0 text-purple-700"
              />
              <span>تمرکز بر رفع اشکال و تقویت نقاط ضعف</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock3
                size={19}
                className="mt-1 shrink-0 text-purple-700"
              />
              <span>تعیین تعداد جلسات با توجه به نیاز آموزشی</span>
            </li>
          </ul>

          <a
            href="/#contact"
            className="block rounded-xl bg-purple-800 px-5 py-3 text-center font-bold text-white transition hover:bg-purple-900"
          >
            پرسش درباره کلاس و ثبت‌نام
          </a>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            گرامر آلمانی را اصولی‌تر یاد بگیر
          </h2>
          <p className="mb-6 leading-8 text-gray-600">
            برای انتخاب مباحث مناسب، ابتدا سطح و نیازت را مشخص می‌کنیم تا
            مسیر یادگیری گرامر متناسب با هدفت پیش برود.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-purple-800 px-6 py-3 font-bold text-white transition hover:bg-purple-900"
          >
            تماس با آکادمی دویچینو
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-100 px-4 py-6 text-center text-sm text-gray-500">
        © آکادمی دویچینو | آموزش زبان آلمانی
      </footer>
    </main>
  );
}
