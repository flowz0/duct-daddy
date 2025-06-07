import Hero from "./components/pages/landing/Hero";
import Stats from "./components/pages/landing/Stats";
import Services from "./components/pages/landing/Services";
import BeforeAfterPics from "./components/pages/landing/BeforeAfterPics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <BeforeAfterPics />
    </main>
  );
}
