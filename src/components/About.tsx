"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Flag, Star } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white text-[#1c1c1c] overflow-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-[#EBE7DF] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-banner.jpg"
            alt="About Pilz Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/25 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-barlow font-black text-white uppercase tracking-tight drop-shadow-md">
            About Us
          </h1>
          <nav className="flex items-center gap-2 mt-3 text-sm sm:text-base font-semibold">
            <Link
              href="/"
              className="text-[#FF9924] hover:underline transition-colors"
            >
              Home
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="relative py-16 sm:py-24 md:py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6">
        {/* Floating leaf on right margin */}
        <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block z-10">
          <Image
            src="/images/about-leaf.png"
            alt="Botanical leaf"
            width={150}
            height={150}
            className="object-contain animate-[floatLeaf1_6s_ease-in-out_infinite]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 3D Nutrition Can animation seamlessly on white */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] flex items-center justify-center">
              <Image
                src="/images/about-nutrition-can.gif"
                alt="Pilz 3D Nutrition Facts Can"
                width={360}
                height={520}
                unoptimized
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs sm:text-sm font-barlow font-bold uppercase tracking-widest text-[#FF9924]">
              Our Story
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#072F25] leading-[0.95] tracking-tight">
              Pilz Was Created With A{" "}
              <span className="text-[#8A43C8]">Simple Belief</span>
            </h2>

            <p className="text-lg sm:text-xl font-bold text-[#072F25]">
              Modern lifestyles need smarter nutrition.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              The world moves fast. Long workdays, intense workouts, competitive
              gaming, endless screens, and constant pressure demand more from
              both the mind and body. Yet the choices available to support
              everyday performance often come with compromises.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PILZ (WE SAW AN OPPORTUNITY) */}
      <section className="bg-[#EFECE1] py-16 sm:py-24 md:py-28 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Mission copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs sm:text-sm font-barlow font-bold uppercase tracking-widest text-[#FF9924]">
                About Pilz
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#072F25] leading-[0.95] tracking-tight">
                We Saw An Opportunity To{" "}
                <span className="text-[#8A43C8]">Do Things Differently.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We saw an opportunity to do things differently. Pilz&apos;s
                purpose is not just to make beverages. Pilz&apos;s purpose is to
                help people unlock their best mental performance, naturally.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are building functional beverages designed around the needs of
                modern lifestyles—bringing together carefully selected
                functional ingredients, natural caffeine, refreshing taste, and
                a thoughtful approach to everyday wellness.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our goal is simple: to make wellness more accessible and
                performance more sustainable for people who want to stay
                focused, productive, balanced, and ready for what&apos;s next.
              </p>
            </div>

            {/* Right Column: Can Sphere Render */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-[300px] sm:w-[380px] md:w-[420px] flex items-center justify-center">
                <Image
                  src="/images/about-can-sphere.png"
                  alt="Pilz Focus Berry Peach Can"
                  width={420}
                  height={440}
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PURPOSE, VISION AND MISSION */}
      <section className="py-20 sm:py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-barlow font-bold uppercase tracking-widest text-[#FF9924] mb-3">
            Our Purpose, Vision and Mission
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#072F25] leading-[0.95] tracking-tight">
            Driven By A <span className="text-[#8A43C8]">Bigger Purpose</span>
          </h2>

          {/* Centered green ornamental divider with circle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-[#388E64]/40" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#388E64] bg-white" />
            <div className="w-16 h-px bg-[#388E64]/40" />
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Our Purpose */}
          <div className="bg-[#EAE6DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-black/5 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-full border border-[#388E64]/40 flex items-center justify-center text-[#388E64] mb-6 bg-white/70">
                <Target className="w-7 h-7" />
              </div>
              <div className="text-xs font-barlow font-bold uppercase tracking-wider text-[#388E64] mb-2">
                Our Purpose
              </div>
              <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-[#072F25] leading-tight mb-4">
                Helping people unlock their best mental performance, naturally.
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                Pilz exists to support people in getting more out of their
                everyday lives. We want to make it easier to choose a smarter
                alternative when you need to stay focused, maintain your energy,
                and keep moving through demanding days.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Because performance isn&apos;t just about doing more. It&apos;s
                about performing better—while feeling better.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-[#EAE6DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-black/5 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-full border border-[#388E64]/40 flex items-center justify-center text-[#388E64] mb-6 bg-white/70">
                <Eye className="w-7 h-7" />
              </div>
              <div className="text-xs font-barlow font-bold uppercase tracking-wider text-[#388E64] mb-2">
                Our Vision
              </div>
              <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-[#072F25] leading-tight mb-4">
                To build India&apos;s most trusted Cognitive Performance Brand.
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                We envision a future where millions of people have access to
                smarter, functional choices that help them think better, work
                better, and perform better.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                Pilz aims to become a trusted name at the intersection of
                functional nutrition, modern science, and everyday performance—creating
                innovative beverages that fit naturally into the lives of the
                people who use them.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are proud to be part of a growing movement toward more
                conscious, functional, and purposeful wellness.
              </p>
            </div>
          </div>

          {/* Card 3: Our Mission */}
          <div className="bg-[#EAE6DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-black/5 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-full border border-[#388E64]/40 flex items-center justify-center text-[#388E64] mb-6 bg-white/70">
                <Flag className="w-7 h-7" />
              </div>
              <div className="text-xs font-barlow font-bold uppercase tracking-wider text-[#388E64] mb-2">
                Our Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-barlow font-black uppercase text-[#072F25] leading-tight mb-4">
                Our mission is to redefine everyday energy and wellness by
                creating functional beverages powered by carefully selected
                ingredients and informed by scientific understanding.
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 font-semibold text-[#072F25]">
                Provide consumers with a smarter alternative that helps them
                experience better focus, calm productivity, and sustained energy.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
                From the ingredients we choose to the products we create, our
                mission guides our daily decisions and execution.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are committed to making functional wellness simple, effective,
                refreshing, and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROMISE BANNER */}
      <section className="bg-[#EFECE1] py-16 sm:py-20 border-y border-black/5 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-xs sm:text-sm font-barlow font-bold uppercase tracking-widest text-[#FF9924] mb-3">
            Our Promise
          </div>
          {/* Centered green ornamental divider with circle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#388E64]/40" />
            <div className="w-2 h-2 rounded-full border-2 border-[#388E64] bg-[#EFECE1]" />
            <div className="w-12 h-px bg-[#388E64]/40" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#072F25] leading-tight tracking-tight">
            Sustained Focus.{" "}
            <span className="text-[#8A43C8]">Balanced Energy.</span> Modern
            Wellness.
          </h2>
        </div>
      </section>

      {/* 6. EARLY REVIEWS / TESTIMONIALS */}
      <section className="relative py-20 sm:py-28 bg-white max-w-7xl mx-auto px-4 sm:px-6">
        {/* Floating Botanical Decorations */}
        <div className="absolute left-2 sm:left-6 top-8 pointer-events-none hidden md:block z-10">
          <Image
            src="/images/decor-stevia-branch.png"
            alt="Stevia branch"
            width={130}
            height={130}
            className="object-contain animate-[floatGentle_7s_ease-in-out_infinite]"
          />
        </div>

        <div className="absolute right-4 sm:right-8 top-12 pointer-events-none hidden md:block z-10">
          <Image
            src="/images/decor-fruit-splash.png"
            alt="Fruit and Mushroom splash"
            width={140}
            height={140}
            className="object-contain animate-[floatLeaf1_8s_ease-in-out_infinite]"
          />
        </div>

        <div className="absolute left-4 bottom-6 pointer-events-none hidden md:block z-10">
          <Image
            src="/images/decor-can-splash.png"
            alt="Pilz Can splash"
            width={120}
            height={120}
            className="object-contain animate-[floatGentle_6s_ease-in-out_infinite]"
          />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="text-xs sm:text-sm font-barlow font-bold uppercase tracking-widest text-[#FF9924] mb-3">
            Early Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-barlow font-black uppercase text-[#072F25] leading-[0.95] tracking-tight">
            What People Are Saying{" "}
            <span className="text-[#8A43C8]">About Pilz</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-[#388E64]/40" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#388E64] bg-white" />
            <div className="w-16 h-px bg-[#388E64]/40" />
          </div>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Review 1: Aarav Sharma */}
          <div className="bg-[#EAE6DC] rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between border border-black/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Quote text */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full">
                <div className="text-[#E02B20] mb-4">
                  <Image
                    src="/images/testi-quote.png"
                    alt="Quote Icon"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 font-medium italic">
                  &ldquo;I usually crash after regular energy drinks, but Pilz
                  felt completely different. The focus stayed with me for hours
                  without making me feel jittery. Perfect for long work
                  sessions.&rdquo;
                </p>

                {/* Author Badge */}
                <div className="bg-[#23714E] text-white rounded-2xl px-5 py-3 inline-block shadow-sm">
                  <div className="font-barlow font-bold text-base sm:text-lg uppercase tracking-wide">
                    Aarav Sharma
                  </div>
                  <div className="text-xs text-white/80 font-normal mb-1">
                    UI/UX Designer
                  </div>
                  <div className="flex items-center gap-1 text-[#FF9924]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FF9924] text-[#FF9924]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Portrait */}
              <div className="sm:col-span-5 flex justify-center items-end">
                <div className="relative w-[180px] sm:w-[200px] h-[240px] sm:h-[280px]">
                  <Image
                    src="/images/testimonial-aarav.png"
                    alt="Aarav Sharma"
                    fill
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Review 2: Riya Mehta */}
          <div className="bg-[#EAE6DC] rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between border border-black/5 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Quote text */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full">
                <div className="text-[#E02B20] mb-4">
                  <Image
                    src="/images/testi-quote.png"
                    alt="Quote Icon"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6 font-medium italic">
                  &ldquo;Gaming for hours usually leaves me drained, but Pilz
                  helped me stay alert and focused. The clean energy and
                  refreshing taste make it my new favorite drink.&rdquo;
                </p>

                {/* Author Badge */}
                <div className="bg-[#23714E] text-white rounded-2xl px-5 py-3 inline-block shadow-sm">
                  <div className="font-barlow font-bold text-base sm:text-lg uppercase tracking-wide">
                    Riya Mehta
                  </div>
                  <div className="text-xs text-white/80 font-normal mb-1">
                    Content Creator & Gamer
                  </div>
                  <div className="flex items-center gap-1 text-[#FF9924]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FF9924] text-[#FF9924]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Portrait */}
              <div className="sm:col-span-5 flex justify-center items-end">
                <div className="relative w-[180px] sm:w-[200px] h-[240px] sm:h-[280px]">
                  <Image
                    src="/images/testimonial-riya.png"
                    alt="Riya Mehta"
                    fill
                    className="object-contain object-bottom drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
