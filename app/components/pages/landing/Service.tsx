import { ElementType } from "react";

interface ServiceProps {
  Icon: ElementType;
  title: string;
  desc: string;
}

export default function Service({ Icon, title, desc }: ServiceProps) {
  return (
    <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-12 px-6 rounded-md flex flex-col items-center">
      <Icon className="bg-[#0080DB] text-[#E6E6E6] rounded-md p-4 w-14 h-14" />
      <h3 className="text-xl font-semibold max-w-sm text-center mt-8 sm:text-2xl">
        {title}
      </h3>
      <p className="max-w-xs text-center mt-4">
        {desc}
      </p>
    </div>
  );
}