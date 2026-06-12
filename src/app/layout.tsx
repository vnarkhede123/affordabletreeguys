import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Affordable Tree Guys | Tree Service in Gas City & Marion, IN",
  description:
    "Professional tree removal, trimming, stump grinding, and 24/7 emergency service in Grant County, Indiana. Fully insured, 5-star rated. Call (765) 293-7760 for a free estimate.",
  keywords: [
    "tree service Gas City IN",
    "tree removal Marion Indiana",
    "stump grinding Grant County",
    "emergency tree service",
    "Affordable Tree Guys",
  ],
  openGraph: {
    title: "Affordable Tree Guys | Grant County Tree Service",
    description:
      "Indiana's trusted tree experts—affordable, professional, and always on call.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${bebasNeue.variable} ${display.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
