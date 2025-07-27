'use client';

import React from 'react';

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

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  // Ensure the image path starts with "/uploads/"
  const imageSrc = post.image ? post.image.startsWith('/uploads') ? post.image : `/uploads/${post.image}` : '/uploads/default.png';

  return (
    <div
      key={post.id}
      className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm mx-auto flex flex-col"
    >
      <img
        src={imageSrc}
        alt={post.title}
        className="w-full h-52 object-contain bg-gray-100 rounded-t-xl"
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.content}
          </p>
        </div>
        <div className="mt-auto text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
