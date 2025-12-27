import Header from "@/components/Header";
import AboutFull from "@/components/AboutFull";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <AboutFull />
      </main>
      <Footer />
    </div>
  );
}
