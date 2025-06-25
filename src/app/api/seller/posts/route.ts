import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const file = formData.get('image') as File;

    if (!file || !title) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 🔴 Skipping file reading/writing in Vercel

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image: `/uploads/${file.name}`, // Replace with Cloudinary URL later
        authorId: 1, // TODO: Replace with dynamic user ID
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (err) {
    console.error('POST error:', err);
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
  } catch (err) {
    console.error('GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
