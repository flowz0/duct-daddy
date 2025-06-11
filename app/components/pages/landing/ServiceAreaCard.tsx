import { BsFillPinMapFill } from "react-icons/bs";

interface ServiceAreaProps {
  location: string;
}

export default function ServiceAreaCard({ location }: ServiceAreaProps) {
  return (
    <div className="flex items-center gap-4">
      <BsFillPinMapFill className="text-[#0080DB] w-6 h-6" />
      <h3 className="font-semibold">
        {location}
      </h3>
    </div>
  );
}