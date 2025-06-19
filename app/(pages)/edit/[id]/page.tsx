import { getBlogs } from "@/lib/blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetaData({ params }: Props): Promise<Metadata> {
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return {
      title: "Blog not found | Duct Daddy",
    };
  }

  return {
    title: `Editing Blog: ${blog.title}`,
    description: blog.summary,
  };
}

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return notFound();

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto lg:pt-40">
      <header>
        <h1 className="text-4xl font-semibold text-center sm:text-5xl">
          Blog Editor: {blog.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-center">
          {blog.summary}
        </p>
      </header>
    </main>
  );
}