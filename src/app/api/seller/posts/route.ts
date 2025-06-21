import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { prisma } from '@/lib/prisma';


export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const file = formData.get('image') as File;

  if (!file || !title) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  const filePath = path.join(uploadDir, file.name);

  await writeFile(filePath, buffer);

  const post = await prisma.post.create({
    data: {
      title,
      content,
      image: `/uploads/${file.name}`,
      authorId: 1, // Replace with real user id when using auth
    },
  });

  return NextResponse.json({ success: true, post });
}


export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: {
        status: 'Success', // Only get posts with Success status
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

