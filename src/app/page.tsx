import Image from "next/image";
import { HeroSectionOne } from "./component/Herosection";
import { AnimatedTooltipPreview } from "./component/Topseller";

export default function Home() {
  return (
    <div>
      <HeroSectionOne />
      <div className="relative z-10 mt-1 flex flex-wrap items-center justify-center gap-4">
        <h1>Meet Top seller</h1>
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
}
