import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const id = body.id;    

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: { status: 'Success' },
    });

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error('Error updating post status:', error);
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
