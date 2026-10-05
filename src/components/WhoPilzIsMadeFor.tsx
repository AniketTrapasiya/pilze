"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { TextAnimeStyle1, TextAnimeStyle2, ImgAnimeStyle1 } from "./TextAnime";

interface Persona {
  id: string;
  title: string;
  description: string;
  image: string;
  staggered?: boolean;
}

const personas: Persona[] = [
  {
    id: "gamers",
    title: "Gamers",
    description: "Stay sharp through long sessions.",
    image: "/images/gamer.png",
    staggered: false,
  },
  {
    id: "it-professionals",
    title: "IT Professionals",
    description: "Power through coding, calls and deadlines.",
    image: "/images/it-pro.png",
    staggered: true,
  },
  {
    id: "students",
    title: "Students & Aspirants",
    description: "Support focus during study and preparation.",
    image: "/images/student.png",
    staggered: true,
  },
  {
    id: "creators",
    title: "Entrepreneurs & Creators",
    description: "Keep building without the usual crash.",
    image: "/images/creator.png",
    staggered: false,
  },
];

export default function WhoPilzIsMadeFor() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-14 sm:mb-20">
        <TextAnimeStyle1 className="mb-2">
          <p className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase">
            MADE FOR MODERN MINDS
          </p>
        </TextAnimeStyle1>

        <TextAnimeStyle2
          text="WHO PILZ IS MADE FOR"
          highlightText="MADE FOR"
          as="h2"
          className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black"
        />

        {/* Decorative Divider with img-anime-style-1 */}
        <ImgAnimeStyle1 className="flex justify-center items-center mt-3">
          <Image
            src="/images/title-shape.png"
            alt=""
            width={140}
            height={20}
            className="h-4 w-auto object-contain"
          />
        </ImgAnimeStyle1>
      </div>

      {/* Cards Grid with WordPress gsap-card-animation-wrapper stagger effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {personas.map((persona) => (
            <motion.div
              key={persona.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`flex flex-col items-center text-center group cursor-pointer ${
                persona.staggered ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Arched Photo Container with White Background & Inner Shadow */}
              <div className="relative w-full max-w-[270px] aspect-[3/4] rounded-t-[140px] rounded-b-3xl bg-[#FAF8F5] p-2 flex flex-col justify-end overflow-hidden shadow-xs group-hover:shadow-xl transition-all duration-300">
                {/* Arch Background Shape Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/team-arch-shape.png"
                    alt=""
                    fill
                    className="object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Persona Cutout Photo */}
                <div className="relative z-10 w-full h-[88%] flex items-end justify-center">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    width={260}
                    height={340}
                    className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="mt-5 w-full px-2">
                <h3 className="font-barlow font-bold text-2xl uppercase tracking-wide text-black group-hover:text-[#388E64] transition-colors">
                  {persona.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 font-medium mt-1">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
