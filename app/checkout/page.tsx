import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutEmbed from "@/components/CheckoutEmbed";
import { PRODUCT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Checkout",
  description: `Secure checkout for the ${PRODUCT.name}.`,
  alternates: { canonical: "/checkout" },
  // Checkout pages shouldn't appear in search results.
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-sage-dark">
              Checkout
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              You&apos;re one step away.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-light">
              Instant download the moment you&apos;re done — plus a 14-day
              money-back guarantee if it doesn&apos;t fit your brain.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-4xl border border-cream-dark bg-white shadow-soft">
            <CheckoutEmbed />
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-muted">
            <li className="flex items-center gap-1.5">
              <CheckIcon /> Secure payment
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon /> Instant download
            </li>
            <li className="flex items-center gap-1.5">
              <CheckIcon /> 14-day guarantee
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-sage-dark" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
