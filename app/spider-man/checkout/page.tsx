import type { Metadata } from "next";
import Link from "next/link";
import SpiderShell from "@/components/spider/SpiderShell";
import CheckoutEmbed from "@/components/CheckoutEmbed";
import { SPIDER } from "@/content/spider-man";
import { WHOP_PLAN_ID_SPIDER, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: `Checkout — ${SPIDER.name}`,
  description: `Secure checkout for the ${SPIDER.name} PDF pattern.`,
  alternates: { canonical: SPIDER.checkoutPath },
  robots: { index: false, follow: false },
};

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-spider-red" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SpiderCheckoutPage() {
  const configured = !!WHOP_PLAN_ID_SPIDER;

  return (
    <SpiderShell>
      <div className="px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-spider-red">
              Checkout
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              You&apos;re one step away.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-light">
              Instant PDF the moment you&apos;re done — plus a 14-day
              money-back guarantee if it doesn&apos;t work for you.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-4xl border border-cream-dark bg-white shadow-soft">
            {configured ? (
              <CheckoutEmbed
                planId={WHOP_PLAN_ID_SPIDER}
                returnPath="/thank-you"
              />
            ) : (
              <div className="p-8 sm:p-10 text-center">
                <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-spider-red-tint text-2xl" aria-hidden="true">
                  🕸️
                </p>
                <h2 className="mt-5 font-heading text-xl font-bold text-slate">
                  Checkout coming online
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-light">
                  The Whop plan for this pattern hasn&apos;t been wired up
                  yet. Once <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-xs">WHOP_PLAN_ID_SPIDER</code>{" "}
                  is set in <code className="rounded bg-cream-dark px-1.5 py-0.5 font-mono text-xs">lib/config.ts</code>,
                  the payment form will appear here automatically.
                </p>
                <p className="mt-6 text-sm text-slate-muted">
                  Meanwhile, email us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-spider-red hover:underline">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  and we&apos;ll send the pattern manually.
                </p>
                <Link
                  href={SPIDER.path}
                  className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-spider-red hover:text-spider-red-dark"
                >
                  ← Back to the pattern
                </Link>
              </div>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-muted">
            <li className="flex items-center gap-1.5"><CheckIcon /> Secure payment</li>
            <li className="flex items-center gap-1.5"><CheckIcon /> Instant download</li>
            <li className="flex items-center gap-1.5"><CheckIcon /> 14-day guarantee</li>
          </ul>
        </div>
      </div>
    </SpiderShell>
  );
}
