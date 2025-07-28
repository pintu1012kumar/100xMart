import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop(); // extracts [slug] from URL

  if (!slug) {
    return NextResponse.json(
      { success: false, error: 'Slug is required' },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (error) {
    console.error('[GET_POST_BY_SLUG_ERROR]', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
