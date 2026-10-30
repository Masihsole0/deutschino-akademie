
import Image from "next/image";

export default function Navbar({ showLinks = true }: { showLinks?: boolean }) {
  return (
    <header className="w-full bg-white px-3 py-2">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-bold text-blue-900 md:text-2xl">
            Akademie
          </span>

          <Image
            src="/logo.jpg"
            width={256}
            height={256}
            alt="لوگوی آکادمی دویچینو"
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />

          <span className="text-lg font-bold text-blue-900 md:text-2xl">
            Deutschino
          </span>
        </div>

        {showLinks && (
          <nav
            aria-label="دسترسی سریع"
            className="mt-2 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-3 border-t border-gray-100 pt-3"
          >
            <a href="#why-us" className="text-sm font-medium text-blue-900 transition hover:text-blue-600">
              چرا دویچینو؟
            </a>
            <span className="h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
            <a href="#about" className="text-sm font-medium text-blue-900 transition hover:text-blue-600">
              درباره مدرس
            </a>
            <span className="h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
            <a href="#reviews" className="text-sm font-medium text-blue-900 transition hover:text-blue-600">
              نظرات زبان‌آموزان
            </a>
            <span className="h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
            <a href="#contact" className="text-sm font-medium text-blue-900 transition hover:text-blue-600">
              ارتباط با ما
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
