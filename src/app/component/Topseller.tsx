"use client";
import React from "react";
import { AnimatedTooltip } from "../component/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Nike",
    designation: "Shoes ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gIuzJHaSC7W4RTt96V8rrz_DldU3_8cGMQ&s",
  },
  {
    id: 2,
    name: "Adidas",
    designation: "Shoes & Clothing ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qNJBJip37oDNDnh8fyEDj5FEaPjKMokblg&s",
  },
  {
    id: 3,
    name: "Puma",
    designation: "Clothing & Accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVGYMFAUBkELI-tyg7H5lKXzDI68WVQADSg&s",
  },
   {
    id: 4,
    name: "Apple",
    designation: "Apple products",
    image:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
  },
  {
    id: 5,
    name: "Samsung",
    designation: "Electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcYoj_NM6ELO-kJTqMUFCaDmtWPVfla_ELA&s",
  },
 
  {
    id: 6,
    name: "Havellas",
    designation: "Electronics",
    image:
      "data:image/png;base64,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",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
