'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  color: string;
  accentColor: string;
  price: string;
  caffeine: string;
  calories: string;
  benefits: string[];
  ingredients: Array<{
    name: string;
    description: string;
  }>;
  usage: string;
  image: string;
}

export default function ProductDetail({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'nutrition'>('benefits');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/products" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
              </Link>
              
              <div className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                {product.tagline}
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-semibold">{product.caffeine} Caffeine</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">{product.calories} Calories</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-sm font-semibold">100% Natural</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Buy Now - {product.price}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary bg-white px-8 text-lg font-medium text-primary transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Animated product visualization */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="relative h-full w-full flex items-center justify-center"
                >
                  <div className="h-96 w-48 rounded-3xl bg-white/60 backdrop-blur-sm border-4 border-white shadow-2xl flex items-center justify-center">
                    <span className="transform -rotate-90 text-2xl font-bold tracking-widest text-primary">
                      {product.name}
                    </span>
                  </div>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-white/40 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-8 py-4 text-lg font-semibold transition-all ${
                activeTab === 'benefits'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`px-8 py-4 text-lg font-semibold transition-all ${
                activeTab === 'ingredients'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ingredients
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`px-8 py-4 text-lg font-semibold transition-all ${
                activeTab === 'nutrition'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              How to Use
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'benefits' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                <div className="grid gap-4">
                  {product.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">What&apos;s Inside</h3>
                <div className="grid gap-6">
                  {product.ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-white shadow-sm"
                    >
                      <h4 className="text-lg font-bold text-primary mb-2">{ingredient.name}</h4>
                      <p className="text-gray-600 leading-relaxed">{ingredient.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Suggested Use</h3>
                <div className="p-8 rounded-xl bg-white shadow-sm">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{product.usage}</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{product.caffeine}</div>
                      <div className="text-sm text-gray-600">Caffeine per serving</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{product.calories}</div>
                      <div className="text-sm text-gray-600">Calories per can</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">0g</div>
                      <div className="text-sm text-gray-600">Added sugar</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to try {product.name}?</h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Pilze part of their daily routine
          </p>
          <button className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-bold text-primary transition-all hover:bg-white/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
            Shop Now - {product.price}
          </button>
        </div>
      </section>
    </div>
  );
}
