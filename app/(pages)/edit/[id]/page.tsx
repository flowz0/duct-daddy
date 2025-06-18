import { getBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function EditBlogPage({
  params,
}: {
  params: {id: string};
}) {
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return notFound();

  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <header>
        <h1>Edit: {blog.title}</h1>
        <p>{blog.summary}</p>
      </header>
    </main>
  );
}