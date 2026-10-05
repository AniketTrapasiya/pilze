import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BLOG_POSTS } from "@/data/blogData";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Pilz Knowledge Hub",
      description: "Science-backed insights on functional mushrooms and nootropics.",
    };
  }

  return {
    title: `${post.title} | Pilz Knowledge Hub`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          alt: post.title,
        },
      ],
    },
    other: {
      "geo.region": "IN-GJ",
      "geo.placename": "Ahmedabad",
      "geo.position": "23.0225;72.5714",
      ICBM: "23.0225, 72.5714",
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) =>
    post.relatedSlugs.includes(p.slug)
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.featuredImage],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Pilz Exotic",
      logo: {
        "@type": "ImageObject",
        url: "https://pilzexotic.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pilzexotic.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main className="grow">
        {/* 1. Article Hero Header */}
        <section className="bg-linear-to-b from-[#EFECE1] to-[#FAF8F5] pt-12 pb-16 sm:pb-20 border-b border-black/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Back Link */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-barlow font-bold uppercase tracking-wider text-[#388E64] hover:text-[#072F25] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>
            </div>

            {/* Category Pill */}
            <span className="inline-block bg-[#8A43C8] text-white text-xs font-barlow font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              {post.category}
            </span>

            {/* Article Title */}
            <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 uppercase tracking-tight leading-[1.05] mb-6">
              {post.title}
            </h1>

            {/* Meta Row: Author, Date, Read Time */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-black/10 text-xs sm:text-sm font-sans text-gray-600">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-none">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Article Body Container */}
        <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Featured Image */}
          <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden shadow-lg mb-12 bg-gray-100 border border-gray-200">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="bg-[#EFECE1] border-l-4 border-[#388E64] rounded-2xl p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-center gap-2 text-[#388E64] font-barlow font-bold text-sm uppercase tracking-wider mb-4">
              <Sparkles className="w-5 h-5" />
              <span>Key Takeaways & Functional Highlights</span>
            </div>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#388E64] shrink-0 mt-0.5" />
                  <span className="font-sans text-sm sm:text-base text-gray-800 leading-relaxed">
                    {takeaway}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="space-y-12">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-5">
                <h2 className="font-barlow font-bold text-2xl sm:text-3xl uppercase tracking-tight text-gray-900">
                  {sec.sectionHeading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-gray-700 text-base sm:text-lg leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                {sec.highlightQuote && (
                  <blockquote className="my-8 border-l-4 border-[#8A43C8] pl-6 py-2 bg-[#8A43C8]/5 rounded-r-2xl italic text-lg sm:text-xl font-sans text-gray-900 font-medium">
                    &ldquo;{sec.highlightQuote}&rdquo;
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-barlow font-bold text-gray-400 mr-2">
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white border border-gray-200 px-3.5 py-1.5 rounded-full text-xs font-sans text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Product Callout Card: Try Pilz */}
          <div className="mt-14 rounded-3xl bg-linear-to-r from-[#072F25] to-[#1a5b48] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <span className="bg-[#FF9924] text-black font-barlow font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider inline-block mb-3">
                Experience The Difference
              </span>
              <h3 className="font-barlow font-black text-3xl sm:text-4xl uppercase tracking-tight leading-tight mb-2">
                Fuel Your Focus With Pilz
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-4">
                Formulated with Lion&apos;s Mane, Reishi, Ashwagandha, L-Theanine, and
                natural caffeine in sparkling Berry Peach.
              </p>
              <div className="text-xs text-[#FFCB77] font-semibold">
                Use code &quot;NEW15&quot; for 15% off your first 12-pack!
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#E51A1A] hover:bg-[#c91212] text-white px-8 py-4 rounded-full font-barlow font-bold uppercase tracking-wider text-base transition-all shadow-md hover:shadow-xl shrink-0"
            >
              <span>Shop Pilz Focus</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h3 className="font-barlow font-black text-3xl uppercase tracking-tight text-gray-900 mb-8">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedPosts.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all group flex flex-col"
                  >
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={relPost.featuredImage}
                        alt={relPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-barlow font-bold uppercase tracking-wider text-[#8A43C8] mb-2 block">
                        {relPost.category}
                      </span>
                      <h4 className="font-barlow font-bold text-lg uppercase text-gray-900 group-hover:text-[#388E64] transition-colors line-clamp-2 leading-snug">
                        {relPost.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-2 font-sans">
                        {relPost.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
