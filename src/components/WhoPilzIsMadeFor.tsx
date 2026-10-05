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
  staggerUp?: boolean;
}

const personas: Persona[] = [
  {
    id: "gamers",
    title: "Gamers",
    description: "Stay sharp through long sessions.",
    image: "/images/GAMER.png",
    staggerUp: true,
  },
  {
    id: "it-professionals",
    title: "IT Professionals",
    description: "Power through coding, calls and deadlines.",
    image: "/images/IT.png",
    staggerUp: false,
  },
  {
    id: "students",
    title: "Students & Aspirants",
    description: "Support focus during study and preparation.",
    image: "/images/STUDENT.png",
    staggerUp: false,
  },
  {
    id: "creators",
    title: "Entrepreneurs & Creators",
    description: "Keep building without the usual crash.",
    image: "/images/CREATOR.png",
    staggerUp: true,
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
    <section className="py-20 sm:py-28 lg:pt-36 lg:pb-32 bg-[#FAF8F5] relative overflow-hidden" id="personas-sec">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 sm:mb-24">
        <TextAnimeStyle1 className="mb-2">
          <p className="font-barlow text-[#FF9924] font-extrabold text-sm sm:text-base tracking-widest uppercase">
            MADE FOR MODERN MINDS
          </p>
        </TextAnimeStyle1>

        <TextAnimeStyle2
          text="WHO PILZ IS MADE FOR"
          highlightText="MADE FOR"
          as="h2"
          className="font-barlow font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-end"
        >
          {personas.map((persona) => (
            <motion.div
              key={persona.id}
              variants={cardVariants}
              className={`team-card cursor-pointer group ${
                persona.staggerUp ? "team-stagger-up" : ""
              }`}
            >
              {/* Arched Photo Container (WordPress: .img-wrap with #E9C590 background and border-radius: 180px 180px 0 0) */}
              <div className="img-wrap shadow-sm group-hover:shadow-xl">
                {/* Team Arch Background Outline Shape (WordPress: team-1-bg-shape.png) */}
                <div className="team-1-bg-shape inset-0 pointer-events-none select-none flex items-center justify-center">
                  <Image
                    src="/images/team-arch-bg.png"
                    alt=""
                    width={220}
                    height={280}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Persona Cutout Photo */}
                <div className="team-img h-[280px] sm:h-[320px] md:h-[340px] flex items-end justify-center px-2">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    width={280}
                    height={360}
                    className="w-auto h-full max-h-[340px] object-contain object-bottom select-none pointer-events-none"
                    priority
                  />
                </div>
              </div>

              {/* Title & Tagline matching WordPress team-card-content */}
              <div className="team-card-content text-center px-2">
                <h3 className="box-title font-barlow font-bold text-2xl uppercase tracking-wide text-black group-hover:text-[#3F9065] transition-colors leading-snug">
                  {persona.title}
                </h3>
                <span className="team-desig block font-sans text-sm text-[#6C6C6C] font-normal mt-1">
                  {persona.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

