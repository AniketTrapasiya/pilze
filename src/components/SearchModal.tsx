"use client";

import React, { useEffect, useState } from "react";
import { X, Search } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const popularSearches = [
    "Lion's Mane",
    "Ashwagandha",
    "Focus Berry Peach",
    "Natural Caffeine",
    "Stevia Sweetened",
    "Reishi Mushroom",
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5] shadow-2xl p-6 sm:p-10 transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pt-8 pb-4">
            <h3 className="font-barlow text-2xl font-bold uppercase text-gray-900 tracking-wider mb-4">
              Search Pilz
            </h3>
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-white border-2 border-gray-300 focus:border-[#388E64] rounded-full py-4 pl-6 pr-14 text-lg font-sans text-gray-900 placeholder-gray-400 outline-hidden transition-all shadow-inner"
                autoFocus={isOpen}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#388E64] hover:bg-[#072F25] text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-barlow font-bold text-gray-400 mr-2">
                Popular Searches:
              </span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-white hover:bg-[#EFECE1] border border-gray-200 text-gray-700 hover:text-black px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
