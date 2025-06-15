import BlogCard from "./BlogCard";

export default function LatestBlogs() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}