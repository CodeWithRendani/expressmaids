import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const loggedIn = req.cookies.get("admin_logged_in")?.value;

  // Allow login page
  if (req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // Protect admin routes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (loggedIn !== "true") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};