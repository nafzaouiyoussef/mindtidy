import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-sage-lighter bg-cream-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-slate-light">
            Calm planning tools that clear mental clutter. A tidy mind, one
            page at a time.
          </p>
        </div>

        <nav aria-label="Site" className="space-y-3">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-muted">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/#why" className="text-slate-light transition-colors hover:text-slate">Why it works</a></li>
            <li><a href="/#inside" className="text-slate-light transition-colors hover:text-slate">What&apos;s inside</a></li>
            <li><a href="/#reviews" className="text-slate-light transition-colors hover:text-slate">Reviews</a></li>
            <li><a href="/#faq" className="text-slate-light transition-colors hover:text-slate">FAQ</a></li>
          </ul>
        </nav>

        <nav aria-label="Legal" className="space-y-3">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-muted">
            Support
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-light transition-colors hover:text-slate">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li><Link href="/privacy" className="text-slate-light transition-colors hover:text-slate">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-slate-light transition-colors hover:text-slate">Terms of Service</Link></li>
            <li><Link href="/refunds" className="text-slate-light transition-colors hover:text-slate">Refund Policy</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-sage-lighter">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-slate-muted sm:px-8">
          © {new Date().getFullYear()} MindTidy. All rights reserved. MindTidy
          is a planning tool, not medical advice or treatment.
        </p>
      </div>
    </footer>
  );
}
