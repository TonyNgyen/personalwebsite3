import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/blog";
import Link from "next/link";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <h1 className="text-4xl font-semibold pl-4">All Blogs</h1>
      {blogs.length != 0 ? (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              url={
                blog.link.startsWith("http") ? blog.link : `/blogs/${blog.link}`
              }
              date={new Date(blog.createdAt)}
              description={blog.content.slice(0, 100)}
              tags={blog.tags?.map(({ tag }) => tag) || []}
            />
          ))}
        </div>
      ) : (
        <div className="pl-4">
          <div className="text-xl font-semibold mb-4">
            There are no blogs yet...
          </div>
          <Link href="/" className="group flex items-center gap-2">
            <FiChevronLeft className="text-2xl transition-transform duration-200 group-hover:-translate-x-2 group-hover:text-emerald-500" />

            <h2 className="text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 group-hover:underline-offset-4 transition-all duration-200">
              Go back home
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
