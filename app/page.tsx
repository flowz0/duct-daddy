import Hero from "./components/pages/landing/Hero";
import Stats from "./components/pages/landing/Stats";
import Services from "./components/pages/landing/Services";
import BeforeAfterPics from "./components/pages/landing/BeforeAfterPics";
import ReviewSection from "./components/pages/landing/ReviewSection";
import ServiceArea from "./components/pages/landing/ServiceArea";
import FAQs from "./components/pages/landing/FAQs";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <BeforeAfterPics />
      <ReviewSection />
      <ServiceArea />
      <FAQs />
      <CTA />
    </main>
  );
}
