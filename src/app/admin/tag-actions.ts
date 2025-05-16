"use server";

import { prisma } from "@/lib/prisma";

export async function createTag(formData: FormData) {
  const label = formData.get("label") as string;
  const emoji = formData.get("emoji") as string;
  const bgColor = formData.get("bgColor") as string;
  const textColor = formData.get("textColor") as string;

  await prisma.tag.create({
    data: { label, emoji, bgColor, textColor },
  });
}

export async function getAllTags() {
  return await prisma.tag.findMany();
}
