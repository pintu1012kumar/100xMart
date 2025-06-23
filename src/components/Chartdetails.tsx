import React from "react";
import { Component } from "./Graph";

const Chartdetails = () => {
  return (
    <div className="p-4 mx-4 md:mx-10 mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Graph/Component */}
        <div className="w-full md:w-2/3">
          <Component />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/3 p-4 border border-border rounded-lg">
          <h1 className="font-bold text-3xl md:text-4xl pt-6 md:pt-10 text-center mb-4">
            About chart:
          </h1>
          <p className="text-lg md:text-2xl text-center pt-6 md:pt-10 text-muted-foreground">
            This Bar chart displays a monthly comparison between the{" "}
            <span className="text-blue-400">number of buyers and sellers</span>{" "}
            on the platform. It helps visualize user engagement trends, market
            dynamics, and overall growth. Monitoring these trends allows for
            better business planning and understanding of platform activity.
          </p>

          {/* Legend */}
          <div className="mt-6 md:mt-10 flex flex-col items-center">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-sm">Buyer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                <span className="text-sm">Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chartdetails;
