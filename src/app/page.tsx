import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IngredientsMarquee from "@/components/IngredientsMarquee";
import AboutPilz from "@/components/AboutPilz";
import OurStory from "@/components/OurStory";
import FunctionalPerformance from "@/components/FunctionalPerformance";
import WhoPilzIsMadeFor from "@/components/WhoPilzIsMadeFor";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Header with Top Promo Bar & Cart/Search Drawers */}
      <Header />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. What's Inside Pilz / Built For Productive Days */}
        <IngredientsMarquee />

        {/* 3. About Pilz / Every Sip Works Smarter */}
        <AboutPilz />

        {/* 4. Our Story */}
        <OurStory />

        {/* 5. Functional Performance / What Pilz Brings To Your Day */}
        <FunctionalPerformance />

        {/* 6. Made For Modern Minds / Who Pilz Is Made For */}
        <WhoPilzIsMadeFor />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
