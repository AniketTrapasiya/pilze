import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Global Distribution | Pilz Functional Beverages",
  description:
    "Get in touch with the Pilz Exotic team for distribution inquiries, wholesale orders, and customer support. Based in Ahmedabad, Gujarat, India.",
  keywords: [
    "contact pilz",
    "pilz customer support",
    "functional beverage distribution india",
    "pilz wholesale",
    "ahmedabad functional drinks",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Pilz Functional Beverages",
    description:
      "Reach out to the Pilz team for product inquiries, distribution partnerships, or feedback.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pilz Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pilz Functional Beverages",
    description:
      "Customer support, brand collaborations, and wholesale distribution.",
    images: ["/images/contact-banner.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://pilzexotic.com/contact/#webpage",
        url: "https://pilzexotic.com/contact",
        name: "Contact Us | Pilz Functional Beverages",
        description:
          "Official contact page for Pilz functional beverages support, distribution, and general inquiries.",
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
              name: "Contact",
              item: "https://pilzexotic.com/contact",
            },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://pilzexotic.com/#localbusiness",
        name: "Pilz Exotic",
        alternateName: "Pilz Functional Beverages",
        image: "https://pilzexotic.com/images/hero-bottle.png",
        telephone: "+919274474652",
        email: "support@pilzexotic.com",
        url: "https://pilzexotic.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ahmedabad",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0225,
          longitude: 72.5714,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "18:00",
          },
        ],
        priceRange: "₹₹",
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
