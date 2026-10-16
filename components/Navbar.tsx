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
</div>

  );
}