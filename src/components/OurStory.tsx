"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimeStyle2, ImgAnimeStyle1 } from "./TextAnime";

export default function OurStory() {
  return (
    <section className="relative bg-[#388E64] text-white overflow-hidden">
      {/* Floating Botanical Shape Mockup (WordPress: shape-mockup jump-reverse) */}
      <div className="shape-mockup bottom-10 right-4 lg:right-10 hidden xl:block jump-reverse">
        <Image
          src="/images/about-leaf.png"
          alt=""
          width={110}
          height={110}
          className="object-contain opacity-75"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Full-Height Image with WordPress gsap-fade-left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative min-h-[420px] sm:min-h-[560px] lg:min-h-full w-full overflow-hidden"
        >
          <Image
            src="/images/our-story-main.jpg"
            alt="Pilz sparkling functional drink with water splash and Lion's Mane and Reishi mushrooms"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-700"
            priority
          />
        </motion.div>

        {/* Right Column: Story Copy & Thumbnails */}
        <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Header with WordPress text-anime-style-2 */}
            <TextAnimeStyle2
              text="OUR STORY"
              as="h2"
              className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white mb-2"
            />

            {/* Gold/Yellow Decorative Divider with img-anime-style-1 */}
            <ImgAnimeStyle1 className="flex items-center mb-8">
              <Image
                src="/images/title-shape2.png"
                alt=""
                width={120}
                height={15}
                className="h-3.5 w-auto object-contain"
              />
            </ImgAnimeStyle1>

            {/* Story Points */}
            <div className="space-y-10">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="flex-1 order-2 sm:order-1">
                  <h3 className="font-barlow font-bold text-xl sm:text-2xl text-white uppercase leading-snug mb-3">
                    Pilz was created with a simple belief: modern lifestyles need smarter nutrition.
                  </h3>
                  <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                    The world moves fast. Long workdays, intense workouts, competitive gaming, endless screens, and constant pressure demand more from both the mind and body. Yet the choices available to support everyday performance often come with compromises.
                  </p>
                </div>
                <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative border-2 border-white/20 shadow-lg order-1 sm:order-2 group">
                  <Image
                    src="/images/story-thumb-1.jpg"
                    alt="Modern professional working at laptop late"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="flex-1 order-2 sm:order-1">
                  <h3 className="font-barlow font-bold text-xl sm:text-2xl text-white uppercase leading-snug mb-3">
                    Traditional energy drinks rely heavily on synthetic stimulants, sugar spikes, and artificial additives.
                  </h3>
                  <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                    They give a quick rush followed by a crash, leaving you right back where you started. We knew there had to be a better way to fuel the modern day.
                  </p>
                </div>
                <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden relative border-2 border-white/20 shadow-lg order-1 sm:order-2 group">
                  <Image
                    src="/images/story-thumb-2.jpg"
                    alt="Young gamer focused at desk with headphones"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
