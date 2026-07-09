import Image from "next/image";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  Book,
  CircleHelp,
  Headphones,
  Wallet,
} from "lucide-react";

export default function A1Page() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logot.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-auto h-28"
            priority
          />
        </div>

        {/* Banner */}
        <div className="flex justify-center">
          <Image
            src="/books3.jpg"
            alt="Banner"
            width={900}
            height={350}
            className="rounded-3xl shadow-xl object-cover"
            priority
          />
        </div>

        {/* Title */}
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-3.5xl font-bold">
           B1 دوره زبان آلمانی 
          </h1>

          <p dir="rtl" className="mt-5 text-base md:text-lg leading-9 max-w-3xl mx-auto text-center">
    در این دوره زبان‌آموز آلمانی را از صفر یاد می‌گیرد و برای سطح <span dir="ltr">B2</span> آماده می‌شود.
  </p>

  <p dir="rtl" className="text-base md:text-lg leading-9 max-w-3xl mx-auto text-center">
    مباحث در این سطح به صورت کاملا روان با حداکثر یادگیری آموزش داده می‌شود.
  </p>
</div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          {/* Private */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

            <div className="bg-[#F4F8FF] border-b px-6 py-4">
              <h2 className="text-xl font-bold text-right">
                اطلاعات دوره خصوصی
              </h2>
            </div>

            <div className="divide-y">

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۳۰ جلسه</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18}/>
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۴۵ ساعت</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18}/>
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">B1</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18}/>
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">Starten Wir B1</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Book size={18}/>
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold"> A2 سطح </span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18}/>
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18}/>
                  <span>پشتیبانی</span>
                </div>
              </div>

            </div>

            <div className="bg-gray-50 border-t p-8">

              <div className="flex justify-between items-center mb-6">

                <div>
  <p className="text-3xl font-bold text-green-700">
    ۱,۰۰۰٬۰۰۰
  </p>

  <span className="text-gray-500">
    تومان / هر جلسه
  </span>
</div>

<Wallet size={30} />
</div>

<a
  href="https://wa.me/989130061984?text=سلام میخواهم کلاس B1 خصوصی ثبت نام کنم."
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
>
  ثبت‌نام دوره خصوصی
</a>

</div>

</div>

                    {/* Group Course */}
          <div className="bg-white rounded-3xl shadow-xl border overflow-hidden">

            <div className="bg-[#F4F8FF] border-b px-6 py-4">
              <h2 className="text-xl font-bold text-right">
                اطلاعات دوره گروهی
              </h2>
            </div>

            <div className="divide-y">

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۳۵ جلسه</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <BookOpen size={18}/>
                  <span>تعداد جلسات</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">۵۳ ساعت</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Clock3 size={18}/>
                  <span>مدت زمان</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">B1</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <GraduationCap size={18}/>
                  <span>سطح دوره</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold">Starten Wir B1</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Book size={18}/>
                  <span>کتاب آموزشی</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold"> A2 سطح </span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <CircleHelp size={18}/>
                  <span>پیش‌نیاز</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-5">
                <span className="font-bold text-green-600">دارد</span>

                <div className="flex flex-row-reverse items-center gap-3">
                  <Headphones size={18}/>
                  <span>پشتیبانی</span>
                </div>
              </div>

            </div>

            <div className="bg-gray-50 border-t p-8">

              <div className="flex justify-between items-center mb-6">

                <div>
                  <p className="text-3xl font-bold text-green-700">
                    ۱۳,۷۰۰٬۰۰۰
                  </p>

                  <span className="text-gray-500">
                    تومان / ترمیک
                  </span>
                </div>

                <Wallet size={30}/>
              </div>

              <a
                href="https://wa.me/989130061984?text=سلام میخواهم کلاس B1 گروهی ثبت نام کنم."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0A2540] hover:bg-[#12385c] text-white text-center py-4 rounded-xl font-bold"
              >
                ثبت‌نام دوره گروهی
              </a>

            </div>

          </div>
          </div>

      </div>
    </main>
  );
}