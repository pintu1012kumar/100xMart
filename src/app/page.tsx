import { Circle } from "lucide-react";
import { HeroSectionOne } from "../components/Herosection";
import { AnimatedTooltipPreview } from "../components/Topseller";
import Chartdetails from "@/components/Chartdetails";
import { DraggableCardDemo } from "@/components/CountryName";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSectionOne />
      <div className="relative z-10 mt-1 flex flex-wrap items-center justify-center gap-4">
        <h1>Meet Top seller</h1>
        <AnimatedTooltipPreview />
      </div>
      <Chartdetails />
      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold ">
          Top Buyer & Seller Countries :
        </h1>
        <div className="mt-20">
          <DraggableCardDemo />
        </div>
      </div>
      <div className="my-10 mx-10"><Footer /></div>

     
    </div>
  );
}
