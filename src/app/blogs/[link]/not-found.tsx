import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Blog Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
        Sorry, the blog post you're looking for doesn't exist or hasn't been
        published yet.
      </p>
      <Link
        href="/blogs"
        className="px-6 py-3 bg-emerald-500 dark:bg-emerald-400 text-white rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors font-semibold"
      >
        View All Blogs
      </Link>
    </div>
  );
}
