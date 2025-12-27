'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="pt-24 pb-24 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-8 text-white"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nice to Meet You!<br />
              Your Go-To Functional Friend
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                A drink with benefits—and no, not the kind that come with guilt or sugar crashes. We&apos;re here to disrupt the beverage lineup with something modern, mindful, and truly refreshing. Picture this: a crisp, hydrating boost infused with adaptogens and botanicals that&apos;s as good for your body as it is for your vibe.
              </p>
              <p>
                It&apos;s crafted for those who want more from what they drink.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                {
                  title: "Natural Fruit & Flavors:",
                  description: "Crafted with natural fruit juice and pure flavors"
                },
                {
                  title: "Low Cal, Minus the Sugar:",
                  description: "Natural sweetness from stevia and fruit extracts"
                },
                {
                  title: "Packed with Adaptogens:",
                  description: "Ancient botanicals for modern wellness"
                }
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <span className="font-bold">{item.title}</span> {item.description}
                  </div>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-primary transition-all hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Discover Our Story
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
             <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl bg-white p-8">
               {/* Grid of bottles */}
               <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
                 {[
                   'from-gray-200 to-gray-300',
                   'from-rose-200 to-rose-300',
                   'from-amber-200 to-amber-300',
                   'from-amber-300 to-amber-400',
                   'from-rose-300 to-rose-400',
                   'from-gray-300 to-gray-400'
                 ].map((gradient, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.5 }}
                     whileHover={{ scale: 1.05, rotate: 5 }}
                     className={`rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center`}
                   >
                     <div className="h-12 w-12 rounded-full bg-white/40 backdrop-blur-sm" />
                   </motion.div>
                 ))}
               </div>
               
               {/* 100% Natural badge */}
               <motion.div 
                 initial={{ scale: 0, rotate: -45 }}
                 whileInView={{ scale: 1, rotate: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                 className="absolute bottom-4 right-4 bg-primary text-white rounded-full p-4 shadow-xl"
               >
                 <div className="text-center">
                   <div className="text-2xl font-bold">100%</div>
                   <div className="text-xs font-semibold">Natural<br />Ingredients</div>
                 </div>
               </motion.div>
             </div>
             
             {/* Decorative blob */}
             <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
