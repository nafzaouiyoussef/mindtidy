import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, PRODUCT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Thank you",
  description: `Your ${PRODUCT.name} download is on its way.`,
  alternates: { canonical: "/thank-you" },
  // Post-purchase page — keep it out of search results.
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    emoji: "📥",
    title: "Check your email",
    body: "Your download link is on its way to the address you used at checkout. It usually lands within a minute or two.",
  },
  {
    emoji: "🗂️",
    title: "Grab the files",
    body: "You'll get four downloads: the 21-page planner PDF (US Letter + A4), 63 sticker PNGs, the GoodNotes sticker book, and the installation guide.",
  },
  {
    emoji: "🖨️",
    title: "Print or import",
    body: "Print the pages you need at home, or follow the 2-page installation guide to import everything into GoodNotes, Notability or any PDF annotator.",
  },
  {
    emoji: "🎯",
    title: "Start with one page",
    body: "Don't set the whole system up today. Print the Daily Big 3, write three things, and let tomorrow-you take it from there.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          {/* Confirmation */}
          <div className="text-center">
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-white shadow-soft"
              aria-hidden="true"
            >
              <svg className="h-8 w-8" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8.5l3.5 3.5L13 4.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              You&apos;re in. Thank you!
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-light">
              Your {PRODUCT.name} is ready — check your inbox for the download
              link. No rush, no setup marathon. It&apos;ll still be there
              tomorrow.
            </p>
          </div>

          {/* What happens next */}
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {NEXT_STEPS.map((step) => (
              <li
                key={step.title}
                className="rounded-3xl border border-cream-dark bg-cream p-6"
              >
                <span
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft"
                  aria-hidden="true"
                >
                  {step.emoji}
                </span>
                <h2 className="font-heading text-lg font-bold text-slate">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-light">
                  {step.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Support */}
          <div className="mt-12 rounded-4xl bg-sage px-8 py-10 text-center shadow-soft sm:px-12">
            <h2 className="font-heading text-2xl font-bold text-white">
              Email didn&apos;t arrive?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-sage-lighter">
              Check your spam or promotions folder first — that&apos;s where it
              hides 90% of the time. Still nothing? Email us and we&apos;ll
              send your files straight over.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-primary mt-7 !bg-white !text-sage-darker hover:!bg-cream"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <p className="mt-10 text-center text-sm text-slate-muted">
            Changed your mind? Our{" "}
            <Link
              href="/refunds"
              className="font-semibold text-sage-darker underline decoration-sage-light underline-offset-2 hover:text-sage-dark"
            >
              14-day refund policy
            </Link>{" "}
            has you covered.{" "}
            <Link
              href="/"
              className="font-semibold text-sage-darker underline decoration-sage-light underline-offset-2 hover:text-sage-dark"
            >
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
