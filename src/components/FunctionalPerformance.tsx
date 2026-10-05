"use client";

import React from "react";
import Image from "next/image";
import { Zap, Brain, Scale, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { TextAnimeStyle1, TextAnimeStyle2, ImgAnimeStyle1 } from "./TextAnime";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  percentage: number;
  icon: React.ReactNode;
}

const benefits: BenefitItem[] = [
  {
    id: "energy",
    title: "Clean Energy",
    description: "Steady natural energy without the typical crash.",
    percentage: 95,
    icon: <Zap className="w-5 h-5 text-[#8A43C8]" />,
  },
  {
    id: "focus",
    title: "Focus & Clarity",
    description: "Built to support concentration during demanding days.",
    percentage: 90,
    icon: <Brain className="w-5 h-5 text-[#8A43C8]" />,
  },
  {
    id: "calm",
    title: "Calm Performance",
    description: "Ashwagandha and L-Theanine support balanced focus.",
    percentage: 85,
    icon: <Scale className="w-5 h-5 text-[#8A43C8]" />,
  },
  {
    id: "ingredients",
    title: "Functional Ingredients",
    description: "Lion's Mane, Reishi and adaptogens in every can.",
    percentage: 98,
    icon: <Sparkles className="w-5 h-5 text-[#8A43C8]" />,
  },
  {
    id: "sugar",
    title: "No Added Sugar",
    description: "Naturally sweetened with Stevia for a lighter choice.",
    percentage: 100,
    icon: <Leaf className="w-5 h-5 text-[#8A43C8]" />,
  },
];

export default function FunctionalPerformance() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Floating Botanical (WordPress: shape-mockup movingX) */}
      <div className="shape-mockup top-8 left-4 hidden xl:block movingX">
        <Image
          src="/images/about-leaf.png"
          alt=""
          width={90}
          height={90}
          className="object-contain opacity-70"
        />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-14 sm:mb-20">
        <TextAnimeStyle1 className="mb-2">
          <p className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase">
            FUNCTIONAL PERFORMANCE
          </p>
        </TextAnimeStyle1>

        <TextAnimeStyle2
          text="WHAT PILZ BRINGS TO YOUR DAY"
          highlightText="TO YOUR DAY"
          as="h2"
          className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black"
        />

        {/* Decorative Divider with img-anime-style-1 */}
        <ImgAnimeStyle1 className="flex justify-center items-center mt-3">
          <Image
            src="/images/title-shape.png"
            alt=""
            width={120}
            height={15}
            className="h-3.5 w-auto object-contain"
          />
        </ImgAnimeStyle1>
      </div>

      {/* 3-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Arched Image */}
          <div className="hidden lg:block lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-2/3 rounded-t-[140px] overflow-hidden shadow-xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src="/images/functional-left-arch.jpg"
                alt="Workspace setup with Pilz can"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Center Column: 5 Benefit Items with Progress Bars */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {benefits.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-4 sm:gap-5"
              >
                {/* Circular Icon Pill with hover scale */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8A43C8]/10 flex items-center justify-center shrink-0 mt-1 transition-transform hover:scale-110">
                  {item.icon}
                </div>

                {/* Text and Progress Bar */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-barlow font-bold text-xl sm:text-2xl text-black uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-500 mb-2.5">
                    {item.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2.5 bg-gray-200/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-[#8A43C8] to-[#a259e6] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Arched Image */}
          <div className="hidden lg:block lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full aspect-2/3 rounded-t-[140px] overflow-hidden shadow-xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src="/images/functional-right-arch.jpg"
                alt="Pilz can with mushroom ingredients and water splash"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
