"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";
import {
  WHOP_PLAN_ID,
  WHOP_PLAN_ID_SANDBOX,
  WHOP_ACCENT_COLOR,
  WHOP_ENVIRONMENT,
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
 * Plan id and accent colour live in lib/config.ts.
 */
export default function CheckoutEmbed() {
  return (
    <WhopCheckoutEmbed
      planId={useSandbox ? WHOP_PLAN_ID_SANDBOX : WHOP_PLAN_ID}
      environment={useSandbox ? "sandbox" : "production"}
      themeOptions={{ accentColor: WHOP_ACCENT_COLOR }}
      theme="light"
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
