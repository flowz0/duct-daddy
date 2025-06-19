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
      <form className="mt-8 max-w-2xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="readTime">Read Time</label>
          <input
            type="number"
            name="readTime"
            id="readTime"
            placeholder="0-60 (minutes)"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Blog title"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary">Blog Summary</label>
          <input
            type="text"
            name="summary"
            id="summary"
            placeholder="Summary of the blog post"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="thumbnail">Blog Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="header1">First Header</label>
          <input
            type="text"
            name="header1"
            id="header1"
            placeholder="Header one for the blog post"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paragraph1">First Paragraph</label>
          <textarea
            rows={3}
            name="paragraph1"
            id="paragraph1"
            placeholder="Paragraph one for the blog post"
            className="mt-1 py-3 px-4 rounded-md resize-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="header2">Second Header</label>
          <input
            type="text"
            name="header2"
            id="header2"
            placeholder="Header two for the blog post"
            className="mt-1 py-3 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paragraph2">Second Paragraph</label>
          <textarea
            rows={3}
            name="paragraph2"
            id="paragraph2"
            placeholder="Paragraph two for the blog post"
            className="mt-1 py-3 px-4 rounded-md resize-none"
          />
        </div>
        <button 
          type="button"
          className="bg-[#0080DB] text-[#E6E6E6] mt-4 py-3 px-4 w-full font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
        >
          Post Blog
        </button>
      </form>
    </main>
  );
}