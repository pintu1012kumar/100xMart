import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

export async function POST(req: Request) {
  try {
    const body = await req.json(); // ✅ Receive JSON instead of formData

    const { title, content, image } = body;

    if (!title || !content || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        image, // now directly saving URL string
        status: 'Processing', // or 'Success' based on logic
        authorId: 1,           // TODO: Replace with real user ID (session-based)
        published: false,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('POST error:', err.message);
    } else {
      console.error('POST unknown error:', err);
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: 'Success',
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, posts });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('GET error:', err.message);
    } else {
      console.error('GET unknown error:', err);
    }
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
