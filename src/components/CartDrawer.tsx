"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartCount,
  setCartCount,
}: CartDrawerProps) {
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

  const pricePerCan = 3.99;
  const packSize = 12;
  const itemTotal = (cartCount * pricePerCan * packSize).toFixed(2);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#388E64]" />
            <h3 className="font-barlow text-2xl uppercase tracking-wider font-bold text-gray-900">
              Shopping Cart
            </h3>
            <span className="bg-[#8A43C8] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartCount === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#EFECE1] flex items-center justify-center text-[#388E64] mb-4">
                <ShoppingBag className="w-10 h-10 opacity-70" />
              </div>
              <h4 className="font-barlow text-2xl font-bold text-gray-900 uppercase mb-2">
                Your cart is empty
              </h4>
              <p className="text-gray-500 text-sm max-w-xs mb-6 font-sans">
                Experience natural focus, clean energy, and calm clarity with Pilz functional drinks.
              </p>
              <button
                onClick={() => {
                  setCartCount(1);
                }}
                className="bg-[#388E64] hover:bg-[#072F25] text-white px-6 py-3 rounded-full font-barlow uppercase font-bold tracking-wider text-sm transition-colors shadow-md"
              >
                Add 12-Pack Sample
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-[#FAF8F5]">
                <div className="w-20 h-20 bg-white rounded-lg p-2 border border-gray-100 flex items-center justify-center relative shrink-0">
                  <Image
                    src="/images/hero-mini-can.png"
                    alt="Pilz Focus Berry Peach 12-Pack"
                    width={50}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-barlow text-lg font-bold uppercase text-gray-900 leading-tight truncate">
                    Pilz Focus - Berry Peach
                  </h5>
                  <p className="text-xs text-gray-500 mt-0.5">12 Cans (330ml each)</p>
                  <p className="text-sm font-semibold text-[#8A43C8] mt-1">
                    ${(pricePerCan * packSize).toFixed(2)}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                      <button
                        onClick={() => setCartCount((c) => Math.max(0, c - 1))}
                        className="p-1.5 text-gray-600 hover:text-black"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-gray-900">
                        {cartCount}
                      </span>
                      <button
                        onClick={() => setCartCount((c) => c + 1)}
                        className="p-1.5 text-gray-600 hover:text-black"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => setCartCount(0)}
                      className="text-gray-400 hover:text-[#E51A1A] p-1.5 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Promo Callout */}
              <div className="bg-[#072F25]/5 border border-[#072F25]/15 rounded-xl p-3 text-xs text-[#072F25] flex items-center gap-2">
                <span className="bg-[#072F25] text-white px-2 py-0.5 rounded-sm font-bold text-[10px] tracking-wider uppercase">
                  NEW15
                </span>
                <span>Use code at checkout for 15% off your order!</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartCount > 0 && (
          <div className="border-t border-gray-100 p-6 bg-[#FAF8F5] space-y-4">
            <div className="flex items-center justify-between text-base">
              <span className="text-gray-600 font-sans">Subtotal</span>
              <span className="font-barlow font-bold text-2xl text-gray-900">
                ${itemTotal}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Taxes and shipping calculated at checkout.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onClose}
                className="w-full py-3.5 border border-gray-300 hover:border-gray-900 text-gray-800 rounded-full font-barlow uppercase font-bold tracking-wider text-sm transition-colors text-center"
              >
                View Cart
              </button>
              <button
                onClick={() => alert("Checkout initiated! Total: $" + itemTotal)}
                className="w-full py-3.5 bg-[#E51A1A] hover:bg-[#c91212] text-white rounded-full font-barlow uppercase font-bold tracking-wider text-sm transition-colors shadow-md text-center"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
