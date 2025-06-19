import CTA from "@/app/components/CTA";
import LatestBlogs from "@/app/components/pages/blog/LatestBlogs";
import FAQs from "@/app/components/pages/landing/FAQs";

export default function Blog() {
  return (
    <>
      <article className="pt-32 px-6 max-w-7xl mx-auto lg:pt-40">
        <header>
          <h1 className="text-4xl font-semibold text-center sm:text-5xl">
            Discover our latest blogs
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quas ab vero nostrum, illo quam ullam nisi, ea aspernatur voluptas officiis porro tempora adipisci amet inventore ipsa earum! Cum, doloremque?
          </p>
        </header>
        <h2 className="mt-8 text-2xl font-semibold md:text-3xl">Recent Blogs</h2>
        <LatestBlogs />
      </article>
      <FAQs />
      <CTA />
    </>
  );
}