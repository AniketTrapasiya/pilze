import Header from "@/components/Header";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
