// /app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/buyersignin', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));

  // Clear the JWT cookie
  response.cookies.set('buyertoken', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
