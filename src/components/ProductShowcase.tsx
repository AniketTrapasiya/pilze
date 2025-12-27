'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    id: "energy-boost",
    name: "Energy Boost",
    tagline: "Vitality & Power",
    description: "Start your day with natural energy from green tea extract and B-vitamins. Perfect for mornings and pre-workout fuel.",
    color: "bg-gradient-to-br from-amber-50 to-amber-100",
    textColor: "text-amber-900",
    buttonColor: "bg-primary hover:bg-primary/90",
    tags: ["Green Tea", "B-Vitamins"],
    image: "/images/energy-boost.jpg",
    bestseller: true
  },
  {
    id: "focus-elixir",
    name: "Focus Elixir",
    tagline: "Clarity & Concentration",
    description: "Sharpen mental clarity with adaptogens and nootropics. Ideal for work sessions, study time, or creative projects.",
    color: "bg-gradient-to-br from-teal-50 to-teal-100",
    textColor: "text-teal-900",
    buttonColor: "bg-primary hover:bg-primary/90",
    tags: ["Adaptogens", "Nootropics"],
    image: "/images/focus-elixir.jpg"
  },
  {
    id: "wellness-revive",
    name: "Wellness Revive",
    tagline: "Balance & Immunity",
    description: "Support immunity and recovery with antioxidants and vitamins. Great for post-workout or daily wellness rituals.",
    color: "bg-gradient-to-br from-rose-50 to-rose-100",
    textColor: "text-rose-900",
    buttonColor: "bg-primary hover:bg-primary/90",
    tags: ["Antioxidants", "Vitamins"],
    image: "/images/wellness-revive.jpg"
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="pt-24 pb-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4"
          >
            Our Signature Collection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Three expertly crafted formulas designed for different moments in your day
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-2xl"
            >
              <Link href={`/products/${product.id}`}>
                {product.bestseller && (
                  <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    Bestseller
                  </div>
                )}
                
                <div className={`h-72 ${product.color} flex items-center justify-center p-8 relative overflow-hidden transition-transform duration-500`}>
                  {/* Animated background circles */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 10,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 opacity-20"
                  >
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white blur-2xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-white blur-xl" />
                  </motion.div>
                  
                  {/* Product bottle mockup */}
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-56 w-32 rounded-2xl bg-white/40 backdrop-blur-sm border-2 border-white/60 shadow-2xl flex items-center justify-center text-sm font-bold tracking-widest z-10"
                  >
                    <span className="transform -rotate-90 text-gray-700">
                      {product.name}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    {product.tagline}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex gap-2 mb-6">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-white transition-all ${product.buttonColor} group-hover:shadow-lg`}>
                    Learn More
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary bg-white px-8 text-base font-medium text-primary shadow-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
