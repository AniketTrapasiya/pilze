"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
      {/* Featured Image Container */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-16/10 w-full overflow-hidden bg-[#FAF8F5] block"
      >
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Pill Badge */}
        <span className="absolute top-4 left-4 bg-[#8A43C8] text-white text-xs font-barlow font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
          {post.category}
        </span>
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Date & Read Time */}
          <div className="flex items-center gap-4 text-xs font-sans text-gray-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-barlow font-bold text-xl sm:text-2xl uppercase tracking-tight text-gray-900 group-hover:text-[#388E64] transition-colors leading-tight mb-3">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="font-sans text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read More Link */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans font-bold text-xs text-gray-900 leading-none">
                {post.author.name}
              </p>
              <p className="font-sans text-[10px] text-gray-400 mt-0.5 truncate max-w-[120px]">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 font-barlow font-bold text-xs uppercase tracking-wider text-[#388E64] group-hover:text-[#072F25] transition-colors"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
