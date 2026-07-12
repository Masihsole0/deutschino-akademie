import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-1 md:pr-12 py-1">

      {/* LOGO */}
      <div className="flex items-center gap-1">
        <Image
          src="/logot.png"
          width={80}
          height={80}
          alt="logo"
        />

        <span className="font-bold text-blue-900 text-sm md:text-xl">
          Deutschino Akademie
        </span>
      </div>

      {/* MENU */}
<div className="flex items-center gap-1.5 md:gap-8">

  <a href="#reviews" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    نظرات
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#why-us" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    چرا ما؟
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#about" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    درباره مدرس
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#courses" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    دوره‌ها
  </a>

</div>
    </div>
  );
}