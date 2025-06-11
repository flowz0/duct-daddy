import Service from "./Service";

import AirDuctImg from "@/public/services/airduct.png";
import DyerVentImg from "@/public/services/dryervent.png";
import MaintenanceImg from "@/public/services/preventativemaintenance.png";

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto rounded-3xl flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        Services We Offer
      </h2>
      <div className="mt-12 flex flex-col gap-8 justify-center flex-wrap md:flex-row">
        <Service
          img={AirDuctImg}
          title="Air Duct Cleaning"
          desc="We clean your entire HVAC system — supply vents, return vents, trunk lines, and furnace — using powerful negative air machines and rotary brushes."
        />
        <Service
          img={DyerVentImg}
          title="Dryer Vent Cleaning"
          desc="We remove lint, debris, and buildup from your entire dryer vent line. Helps prevent fires, speeds up drying times, and lowers energy bills."
        />
        <Service
          img={MaintenanceImg}
          title="Preventative Maintenance"
          desc="Seasonal checkups and tune-ups to keep your system running efficiently. Extend HVAC lifespan and catch small issues before they become expensive problems."
        />
      </div>
    </section>
  );
}