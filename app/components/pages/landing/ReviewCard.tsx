import { Review } from "@/app/data/reviews";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

interface Props {
  review: Review;
  direction: "left" | "right";
}

export default function ReviewCard({ review, direction }: Props) {
  const initialX = direction === "left" ? 100 : -100;

  return (
    <motion.div
      className="min-w-[300px] bg-[#333333] rounded-xl shadow shadow-[hsl(0,0%,20%)] py-10 px-8 md:min-w-[400px]"
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-0.5">
        <BsStarFill className="text-amber-500 w-6 h-6" />
        <BsStarFill className="text-amber-500 w-6 h-6" />
        <BsStarFill className="text-amber-500 w-6 h-6" />
        <BsStarFill className="text-amber-500 w-6 h-6" />
        <BsStarFill className="text-amber-500 w-6 h-6" />
      </div>
      <p className="text-[hsl(0,0%,80%)] text-lg mt-6">
        &quot;{review.message}&quot;
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Image
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full"
          width={64}
          height={64}
        />
        <div>
          <p className="text-[hsl(0,0%,80%)]">{review.name}</p>
          {review.brand && (
            <p className="text-[hsl(0,0%,60%)]">{review.brand}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}