import Image from "next/image";
import Link from "next/link";

import NotFoundImg from "@/public/404-not-found.png";

export default function NotFoundPage() {
  return (
    <main className="py-32 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold max-w-sm text-center sm:text-4xl">
          <span className="text-[#0080DB] font-bold">Page</span> not found
        </h1>
        <p className="max-w-xs text-center mt-4">This page does not exist. Please return to the homepage.</p>
        <Link href="/" className="mt-12 bg-[#0080DB] text-[#E6E6E6] py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
          Return to homepage
        </Link>
      </header>
      <section className="flex justify-center">
        <Image
          src={NotFoundImg}
          alt="Page not found image"
          className="mt-16 max-h-96 w-fit"
          draggable={false}
        />
      </section>
    </main>
  );
}