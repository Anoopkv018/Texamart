import { PageHero } from "@/src/components/PageHero";
import { siteConfig } from "@/src/data/site";
import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Read the Texa Mart website, quotation, custom product, artwork, pricing, order and delivery terms for apparel, merchandise and corporate gifts.",
  path: "/terms",
  keywords: ["Texa Mart terms", "custom printing order terms", "corporate gift quotation terms"],
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and conditions."
        copy="Important terms for using this website and discussing custom merchandise quotations with Texa Mart."
        aside={<p className="label text-[var(--brand-primary)]">Last updated · 9 September 2026</p>}
      />
      <section className="section legal-section">
        <article className="container legal-document">
          <p className="legal-intro">These Terms govern your use of the Texa Mart website and quotation enquiries with {siteConfig.legalName} (“Texa Mart”, “we”, “us” or “our”). By using the website or sending an enquiry, you agree to these Terms. A confirmed quotation, invoice, purchase order or written agreement may contain additional terms and will control if it expressly differs from this website page.</p>

          <section>
            <h2>1. Website purpose</h2>
            <p>This website presents apparel, merchandise, corporate gifts and customization options and provides a direct route to request a quotation. It is not an ecommerce store. The website does not accept online payment or automatically confirm an order.</p>
          </section>

          <section>
            <h2>2. Product information</h2>
            <p>Descriptions, dimensions, materials, colour references, images, prices and minimum quantities are provided as catalogue guidance. Availability and final specifications depend on the selected product, customization method, quantity and supplier or production availability.</p>
            <p>Images are illustrative. Screen settings, lighting, manufacturing tolerances and material batches may create reasonable differences in colour, texture, scale or finish.</p>
          </section>

          <section>
            <h2>3. Prices and quotations</h2>
            <ul>
              <li>Prices shown on the website are in Indian rupees and may change when specifications, quantities or costs change.</li>
              <li>A WhatsApp message, email, telephone discussion or submitted brief is an enquiry, not an accepted order.</li>
              <li>The final quotation will identify the applicable product, quantity, customization, taxes, packaging, delivery charges, payment terms and validity period.</li>
              <li>An order is confirmed only after the required written approval and payment arrangements stated in the quotation or invoice are completed.</li>
            </ul>
          </section>

          <section>
            <h2>4. Customer specifications and artwork</h2>
            <p>You are responsible for providing accurate quantities, sizes, spellings, colours, delivery details and production-ready artwork where requested. You confirm that you own or have permission to use every logo, design, photograph, trademark and other material you supply.</p>
            <p>You grant us the limited permission needed to review, adapt for production, proof and manufacture the requested products. We may decline content that appears unlawful, misleading, infringing, abusive or technically unsuitable.</p>
          </section>

          <section>
            <h2>5. Proofs and approvals</h2>
            <p>Where a digital or physical proof is provided, production may begin after your approval. You are responsible for checking spelling, placement, scale, colours, quantities and other visible details. Changes requested after approval may affect price and delivery timing.</p>
          </section>

          <section>
            <h2>6. Production and delivery</h2>
            <p>Production and delivery dates are estimates until confirmed in writing. We will take reasonable steps to meet confirmed schedules, but timing may be affected by artwork delays, approval changes, product availability, courier conditions or events beyond reasonable control.</p>
            <p>Please inspect delivered goods promptly and contact us with the order details if quantities are missing, goods arrive damaged or the supplied customization materially differs from the approved specification.</p>
          </section>

          <section>
            <h2>7. Changes, cancellations and custom goods</h2>
            <p>Customized goods are prepared for a specific customer and may not be suitable for resale. Cancellation, replacement, return and refund conditions therefore depend on the production stage and the terms of the accepted quotation. Contact us promptly if a change or problem arises; the confirmed order documents will determine the available resolution.</p>
          </section>

          <section>
            <h2>8. Acceptable website use</h2>
            <p>You must not misuse the website, attempt unauthorized access, interfere with its operation, introduce malicious code, scrape it in a way that harms service availability, impersonate another person, or use the quotation tools for unlawful, fraudulent or abusive activity.</p>
          </section>

          <section>
            <h2>9. Intellectual property</h2>
            <p>The Texa Mart name, website design, original text, graphics and other site content are owned by or licensed to us and may not be copied or commercially reused without permission. Product names and third-party marks remain the property of their respective owners. Customer-supplied artwork remains subject to the rights of its owner.</p>
          </section>

          <section>
            <h2>10. Third-party services and links</h2>
            <p>The website may open WhatsApp, email, telephone, delivery or other third-party services. We do not control their availability, security, content or terms. Your use of those services is also governed by the relevant provider’s policies.</p>
          </section>

          <section>
            <h2>11. Disclaimer and limitation</h2>
            <p>The website is provided on an “as available” basis. To the extent permitted by applicable law, we do not guarantee uninterrupted access or that all catalogue information will remain current at every moment. Nothing in these Terms excludes a right or remedy that cannot lawfully be excluded.</p>
            <p>To the extent permitted by law, we are not responsible for indirect or consequential loss arising only from website unavailability or reliance on unconfirmed catalogue information. Liability relating to a confirmed order will be considered under the accepted order documents and applicable law.</p>
          </section>

          <section>
            <h2>12. Governing law and contact</h2>
            <p>Unless a confirmed written agreement states otherwise, these Terms are governed by the laws of India, and disputes are subject to the courts of competent jurisdiction in Mysuru, Karnataka.</p>
            <address>
              <strong>{siteConfig.legalName}</strong>
              <span>{siteConfig.address}</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.supportPhoneHref}>{siteConfig.supportPhone}</a>
              <span>GSTIN: {siteConfig.gstin}</span>
            </address>
          </section>
        </article>
      </section>
    </>
  );
}
