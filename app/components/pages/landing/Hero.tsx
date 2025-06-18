import Image from "next/image";
import Link from "next/link";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import HeroImg from "@/public/duct-daddy-vehicle.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-8 px-6 max-w-7xl mx-auto flex flex-col gap-8 lg:pt-52 lg:flex-row">
      <header className="flex flex-col items-center lg:w-1/2 lg:items-start">
        <h1 className="text-4xl font-semibold max-w-lg text-center sm:text-5xl lg:text-start">
          Kansas City&apos;s Trusted Air Duct & Dryer Vent Cleaning Experts
        </h1>
        <Link href="/book-online" className="bg-[#0080DB] text-[#E6E6E6] mt-12 py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
          Book Online
        </Link>
        <div className="flex items-center gap-3 mt-8">
          <div className="flex gap-0.5">
            <BsStarFill className="text-amber-500 w-4 h-4" />
            <BsStarFill className="text-amber-500 w-4 h-4" />
            <BsStarFill className="text-amber-500 w-4 h-4" />
            <BsStarFill className="text-amber-500 w-4 h-4" />
            <BsStarHalf className="text-amber-500 w-4 h-4" />
          </div>
          <p className="text-[#333333]">
            <span className="font-semibold">4.97/5</span> (143 reviews)
          </p>
        </div>
      </header>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <Image
          src={HeroImg}
          alt="Hero image"
          className="h-auto w-full rounded-3xl"
          draggable={false}
          priority
        />
      </div>
    </section>
  );
}