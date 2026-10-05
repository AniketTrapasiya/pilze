"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  User,
  Mail,
  PenLine,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Header Banner / Breadcrumb */}
      <section className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] bg-[#EBE7DF] overflow-hidden flex items-center">
        {/* Background Image Banner */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-banner.jpg"
            alt="Pilz Contact Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="font-barlow font-black text-5xl sm:text-6xl md:text-7xl text-[#121212] uppercase tracking-tight leading-none mb-3">
            Contact
          </h1>
          <nav className="flex items-center gap-2 font-sans text-sm sm:text-base font-semibold">
            <Link
              href="/"
              className="text-[#EB1400] hover:underline transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#121212]">Contact</span>
          </nav>
        </div>
      </section>

      {/* 2. Main Contact Form & Information Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Information Card */}
          <div className="lg:col-span-6 bg-[#EFECE1] rounded-[36px] p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xs">
            {/* Mint leaves floating on right border */}
            <div className="absolute top-12 -right-4 sm:-right-2 pointer-events-none w-28 sm:w-36 md:w-44 select-none animate-float-leaf1">
              <Image
                src="/images/contact-leaves.png"
                alt=""
                width={170}
                height={220}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-md mb-8">
              <h2 className="font-barlow font-black text-4xl sm:text-5xl uppercase tracking-tight text-black mb-3">
                Contact <span className="text-[#8A43C8]">Information</span>
              </h2>
              <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                Have a question, business inquiry, or bulk order request? We&apos;d love
                to hear from you. Reach out to our team and we&apos;ll get back to you as
                soon as possible.
              </p>
            </div>

            {/* 3 White Pill Contact Cards */}
            <div className="relative z-10 space-y-4 sm:space-y-5">
              {/* Card 1: Address */}
              <div className="bg-white rounded-2xl sm:rounded-full py-4 px-6 shadow-xs border border-black/5 flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#EB1400] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-barlow font-bold text-gray-400 tracking-wider">
                    Address
                  </p>
                  <p className="font-sans font-semibold text-gray-900 text-sm sm:text-base truncate">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Card 2: Contact Info */}
              <div className="bg-white rounded-2xl sm:rounded-full py-4 px-6 shadow-xs border border-black/5 flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#388E64] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Phone className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-barlow font-bold text-gray-400 tracking-wider">
                    Contact Info
                  </p>
                  <a
                    href="tel:+919274474652"
                    className="block font-sans font-semibold text-gray-900 hover:text-[#388E64] text-xs sm:text-sm transition-colors"
                  >
                    Mobile: + +91 9274474652
                  </a>
                  <a
                    href="mailto:support@pilzexotic.com"
                    className="block font-sans font-semibold text-gray-900 hover:text-[#388E64] text-xs sm:text-sm transition-colors"
                  >
                    Email: support@pilzexotic.com
                  </a>
                </div>
              </div>

              {/* Card 3: Opening Hours */}
              <div className="bg-white rounded-2xl sm:rounded-full py-4 px-6 shadow-xs border border-black/5 flex items-center gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#FF9924] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Clock className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase font-barlow font-bold text-gray-400 tracking-wider">
                    Opening Hours
                  </p>
                  <p className="font-sans font-semibold text-gray-900 text-xs sm:text-sm">
                    Monday - Saturday: 10:00am - 06:00pm
                  </p>
                  <p className="font-sans text-gray-500 text-xs sm:text-sm">
                    Sunday are Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-barlow font-black text-4xl sm:text-5xl uppercase tracking-tight text-black mb-8">
              Get In Touch!
            </h2>

            {submitted ? (
              <div className="bg-[#388E64]/10 border border-[#388E64]/20 rounded-3xl p-8 text-center text-[#388E64]">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-barlow font-bold text-2xl uppercase">
                  Thank You!
                </h3>
                <p className="font-sans text-sm mt-1">
                  Your message has been sent successfully. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-[#EFECE1] hover:bg-[#EAE6DA] focus:bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-4 text-sm outline-hidden border border-transparent focus:border-[#388E64] transition-all"
                    />
                    <User className="w-4 h-4 text-gray-400 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className="w-full bg-[#EFECE1] hover:bg-[#EAE6DA] focus:bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-4 text-sm outline-hidden border border-transparent focus:border-[#388E64] transition-all"
                    />
                    <Mail className="w-4 h-4 text-gray-400 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 2: Mobile Number */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Mobile Number"
                    className="w-full bg-[#EFECE1] hover:bg-[#EAE6DA] focus:bg-white text-gray-900 placeholder-gray-500 rounded-full px-6 py-4 text-sm outline-hidden border border-transparent focus:border-[#388E64] transition-all"
                  />
                  <Phone className="w-4 h-4 text-gray-400 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Row 3: Inquiry Type */}
                <div className="relative">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#EFECE1] hover:bg-[#EAE6DA] focus:bg-white text-gray-700 rounded-full px-6 py-4 text-sm outline-hidden border border-transparent focus:border-[#388E64] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Inquiry Type</option>
                    <option value="General">General</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Partnerships">Partnerships</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write Message..."
                    className="w-full bg-[#EFECE1] hover:bg-[#EAE6DA] focus:bg-white text-gray-900 placeholder-gray-500 rounded-[28px] p-6 text-sm outline-hidden border border-transparent focus:border-[#388E64] transition-all resize-y"
                  />
                  <PenLine className="w-4 h-4 text-gray-400 absolute right-6 top-6 pointer-events-none" />
                </div>

                {/* Row 5: Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#121212] hover:bg-[#388E64] text-white font-barlow font-bold uppercase text-base sm:text-lg tracking-wider px-10 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    SEND MESSAGE NOW
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: "LET'S CONNECT WITH PILZ" & Interactive Map */}
      <section className="bg-[#FDE1B9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Location & Contact Card */}
            <div className="lg:col-span-6 bg-[#F6CF99] border-2 border-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-sm">
              {/* Botanical sketch leaf watermark illustration on left */}
              <div className="absolute -left-6 top-12 pointer-events-none w-36 sm:w-48 opacity-80 select-none">
                <Image
                  src="/images/location-left.png"
                  alt=""
                  width={200}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Mini Can with fruit burst on bottom right */}
              <div className="absolute right-4 bottom-2 pointer-events-none w-24 sm:w-28 select-none">
                <Image
                  src="/images/location-can.png"
                  alt=""
                  width={140}
                  height={180}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 max-w-md flex flex-col items-center">
                {/* Subtitle with lines */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-0.5 bg-[#388E64]" />
                  <span className="font-barlow font-black text-[#388E64] text-sm uppercase tracking-widest">
                    FIND PILZ
                  </span>
                  <span className="w-8 h-0.5 bg-[#388E64]" />
                </div>

                {/* Heading */}
                <h2 className="font-barlow font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black mb-4">
                  LET&apos;S CONNECT WITH <span className="font-black text-black">PILZ</span>
                </h2>

                {/* Decorative Pin / Mouse Icon */}
                <div className="w-6 h-8 rounded-full border-2 border-black flex items-start justify-center p-1 mb-4">
                  <div className="w-1.5 h-2 bg-black rounded-full animate-bounce" />
                </div>

                {/* Address */}
                <p className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed px-4">
                  48, Vinayak Ind. Estate-4, Kathwada, <br />
                  Ahmedabad, Gujarat – 382430
                </p>

                {/* Orange Divider */}
                <div className="w-0.5 h-12 bg-[#FF9924] my-5" />

                {/* Customer Care & Email */}
                <div className="font-sans text-sm sm:text-base text-gray-800 space-y-1 mb-6">
                  <p>
                    <span className="font-medium">Customer Care:</span>{" "}
                    <a
                      href="tel:+919274474652"
                      className="hover:text-[#388E64] font-semibold transition-colors"
                    >
                      +91 9274474652
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:info@drinkpilz.com"
                      className="hover:text-[#388E64] font-semibold transition-colors"
                    >
                      info@drinkpilz.com
                    </a>
                  </p>
                </div>

                {/* Social Circle Outline Buttons (Facebook, Instagram, WhatsApp) */}
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61589530807069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-black hover:bg-black hover:text-white flex items-center justify-center text-black transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/drink.pilz?igsh=MTl5bWcwZWM1a2tjZg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-black hover:bg-black hover:text-white flex items-center justify-center text-black transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919274474652"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-black hover:bg-black hover:text-white flex items-center justify-center text-black transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.564 5.714 5.864-1.538c1.691.923 3.633 1.458 5.698 1.458 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-6 h-[420px] lg:h-auto min-h-[440px] rounded-[32px] overflow-hidden border-2 border-white shadow-md relative">
              <iframe
                title="Pilz Location Map"
                src="https://maps.google.com/maps?q=48%2C%20Vinayak%20Ind.%20Estate-4%2C%20Kathwada%2C%20Ahmedabad%2C%20Gujarat&t=m&z=14&output=embed&iwloc=near"
                className="w-full h-full min-h-[440px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
