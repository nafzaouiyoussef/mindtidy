/**
 * Client-side Meta Pixel helpers.
 *
 * The base pixel is loaded in components/MetaPixel.tsx; this module is the
 * shared, safe way for components to fire standard events.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/** Fire a standard Meta Pixel event. No-ops if the pixel hasn't loaded
 *  (SSR, ad-blockers, or the script not yet ready). */
export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}
