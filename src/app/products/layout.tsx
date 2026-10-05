import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Functional Sparkling Drinks | Pilz Focus & Energy",
  description:
    "Explore Pilz range of functional sparkling beverages. Powered by Lion's Mane, L-Theanine, Reishi, and Ashwagandha. 0g sugar, low calorie, pure botanical focus.",
  keywords: [
    "buy functional drinks",
    "lion's mane mushroom drink",
    "focus elixir",
    "clean sparkling energy",
    "nootropic drink shop",
    "pilz flavours",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Shop Pilz Functional Beverages",
    description:
      "Crafted with adaptogenic mushrooms, pure botanicals, and zero compromise.",
    url: "/products",
    type: "website",
    images: [
      {
        url: "/images/hero-bottle.png",
        width: 1200,
        height: 630,
        alt: "Pilz Functional Beverages Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Pilz Functional Sparkling Drinks",
    description: "Brain-boosting hydration with adaptogens and zero crashes.",
    images: ["/images/hero-bottle.png"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pilz Functional Beverages Collection",
    url: "https://pilzexotic.com/products",
    description:
      "A collection of adaptogen-infused sparkling drinks formulated for focus, energy, and mindful wellness.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pilzexotic.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shop Products",
          item: "https://pilzexotic.com/products",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
