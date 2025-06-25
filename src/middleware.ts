import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPreflight = request.method === "OPTIONS";

  // ✅ 1. Handle Preflight CORS requests
  if (isPreflight && pathname.startsWith("/api")) {
    return new NextResponse(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // ✅ 2. Auth redirect logic
  const token = request.cookies.get("token")?.value;
  const buyertoken = request.cookies.get("buyertoken")?.value;

  if (pathname.startsWith("/sellerdashboard") && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (pathname.startsWith("/buyerdashboard") && !buyertoken) {
    return NextResponse.redirect(new URL("/buyersignin", request.url));
  }

  if (
    ["/buyersignin", "/buyersignup", "/signin", "/signup"].includes(pathname) &&
    token
  ) {
    return NextResponse.redirect(new URL("/sellerdashboard", request.url));
  }

  if (
    ["/buyersignin", "/buyersignup", "/signin", "/signup"].includes(pathname) &&
    buyertoken
  ) {
    return NextResponse.redirect(new URL("/buyerdashboard", request.url));
  }

  // ✅ 3. Add CORS headers to regular API responses
  const response = NextResponse.next();
  if (pathname.startsWith("/api")) {
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
  }

  return response;
}

// ✅ Match both frontend routes (auth) and API routes (CORS)
export const config = {
  matcher: [
    "/api/:path*", // CORS
    "/sellerdashboard",
    "/signin",
    "/signup",
    "/buyerdashboard",
    "/buyersignin",
    "/buyersignup",
  ],
};
