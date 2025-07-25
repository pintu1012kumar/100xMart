'use client';

import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Post {
  id: number;
  title: string;
  content: string;
  image?: string | null;
  published: boolean;
  status: string;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

const CardGrid: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/seller/posts');
        const data = await res.json();
        if (data.success && Array.isArray(data.posts)) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error('Failed to fetch posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-lg">Loading…</p>;
  }

  return (
    <div className="mt-8 px-6">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-white">Explore Our Posts</h1>
        <h3 className="text-white mt-4">Discover great content handpicked for you.Discover great content handpicked for you</h3>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-12 mt-8">

        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
