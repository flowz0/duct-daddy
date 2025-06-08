import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-[#E6E6E6] to-[#ffffff] py-28 px-6 max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        <span className="text-[#0080DB] font-bold">Why</span> Kansas City
        <br />
        Trusts Duct Daddy
      </h2>
      <div className="mt-16 flex flex-wrap justify-center flex-col gap-16 md:flex-row">
        <Stat
          stat="3,000+"
          title="Vents Cleaned"
          desc="We&apos;ve worked in everything from apartments to big custom homes."
        />
        <Stat
          stat="100%"
          title="Flat-Rate Pricing"
          desc="What we quote is what you pay. No surprises, no pressure."
        />
        <Stat
          stat="5-Star"
          title="Rated Across KC"
          desc="Trusted in over 25 cities across Missouri and Kansas."
        />
      </div>
    </section>
  );
}