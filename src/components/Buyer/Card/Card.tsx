'use client';

import React from 'react';
import Link from 'next/link';

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

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const imageSrc =
    post.image?.startsWith('http') && post.image.length > 10
      ? post.image
      : '/default-fallback.webp';

  return (
    <div
      key={post.id}
      className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm mx-auto flex flex-col"
    >
      {/* ✅ Clickable Image */}
      <Link href={`/buyerdashboard/100xmart/${post.slug}`}>
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-52 object-cover bg-gray-100 rounded-t-xl cursor-pointer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-fallback.webp';
          }}
        />
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* ✅ Clickable Title */}
          <Link href={`/buyerdashboard/100xmart/${post.slug}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1 hover:text-blue-600 transition cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.content}
          </p>
        </div>

        <div className="mt-auto text-right">
          <Link href={`/buyerdashboard/100xmart/${post.slug}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
