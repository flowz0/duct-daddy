import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#E6E6E6] py-32 px-6 max-w-7xl mx-auto rounded-3xl flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-center sm:text-3xl">
        Why Kansas City 
        <br />
        <span className="text-[#0080DB] font-bold">Trusts</span> Duct Daddy
      </h2>
      <div className="mt-16 flex flex-col gap-12 md:flex-row">
        <Stat
          title="3,000+ Vents Cleaned"
          desc="We&apos;ve worked in everything from apartments to big custom homes."
        />
        <Stat
          title="100% Flat-Rate Pricing"
          desc="What we quote is what you pay. No surprises, no pressure."
        />
        <Stat
          title="5-Star Rated Across KC"
          desc="Trusted in over 25 cities across Missouri and Kansas."
        />
      </div>
    </section>
  );
}