import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/EnquiryModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../node_modules/@fontsource/fraunces/files/fraunces-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});

const ibmPlexMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "NutriBrix — Feed the Soil. Fuel the Future.",
    template: "%s | NutriBrix",
  },
  description:
    "NutriBrix Organic Smart Block — compressed organic manure made from crop residue and farm waste for Indian farmers. 100% organic, eco-friendly, easy to transport.",
  keywords: [
    "organic manure",
    "organic fertilizer",
    "smart block",
    "farm waste",
    "crop residue",
    "sustainable farming",
    "soil health",
    "Gujarat agriculture",
    "NutriBrix",
  ],
  openGraph: {
    title: "NutriBrix — Feed the Soil. Fuel the Future.",
    description:
      "Compressed organic manure made from crop residue and farm waste. 100% organic, eco-friendly, easy to store and transport.",
    url: "https://nutribrix.in",
    siteName: "NutriBrix",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriBrix — Feed the Soil. Fuel the Future.",
    description:
      "Compressed organic manure made from crop residue and farm waste.",
  },
  metadataBase: new URL("https://nutribrix.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EnquiryModal />
      </body>
    </html>
  );
}
