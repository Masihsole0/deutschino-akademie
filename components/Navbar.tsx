import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 md:pr-12 py-2">

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
      <div className="flex items-center gap-3 md:gap-8">

        <a href="#why-us" className="text-gray-700 hover:text-blue-900 text-sm md:text-base">
          چرا ما؟
        </a>

        <a href="#about" className="text-gray-700 hover:text-blue-900 text-sm md:text-base">
          درباره مدرس
        </a>

        <a href="#courses" className="text-gray-700 hover:text-blue-900 text-sm md:text-base">
          دوره‌ها
        </a>

        <a href="#" className="text-gray-700 hover:text-blue-900 text-sm md:text-base">
          خانه
        </a>

      </div>

    </div>
  );
}