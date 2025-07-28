"use client";

import React from "react";

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
  post: Post;
}

const CardDetails: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <div className="mt-10 mb-6">
        <h1 className="text-6xl font-bold mb-4 text-white text-center">
          {post.title}
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-10  rounded-lg shadow-md">
        <p className="text-sm text-gray-500 mb-6">
          Posted on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-contain mb-6 rounded"
          />
        )}
        <div className="text-lg text-gray-700 whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
