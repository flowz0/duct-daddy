import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-28 px-20 flex items-center justify-between gap-12 rounded-3xl">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Breathe without worries
          </h2>
          <p className="mt-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, amet, eius non veniam excepturi consequuntur animi quos eos in, doloremque magni numquam ipsam inventore esse sunt harum exercitationem quis!
          </p>
        </div>
        <Link href="/book-online" className="bg-[#0080DB] text-[#E6E6E6] py-6 px-12 w-fit text-lg font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
          Book Online
        </Link>
      </div>
    </section>
  );
}