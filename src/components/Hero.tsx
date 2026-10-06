"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimeStyle2 } from "./TextAnime";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-0 min-h-[680px] sm:min-h-[740px] lg:min-h-[800px] xl:min-h-[860px] flex flex-col justify-between" id="hero">
      {/* 1. Background Watermark Pilz Graphic (WordPress: .hero-1 .hero-1-bg bottom: 0, left: 50%, translate(-50%)) */}
      <div className="hero-1-bg select-none pointer-events-none">
        <Image
          src="/images/PLIX-1.png"
          alt=""
          width={1520}
          height={720}
          className="w-full h-auto object-contain select-none"
          priority
        />
      </div>

      {/* 2. Shape Mockup 1: Top Right Spice (WordPress: data-top="0%" data-right="5%" class="shape-mockup d-none d-xl-block movingX") */}
      <div className="shape-mockup top-2 right-[4%] hidden xl:block movingX z-10 w-[75px]">
        <Image
          src="/images/hero-1-1.png"
          alt=""
          width={75}
          height={75}
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>

      {/* 3. Shape Mockup 2: Top Left Botanical Platter (WordPress: data-top="14%" data-left="1%" class="shape-mockup d-none d-xxl-block gsap-scroll-rotate") */}
      <div className="shape-mockup top-[14%] left-[1%] sm:left-[2%] xl:left-[3%] z-20 w-[170px] sm:w-[230px] md:w-[280px] lg:w-[330px] xl:w-[380px]">
        <div className="animate-[floatLeaf1_6s_ease-in-out_infinite]">
          <Image
            src="/images/Untitled-design-23.png"
            alt="Raw Functional Ingredients Plate"
            width={497}
            height={429}
            className="w-full h-auto object-contain drop-shadow-xl select-none pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* 4. Shape Mockup 3: Top Right Floating Stevia Leaves (WordPress: data-top="13%" data-right="2%" class="shape-mockup d-none d-xxl-block jump-reverse") */}
      <div className="shape-mockup top-[12%] right-[2%] sm:right-[3%] xl:right-[4%] jump-reverse z-10 w-[110px] sm:w-[140px] md:w-[170px] xl:w-[200px]">
        <Image
          src="/images/mini-1.png"
          alt="Stevia Leaves"
          width={200}
          height={200}
          className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
        />
      </div>

      {/* 5. Shape Mockup 4: Bottom Left Herb (WordPress: data-bottom="0%" data-left="5%" class="shape-mockup d-none d-xxl-block movingX") */}
      <div className="shape-mockup bottom-0 left-[2%] sm:left-[5%] hidden md:block movingX z-20 w-[90px] xl:w-[110px]">
        <Image
          src="/images/hero-1-4.png"
          alt=""
          width={110}
          height={110}
          className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
        />
      </div>

      {/* 6. Shape Mockup 5: Bottom Right Leaf (WordPress: data-bottom="0%" data-right="0%" class="shape-mockup d-none d-xxl-block jump") */}
      <div className="shape-mockup bottom-0 right-0 hidden sm:block jump z-20 w-[90px] md:w-[110px] xl:w-[130px]">
        <Image
          src="/images/hero-1-5.png"
          alt=""
          width={130}
          height={130}
          className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
        />
      </div>

      {/* 7. Floating Rotating Circular Badge (WordPress: .hero-img-shape-1 right: 18-20%, top: 44-55%) */}
      <div className="absolute top-[44%] sm:top-[42%] lg:top-[44%] xl:top-[46%] right-[4%] sm:right-[10%] lg:right-[16%] xl:right-[20%] z-30 cursor-pointer group select-none pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center"
        >
          {/* Green Ring with Rotating Text */}
          <div className="absolute inset-0 rounded-full bg-[#3F9065] shadow-lg spin-smoth flex items-center justify-center p-2">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="heroBadgePath"
                  d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                />
              </defs>
              <text
                fontSize="12.5"
                fontWeight="700"
                fill="#ffffff"
                letterSpacing="3"
                className="uppercase font-barlow tracking-[0.22em]"
              >
                <textPath href="#heroBadgePath" startOffset="0%">
                  more focus, more energy, and more clarity •&nbsp;
                </textPath>
              </text>
            </svg>
          </div>

          {/* Inner White Button */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-md z-10 flex flex-col items-center justify-center p-2 text-center transition-transform duration-300 group-hover:scale-105">
            <span className="font-barlow font-black text-[11px] sm:text-xs md:text-sm lg:text-[15px] uppercase text-[#E51A1A] leading-tight tracking-wider">
              START <br />
              THINKING <br />
              BETTER
            </span>
          </div>
        </motion.div>
      </div>

      {/* 8. Hero Headline & Subtitle (WordPress: .hero-style1 padding: 75px 0 0; text-align: center) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Subtitle with gsap-scale-down-fade effect (y: -500 to 0) */}
        <motion.p
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-barlow text-[#E51A1A] font-extrabold text-xs sm:text-sm md:text-lg lg:text-xl tracking-widest uppercase mb-1.5 sm:mb-2.5"
        >
          FOR PEOPLE WHO DEMAND MORE FROM THEIR MIND
        </motion.p>

        {/* Title with WordPress text-anime-style-2 character stagger */}
        <TextAnimeStyle2
          text="YOUR BRAIN HAS BEEN ASKING FOR THIS."
          as="h1"
          className="font-barlow font-black text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] tracking-tight uppercase text-[#111111] leading-[0.95] sm:leading-[0.93] max-w-5xl mx-auto"
        />
      </div>

      {/* 9. Hero Visual Scene: Center Man holding Can (Wider, authentic Untitled-design-24.png) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-6 sm:mt-8 flex-1 flex items-end justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="relative z-20 flex justify-center items-end w-full max-w-[500px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[840px] xl:max-w-[880px]"
        >
          <Image
            src="/images/Untitled-design-24.png"
            alt="Young man holding Pilz sparkling functional drink"
            width={878}
            height={594}
            className="w-full h-auto object-contain translate-y-2 select-none pointer-events-none hover:scale-102 transition-transform duration-500 drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}


