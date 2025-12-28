import { getBlogByLink } from "@/app/admin/blog-creator/blog-actions";
import BlogContainer from "@/components/BlogComponents/BlogContainer";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogSection from "@/components/BlogComponents/BlogSection";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ link: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { link } = await params;
  const blog = await getBlogByLink(link);

  // If blog doesn't exist or is not published, show 404
  if (!blog || !blog.isPublished) {
    notFound();
  }

  return (
    <BlogContainer>
      <div>
        <BlogHeader
          date={blog.createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        >
          {blog.title}
        </BlogHeader>
      </div>

      {blog.sections.map((section) => (
        <BlogSection key={section.id}>
          {section.type === "text" ? (
            section.content
          ) : (
            <img
              src={section.content}
              alt="Blog content"
              className="max-w-full h-auto"
            />
          )}
        </BlogSection>
      ))}
    </BlogContainer>
  );
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  const { PrismaClient } = await import("@/generated/prisma");
  const prisma = new PrismaClient();

  const blogs = await prisma.blog.findMany({
    where: { isPublished: true },
    select: { link: true },
  });

  return blogs.map((blog) => ({
    link: blog.link,
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { link } = await params;
  const blog = await getBlogByLink(link);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}
