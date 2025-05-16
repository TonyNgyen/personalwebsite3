"use server";

import { prisma } from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const content = formData.get("content") as string;

  if (!title || !link || !content) {
    throw new Error("All fields required.");
  }

  await prisma.blog.create({
    data: { title, link, content },
  });

  revalidatePath("/"); // Revalidate homepage or blog list if needed
}
