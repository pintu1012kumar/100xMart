import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const buyertoken = request.cookies.get("buyertoken")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/sellerdashboard") && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (pathname.startsWith("/buyerdashboard") && !buyertoken) {
    return NextResponse.redirect(new URL("/buyersignin", request.url));
  }

  if ((pathname === "/buyersignin" || pathname === "/buyersignup" || pathname === "/signin" || pathname === "/signup") && token) {
    return NextResponse.redirect(new URL("/sellerdashboard", request.url));
  }
  if ((pathname === "/buyersignin" || pathname === "/buyersignup" || pathname === "/signin" || pathname === "/signup") && buyertoken) {
    return NextResponse.redirect(new URL("/buyerdashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sellerdashboard", "/signin", "/signup" , "/buyerdashboard", "/buyersignin", "/buyersignup"],
};
