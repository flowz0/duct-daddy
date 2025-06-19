import Carousel from "./Carousel";

import PlaceholderImg from "@/public/1920x1080.svg";
import PlaceholderImg2 from "@/public/placeholderimg.jpg";

const images = [
  PlaceholderImg,
  PlaceholderImg2
];

export default function BeforeAfterPics() {
  return (
    <section className="pt-28 px-6 max-w-7xl mx-auto lg:pt-48">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        See The Duct Daddy Difference
      </h2>
      <p className="text-center mt-4">
        Real photos from homes in Oak Grove and all across KC.
      </p>
      <Carousel images={images} />
    </section>
  );
}