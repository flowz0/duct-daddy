"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface CarouselProps {
  images: string[];
  altTexts?: string[];
  autoPlayInterval?: number;
}

export default function Carousel({
  images,
  altTexts = [],
  autoPlayInterval = 5000, // 5 seconds
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (currentIndex !== images.length - 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex !== images.length - 1) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, autoPlayInterval]);

  return (
    <div className="relative w-full aspect-[16/9] rounded-md shadow overflow-hidden mt-12">
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
        className={`absolute left-4 top-1/2 -translate-y-1/2 md:left-6 ${currentIndex !== 0 ? "text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]" : "text-[hsl(0,0%,60%)] cursor-not-allowed"
          }`}
      >
        <BsArrowLeftCircleFill className="w-8 h-8 md:w-12 md:h-12" />
      </button>
      <button
        type="button"
        onClick={nextImage}
        aria-label="Next image"
        className={`absolute right-4 top-1/2 -translate-y-1/2 md:right-6 ${currentIndex !== images.length - 1 ? "text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]" : "text-[hsl(0,0%,60%)] cursor-not-allowed"
          }`}
      >
        <BsArrowRightCircleFill className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 justify-center md:bottom-6">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-[#0080DB]" : "bg-[hsl(0,0%,60%)]"
              }`}
          />
        ))}
      </div>
    </div>
  );
}