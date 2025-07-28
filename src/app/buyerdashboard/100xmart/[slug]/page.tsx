import { notFound } from 'next/navigation';
import CardDetails from '@/components/Buyer/Card/CardDetails';

interface Post {
  id: number;
  title: string;
  content: string;
  image?: string | null;
  published: boolean;
  status: string;
  authorId: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seller/posts/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.post;
  } catch (error) {
    console.error('Failed to fetch post', error);
    return null;
  }
}

const PostPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return <CardDetails post={post} />;
};

export default PostPage;
