import { setCorsHeaders } from "@/lib/cors";

// GET Example (optional - you can remove if not needed)
export async function GET() {
  const response = new Response(JSON.stringify({ message: "CORS is working!" }), {
    status: 200,
  });

  return setCorsHeaders(response);
}

// OPTIONS handler for preflight CORS requests
export async function OPTIONS() {
  return setCorsHeaders(new Response(null, { status: 204 }));
}
