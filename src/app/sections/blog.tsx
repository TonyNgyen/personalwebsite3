import React from "react";
import { Tooltip } from "../../components/Tooltip";
import { FiChevronRight, FiInfo } from "react-icons/fi";
import { getBlogs } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

async function Blog() {
  const blogs = await getBlogs();
  return (
    <div className="space-y-4 tracking-wide -ml-4">
      <div className="flex items-center pl-4">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <Tooltip text="In-depth posts on projects, app updates, and topics I care about.">
          <button className="ml-2 flex items-center text-2xl text-emerald-500">
            <FiInfo />
          </button>
        </Tooltip>
      </div>

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
      <a href="/blog" className="group flex items-center gap-2">
        <h2 className="pl-4 text-xl font-semibold group-hover:underline group-hover:decoration-emerald-500 group-hover:underline-offset-4 transition-all duration-200">
          View All Blogs
        </h2>
        <FiChevronRight className="text-2xl transition-transform duration-200 group-hover:translate-x-2 group-hover:text-emerald-500" />
      </a>
    </div>
  );
}

export default Blog;
