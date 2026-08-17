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

/**
 * Whop embedded checkout.
 *
 * The @whop/checkout package ships without a "use client" banner, so this
 * thin wrapper provides it — that's why the embed lives here rather than
 * directly in the /checkout page (which stays a server component so it
 * can export metadata).
 *
 * After a successful purchase we send the buyer to our own thank-you page:
 * `skipRedirect` stops Whop navigating to its default success page, and
 * `onComplete` does the routing. `returnUrl` covers buyers who get bounced
 * out to an external payment provider (3-D Secure, PayPal) mid-flow.
 *
 * Multiple products share this component — pass the product's own
 * `planId` and optional `returnPath` (defaults to /thank-you).
 */
export default function CheckoutEmbed({
  planId = WHOP_PLAN_ID,
  returnPath = THANK_YOU_PATH,
}: {
  planId?: string;
  returnPath?: string;
}) {
  const router = useRouter();

  // Only flip to sandbox when a sandbox id exists AND this call didn't pass
  // a product-specific plan (sandbox is only wired for the main plan).
  const useSandbox =
    WHOP_ENVIRONMENT === "sandbox" &&
    !!WHOP_PLAN_ID_SANDBOX &&
    planId === WHOP_PLAN_ID;

  // Absolute URL, and only available in the browser.
  const returnUrl =
    typeof window === "undefined"
      ? undefined
      : `${window.location.origin}${returnPath}`;

  return (
    <WhopCheckoutEmbed
      planId={useSandbox ? WHOP_PLAN_ID_SANDBOX : planId}
      environment={useSandbox ? "sandbox" : "production"}
      themeOptions={{ accentColor: WHOP_ACCENT_COLOR }}
      theme="light"
      skipRedirect
      returnUrl={returnUrl}
      onComplete={() => router.push(returnPath)}
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
