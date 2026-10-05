"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogData";
import { Search, Sparkles, RefreshCw } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);

      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedTag("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />

      <main className="grow">
        {/* 1. Header Banner / Breadcrumbs */}
        <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-[#EBE7DF] overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/contact-banner.jpg"
              alt="Pilz Blog Banner"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl text-[#121212] uppercase tracking-tight leading-none mb-3">
              Latest News & Insights
            </h1>
            <nav className="flex items-center gap-2 font-sans text-sm sm:text-base font-semibold">
              <Link
                href="/"
                className="text-[#EB1400] hover:underline transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#121212]">Blog</span>
            </nav>
          </div>
        </section>

        {/* 2. Category Filter Bar */}
        <section className="border-b border-gray-200/80 bg-white sticky top-[72px] z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedTag("All");
                    }}
                    className={`px-4 sm:px-5 py-2 rounded-full font-barlow font-bold text-xs sm:text-sm uppercase tracking-wider transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-[#388E64] text-white shadow-xs"
                        : "bg-[#FAF8F5] text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {(selectedCategory !== "All" ||
                selectedTag !== "All" ||
                searchQuery !== "") && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 text-xs font-sans text-[#E51A1A] hover:underline shrink-0 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 3. Main Blog Content & Sidebar Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Posts Column (8 Cols) */}
            <div className="lg:col-span-8">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xs">
                  <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center text-gray-400 mx-auto mb-4">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="font-barlow font-bold text-2xl uppercase text-gray-900 mb-2">
                    No Articles Found
                  </h3>
                  <p className="font-sans text-sm text-gray-500 max-w-md mx-auto mb-6">
                    We couldn&apos;t find any articles matching your search criteria. Try
                    clearing your filters to see all available brain health and nootropics
                    insights.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="bg-[#388E64] hover:bg-[#072F25] text-white px-6 py-3 rounded-full font-barlow font-bold uppercase tracking-wider text-sm transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar Column (4 Cols) */}
            <div className="lg:col-span-4">
              <BlogSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                recentPosts={BLOG_POSTS}
              />
            </div>
          </div>
        </section>

        {/* 4. Educational Newsletter Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-linear-to-r from-[#FAF8F5] to-[#EFECE1] border border-black/5 rounded-[36px] p-8 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#8A43C8] font-barlow font-bold text-xs uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Product Function & Mind Wellness</span>
              </div>
              <h2 className="font-barlow font-black text-3xl sm:text-4xl uppercase text-gray-900 leading-tight mb-3">
                Stay Ahead of Mental Fatigue
              </h2>
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                Join 15,000+ engineers, gamers, and founders receiving our monthly deep
                dives on adaptogenic mushrooms, neural optimization, and clean energy.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! Thank you for joining Pilz Insights.");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="bg-white px-6 py-4 rounded-full text-sm font-sans text-gray-900 border border-gray-300 focus:border-[#388E64] outline-hidden min-w-[260px] shadow-xs"
              />
              <button
                type="submit"
                className="bg-[#388E64] hover:bg-[#072F25] text-white px-8 py-4 rounded-full font-barlow font-bold uppercase tracking-wider text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
