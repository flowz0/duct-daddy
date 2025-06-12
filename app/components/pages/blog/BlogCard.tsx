import Image from "next/image";

import PlaceholderImg from "@/public/1920x1080.svg";
import Link from "next/link";

export default function BlogCard() {
  return (
    <article className="max-w-1/3">
      <Image
        src={PlaceholderImg}
        alt="Blog cover image"
        className="max-h-96 w-auto object-cover rounded-lg"
      />
      <div className="mt-2 flex justify-between">
        <p>Karson Kolle</p>
        <p>6/11/2025</p>
      </div>
      <div className="mt-2 flex flex-col">
        <h3 className="text-xl font-semibold line-clamp-2 md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui omnis soluta tempore expedita totam modi nam, esse nulla sint id vero pariatur molestiae, quaerat fuga, ipsum minima culpa aut explicabo.</h3>
        <p className="mt-2 line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum esse ducimus reiciendis, nam quaerat sed architecto id molestias inventore sit ipsam labore beatae nihil veritatis deserunt tenetur iusto maxime natus.</p>
        <Link href="/" className="bg-[#0080DB] text-[#E6E6E6] mt-6 w-fit py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
          Read more
        </Link>
      </div>
    </article>
  );
}