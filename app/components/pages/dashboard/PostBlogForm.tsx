"use client";

import { BlogProps } from "@/types/blog";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PostBlogForm() {
  const [blogData, setBlogData] = useState<BlogProps>({
    readTime: 0,
    title: "",
    summary: "",
    img: null,
    header: "",
    paragraph: "",
    header2: "",
    paragraph2: "",
  });
  const [previewUrl, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    if (blogData.img instanceof File) {
      const objectUrl = URL.createObjectURL(blogData.img);
      setPreviewURL(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [blogData.img]);

  return (
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
          id="thumbnail*"
          accept="image/"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setBlogData((prev) => ({ ...prev, img: file }));
          }}
          className="mt-1 py-3 px-4 rounded-md"
        />
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview"
            height={1920}
            width={1080}
            className="w-32 h-32 object-cover"
          />
        )}
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
  );
}