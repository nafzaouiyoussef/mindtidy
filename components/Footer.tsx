import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-mint/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
            Calm planning tools that clear mental clutter. A tidy mind, one
            page at a time.
          </p>
        </div>

        <nav aria-label="Site" className="space-y-3">
          <h2 className="font-body text-sm font-bold uppercase tracking-wider text-ink-muted">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/#why" className="text-ink-soft transition-colors hover:text-ink">Why it works</a></li>
            <li><a href="/#inside" className="text-ink-soft transition-colors hover:text-ink">What&apos;s inside</a></li>
            <li><a href="/#reviews" className="text-ink-soft transition-colors hover:text-ink">Reviews</a></li>
            <li><a href="/#pricing" className="text-ink-soft transition-colors hover:text-ink">Pricing</a></li>
            <li><a href="/#faq" className="text-ink-soft transition-colors hover:text-ink">FAQ</a></li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="space-y-3">
          <h2 className="font-body text-sm font-bold uppercase tracking-wider text-ink-muted">
            Support
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink-soft transition-colors hover:text-ink">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li><Link href="/privacy" className="text-ink-soft transition-colors hover:text-ink">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-ink-soft transition-colors hover:text-ink">Terms of Service</Link></li>
            <li><Link href="/refunds" className="text-ink-soft transition-colors hover:text-ink">Refund Policy</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink-muted sm:px-8">
          © {new Date().getFullYear()} MindTidy. All rights reserved. MindTidy
          is a planning tool, not medical advice or treatment.
        </p>
      </div>
    </footer>
  );
}
