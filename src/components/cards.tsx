import React from "react";

const Cards = () => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="w-full h-48 object-cover"
      />

      {/* Card content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          A card component has a figure, a body part, and inside the body,
          there are title and actions parts. It’s fully customizable using
          Tailwind CSS.
        </p>
        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg font-medium transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
