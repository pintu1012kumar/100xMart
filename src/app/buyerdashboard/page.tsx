"use client";

import { ContainerTextFlipDemo } from "@/components/Buyerherosection";
import Cards from "@/components/cards";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation"; // ✅ App Router
import React from "react";

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 py-12 gap-5">
        <ContainerTextFlipDemo />
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center max-w-5xl">
          Hamara app aapka swagat karta hai! Aaiye aur hamare saath
          shopping ka maza lijiye. Aapka shopping experience behtar banane ke liye hum yahan hain.  
        </p>
        <button className="ml-2 mr-5 px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Go to shopping
      </button>
      </div>
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
