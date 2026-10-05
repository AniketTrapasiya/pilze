"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

/**
 * Replicates the WordPress theme's .text-anime-style-2
 * Staggers individual characters with y: 20 -> 0, opacity: 0 -> 1
 */
export function TextAnimeStyle2({
  text,
  className = "",
  highlightText,
  highlightClassName = "text-[#8A43C8]",
  as: Component = "h2",
}: SplitTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Split string respecting highlights
  const parts = highlightText
    ? text.split(new RegExp(`(${highlightText})`, "gi"))
    : [text];

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="inline"
      >
        {parts.map((part, partIndex) => {
          const isHighlight =
            highlightText &&
            part.toLowerCase() === highlightText.toLowerCase();

          // Split part into words to preserve word boundaries on mobile
          const words = part.split(/(\s+)/);

          return (
            <span
              key={partIndex}
              className={isHighlight ? highlightClassName : undefined}
            >
              {words.map((word, wordIndex) => {
                if (/\s+/.test(word)) {
                  return (
                    <span key={`space-${wordIndex}`} className="inline">
                      {" "}
                    </span>
                  );
                }

                return (
                  <span
                    key={`word-${wordIndex}`}
                    className="inline-block whitespace-nowrap"
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${wordIndex}-${charIndex}`}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}

/**
 * Replicates WordPress theme's .text-anime-style-1
 * Subtitle rises from y: 40 with opacity
 */
export function TextAnimeStyle1({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Replicates WordPress theme's .img-anime-style-1
 * Scales up from 0.8 and rises from 50px
 */
export function ImgAnimeStyle1({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
