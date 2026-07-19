import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
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
    default: `${SITE_NAME} — The ADHD-Friendly Planner That Finally Sticks`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A calm, printable planner designed for ADHD adults. Brain dump the chaos, pick three must-dos, and actually start. Instant digital download for print or iPad.",
  keywords: [
    "ADHD planner",
    "ADHD daily planner printable",
    "printable planner for ADHD adults",
    "ADHD organization tools",
    "digital planner download",
    "brain dump template",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — The ADHD-Friendly Planner That Finally Sticks`,
    description:
      "Your brain has enough tabs open. Give every thought a home with a calm, printable planner made for ADHD adults.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — The ADHD-Friendly Planner That Finally Sticks`,
    description:
      "A calm, printable planner designed for ADHD adults. Instant download for print or iPad.",
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
      <body>{children}</body>
    </html>
  );
}
