"use client";

import { useRouter } from "next/navigation"; 
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/buyer/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        router.push("/buyersignin");
      } else {
        console.error("Logout response not OK");
        alert("Logout failed.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed.");
    }
  };

  return (
    <div className="flex justify-between items-center p-6 text-white">
      <h1 className="text-3xl font-bold mx-5 text-blue-600">100xmart</h1>
      
      <ul className="flex space-x-6">
        <li className="font-bold">
          <a href="/buyersignin" className="hover:text-blue-400">Home</a>
        </li>
        <li className="font-bold">
          <a href="/sellersignin" className="hover:text-blue-400">Contact Us</a>
        </li>
        <li className="font-bold">
          <a href="/buyerdashboard" className="hover:text-blue-400">About Us</a>
        </li>
      </ul>

      <button 
        onClick={handleLogout}
        className="ml-4 px-4 py-2 bg-red-700 hover:bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
