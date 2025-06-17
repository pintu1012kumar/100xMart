"use client";

import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type PostInput = {
  title: string;
  content: string;
  file: File | null;
};

const SellerDashboard = () => {
  const [postInputs, setPostInputs] = useState<PostInput>({
    title: "",
    content: "",
    file: null,
  });

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/seller/logout", {
        method: "GET",
        credentials: "include",
      });
      router.push("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed.");
    }
  };

  const sendRequest = async () => {
    if (!postInputs.title || !postInputs.file) {
      return alert("Title and image are required");
    }

    const formData = new FormData();
    formData.append("title", postInputs.title);
    formData.append("content", postInputs.content);
    formData.append("image", postInputs.file);

    try {
      const response = await axios.post("/api/seller/posts", formData);
      console.log("Post created:", response.data);
      alert("Post created successfully!");
      setPostInputs({ title: "", content: "", file: null }); // Reset form
    } catch (error) {
      console.error("Post creation failed:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side Welcome Panel */}
      <div className="hidden md:flex bg-gray-500 justify-center items-center">
        <div className="max-w-md p-4">
          <div className="text-2xl font-bold text-white">
            <span className="text-4xl">Welcome to 100xmart !!</span>
            <div>Now you can list your product here.</div>
          </div>
          <div className="text-xl font-semibold mt-2 text-white">~ Pintu Kumar</div>
          <div className="text-sm font-medium text-slate-200 mt-1">
            CEO | 100xmart
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex justify-center items-center flex-col">
        <div className="text-3xl font-extrabold mb-4 text-white">
          List Your Product Here ..
        </div>

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
              file: e.target.files?.[0] || null,
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
      <label className="block mb-1 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type ?? "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required={type !== "file"}
      />
    </div>
  );
}

export default SellerDashboard;
