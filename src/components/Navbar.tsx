import React from "react";

const Navbar = () => {
  return (
   <div className="flex justify-between items-center  p-4  text-white">
    <h1 className="text-3xl font-bold text-blue-600">100xmart</h1>
    <ul>
        <li className="inline-block font-bold mr-6">
            <a href="/buyersignin" className="text-white hover:text-blue-400">Home</a>
        </li>
        <li className="inline-block font-bold mr-6">
            <a href="/sellersignin" className="text-white hover:text-blue-400">Seller Sign In</a>
        </li>
        <li className="inline-block font-bold">
            <a href="/buyerdashboard" className="text-white hover:text-blue-400">Buyer Dashboard</a>
        </li>
    </ul>
    
    <input type="text" placeholder="Search..." className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
    
    
     <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
      Logout  
    </button>
   </div>
  );
};

export default Navbar;
