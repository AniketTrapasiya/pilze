import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Header />
      <main className="grow">
        <About />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
