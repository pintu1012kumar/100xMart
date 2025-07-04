'use client';

import Cards from '@/components/cards';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation'; // ✅ App Router
import React from 'react';

export default function WelcomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/buyer/logout", {
        method: "GET",
        credentials: "include",
      });
      router.push("/buyersignin"); 
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed.");
    }
  };

  return (
    <div>

    <Navbar/>
    <Cards/>
    </div>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 text-center">
    //   <h1 className="text-5xl font-bold text-indigo-700 mb-4">Welcome to 100xmart!</h1>
    //   <p className="text-lg text-gray-700 max-w-xl mb-8">
    //     Your one-stop marketplace for buyers and sellers. Explore opportunities, connect with others, and grow your business.
    //   </p>

    //   <button
    //     onClick={handleLogout}
    //     className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:scale-[1.03] transition-all duration-200"
    //   >
    //     Logout
    //   </button>
    // </div>
  );
}
