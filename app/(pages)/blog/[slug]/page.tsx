import BlogFeatures from "@/app/components/pages/blog/BlogFeatures";
import Image from "next/image";
import PlaceholderImg from "@/public/1920x1080.svg";
import CTA from "@/app/components/CTA";
import LatestBlogs from "@/app/components/pages/blog/LatestBlogs";

export default function BlogPage() {
  return (
    <>
      <article className="pt-32 pb-16 px-6 max-w-7xl mx-auto md:pt-40 md:pb-16">
        <header>
          <h1 className="text-4xl max-w-4xl mx-auto font-semibold text-center sm:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, pariatur.
          </h1>
          <BlogFeatures />
          <Image
            src={PlaceholderImg}
            alt="Blog image"
            className="mt-16 h-full w-auto object-cover rounded-lg"
            draggable={false}
          />
        </header>
        <section className="mt-12 max-w-2xl mx-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores cum ratione obcaecati neque nobis quo officiis, est aliquid possimus architecto laudantium ad. Possimus a dolorem temporibus, provident aperiam corrupti.</p>
        </section>
        <section className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores cum ratione obcaecati neque nobis quo officiis, est aliquid possimus architecto laudantium ad. Possimus a dolorem temporibus, provident aperiam corrupti.</p>
        </section>
        <section className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold sm:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores cum ratione obcaecati neque nobis quo officiis, est aliquid possimus architecto laudantium ad. Possimus a dolorem temporibus, provident aperiam corrupti.</p>
        </section>
      </article>
      <div className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="mt-12 text-2xl font-semibold md:text-3xl">Other Blogs</h2>
        <LatestBlogs />
      </div>
      <CTA />
    </>
  );
}