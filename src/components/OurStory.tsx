"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimeStyle2, ImgAnimeStyle1 } from "./TextAnime";

export default function OurStory() {
  return (
    <section className="relative bg-[#388E64] text-white overflow-hidden py-16 sm:py-20 lg:py-24" id="history-sec">
      {/* Wave bottom shape from WordPress (class: round-shape-bottom) */}
      <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none select-none z-10 leading-none">
        <Image
          src="/images/round-shape-bottom.png"
          alt=""
          width={1920}
          height={60}
          className="w-full h-auto object-cover object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Brand Visual with WordPress gsap-fade-left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full h-[340px] sm:h-[440px] md:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <Image
              src="/images/our-story-main.jpg"
              alt="Pilz functional beverage story"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>

          {/* Right Column: Story Copy & Thumbnails */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header with WordPress text-anime-style-2 */}
            <div className="mb-8">
              <TextAnimeStyle2
                text="OUR STORY"
                as="h2"
                className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white mb-2"
              />

              {/* Gold Decorative Divider with img-anime-style-1 */}
              <ImgAnimeStyle1 className="flex items-center">
                <Image
                  src="/images/title-shape2.png"
                  alt=""
                  width={120}
                  height={15}
                  className="h-3.5 w-auto object-contain"
                />
              </ImgAnimeStyle1>
            </div>

            {/* Story Points matching WordPress live site */}
            <div className="space-y-8">
              {/* Point 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="flex-1 order-2 sm:order-1">
                  <h3 className="font-barlow font-bold text-xl sm:text-2xl text-white uppercase leading-snug mb-2">
                    Pilz was created with a simple belief: modern lifestyles need smarter nutrition.
                  </h3>
                  <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                    The world moves fast. Long workdays, intense workouts, competitive gaming, endless screens, and constant pressure demand more from both the mind and body. Yet the choices available to support everyday performance often come with compromises.
                  </p>
                </div>
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden relative border-2 border-white/20 shadow-lg order-1 sm:order-2 group">
                  <Image
                    src="/images/story-thumb-1.jpg"
                    alt="Modern performance lifestyle"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* Point 2: Exact WordPress copy and image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="flex-1 order-2 sm:order-1">
                  <h3 className="font-barlow font-bold text-xl sm:text-2xl text-white uppercase leading-snug mb-2">
                    We saw an opportunity to do things differently.
                  </h3>
                  <p className="font-sans text-white/85 text-sm sm:text-base leading-relaxed">
                    Pilz&apos;s purpose is not just to make beverages. Pilz&apos;s purpose is to help people unlock their best mental performance, naturally. We are building functional beverages designed around the needs of modern lifestyles—bringing together carefully selected functional ingredients, natural caffeine, refreshing taste, and a thoughtful approach to everyday wellness.
                  </p>
                </div>
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden relative border-2 border-white/20 shadow-lg order-1 sm:order-2 group">
                  <Image
                    src="/images/story-thumb-2.jpg"
                    alt="Carefully selected functional ingredients"
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
