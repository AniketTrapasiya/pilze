"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/products" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#072F25] text-white text-xs py-2 px-4 text-center font-sans tracking-wide select-none">
        <span className="opacity-90 font-medium">Use Promo Code - </span>
        <span className="font-bold text-[#FFCB77] tracking-wider">&quot;NEW15&quot;</span>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-3"
            : "bg-[#FAF8F5] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 transition-transform hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="PILZ"
                width={110}
                height={55}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-barlow text-[16px] tracking-wider font-bold uppercase transition-colors relative py-1 ${
                      isActive
                        ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black"
                        : "text-gray-800 hover:text-[#388E64]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons (Search & Cart & Mobile Toggle) */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-gray-800 hover:text-black transition-all bg-white shadow-xs"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </button>

              {/* Cart Button with Count Badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-gray-800 hover:text-black transition-all bg-white relative shadow-xs"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                <span className="absolute -top-1 -right-1 bg-[#E51A1A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-800 bg-white"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-gray-200 shadow-xl py-6 px-6 transition-all">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-barlow text-xl tracking-wider font-bold uppercase py-2 border-b border-gray-100 ${
                      isActive
                        ? "text-[#388E64]"
                        : "text-gray-800 hover:text-[#388E64]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
