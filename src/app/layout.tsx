import type { Metadata } from "next";
import { Karla, Work_Sans } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pilze - Functional Drinks",
  description: "Elevate your daily ritual with Pilze functional beverages.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${workSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
