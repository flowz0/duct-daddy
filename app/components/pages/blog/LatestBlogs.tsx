import { getBlogs } from "@/lib/blogs";
import BlogCard from "./BlogCard";
import { BlogProps } from "@/types/blog";

export default async function LatestBlogs() {
  const blogs = await getBlogs();

  // Sort blogs by createdAt in descending order
  const sortedBlogs: BlogProps[] = blogs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Take only the top 3 most recent blogs
  const latestBlogs = sortedBlogs.slice(0, 3);

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