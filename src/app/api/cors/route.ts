// app/api/yourendpoint/route.ts
import { NextRequest } from "next/server";
import { setCorsHeaders } from "@/lib/cors";

export async function GET(req: NextRequest) {
  const response = new Response(JSON.stringify({ message: "CORS success" }), {
    status: 200,
  });

  return setCorsHeaders(response);
}

export async function OPTIONS() {
  // Pre-flight CORS support
  return setCorsHeaders(new Response(null, { status: 204 }));
}
