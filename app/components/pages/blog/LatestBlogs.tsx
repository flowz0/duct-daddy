import BlogCard from "./BlogCard";

export default function LatestBlogs() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold md:text-3xl">Recent Blogs</h2>
      <div className="mt-4 flex flex-col gap-8 md:flex-row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}