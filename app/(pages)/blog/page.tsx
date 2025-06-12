import CTA from "@/app/components/CTA";
import LatestBlogs from "@/app/components/pages/blog/LatestBlogs";
import FAQs from "@/app/components/pages/landing/FAQs";

export default function Blog() {
  return (
    <>
      <article className="pt-40 pb-32 px-6 max-w-7xl mx-auto md:pt-40 md:pb-32">
        <header>
          <h1 className="text-4xl font-semibold text-center sm:text-5xl">
            Discover our latest blogs
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quas ab vero nostrum, illo quam ullam nisi, ea aspernatur voluptas officiis porro tempora adipisci amet inventore ipsa earum! Cum, doloremque?
          </p>
        </header>
        <LatestBlogs />
      </article>
      <FAQs />
      <CTA />
    </>
  );
}