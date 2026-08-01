import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MetaPixel from "@/components/MetaPixel";
import { SITE_URL, SITE_NAME, PRODUCT } from "@/lib/config";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ADHD Planner Printable + Digital Stickers Bundle`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "An undated 21-page ADHD planner made for how ADHD brains work, plus 63 digital stickers, a GoodNotes sticker book and an installation guide. Print at home or use on iPad — instant download.",
  keywords: [
    "ADHD planner printable",
    "ADHD digital planner",
    "GoodNotes ADHD planner",
    "digital planner stickers",
    "undated ADHD planner",
    "ADHD planner bundle",
    "Notability planner",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ADHD Planner Printable + Digital Stickers Bundle`,
    description:
      "21-page undated ADHD planner + 63 digital stickers + GoodNotes sticker book + installation guide. Built for how ADHD brains actually work.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ADHD Planner + Digital Stickers Bundle`,
    description:
      "Undated 21-page ADHD planner + 63 digital stickers. Print at home or use in GoodNotes / Notability. Instant download.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#F7F3EC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${inter.variable}`}>
      <body>
        <MetaPixel />
        {children}
        {/* Vercel Web Analytics (visitors, page views, referrers, devices) */}
        <Analytics />
        {/* Vercel Speed Insights (Core Web Vitals) */}
        <SpeedInsights />
      </body>
    </html>
  );
}
