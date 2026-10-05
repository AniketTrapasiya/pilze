"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, Tag } from "lucide-react";
import { BlogPost, BLOG_CATEGORIES, POPULAR_TAGS } from "@/data/blogData";

interface BlogSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  recentPosts: BlogPost[];
}

export default function BlogSidebar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
  recentPosts,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* 1. Search Widget */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <h3 className="font-barlow font-bold text-xl uppercase tracking-wider text-gray-900 mb-4">
          Search Articles
        </h3>
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords..."
            className="w-full bg-[#FAF8F5] border border-gray-200 focus:border-[#388E64] rounded-full py-3.5 pl-5 pr-12 text-sm text-gray-900 outline-hidden transition-colors"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#388E64] text-white flex items-center justify-center hover:bg-[#072F25] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Categories Widget */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <h3 className="font-barlow font-bold text-xl uppercase tracking-wider text-gray-900 mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {BLOG_CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag("All");
                }}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-xl text-sm font-sans transition-all text-left ${
                  selectedCategory === cat
                    ? "bg-[#388E64] text-white font-semibold"
                    : "text-gray-700 hover:bg-[#FAF8F5] hover:text-black"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat === "All" ? "6" : cat === "Brain & Focus" ? "1" : cat === "Energy & Performance" ? "2" : cat === "Adaptogens & Mushrooms" ? "1" : "2"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Recent Posts Widget */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <h3 className="font-barlow font-bold text-xl uppercase tracking-wider text-gray-900 mb-4">
          Recent Articles
        </h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-center gap-3.5 group"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-gray-100">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-[#8A43C8] font-bold uppercase font-barlow tracking-wider">
                  {post.category}
                </p>
                <h4 className="font-barlow font-bold text-sm text-gray-900 group-hover:text-[#388E64] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 font-sans">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Popular Tags Widget */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs">
        <h3 className="font-barlow font-bold text-xl uppercase tracking-wider text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#FF9924]" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? "All" : tag);
                setSelectedCategory("All");
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all ${
                selectedTag === tag
                  ? "bg-[#8A43C8] text-white font-bold"
                  : "bg-[#FAF8F5] text-gray-600 hover:bg-gray-200 hover:text-black border border-gray-100"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Promotional Offer Banner Widget */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#072F25] to-[#124b3b] text-white p-7 text-center shadow-lg">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A43C8]/30 blur-2xl pointer-events-none" />

        <span className="bg-[#FF9924] text-black font-barlow font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider inline-block mb-3">
          Special Offer
        </span>

        <h4 className="font-barlow font-black text-2xl uppercase tracking-tight leading-tight mb-2">
          Upgrade Your Brain Function
        </h4>

        <p className="font-sans text-xs text-white/80 leading-relaxed mb-4">
          Experience natural mental clarity and clean energy with Pilz Focus Berry Peach 12-pack.
        </p>

        {/* Promo code badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg text-xs font-mono mb-6">
          <span>Code:</span>
          <span className="font-bold text-[#FFCB77]">NEW15</span>
          <span className="text-[10px] text-white/70">(15% OFF)</span>
        </div>

        <Link
          href="/products"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#E51A1A] hover:bg-[#c91212] text-white py-3 rounded-full font-barlow font-bold uppercase tracking-wider text-sm transition-all shadow-md hover:shadow-xl"
        >
          <span>Shop Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
