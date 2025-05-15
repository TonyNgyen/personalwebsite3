import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();
  const correctPassword = process.env.ADMIN_PASSWORD || "yourAdminPassword";

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return response;
  }

  return new NextResponse("Unauthorized", { status: 401 });
}
