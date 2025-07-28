"use client";

import { ContainerTextFlipDemo } from "@/components/Buyerherosection";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

export default function WelcomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 py-12 gap-5">
        <ContainerTextFlipDemo />
        <p className="text-2xl text-gray-600 dark:text-gray-300 text-center max-w-5xl">
          Hamara app aapka swagat karta hai! Aaiye aur hamare saath shopping ka
          maza lijiye. Aapka shopping experience behtar banane ke liye hum yahan
          hain.
        </p>
        <button 
        onClick={ () => router.push("buyerdashboard/100xmart")}
        className="ml-2 mr-5 px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Go to shopping
        </button>
      </div>
    </div>
  );
}
