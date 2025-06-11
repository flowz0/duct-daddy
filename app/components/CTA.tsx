import Link from "next/link";

export default function CTA() {
  return (
    // <section className="py-32 px-6 max-w-7xl mx-auto">
    //   <div className="grid grid-cols-1 lg:grid-cols-2">
    //     <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-8 px-6 flex flex-col justify-between lg:items-center rounded-3xl lg:flex-row md:py-16 md:px-12">
    //       <div className="flex flex-col">
    //         <h2 className="text-3xl font-semibold sm:text-4xl">
    //           Breathe without worries
    //         </h2>
    //         <p className="mt-4 max-w-xl">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque, amet, eius non veniam excepturi consequuntur animi quos eos in, doloremque magni numquam ipsam inventore esse sunt harum exercitationem quis!
    //         </p>
    //       </div>
    //       <Link href="/book-online" className="bg-[#0080DB] text-[#E6E6E6] mt-8 py-6 px-12 text-lg text-center font-semibold rounded-md w-full lg:mt-0 hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
    //         Book Online
    //       </Link>
    //     </div>
    //   </div>
    // </section>

    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-[#ffffff] shadow shadow-[hsl(0,0%,80%)] py-8 px-6 rounded-xl flex flex-col items-center sm:py-16 sm:px-12">
        <header className="flex flex-col">
          <h2 className="text-3xl font-semibold text-center md:text-4xl">
            Breathe without worries
          </h2>
          <p className="mt-4 text-center max-w-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore tenetur quisquam tempore perferendis neque saepe exercitationem quasi quam aliquid aut repellat, est eius reiciendis animi! Error facilis quidem hic nulla.
          </p>
        </header>
        <Link
          href="/book-online"
          className="bg-[#0080DB] text-[#E6E6E6] mt-8 text-center w-fit py-4 px-6 font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
        >
          Book Online
        </Link>
      </div>
    </section>

  );
}