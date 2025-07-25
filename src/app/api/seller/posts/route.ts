import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import slugify from 'slugify';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const file = formData.get('image') as File;

    if (!title || !content || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    // NOTE: Save this `bytes` to file system or cloud (you decide)
    // For now we just fake the image URL
    const imageUrl = `/uploads/${file.name}`;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        image: imageUrl,
        status: 'Processing',   // or 'Success' depending on logic
        authorId: 1,            // TODO: Replace with actual logged-in user ID
        published: false,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (err: any) {
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
