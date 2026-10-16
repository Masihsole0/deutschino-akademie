
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center px-2 py-2">
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-blue-900 text-lg md:text-2xl">
          Akademie
        </span>

        <Image
          src="/logo.jpg"
          width={70}
          height={70}
          alt="لوگوی آکادمی دویچینو"
          className="h-12 w-12 object-contain md:h-16 md:w-16"
        />

        <span className="font-bold text-blue-900 text-lg md:text-2xl">
          Deutschino
        </span>
      </div>
    </div>
  );
}
