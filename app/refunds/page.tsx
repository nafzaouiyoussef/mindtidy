import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `${SITE_NAME}'s 14-day money-back guarantee for digital products, explained in plain language.`,
  alternates: { canonical: "/refunds" },
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" updated="July 19, 2026">
      <LegalSection heading="The 14-day, no-questions-asked guarantee">
        <p>
          Try it for 14 days. If a {SITE_NAME} product doesn&apos;t work for
          the way your brain works, email us within{" "}
          <strong>14 days of purchase</strong> and we&apos;ll refund you in
          full — no questions asked.
        </p>
        <p>
          No forms. No “but did you really try it?” interrogation. One email
          is enough.
        </p>
      </LegalSection>

      <LegalSection heading="How to request a refund">
        <ul>
          <li>
            Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sage-darker underline">
              {CONTACT_EMAIL}
            </a>{" "}
            from the address you used at checkout.
          </li>
          <li>Include your order number or the email receipt from Whop.</li>
          <li>
            Optionally, tell us what didn&apos;t work — it genuinely helps us
            make the planner better, but it&apos;s not required.
          </li>
        </ul>
        <p>
          Refunds are issued to your original payment method, usually within
          5–10 business days depending on your bank.
        </p>
      </LegalSection>

      <LegalSection heading="Keep the files">
        <p>
          Because everything is an instant digital download, you keep the
          files even after a refund — we won&apos;t ask you to delete
          anything. The guarantee exists so you can buy without anxiety. We
          only reserve the right to decline refunds in cases of clear abuse
          (for example, repeated purchase-and-refund of the same product).
        </p>
      </LegalSection>

      <LegalSection heading="Statutory rights">
        <p>
          This policy doesn&apos;t limit any rights you have under the
          consumer laws of your country, which may provide additional
          protections for digital purchases.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
