import { getBlogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto lg:pt-40">
      <header>
        <h1 className="text-4xl font-semibold text-center sm:text-5xl">
          Edit Blog
        </h1>
        <p className="mt-4 max-w-sm mx-auto text-center">
          Need to make any changes to the blog? Edit the blog and save for changes to be applied.
        </p>
      </header>
      <div>
        <h2>
          {blog.title}
        </h2>
        <p>{blog.id}</p>
      </div>
    </main>
  );
}