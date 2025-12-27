import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <Features />
        <ProductShowcase />
        <About />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
