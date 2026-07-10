"use client";

import Reviews from "@/components/reviews";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [reviews, setReviews] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    setReviews([]);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION WITH BACKGROUND */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-32 px-6 min-h-[600px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/germany.jpg')" }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]" />

        {/* CONTENT */}
        <div className="relative z-10">

          <h1 className="text-3xl md:text-6xl font-bold text-white">
            Deutschino Akademie
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-xl text-gray-200">
            یادگیری زبان آلمانی با برنامه‌ ای اصولی و حرفه ای 
            امکان پذیر میباشد
          </p>

         <button
  onClick={() => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-10 rounded-xl bg-blue-900 px-8 py-4 text-lg text-white hover:bg-blue-800 transition"
>
  شروع یادگیری
</button>

        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
           دوره‌های آموزش خصوصی و گروهی
          </h2>

          <p className="mt-4 text-gray-600">
            بهترین دوره‌های زبان آلمانی از سطح مبتدی تا پیشرفته
          </p>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">

            {/* A1 */}
            <div className="bg-white rounded-2xl border border-transparent shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">A1 مقدماتی</h3>
              <p className="text-l mt-2 text-gray-600">شروع یادگیری از صفر و ساخت پایه قوی</p>

              <div className="mt-auto">
  <Link href="/courses/a1">
    <button className="mt-2 bg-blue-900 text-white px-16 md:px-16 py-2 rounded-xl hover:bg-blue-800 transition">
      مشاهده دوره
    </button>
  </Link>
</div>
            </div>

            {/* A2 */}
            <div className="bg-white rounded-2xl border border-transparent shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">A2 متوسط</h3>
              <p className="mt-3 text-gray-600">تقویت مکالمه و گرامر کاربردی</p>

<div className="mt-auto">
  <Link href="/courses/a2">
    <button className="mt-2 md:mt-0 bg-blue-900 text-white px-16 md:px-16 py-2 rounded-xl hover:bg-blue-800 transition">
      مشاهده دوره
    </button>
  </Link>
</div>
            </div>

            {/* B1 */}
            <div className="bg-white rounded-2xl border border-transparent shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">B1 پیشرفته</h3>
              <p className="mt-3 text-gray-600">آماده‌سازی برای مهاجرت و آزمون‌ها</p>

<div className="mt-auto">
  <Link href="/courses/b1">
    <button className="mt-2 bg-blue-900 text-white px-16 md:px-16 py-2 rounded-xl hover:bg-blue-800 transition">
      مشاهده دوره
    </button>
  </Link>
</div>
            </div>

            {/* مکالمه */}
            <div className="bg-white rounded-2xl border border-transparent shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900">کلاس مکالمه</h3>
              <p className="mt-3 text-gray-600">
                تسلط پیشرفته برای کار، دانشگاه و ارتباطات در آلمان
              </p>

<div className="mt-auto">
  <Link href="/courses/conversation">
    <button className="mt-2 bg-blue-900 text-white px-16 md:px-16 py-2 rounded-xl hover:bg-blue-800 transition">
      مشاهده دوره
    </button>
  </Link>
</div>
            </div>

          </div>
        </div>
      </section>

{/* ABOUT TEACHER SECTION */}

<section id="about" className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

    {/* TEXT */}
    <div className="flex-1 text-center md:text-right">

      <h2 className="text-4xl font-bold text-blue-900">
        درباره مدرس
      </h2>

     <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 space-y-0.5">
  <span className="block font-semibold text-gray-800">
    سلام 👋🏻
  </span>

  <span className="block">
   من مسیح سلیمانی هستم؛ مدرس زبان آلمانی با بیش از ۳ سال تجربه تدریس در آموزشگاه‌های برتر اصفهان
  </span>

  <span className="block">
    حدود ۵ ساله که با زبان آلمانی به‌صورت جدی درگیرم و دقیقاً با چالش‌های مسیر یادگیری این زبان آشنا هستم و
    <br />
    هدف اصلیم اینه که یادگیری زبان آلمانی رو برای زبان آموزهام ساده، کاربردی و لذت‌بخش کنم
  </span>

  <span className="block">
   در کلاس‌های من فقط کتاب تدریس نمی‌شه؛ بلکه مهارت‌هایی رو یاد می‌گیری که برای مهاجرت، تحصیل، کار و زندگی در
  آلمان واقعاً بهشون نیاز داری
  </span>

  <span dir="rtl" className="block font-medium text-gray-800">
  <span dir="ltr">🚀</span> اگر به دنبال آموزش اصولی، پشتیبانی واقعی و پیشرفت مستمر هستی، خوشحال می‌شم در این مسیر کنارت باشم
</span>
</p>

    </div>

    {/* IMAGE */}
<div className="flex-shrink-0">
  <img
    src="/mee.jpg"
    alt="teacher"
    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-900 shadow-lg"
  />
</div>

  </div>
</section>

<section id="why-us" className="bg-blue-900 pt-10 pb-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        چرا دویچینو؟
      </h2>

      <p className="max-w-3xl mx-auto text-base md:text-lg text-blue-100 leading-9">
       : ما در آکادمی دویچونو باور داریم که 
        <br />
        تفاوت بین کسی که فقط آلمانی می‌خواند و کسی که آلمانی را اصولی یاد می‌گیرد و مهاجرت می‌کند
        <br />
       !در مسیر آموزشی‌ای است که انتخاب می‌کند
      </p>
      {/* Divider */}
<div className="flex items-center justify-center mt-10 mb-2">
  <div className="w-24 h-px bg-blue-300/40"></div>

  <div className="mx-4 flex items-center justify-center w-5 h-5 rotate-45 border-2 border-blue-300 rounded-sm">
    <div className="w-2 h-2 bg-blue-300 rounded-sm"></div>
  </div>

  <div className="w-24 h-px bg-blue-300/40"></div>
</div>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          👨‍🏫
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          تدریس مستقیم توسط مدرس
        </h3>
        <p className="text-gray-600 leading-8">
          تمام کلاس‌ها توسط خودم برگزار می‌شود تا کیفیت آموزش و مسیر یادگیری یکپارچه باشد
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          📖
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          جزوه اختصاصی دیچینو
        </h3>
        <p className="text-gray-600 leading-8">
          جزوه‌های اختصاصی برای هر دوره جهت یادگیری سریع‌تر و ساده‌تر ارائه می‌شود
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          🗣️
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          آلمانی واقعی و کاربردی
        </h3>
        <p className="text-gray-600 leading-8">
          تمرکز بر مکالمه و استفاده واقعی از زبان در زندگی روزمره و مهاجرت
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          📈
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          پشتیبانی مستمر
        </h3>
        <p className="text-gray-600 leading-8">
          پیشرفت شما در طول دوره بررسی شده و بازخورد کامل دریافت می‌کنید و همچنین بین جلسات از پشتیبانی رایگان بهرمند میشوید
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          🎯
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          آموزش هدفمند
        </h3>
        <p className="text-gray-600 leading-8">
          مسیر آموزشی بر اساس هدف شما مثل مهاجرت یا تحصیل طراحی می‌شود
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-3xl leading-none mb-5">
          🚀
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          مسیر واقعی یادگیری
        </h3>
        <p className="text-gray-600 leading-8">
          یادگیری در دیچینو فقط خواندن زبان نیست؛ بلکه آماده شدن برای زندگی واقعی است
        </p>
      </div>

    </div>

  </div>
</section>

<section id="reviews">
  <Reviews />
</section>

<footer className="relative mt-24 overflow-hidden bg-blue-950 text-white py-1">

  {/* بک‌گراند محو */}
  <img
    src="/footer-bg.png"
    alt=""
    className="absolute right-0 w-164 h-100 object-cover opacity-10"
  />

  <div className="relative max-w-7xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-2 gap-10">

      {/* سمت راست */}
      <div>

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="Deutschino Akademie"
            className="w-30 h-30 object-contain"
          />

          <div>
            <h2 className="text-3xl font-bold">
              Deutschino Akademie
            </h2>

            <p className="text-blue-200 text-sm">
              German Language Academy
            </p>
          </div>

        </div>

        <p className="mt-5 text-blue-100 leading-8 max-w-md">
  آموزش زبان آلمانی از صفر تا سطح هدف
  <br />
  همراه با آموزش کاربردی برای
  <br />
  مهاجرت , تحصیل , کار , مکالمه و آزمون
</p>

      </div>

      {/* سمت چپ */}
      <div className="text-right">

        <h3 className="text-2xl font-bold mb-6">
          اطلاعات تماس
        </h3>

        <div className="space-y-5 text-blue-100 leading-8">

          <div>
            <p className="font-semibold text-white mb-1">
              📍 آدرس
            </p>

            <p>
              اصفهان، حکیم نظامی، از سمت پل فلزی،
              بعد از چهارراه حکیم نظامی،
              اولین کوچه سمت راست (میدان کوچک ۱۰)
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-1">
              📞 شماره تماس
            </p>

            <a
              href="tel:09130061984"
              className="hover:text-white transition"
            >
              ۰۹۱۳۰۰۶۱۹۸۴
            </a>
          </div>

        </div>

      </div>

    </div>

    <div className="border-t border-blue-800 mt-8 pt-5 text-center text-blue-300 text-sm">
      © 2026 Deutschino Akademie | تمامی حقوق محفوظ است.
    </div>

  </div>

</footer>

    </main>

  );

}
