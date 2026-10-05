"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimeStyle2 } from "./TextAnime";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EFECE1] pt-14 sm:pt-20 lg:pt-24 pb-0 min-h-[720px] sm:min-h-[800px] lg:min-h-[860px] flex flex-col justify-between">
      {/* 1. Background Watermark Pilz Graphic (WordPress: hero-1-bg) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 z-0 select-none">
        <Image
          src="/images/hero-watermark.png"
          alt=""
          width={1100}
          height={600}
          className="object-contain scale-110 sm:scale-125"
          priority
        />
      </div>

      {/* 2. Shape Mockup 1: Top Right Spice (WordPress: top: 0%, right: 5%, movingX) */}
      <div className="shape-mockup top-2 sm:top-4 right-[5%] hidden md:block movingX z-10">
        <Image
          src="/images/hero-shape-spice.png"
          alt=""
          width={76}
          height={76}
          className="object-contain opacity-85"
        />
      </div>

      {/* 3. Shape Mockup 2: Top Left Botanical Leaf (WordPress: top: 14%, left: 1%, rotate) */}
      <div className="shape-mockup top-[14%] left-[1%] hidden lg:block z-10">
        <div className="animate-[floatLeaf1_6s_ease-in-out_infinite]">
          <Image
            src="/images/hero-shape-leaf-left.png"
            alt=""
            width={130}
            height={130}
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* 4. Shape Mockup 3: Top Right Floating Mini Can (WordPress: top: 13%, right: 2%, jump-reverse) */}
      <div className="shape-mockup top-[13%] right-[2%] hidden lg:block jump-reverse z-10">
        <Image
          src="/images/hero-shape-mini-can.png"
          alt=""
          width={80}
          height={140}
          className="object-contain drop-shadow-lg"
        />
      </div>

      {/* 5. Shape Mockup 4: Bottom Left Herb (WordPress: bottom: 0%, left: 5%, movingX) */}
      <div className="shape-mockup bottom-0 left-[2%] sm:left-[5%] hidden sm:block movingX z-20">
        <Image
          src="/images/hero-shape-herb-left.png"
          alt=""
          width={120}
          height={120}
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* 6. Shape Mockup 5: Bottom Right Leaf (WordPress: bottom: 0%, right: 0%, jump) */}
      <div className="shape-mockup bottom-0 right-0 hidden sm:block jump z-20">
        <Image
          src="/images/hero-shape-leaf-right.png"
          alt=""
          width={150}
          height={150}
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* 7. Floating Rotating Circular Badge (WordPress: hero-img-shape-1 -> right: 16%, top: 36%) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="absolute top-[32%] sm:top-[34%] lg:top-[35%] right-[4%] sm:right-[10%] lg:right-[15%] z-30 cursor-pointer group"
      >
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          {/* Outer Green Ring with 55s smooth rotation (WordPress spin-smoth) */}
          <div className="absolute inset-0 rounded-full bg-[#388E64] shadow-xl spin-smoth">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="textRingPath"
                  d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text
                fontSize="13"
                fontWeight="700"
                fill="#ffffff"
                letterSpacing="3.5"
                className="uppercase font-barlow tracking-[0.25em]"
              >
                <textPath href="#textRingPath" startOffset="0%">
                  more focus, more energy, and more clarity •&nbsp;
                </textPath>
              </text>
            </svg>
          </div>

          {/* Inner White Circle with Red CTA Text */}
          <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-white z-10 flex flex-col items-center justify-center p-3 text-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <span className="font-barlow font-black text-xs sm:text-sm uppercase text-[#E51A1A] leading-tight tracking-wider">
              START <br />
              THINKING <br />
              BETTER
            </span>
          </div>
        </div>
      </motion.div>

      {/* 8. Hero Headline & Subtitle */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Subtitle with gsap-scale-down-fade effect */}
        <motion.p
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-barlow text-[#E51A1A] font-extrabold text-sm sm:text-base md:text-xl tracking-widest uppercase mb-3"
        >
          FOR PEOPLE WHO DEMAND MORE FROM THEIR MIND
        </motion.p>

        {/* Title with WordPress text-anime-style-2 letter stagger */}
        <TextAnimeStyle2
          text="YOUR BRAIN HAS BEEN ASKING FOR THIS."
          as="h1"
          className="font-barlow font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-tight uppercase text-[#111111] leading-[0.93] max-w-5xl mx-auto"
        />
      </div>

      {/* 9. Hero Visual Scene: Ingredients Platter, Center Man with Can */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 sm:mt-12 flex-1 flex items-end justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
        {/* Left Elements: Fresh Ingredients Platter */}
        <div className="absolute left-2 sm:left-6 lg:left-10 bottom-0 z-20 hidden sm:flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -70, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="movingX"
          >
            <Image
              src="/images/hero-ingredients.png"
              alt="Raw Functional Ingredients - Lion's Mane, Reishi, Cinnamon, Herbs"
              width={380}
              height={380}
              className="w-44 sm:w-60 md:w-72 lg:w-[340px] object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>

        {/* Center Element: Man holding Can forward (WordPress: hero-img1 gsap-scale-up-fade) */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="relative z-20 flex justify-center items-end"
        >
          <Image
            src="/images/hero-man-can.png"
            alt="Young man holding Pilz sparkling functional drink"
            width={640}
            height={580}
            className="w-72 sm:w-[460px] md:w-[540px] lg:w-[620px] object-contain translate-y-2 select-none pointer-events-none hover:scale-102 transition-transform duration-500 drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
