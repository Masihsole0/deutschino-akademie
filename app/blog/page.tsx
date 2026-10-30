
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "مقالات آموزش زبان آلمانی | آکادمی دویچینو",
  description:
    "مقالات و راهنماهای آموزش زبان آلمانی، یادگیری از صفر، گرامر، مکالمه و آمادگی آزمون‌های آلمانی در آکادمی دویچینو.",
  alternates: {
    canonical: "https://www.deutschino.ir/blog",
  },
};

const articles = [
  {
    title: "آموزش زبان آلمانی از صفر؛ از کجا شروع کنیم؟",
    description:
      "راهنمای شروع یادگیری زبان آلمانی، انتخاب منابع و اولین قدم‌ها.",
    category: "شروع یادگیری",
    href: "/blog/learn-german-from-zero",
  },
  {
    title: "یادگیری زبان آلمانی چقدر طول می‌کشد؟",
    description:
      "مدت زمان یادگیری زبان آلمانی و رسیدن به سطح‌های A1 تا B2.",
    category: "راهنمای زبان‌آموز",
    href: "/blog/how-long-to-learn-german",
  },
  {
    title: "بهترین منابع یادگیری زبان آلمانی",
    description:
      "معرفی کتاب‌ها، سایت‌ها و منابع کاربردی برای یادگیری آلمانی.",
    category: "منابع آموزشی",
    href: "/blog/best-german-learning-resources",
  },
  {
    title: "تفاوت سطح‌های A1 تا B2 زبان آلمانی چیست؟",
    description:
      "با مهارت‌ها و توانایی‌های مورد انتظار در هر سطح آشنا شوید.",
    category: "سطوح زبان آلمانی",
    href: "/blog/german-levels-a1-b2",
  },
  {
    title: "چطور برای آزمون B1 زبان آلمانی آماده شویم؟",
    description:
      "راهنمای برنامه‌ریزی و تقویت مهارت‌های لازم برای آزمون B1.",
    category: "آمادگی آزمون",
    href: "/blog/german-b1-exam-preparation",
  },
  {
    title: "یادگیری زبان آلمانی برای مهاجرت",
    description:
      "چطور مسیر یادگیری آلمانی را متناسب با هدف مهاجرت انتخاب کنیم؟",
    category: "آلمانی و مهاجرت",
    href: "/blog/learn-german-for-immigration",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar showLinks={false} />

      <main dir="rtl" className="min-h-screen bg-gray-50 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-bold leading-relaxed text-gray-900 md:text-4xl">
              مقالات آموزش زبان آلمانی
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-gray-600 md:text-base">
              راهنماها، نکات آموزشی و منابع کاربردی برای یادگیری زبان آلمانی
              از سطح مبتدی تا پیشرفته.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.href}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
              >
                <span className="text-xs font-medium text-blue-800">
                  {article.category}
                </span>

                <h2 className="mt-3 text-lg font-bold leading-8 text-gray-900">
                  {article.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-blue-900 hover:text-blue-700"
                >
                  مطالعه مقاله ←
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-[#0A2540] px-6 py-10 text-center">
            <h2 className="text-xl font-bold text-white">
              می‌خوای زبان آلمانی رو یاد بگیری؟
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-200">
              دوره‌های آموزش زبان آلمانی آکادمی دویچینو رو ببین.
            </p>

            <Link
              href="/courses"
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0A2540] transition hover:bg-gray-100"
            >
              مشاهده دوره‌ها
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
