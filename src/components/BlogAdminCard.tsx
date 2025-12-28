"use client";

import BlogCard from "@/components/BlogCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteBlog, toggleBlogPublish } from "@/app/admin/blog-creator/blog-actions";

type BlogAdminCardProps = {
  blog: {
    id: number;
    title: string;
    link: string;
    description: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
    tags: Array<{
      id: number;
      label: string;
      emoji: string | null;
      bgColor: string;
      textColor: string;
    }>;
  };
};

export default function BlogAdminCard({ blog }: BlogAdminCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePublish = async () => {
    setIsLoading(true);
    const result = await toggleBlogPublish(blog.id);
    setIsLoading(false);

    if (!result.success) {
      alert("Failed to toggle publish status: " + result.error);
    }
    router.refresh();
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      return;
    }

    setIsLoading(true);
    const result = await deleteBlog(blog.id);
    setIsLoading(false);

    if (result.success) {
      router.refresh();
    } else {
      alert("Failed to delete blog: " + result.error);
    }
  };

  return (
    <div className="relative">
      {/* Draft badge */}
      {!blog.isPublished && (
        <div className="absolute top-4 right-4 z-10 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          DRAFT
        </div>
      )}

      {/* Blog Card */}
      <BlogCard
        title={blog.title}
        url={blog.link.startsWith("http") ? blog.link : `/blogs/${blog.link}`}
        date={new Date(blog.createdAt)}
        description={blog.description.slice(0, 100)}
        tags={blog.tags || []}
      />

      {/* Admin Controls */}
      <div className="mt-2 flex gap-2">
        <button
          onClick={handleTogglePublish}
          disabled={isLoading}
          className={`px-3 py-1 rounded text-white text-sm font-semibold disabled:opacity-50 ${
            blog.isPublished
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isLoading ? "..." : blog.isPublished ? "Unpublish" : "Publish"}
        </button>

        <button
          onClick={() => router.push(`/admin/blog-creator?edit=${blog.id}`)}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm font-semibold hover:bg-blue-600"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm font-semibold hover:bg-red-600 disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
