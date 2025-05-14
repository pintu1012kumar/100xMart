import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import {prisma} from '@/lib/prisma'; // ✅ Prisma client

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const file = formData.get('image') as File;

  if (!file || !title) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 1. Convert image to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 2. Create file path in /public/uploads
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  const filePath = path.join(uploadDir, file.name);

  // 3. Save file
  await writeFile(filePath, buffer);

  // 4. Save Post to DB (authorId is hardcoded for now)
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
