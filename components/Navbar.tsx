
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
          width={64}
          height={64}
          alt="لوگوی آکادمی دویچینو"
          className="h-15 w-15 object-contain md:h-19 md:w-19"
        />

        <span className="font-bold text-blue-900 text-lg md:text-2xl">
          Deutschino
        </span>
      </div>
    </div>
  );
}
