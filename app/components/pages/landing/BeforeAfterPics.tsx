import Link from "next/link";
import Carousel from "./Carousel";

import PlaceholderImg from "@/public/1920x1080.svg";
import PlaceholderImg2 from "@/public/placeholderimg.jpg";

const images = [
  PlaceholderImg,
  PlaceholderImg2
];

export default function BeforeAfterPics() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto ">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        See the
        <br />
        Duct Daddy <span className="text-[#0080DB] font-bold">Difference</span>
      </h2>
      <p className="max-w-xs mx-auto text-center mt-4">
        Real photos from homes in Oak Grove, Blue Springs, and all across KC.
      </p>
      <Carousel images={images} />
    </section>
  );
}