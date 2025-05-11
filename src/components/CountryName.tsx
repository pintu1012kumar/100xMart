import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      id: 1,
      title: "Canada",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/960px-Flag_of_Canada_%28Pantone%29.svg.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      id: 2,
      title: "Japan",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      id: 3,
      title: "South Korea",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      id: 4,
      title: "India",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      id: 5,
      title: "China",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/330px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      id: 6,
      title: "Germany",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      id: 7,
      title: "United States",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/960px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        To be among the top countries, you should increase both your buying and selling on the platform.
      </p>

      {items.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
