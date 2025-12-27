'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: "What makes Pilze drinks different from regular energy drinks?",
    answer: "Unlike traditional energy drinks that rely on high sugar and synthetic caffeine, Pilze uses natural adaptogens and organic caffeine sources like matcha and guarana. This provides sustained energy without the crash or jitters."
  },
  {
    question: "Are Pilze drinks suitable for daily consumption?",
    answer: "Absolutely. Our formulas are designed for daily consumption to support long-term health and vitality. However, we recommend listening to your body and consulting a healthcare professional if you have specific concerns."
  },
  {
    question: "Do your drinks contain caffeine?",
    answer: "Our Energy Boost contains 120mg of natural caffeine (equivalent to a strong cup of coffee). Focus Elixir contains 80mg, and Wellness Revive is caffeine-free, allowing you to choose the right boost for your needs."
  },
  {
    question: "Where are Pilze drinks made?",
    answer: "We partner directly with sustainable farms around the world. Our matcha comes from Japan, our turmeric from India, and our medicinal mushrooms are cultivated in controlled environments in the USA. All products are manufactured in certified facilities."
  },
  {
    question: "What is your return and refund policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us for a full refund. We want you to love Pilze as much as we do!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-24 pb-24 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Pilze functional drinks
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/30 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <span className={`ml-6 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-background-secondary text-primary transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
