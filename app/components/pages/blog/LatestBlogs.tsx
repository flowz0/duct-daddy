import BlogCard from "./BlogCard";

export default function LatestBlogs() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold md:text-3xl">Recent Blogs</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}