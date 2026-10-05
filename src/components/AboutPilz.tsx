"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextAnimeStyle1, TextAnimeStyle2 } from "./TextAnime";

export default function AboutPilz() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Floating Mint Leaf (WordPress: shape-mockup jump-reverse at bottom: 15%, right: 2%) */}
      <div className="shape-mockup bottom-[15%] right-2 lg:right-6 hidden md:block jump-reverse z-10">
        <Image
          src="/images/about-leaf.png"
          alt=""
          width={110}
          height={110}
          className="object-contain opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Rotating Can GIF with Purple Radial Ambient Glow */}
          <div className="flex justify-center items-center relative">
            {/* Glow backdrop with pulse */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#8A43C8]/15 blur-3xl -z-10 pointer-events-none glow-purple" />

            <div className="relative w-64 sm:w-80 md:w-96 flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/can-3d-spin.gif"
                alt="3D Rotating Pilz Focus Can"
                width={360}
                height={520}
                unoptimized
                className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column: Text Information & CTA */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Subtitle with text-anime-style-1 */}
            <TextAnimeStyle1 className="mb-2">
              <span className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase">
                ABOUT PILZ
              </span>
            </TextAnimeStyle1>

            {/* Title with text-anime-style-2 */}
            <TextAnimeStyle2
              text="EVERY SIP WORKS SMARTER"
              highlightText="WORKS SMARTER"
              as="h2"
              className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black leading-none mb-6"
            />

            <p className="text-gray-600 font-sans text-base sm:text-lg leading-relaxed mb-8">
              Pilz was created to offer something different. A sparkling functional
              drink powered by Lion&apos;s Mane, Reishi, Ashwagandha, L-Theanine, and
              natural caffeine to help you stay focused, energized, and balanced
              throughout your day.
            </p>

            <div className="mb-10">
              <h4 className="font-barlow font-bold text-xl sm:text-2xl text-black uppercase tracking-wide mb-2">
                Crafted For Modern Minds
              </h4>
              <p className="font-sans text-sm sm:text-base text-gray-500 font-medium tracking-wide">
                Gamers • Professionals • Students • Entrepreneurs
              </p>
            </div>

            {/* Red CTA Button with WordPress btn-shine & btn-icon-hover */}
            <Link
              href="/products"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#E51A1A] hover:bg-[#c81414] text-white font-barlow text-lg font-black tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl clip-button btn-shine btn-icon-hover"
            >
              <span>Explore Flavors</span>
              <ArrowRight className="w-5 h-5 btn-arrow-icon transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
