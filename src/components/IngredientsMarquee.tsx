"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { TextAnimeStyle1, TextAnimeStyle2, ImgAnimeStyle1 } from "./TextAnime";

interface Ingredient {
  id: string;
  name: string;
  benefit: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    id: "lions-mane",
    name: "Lion’s Mane Mushroom",
    benefit: "Supports Focus & Clarity",
    image: "/images/Lions-Mane.png",
  },
  {
    id: "reishi",
    name: "Reishi Mushroom",
    benefit: "Helps You Stay Balanced",
    image: "/images/Reishi-Mushroom.png",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    benefit: "Supports Stress Management",
    image: "/images/Ashwagandha.png",
  },
  {
    id: "l-theanine",
    name: "L-Theanine",
    benefit: "Calm, Steady Focus",
    image: "/images/L-Theanine.png",
  },
  {
    id: "natural-caffeine",
    name: "Natural Caffeine",
    benefit: "Clean, Crash-Free Energy",
    image: "/images/Natural-Caffeine.png",
  },
  {
    id: "stevia",
    name: "Stevia Natural Sweetener",
    benefit: "No Added Sugar",
    image: "/images/Stevia-Sweetened.png",
  },
];

export default function IngredientsMarquee() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Default active card matching the screenshot (index 2: Ashwagandha or index 3: L-Theanine)
  const [activeId, setActiveId] = useState<string>("l-theanine");

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 260;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Duplicate for smooth infinite marquee
  const repeatedIngredients = [...ingredients, ...ingredients, ...ingredients];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent relative overflow-hidden" id="ingredients-sec">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 sm:mb-14">
        <TextAnimeStyle1 className="mb-2">
          <p className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase">
            WHAT’S INSIDE PILZ
          </p>
        </TextAnimeStyle1>

        <TextAnimeStyle2
          text="BUILT FOR PRODUCTIVE DAYS"
          highlightText="PRODUCTIVE DAYS"
          as="h2"
          className="font-barlow font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black"
        />

        {/* Decorative Divider with img-anime-style-1 */}
        <ImgAnimeStyle1 className="flex justify-center items-center mt-3">
          <Image
            src="/images/title-shape.png"
            alt="title shape"
            width={120}
            height={15}
            className="h-3.5 w-auto object-contain"
          />
        </ImgAnimeStyle1>
      </div>

      {/* Marquee Carousel Container (Wider desktop width matching WordPress container) */}
      <div className="relative w-full max-w-[1540px] mx-auto px-4 sm:px-8 xl:px-12 group">
        {/* Navigation arrows (styled exactly like WordPress #catSlider1 arrows) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-2 xl:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EB1400] text-white shadow-md flex items-center justify-center hover:bg-[#121212] hover:scale-105 transition-all cursor-pointer"
          aria-label="Previous ingredient"
        >
          <Image
            src="/images/left-arrow.svg"
            alt="Previous"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-2 xl:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EB1400] text-white shadow-md flex items-center justify-center hover:bg-[#121212] hover:scale-105 transition-all cursor-pointer"
          aria-label="Next ingredient"
        >
          <Image
            src="/images/right-arrow.svg"
            alt="Next"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
        </button>

        {/* Running Track */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing px-2 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="animate-marquee flex items-stretch gap-5 sm:gap-6">
            {repeatedIngredients.map((item, index) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`shrink-0 w-48 sm:w-52 md:w-56 category-card cursor-pointer group/card ${
                    isActive ? "active" : ""
                  }`}
                >
                  {/* Deckled brush bottom border (WordPress: .cat-i-bottom placed directly inside card) */}
                  <Image
                    src="/images/cat-1-bottom.png"
                    alt=""
                    width={233}
                    height={56}
                    className="cat-i-bottom select-none pointer-events-none"
                  />

                  {/* Botanical Ingredient Image */}
                  <div className="box-icon">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="max-h-24 w-auto object-contain select-none pointer-events-none"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full pb-4 z-10 flex flex-col items-center">
                    <h3 className="box-title">
                      {item.name}
                    </h3>
                    <p className="box-subtitle">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

