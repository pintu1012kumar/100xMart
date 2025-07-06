import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  p-6  text-white">
      <h1 className="text-3xl font-bold mx-5 text-blue-600">100xmart</h1>
      <ul>
        <li className="inline-block font-bold mr-6">
          <a href="/buyersignin" className="text-white hover:text-blue-400">
            Home
          </a>
        </li>
        <li className="inline-block font-bold mr-6">
          <a href="/sellersignin" className="text-white hover:text-blue-400">
            Contact us
          </a>
        </li>
        <li className="inline-block font-bold">
          <a href="/buyerdashboard" className="text-white hover:text-blue-400">
            About us
          </a>
        </li>
      </ul>

      <button className="ml-2  mr-5 px-4 py-2 bg-red-700 text-white rounded-4xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
