// src/app/api/seller/posts/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    const { slug } = context.params;

    const post = await prisma.post.findFirst({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, post });
  } catch (err) {
    console.error('Error fetching post by slug:', err);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
