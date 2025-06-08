import { BsFillPinMapFill } from "react-icons/bs";

export default function ServiceAreaCard() {
  return (
    <div className="flex items-center gap-4">
      <BsFillPinMapFill className="text-[#0080DB] w-6 h-6" />
      <h3 className="font-semibold">Kansas City</h3>
    </div>
  );
}