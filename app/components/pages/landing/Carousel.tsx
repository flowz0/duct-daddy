"use client";

import Image from "next/image";
import { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface CarouselProps {
  images: string[];
  altTexts?: string[];
  autoPlayInterval?: number;
}

export default function Carousel({
  images,
  altTexts = [],
  // autoPlayInterval = 5000, // 5 seconds
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    // if (currentIndex !== 0) {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // }
  };

  const nextImage = () => {
    // if (currentIndex !== images.length - 1) {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentIndex !== images.length - 1) {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }
  //   }, autoPlayInterval);

  //   return () => clearInterval(interval);
  // }, [currentIndex, images.length, autoPlayInterval]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-md shadow overflow-hidden mt-8">
      <Image
        src={images[currentIndex]}
        alt={altTexts[currentIndex] || `Image ${currentIndex + 1}`}
        className="w-full h-full object-cover  transition-opacity duration-500 ease-in-out"
        priority={false}
      />
      <button
        type="button"
        onClick={prevImage}
        aria-label="Previous image"
        className={`bg-[#0080DB] text-[#E6E6E6] absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow shadow-[hsl(0,0%,20%)] hover:bg-[hsl(205,100%,35%)] active:bg-[hsl(205,100%,30%)] md:left-6 md:p-3`}
      >
        <FaArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Next image"
        className={`bg-[#0080DB] text-[#E6E6E6] absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow shadow-[hsl(0,0%,20%)] hover:bg-[hsl(205,100%,35%)] active:bg-[hsl(205,100%,30%)] md:right-6 md:p-3`}
      >
        <FaArrowRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 justify-center md:bottom-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full shadow shadow-[hsl(0,0%,20%)] ${index === currentIndex ? "bg-[#0080DB]" : "bg-[#E6E6E6]"
              }`}
          />
        ))}
      </div>
    </div>
  );
}