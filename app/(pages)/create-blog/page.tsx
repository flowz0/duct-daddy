import CreateBlogForm from "@/app/components/pages/dashboard/CreateBlogForm";

export default function CreateBlogPage() {
  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto lg:pt-40">
      <header>
        <h1 className="text-4xl font-semibold text-center sm:text-5xl">
          Post a Blog
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-center">
          Create a blog post by filling out the following fields.
        </p>
      </header>
      <CreateBlogForm />
    </main>
  );
}