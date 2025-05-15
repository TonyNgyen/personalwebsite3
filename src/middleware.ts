// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("admin-auth")?.value === "true";
  const isOnLoginPage = req.nextUrl.pathname === "/admin/login";

  if (
    !isLoggedIn &&
    req.nextUrl.pathname.startsWith("/admin") &&
    !isOnLoginPage
  ) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
