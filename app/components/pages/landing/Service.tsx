import Image, { StaticImageData } from "next/image";

interface ServiceProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

export default function Service({ img, title, desc }: ServiceProps) {
  return (
    <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-12 px-6 rounded-xl flex flex-col items-center">
      <Image
        src={img}
        alt={title + "image"}
        className="rounded-lg h-16 w-auto"
        draggable={false}
      />
      <h3 className="text-xl font-semibold max-w-sm text-center mt-8 sm:text-2xl">
        {title}
      </h3>
      <p className="max-w-xs text-center mt-4">
        {desc}
      </p>
    </div>
  );
}