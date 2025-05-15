import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "", {
    path: "/",
    maxAge: 0, // expire immediately
  });
  return response;
}
