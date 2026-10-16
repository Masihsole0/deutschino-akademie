
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center px-2 py-0.5">
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-blue-900 text-lg md:text-2xl">
          Akademie
        </span>

        <Image
          src="/logo.jpg"
          width={256}
          height={256}
          alt="لوگوی آکادمی دویچینو"
          className="h-18 w-18 object-contain md:h-23 md:w-23"
        />

        <span className="font-bold text-blue-900 text-lg md:text-2xl">
          Deutschino
        </span>
      </div>
    </div>
  );
}
