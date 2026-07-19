import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${SITE_NAME} website and purchase our digital products.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 19, 2026">
      <LegalSection heading="Agreement">
        <p>
          By using this website or purchasing a {SITE_NAME} product, you agree
          to these terms. If you don&apos;t agree, please don&apos;t use the
          site or make a purchase.
        </p>
      </LegalSection>

      <LegalSection heading="Digital products">
        <p>
          {SITE_NAME} sells digital downloads (PDF planners and related
          files). Nothing physical will be shipped. After a successful
          purchase through our checkout provider, Payhip, you&apos;ll receive
          an immediate download link on-screen and by email.
        </p>
      </LegalSection>

      <LegalSection heading="Personal-use license">
        <p>When you purchase a {SITE_NAME} product, you get a lifetime, non-exclusive license to:</p>
        <ul>
          <li>Download and store the files on your personal devices.</li>
          <li>Print unlimited copies for your own personal use.</li>
          <li>Use the digital version in note-taking apps you own.</li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>Resell, redistribute, share, or give away the files.</li>
          <li>Modify the files and sell or distribute the result.</li>
          <li>Upload the files to shared drives, marketplaces, or file-sharing sites.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Not medical advice">
        <p>
          {SITE_NAME} products are planning and organization tools. They are
          not medical devices, therapy, or treatment for ADHD or any other
          condition, and nothing on this site is medical advice. For medical
          questions, please talk to a qualified professional.
        </p>
      </LegalSection>

      <LegalSection heading="Payments and refunds">
        <p>
          Payments are processed by Payhip. Prices are shown at checkout and
          may change over time. Refunds are governed by our{" "}
          <Link href="/refunds" className="text-sage-darker underline">
            Refund Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All content on this site and in our products — designs, text,
          layouts, and the {SITE_NAME} name and logo — is owned by{" "}
          {SITE_NAME} and protected by copyright. The personal-use license
          above is the only right granted.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          The site and products are provided “as is.” To the maximum extent
          permitted by law, {SITE_NAME} is not liable for indirect or
          consequential damages arising from your use of the site or
          products, and our total liability is limited to the amount you paid
          for the product.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top
          reflects the latest revision; continued use of the site after
          changes means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sage-darker underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
