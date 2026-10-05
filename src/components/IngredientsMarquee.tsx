"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
  benefit: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    benefit: "Supports Stress Management",
    image: "/images/ashwagandha.png",
  },
  {
    id: "l-theanine",
    name: "L-Theanine",
    benefit: "Calm, Steady Focus",
    image: "/images/l-theanine.png",
  },
  {
    id: "natural-caffeine",
    name: "Natural Caffeine",
    benefit: "Clean, Crash-Free Energy",
    image: "/images/natural-caffeine.png",
  },
  {
    id: "stevia",
    name: "Stevia Natural Sweetener",
    benefit: "No Added Sugar",
    image: "/images/stevia-sweetened.png",
  },
  {
    id: "lions-mane",
    name: "Lion’s Mane Mushroom",
    benefit: "Supports Focus & Clarity",
    image: "/images/lions-mane.png",
  },
  {
    id: "reishi",
    name: "Reishi Mushroom",
    benefit: "Helps You Stay Balance",
    image: "/images/reishi-mushroom.png",
  },
];

export default function IngredientsMarquee() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // We repeat ingredients to ensure smooth continuous marquee
  const repeatedIngredients = [...ingredients, ...ingredients, ...ingredients];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 sm:mb-14">
        <p className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase mb-2">
          WHAT’S INSIDE PILZ
        </p>

        <h2 className="font-barlow font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black">
          BUILT FOR <span className="text-[#8A43C8]">PRODUCTIVE DAYS</span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center mt-3">
          <Image
            src="/images/title-shape.png"
            alt=""
            width={120}
            height={15}
            className="h-3.5 w-auto object-contain"
          />
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div className="relative w-full group">
        {/* Navigation arrows (visible on desktop hover) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 border border-gray-200 shadow-lg items-center justify-center text-gray-700 hover:text-black hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 border border-gray-200 shadow-lg items-center justify-center text-gray-700 hover:text-black hover:scale-110 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Infinite Running Marquee Track */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="animate-marquee flex items-stretch gap-6 sm:gap-8 px-4 py-4">
            {repeatedIngredients.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 w-52 sm:w-60 md:w-64 flex flex-col items-center bg-[#EFECE1] rounded-t-[100px] pt-8 pb-0 px-4 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group/card"
              >
                {/* Ingredient Image */}
                <div className="h-28 sm:h-32 flex items-center justify-center relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={110}
                    height={110}
                    className="max-h-24 sm:max-h-28 w-auto object-contain group-hover/card:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="w-full pb-8 z-10 flex flex-col items-center">
                  <h3 className="font-barlow font-bold text-lg sm:text-xl text-black uppercase tracking-wide leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
                    {item.benefit}
                  </p>
                </div>

                {/* Deckled/brush bottom border */}
                <div className="w-full h-4 relative -mt-1 select-none pointer-events-none">
                  <Image
                    src="/images/cat-bottom.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
