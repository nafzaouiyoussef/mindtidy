"use client";

import { useRouter } from "next/navigation";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import {
  WHOP_PLAN_ID,
  WHOP_PLAN_ID_SANDBOX,
  WHOP_ACCENT_COLOR,
  WHOP_ENVIRONMENT,
  THANK_YOU_PATH,
} from "@/lib/config";

// Only use sandbox when a sandbox plan actually exists, since the production
// plan id doesn't resolve there — otherwise the embed would render a 404.
const useSandbox = WHOP_ENVIRONMENT === "sandbox" && !!WHOP_PLAN_ID_SANDBOX;

/**
 * Whop embedded checkout.
 *
 * The @whop/checkout package ships without a "use client" banner, so this
 * thin wrapper provides it — that's why the embed lives here rather than
 * directly in app/checkout/page.tsx (which stays a server component so it
 * can export metadata).
 *
 * After a successful purchase we send the buyer to our own thank-you page:
 * `skipRedirect` stops Whop navigating to its default success page, and
 * `onComplete` does the routing. `returnUrl` covers buyers who get bounced
 * out to an external payment provider (3-D Secure, PayPal) mid-flow.
 *
 * Plan id, accent colour and environment live in lib/config.ts.
 */
export default function CheckoutEmbed() {
  const router = useRouter();

  // Absolute URL, and only available in the browser.
  const returnUrl =
    typeof window === "undefined"
      ? undefined
      : `${window.location.origin}${THANK_YOU_PATH}`;

  return (
    <WhopCheckoutEmbed
      planId={useSandbox ? WHOP_PLAN_ID_SANDBOX : WHOP_PLAN_ID}
      environment={useSandbox ? "sandbox" : "production"}
      themeOptions={{ accentColor: WHOP_ACCENT_COLOR }}
      theme="light"
      skipRedirect
      returnUrl={returnUrl}
      onComplete={() => router.push(THANK_YOU_PATH)}
      fallback={
        <div className="flex min-h-[540px] items-center justify-center">
          <p className="flex items-center gap-3 text-sm font-medium text-slate-light">
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-sage-light border-t-sage-dark"
              aria-hidden="true"
            />
            Loading secure checkout…
          </p>
        </div>
      }
    />
  );
}
