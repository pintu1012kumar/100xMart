"use client";
import ReverseExample from "@/components/Axischartbar";
import { HeroSectionOne } from "../components/Herosection";
import { AnimatedTooltipPreview } from "../components/Topseller";
import Chartdetails from "@/components/Chartdetails";
import { DraggableCardDemo } from "@/components/CountryName";
import Footer from "@/components/Footer";
import { CompareDemo } from "@/components/CompareDemo";

export default function Home() {
  return (
    <div>
      <HeroSectionOne />
      <div className="relative z-10 mt-1 flex flex-wrap items-center justify-center gap-4">
        <h1>Meet Top seller</h1>
        <AnimatedTooltipPreview />
      </div>
      <Chartdetails />
      <div className="mt-20 mx-20 my-20">
        <h1 className="text-center text-4xl font-bold ">
        Buyer & Seller Page here !!
        </h1>
        <div className="flex justify-center items-center mt-20 mb-20 px-20">
          <CompareDemo />
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold ">
          Top Buyer & Seller Countries :
        </h1>
        <div className="mt-20">
          <DraggableCardDemo />
        </div>
      </div>
      <div className="mt-20 mx-20 my-20">
        <h1 className="text-center text-4xl font-bold ">
          Monthly Buyer & Seller :
        </h1>
        <div className="mt-20 mx-20 my-20">
          <ReverseExample />
        </div>
      </div>
      <div className="my-10 mx-10">
        <Footer />
      </div>
    </div>
  );
}
