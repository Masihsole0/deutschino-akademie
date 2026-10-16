
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center px-2 py-1.5">
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-blue-900 text-sm md:text-xl">
          Deutschino
        </span>

        <Image
          src="/logo.jpg"
          width={64}
          height={64}
          alt="لوگوی آکادمی دویچینو"
          className="h-12 w-12 object-contain md:h-16 md:w-16"
        />

        <span className="font-bold text-blue-900 text-sm md:text-xl">
          Akademie
        </span>
      </div>
    </div>
  );
}
