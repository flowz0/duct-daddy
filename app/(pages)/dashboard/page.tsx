import { getBlogs } from "@/lib/blogs";
import Link from "next/link";

export default async function DashboardPage() {
  const blogs = await getBlogs();

  return (
    <main className="pt-40 px-6 max-w-7xl mx-auto">
      <header>
        <h1 className="text-4xl font-semibold text-center md:text-5xl">
          Blog Dashboard
        </h1>
        <p className="mt-4 text-center">
          Manage your blogs here. Create, view, update, or delete any blog.
        </p>
      </header>
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">
            All Blogs
          </h2>
          <Link href="/create-blog" className="bg-[#0080DB] text-[#E6E6E6] font-semibold py-2 px-4 rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]">
            Create Blog
          </Link>
        </div>
        <div className="bg-[#ffffff] mt-2 h-96 w-full overflow-x-auto overflow-y-auto rounded-lg hidden sm:block">
          <table className="w-full table-auto">
            <thead className="text-[#333333]">
              <tr className="text-left text-sm">
                <th className="py-4 px-6 max-w-[8rem] lg:max-w-[12rem]">Title</th>
                <th className="py-4 px-6 max-w-[20rem] lg:max-w-[28rem]">Summary</th>
                <th className="py-4 px-6 max-w-[12rem] lg:max-w-[16rem]">Date Created</th>
                <th className="py-4 px-6 max-w-[8rem] lg:max-w-[16rem]">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-[hsl(0,0%,30%)]">
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-t">
                  <td className="py-4 px-6 font-medium truncate max-w-[8rem] lg:max-w-[12rem]">{blog.title}</td>
                  <td className="py-4 px-6 truncate max-w-[20rem] lg:max-w-[28rem]">{blog.summary}</td>
                  <td className="py-4 px-6 truncate max-w-[12rem] lg:max-w-[16rem]">{blog.createdAt}</td>
                  <td className="py-4 px-6 space-x-1 max-w-[8rem] lg:max-w-[16rem]">
                    <Link href={`/edit/${blog.id}`} className="bg-[hsl(40,70%,80%)] text-[hsl(40,70%,20%)] py-2 px-3 rounded-md hover:bg-[hsl(40,70%,72%)]">
                      Edit
                    </Link>
                    <Link href={`/delete/${blog.id}`} className="bg-[hsl(0,70%,80%)] text-[hsl(0,70%,20%)] py-2 px-3 rounded-md hover:bg-[hsl(0,70%,72%)]">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center pt-4">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden mt-4 flex flex-col gap-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
            >
              <h2 className="text-lg font-semibold line-clamp-2 md:text-xl">{blog.title}</h2>
              <p className="mt-1 text-sm">{blog.createdAt}</p>
              <p className="text-gray-700 mt-2 text-sm line-clamp-3">{blog.summary}</p>
              <div className="mt-2 space-x-2">
                <Link
                  href={`/edit/${blog.id}`}
                  className="bg-[hsl(205,100%,33%)] text-[#E6E6E6] inline-block py-1 px-2 rounded-lg text-sm font-medium"
                >
                  Edit
                </Link>

                <Link
                  href={`/edit/${blog.id}`}
                  className="bg-[hsl(0,100%,33%)] text-[#E6E6E6] inline-block py-1 px-2 rounded-lg text-sm font-medium"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
          {blogs.length === 0 && (
            <p className="mt-4">No blogs found.</p>
          )}
        </div>
      </div>
    </main>
  );
}