import DeleteBlogBtn from "@/app/components/pages/dashboard/DeleteBlogBtn";
import EditBlogBtn from "@/app/components/pages/dashboard/EditBlogBtn";
import { getBlogs } from "@/lib/blogs";
import formatDate from "@/lib/formatDate";
import slugify from "@/lib/slugify";
import { BlogProps } from "@/types/blog";
import Link from "next/link";
import { FaFileCirclePlus } from "react-icons/fa6";

export default async function DashboardPage() {
  const blogs = await getBlogs();
  const sortedBlogs: BlogProps[] = blogs
    .filter((b): b is BlogProps => !!b.createdAt)
    .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());

  return (
    <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto lg:pt-40">
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
          <Link href="/create-blog" className="text-[#0080DB] hover:text-[hsl(205,100%,33%)] active:text-[hsl(205,100%,23%)]">
            <FaFileCirclePlus className="w-9 h-9" />
            <span className="sr-only">Create new blog</span>
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
              {sortedBlogs.length > 0 ? (
                sortedBlogs.map((blog) => {
                  const slug = slugify(blog.title);
                  const slugAndId = `${slug}-${blog.id}`;

                  return (
                    <tr key={blog.id} className="border-t">
                      <td className="py-4 px-6 font-medium truncate max-w-[8rem] lg:max-w-[12rem]">{blog.title}</td>
                      <td className="py-4 px-6 truncate max-w-[20rem] lg:max-w-[28rem]">{blog.summary}</td>
                      <td className="py-4 px-6 truncate max-w-[12rem] lg:max-w-[16rem]">{formatDate(blog.createdAt!)}</td>
                      <td className="py-4 px-6 flex items-center gap-2 max-w-[8rem] lg:max-w-[16rem]">
                        <EditBlogBtn
                          editHref={slugAndId}
                          ariaLabel={blog.title}
                        />
                        <DeleteBlogBtn
                          deleteHref={slugAndId}
                          ariaLabel={blog.title}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
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
          {sortedBlogs.length > 0 ? (
            sortedBlogs.map((blog) => {
              const slug = slugify(blog.title);
              const slugAndId = `${slug}-${blog.id}`;

              return (
                <div
                  key={blog.id}
                >
                  <div className="flex justify-between items-center gap-x-4 sm:gap-x-8">
                    <h2 className="text-lg font-semibold line-clamp-2 md:text-xl">{blog.title}</h2>
                    <div className="mt-2 flex items-center gap-2">
                      <EditBlogBtn
                        editHref={slugAndId}
                        ariaLabel={blog.title}
                      />
                      <DeleteBlogBtn
                        deleteHref={slugAndId}
                        ariaLabel={blog.title}
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{blog.createdAt}</p>
                  <p className="text-gray-700 mt-2 text-sm line-clamp-3">{blog.summary}</p>
                </div>
              );
            })
          ) : (
            <p className="mt-4">No blogs found.</p>
          )}
        </div>
      </div>
    </main>
  );
}