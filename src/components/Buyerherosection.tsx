"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["Mart", "mart", "Buyer", "Seller"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block ">
        Your most welcome in 100x <ContainerTextFlip words={words}  /> 
       {" "} !! {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
