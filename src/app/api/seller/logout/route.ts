// /app/api/logout/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/signin', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));

  // Clear the JWT cookie
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
