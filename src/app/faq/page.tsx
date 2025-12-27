import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
