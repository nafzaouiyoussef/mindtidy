"use client";

import { useEffect } from "react";
import { PRODUCT } from "@/lib/config";
import { trackMetaEvent } from "@/lib/meta-pixel";

/**
 * Fires a Meta Pixel ViewContent event once, the first time the given
 * section (default: the pricing section) scrolls into view. Renders nothing.
 */
export default function MetaViewContent({
  targetId = "pricing",
}: {
  targetId?: string;
}) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el || typeof IntersectionObserver === "undefined") return;

    let fired = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired) {
            fired = true;
            trackMetaEvent("ViewContent", {
              content_name: PRODUCT.name,
              content_type: "product",
              value: PRODUCT.price,
              currency: PRODUCT.currency,
            });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId]);

  return null;
}
