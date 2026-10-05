import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#072F25",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pilzexotic.com"),
  title: {
    default:
      "Pilz - Your Brain Has Been Asking For This | Functional Sparkling Drink",
    template: "%s | Pilz Functional Drink",
  },
  description:
    "A sparkling functional drink powered by Lion's Mane, Reishi, Ashwagandha, L-Theanine, and natural caffeine to help you stay focused, energized, and balanced without jitters or crashes.",
  keywords: [
    "functional drink",
    "sparkling functional beverage",
    "lion's mane mushroom drink",
    "nootropic energy drink",
    "adaptogenic beverage",
    "clean energy drink",
    "zero sugar sparkling drink",
    "ashwagandha drink",
    "l-theanine caffeine synergy",
    "cognitive performance beverage",
    "Pilz",
    "Pilz Exotic",
    "Ahmedabad",
    "Gujarat",
    "India",
  ],
  authors: [{ name: "Pilz Exotic Formulation Team", url: "https://pilzexotic.com" }],
  creator: "Pilz Exotic",
  publisher: "Pilz Functional Beverages",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://pilzexotic.com",
    siteName: "Pilz Functional Beverages",
    title: "Pilz - Your Brain Has Been Asking For This",
    description:
      "Clean sparkling cognitive energy powered by Lion's Mane, L-Theanine, and Ashwagandha. 0g sugar, crisp taste, no crashes.",
    images: [
      {
        url: "/images/hero-bottle.png",
        width: 1200,
        height: 630,
        alt: "Pilz Focus Sparkling Functional Drink",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilz - Your Brain Has Been Asking For This",
    description:
      "Clean sparkling cognitive energy powered by Lion's Mane, L-Theanine, and Ashwagandha.",
    images: ["/images/hero-bottle.png"],
    creator: "@pilzdrink",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://pilzexotic.com/#organization",
        name: "Pilz Exotic",
        alternateName: "Pilz Functional Beverages",
        url: "https://pilzexotic.com",
        logo: "https://pilzexotic.com/images/logo.png",
        image: "https://pilzexotic.com/images/hero-bottle.png",
        description:
          "Formulators of premium sparkling functional beverages powered by Lion's Mane, L-Theanine, and Ashwagandha for calm focus and sustained energy.",
        telephone: "+919274474652",
        email: "support@pilzexotic.com",
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
        currenciesAccepted: "INR, USD, EUR",
        paymentAccepted: "UPI, Credit Card, Debit Card, Net Banking",
        areaServed: ["India", "Worldwide"],
        sameAs: [
          "https://instagram.com/pilzdrink",
          "https://facebook.com/pilzdrink",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://pilzexotic.com/#website",
        url: "https://pilzexotic.com",
        name: "Pilz Functional Beverages",
        publisher: {
          "@id": "https://pilzexotic.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://pilzexotic.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased bg-[#FAF8F5] text-[#1c1c1c] selection:bg-[#8A43C8] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
