'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight">
                Feel Your Best,<br />
                <span className="text-primary/80">Naturally</span>
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl leading-relaxed">
                Discover functional drinks crafted with 100% natural ingredients to boost your energy, sharpen your focus, and support your wellness—without the crash or artificial additives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore Our Drinks
              </Link>
              <Link
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-300 bg-white px-10 text-base font-medium text-gray-900 shadow-sm transition-all hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-8 flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-medium">100% Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-medium">No Artificial Additives</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="aspect-square relative rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden p-8 flex items-center justify-center shadow-2xl"
            >
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="relative w-full h-full flex items-center justify-center gap-4"
               >
                 {/* Three bottles */}
                 <motion.div 
                   initial={{ x: -100, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.2, duration: 0.6 }}
                   className="h-80 w-32 rounded-3xl bg-gradient-to-br from-amber-200 to-amber-300 shadow-xl flex items-center justify-center transform rotate-[-5deg]"
                 >
                   <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur-sm" />
                 </motion.div>
                 
                 <motion.div 
                   initial={{ y: -100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.4, duration: 0.6 }}
                   className="h-96 w-36 rounded-3xl bg-gradient-to-br from-rose-300 to-rose-400 shadow-2xl flex items-center justify-center z-10"
                 >
                   <div className="h-24 w-24 rounded-full bg-white/40 backdrop-blur-sm" />
                 </motion.div>
                 
                 <motion.div 
                   initial={{ x: 100, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6, duration: 0.6 }}
                   className="h-80 w-32 rounded-3xl bg-gradient-to-br from-teal-200 to-teal-300 shadow-xl flex items-center justify-center transform rotate-[5deg]"
                 >
                   <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur-sm" />
                 </motion.div>
               </motion.div>
               
               {/* Decorative floating ingredients */}
               <motion.div
                 animate={{ 
                   y: [0, -30, 0],
                   x: [0, 15, 0],
                   rotate: [0, 10, 0]
                 }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute top-10 left-10 h-16 w-16 rounded-full bg-amber-400/20 blur-sm"
               />
               <motion.div
                 animate={{ 
                   y: [0, 30, 0],
                   x: [0, -15, 0],
                   rotate: [0, -10, 0]
                 }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-10 right-10 h-20 w-20 rounded-full bg-rose-400/20 blur-sm"
               />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
