import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 19, 2026">
      <LegalSection heading="The short version">
        <p>
          We collect as little as possible: what&apos;s needed to sell you a
          planner, deliver it, and answer your emails. We don&apos;t sell your
          data. Ever.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect">
        <ul>
          <li>
            <strong>Purchase information.</strong> When you buy through our
            checkout provider, Payhip, they process your name, email address,
            and payment details. We never see or store your full payment card
            information — that is handled entirely by Payhip and their payment
            processors.
          </li>
          <li>
            <strong>Email.</strong> If you contact us or join our email list,
            we keep your email address and correspondence so we can reply and
            (only if you opted in) send occasional updates. Every marketing
            email includes an unsubscribe link.
          </li>
          <li>
            <strong>Basic analytics.</strong> We may use privacy-respecting
            analytics to understand aggregate site traffic (pages visited,
            referral source, country). This data is not used to identify you
            personally.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we use it">
        <ul>
          <li>To deliver your purchase and provide customer support.</li>
          <li>To process refunds under our Refund Policy.</li>
          <li>To improve the site and our products.</li>
          <li>To comply with legal obligations, such as tax records.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Third parties we rely on">
        <p>
          Payhip (checkout, payment, and file delivery) processes your order
          data under their own privacy policy. Our hosting provider processes
          standard server logs. We do not sell or rent personal information to
          anyone.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          Depending on where you live (including under GDPR and CCPA), you may
          have the right to access, correct, export, or delete the personal
          information we hold about you. Email us and we&apos;ll take care of
          it — no forms required.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We keep order records for as long as required for tax and accounting
          purposes, and support correspondence for up to two years. Everything
          else is deleted when it&apos;s no longer needed.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
