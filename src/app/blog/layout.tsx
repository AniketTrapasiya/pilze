import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilz Knowledge Hub | Functional Drink Science, Adaptogens & Nootropics",
  description:
    "Explore clinical research, adaptogenic benefits, and nutritional science behind Pilz sparkling functional drink with Lion's Mane, L-Theanine, and Ashwagandha.",
  keywords: [
    "functional drink science",
    "lion's mane benefits",
    "l-theanine caffeine ratio",
    "adaptogens for focus",
    "ashwagandha energy",
    "nootropic beverage blog",
    "stevia vs sugar energy drinks",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Pilz Knowledge Hub | Functional Drink Science & Nootropics",
    description:
      "Explore clinical research, adaptogenic benefits, and nutritional science behind Pilz sparkling functional drink.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/images/hero-ingredients.png",
        width: 1200,
        height: 630,
        alt: "Pilz Functional Ingredients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilz Knowledge Hub | Brain Science & Clean Energy",
    description:
      "Clinical insights into adaptogens, functional mushrooms, and nootropics.",
    images: ["/images/hero-ingredients.png"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://pilzexotic.com/blog/#blog",
        name: "Pilz Knowledge Hub",
        description:
          "Educational articles and clinical awareness on functional mushrooms, adaptogens, and cognitive health.",
        url: "https://pilzexotic.com/blog",
        publisher: {
          "@type": "Organization",
          name: "Pilz Exotic",
          url: "https://pilzexotic.com",
          logo: "https://pilzexotic.com/images/logo.png",
        },
      },
      {
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
            name: "Blog",
            item: "https://pilzexotic.com/blog",
          },
        ],
      },
    ],
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
