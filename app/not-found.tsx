import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "@/public/404-not-found.png";
import ReviewSection from "./components/pages/landing/ReviewSection";
import CTA from "./components/CTA";
import FAQs from "./components/pages/landing/FAQs";

export default function NotFoundPage() {
  return (
    <>
      <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-8 md:pt-60 md:pb-32 lg:flex-row">
        <header className="flex flex-col items-center lg:w-1/2 lg:items-start">
          <h1 className="text-4xl font-bold max-w-xl text-center sm:text-5xl lg:text-start">
            Page Not Found But Clean Air is A Click Away
          </h1>
          <p className="mt-6 text-center max-w-lg lg:text-start">
            Looks like the page you&apos;re searching for doesn&apos;t exist. But no worries, Duct Daddy Duct Cleaning is still here with expert HVAC and air duct cleaning services.
          </p>
          <Link href="/" className="bg-[#0080DB] text-[#E6E6E6] mt-12 py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
            Back to Fresh Air
          </Link>
        </header>
        <div className="mt-8 flex justify-end lg:mt-0 lg:w-1/2">
          <Image
            src={NotFoundImg}
            alt="Page not found image"
            className="max-h-96 w-auto rounded-3xl"
            priority
          />
        </div>
      </main>
      <ReviewSection />
      <FAQs />
      <CTA />
    </>
  );
}