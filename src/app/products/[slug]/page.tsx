import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = {
  "energy-boost": {
    name: "Energy Boost",
    tagline: "Vitality & Power",
    description: "Start your day with natural energy from green tea extract and B-vitamins. Perfect for mornings and pre-workout fuel.",
    fullDescription: "Energy Boost is our signature formula designed to give you clean, sustained energy throughout your day. Unlike traditional energy drinks that rely on excessive sugar and synthetic caffeine, we use carefully selected natural ingredients that work with your body's natural rhythms.",
    color: "from-amber-50 to-amber-100",
    accentColor: "amber",
    price: "$3.99",
    caffeine: "120mg",
    calories: "25",
    benefits: [
      "Natural sustained energy without jitters or crashes",
      "Enhanced physical performance and endurance",
      "Improved mental alertness and focus",
      "Supports metabolism and fat burning",
      "Rich in antioxidants from green tea"
    ],
    ingredients: [
      {
        name: "Organic Green Tea Extract",
        description: "Provides natural caffeine and L-theanine for smooth, sustained energy"
      },
      {
        name: "B-Vitamin Complex",
        description: "Essential vitamins (B3, B6, B12) to support energy metabolism"
      },
      {
        name: "Guarana Extract",
        description: "Natural source of caffeine for enhanced alertness"
      },
      {
        name: "Ginseng Root",
        description: "Adaptogen that helps reduce fatigue and improve stamina"
      },
      {
        name: "Natural Flavors",
        description: "Citrus and elderflower notes for a refreshing taste"
      }
    ],
    usage: "Best consumed in the morning or 30 minutes before physical activity. One can per day recommended.",
    image: "/images/energy-boost.jpg"
  },
  "focus-elixir": {
    name: "Focus Elixir",
    tagline: "Clarity & Concentration", 
    description: "Sharpen mental clarity with adaptogens and nootropics. Ideal for work sessions, study time, or creative projects.",
    fullDescription: "Focus Elixir combines time-tested nootropics with modern adaptogens to enhance cognitive function and mental clarity. Perfect for when you need to concentrate, create, or tackle complex tasks.",
    color: "from-teal-50 to-teal-100",
    accentColor: "teal",
    price: "$4.49",
    caffeine: "80mg",
    calories: "20",
    benefits: [
      "Enhanced focus and concentration",
      "Improved memory and cognitive function",
      "Reduced mental fatigue and brain fog",
      "Supports neuroplasticity and learning",
      "Calm, focused energy without anxiety"
    ],
    ingredients: [
      {
        name: "Lion's Mane Mushroom",
        description: "Nootropic mushroom that supports brain health and cognitive function"
      },
      {
        name: "L-Theanine",
        description: "Amino acid that promotes calm focus and reduces stress"
      },
      {
        name: "Rhodiola Rosea",
        description: "Adaptogen that combats mental fatigue and enhances concentration"
      },
      {
        name: "Bacopa Monnieri",
        description: "Herb traditionally used to improve memory and cognitive processing"
      },
      {
        name: "Organic Matcha",
        description: "Premium green tea powder for gentle, sustained energy"
      }
    ],
    usage: "Ideal for work sessions, studying, or creative projects. Can be consumed anytime you need mental clarity.",
    image: "/images/focus-elixir.jpg"
  },
  "wellness-revive": {
    name: "Wellness Revive",
    tagline: "Balance & Immunity",
    description: "Support immunity and recovery with antioxidants and vitamins. Great for post-workout or daily wellness rituals.",
    fullDescription: "Wellness Revive is your daily dose of holistic health support. Packed with immune-boosting ingredients and powerful antioxidants, this caffeine-free formula helps your body recover, restore, and thrive.",
    color: "from-rose-50 to-rose-100",
    accentColor: "rose",
    price: "$3.99",
    caffeine: "0mg",
    calories: "15",
    benefits: [
      "Strengthens immune system function",
      "Reduces inflammation and oxidative stress",
      "Supports post-workout recovery",
      "Promotes gut health and digestion",
      "Provides essential vitamins and minerals"
    ],
    ingredients: [
      {
        name: "Turmeric Root Extract",
        description: "Powerful anti-inflammatory with curcumin for joint and immune support"
      },
      {
        name: "Ginger Root",
        description: "Aids digestion and provides anti-inflammatory benefits"
      },
      {
        name: "Vitamin C & Zinc",
        description: "Essential nutrients for immune function and cellular health"
      },
      {
        name: "Elderberry Extract",
        description: "Rich in antioxidants and traditionally used for immune support"
      },
      {
        name: "Probiotic Blend",
        description: "Beneficial bacteria to support gut health and immunity"
      }
    ],
    usage: "Great for post-workout recovery or as part of your daily wellness routine. Can be enjoyed any time of day.",
    image: "/images/wellness-revive.jpg"
  }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
            <Link href="/products" className="text-primary hover:underline">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'energy-boost' },
    { slug: 'focus-elixir' },
    { slug: 'wellness-revive' },
  ];
}
