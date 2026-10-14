import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row-reverse items-center justify-between px-2 py-1.5">

      {/* LOGO */}
      <div className="flex flex-row-reverse items-center gap-0">
        <Image
          src="/logo.jpg"
          width={80}
          height={80}
          alt="لوگوی آکادمی دویچینو"
        />

        <span className="font-bold text-blue-900 text-sm md:text-xl -mr-10 text-left">
  <span className="block md:inline">
    Deutschino
  </span>{" "}
  <span className="block md:inline">
    Akademie
  </span>
</span>
      </div>

      {/* MENU */}
<div className="flex items-center gap-1.5 md:gap-8">

  <a href="#" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    خانه
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#about" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    درباره مدرس
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#why-us" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    چرا ما؟
  </a>

  <span className="md:hidden text-black">|</span>

  <a href="#reviews" className="text-gray-700 hover:text-blue-900 text-sm md:text-base whitespace-nowrap">
    نظرات
  </a>

</div>
    </div>
  );
}