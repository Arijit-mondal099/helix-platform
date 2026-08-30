import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const geistPixel = localFont({
  src: "../public/fonts/GeistPixel-Circle.woff2",
  variable: "--font-geist-pixel",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Helix — Intelligence Designed To Evolve",
  description:
    "Helix — Build applications that reason, adapt and collaborate using a modular AI platform designed for production.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistPixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
