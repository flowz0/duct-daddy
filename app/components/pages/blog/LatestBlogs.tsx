import { getBlogs } from "@/lib/blogs";
import BlogCard from "./BlogCard";
import { BlogProps } from "@/types/blog";

export default async function LatestBlogs() {
  const blogs = await getBlogs();

  const latestBlogs = blogs
    .filter((b): b is BlogProps => !!b.createdAt)
    .sort((a,b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime())
    .slice(0, 3);

  return (
    <section className="mt-2">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {latestBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}