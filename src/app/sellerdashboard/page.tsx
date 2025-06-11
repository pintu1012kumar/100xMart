'use client';

import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

type PostInput = {
  title: string;
  content: string;
  file: File | null;
};

const SellerDashboard = () => {
  const [postInputs, setPostInputs] = useState<PostInput>({
    title: '',
    content: '',
    file: null,
  });

  async function sendRequest() {
    if (!postInputs.title || !postInputs.file) {
      return alert('Title and image are required');
    }

    const formData = new FormData();
    formData.append('title', postInputs.title);
    formData.append('content', postInputs.content);
    formData.append('image', postInputs.file); // 'image' matches the backend key

    try {
      const response = await axios.post('/api/seller/posts', formData);
      console.log('Post created:', response.data);
      alert('Post created successfully!');
    } catch (error) {
      console.error('Post creation failed:', error);
      alert('Failed to create post.');
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-extrabold mb-4 text-white">List Your Product Here ..</div>

        <LabelInput
          label="Title"
          placeholder="Post Title"
          onChange={(e) =>
            setPostInputs((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <LabelInput
          label="Content"
          placeholder="Write something..."
          onChange={(e) =>
            setPostInputs((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <LabelInput
          label="Image Upload"
          type="file"
          onChange={(e) =>
            setPostInputs((prev) => ({
              ...prev,
              file: e.target.files ? e.target.files[0] : null,
            }))
          }
        />

        <button
          type="button"
          onClick={sendRequest}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-3 w-1/2"
        >
          Submit Post
        </button>

        
      </div>

      <div className="hidden md:flex bg-gray-500 justify-center items-center">
        <div className="max-w-md p-4">
          <div className="text-2xl font-bold text-white">
            &ldquo;The customer service I received was exceptional. The support team went above and beyond to address my concern.&rdquo;
          </div>
          <div className="text-xl font-semibold mt-2 text-white">Julies Winfield</div>
          <div className="text-sm font-medium text-slate-200 mt-1">
            CEO | Acme corp
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelInputType {
  label: string;
  placeholder?: string; 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}


function LabelInput({ label, placeholder, onChange, type }: LabelInputType) {
  return (
    <div className="my-2 w-1/2">
      <label className="block mb-1 text-sm font-medium text-white">{label}</label>
      <input
        type={type ?? 'text'}
        onChange={onChange}
        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required={type !== 'file'}
      />
    </div>
  );
}

export default SellerDashboard;