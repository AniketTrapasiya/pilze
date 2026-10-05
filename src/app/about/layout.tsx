import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Our Story | Pilz Functional Beverages",
  description:
    "Discover how Pilz was created to redefine cognitive performance and everyday wellness with Lion's Mane mushroom, L-Theanine, and Ashwagandha. Smarter nutrition without compromises.",
  keywords: [
    "about pilz",
    "pilz story",
    "functional drink company",
    "cognitive performance brand india",
    "lion's mane drink",
    "adaptogenic beverage founders",
    "healthy energy drink alternative",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Pilz | Smarter Functional Nutrition",
    description:
      "Pilz was created with a simple belief: modern lifestyles need smarter nutrition. Unlock your best mental performance naturally.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/about-can-sphere.png",
        width: 1200,
        height: 630,
        alt: "Pilz Functional Drink - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pilz | Driven By A Bigger Purpose",
    description:
      "Helping people unlock their best mental performance with adaptogens and nootropics.",
    images: ["/images/about-can-sphere.png"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://pilzexotic.com/about/#webpage",
        url: "https://pilzexotic.com/about",
        name: "About Us & Our Story | Pilz Functional Beverages",
        description:
          "Discover how Pilz was created to redefine cognitive performance and everyday wellness with Lion's Mane mushroom, L-Theanine, and Ashwagandha.",
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
              name: "About Us",
              item: "https://pilzexotic.com/about",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://pilzexotic.com/#organization",
        name: "Pilz Exotic",
        alternateName: "Pilz Functional Beverages",
        url: "https://pilzexotic.com",
        logo: "https://pilzexotic.com/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9274474652",
          contactType: "customer service",
          areaServed: ["IN", "Worldwide"],
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0225,
          longitude: 72.5714,
        },
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
