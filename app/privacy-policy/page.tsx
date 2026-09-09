import { PageHero } from "@/src/components/PageHero";
import { siteConfig } from "@/src/data/site";
import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read how Texa Mart and KNITTING STORY INDIA Pvt Ltd handle quotation enquiries, contact details, WhatsApp communications and website technical data.",
  path: "/privacy-policy",
  keywords: ["Texa Mart privacy policy", "custom merchandise enquiry privacy", "KNITTING STORY INDIA privacy"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy policy."
        copy="How we handle information when you browse the Texa Mart website or contact us about a quotation."
        aside={<p className="label text-[var(--brand-primary)]">Last updated · 9 September 2026</p>}
      />
      <section className="section legal-section">
        <article className="container legal-document">
          <p className="legal-intro">This Privacy Policy applies to the Texa Mart website and related enquiries handled by {siteConfig.legalName} (“Texa Mart”, “we”, “us” or “our”). It explains what information may be received, why it is used, when it may be shared, and the choices available to you.</p>

          <section>
            <h2>1. Information you choose to provide</h2>
            <p>When you prepare a quotation enquiry, contact us by WhatsApp, email or telephone, or continue an order discussion, you may provide:</p>
            <ul>
              <li>your name, company or organization;</li>
              <li>telephone number, email address or other contact details;</li>
              <li>product, quantity, size, colour, delivery and customization requirements;</li>
              <li>logos, artwork, brand files, photographs or other materials you submit; and</li>
              <li>messages, feedback and other information connected with your enquiry or order.</li>
            </ul>
          </section>

          <section>
            <h2>2. How the website quotation form works</h2>
            <p>The quotation form prepares a message in your browser and opens WhatsApp. It does not submit the completed form to a Texa Mart ecommerce database. Information becomes available to us only when you choose to send the message through WhatsApp or contact us through another channel.</p>
            <p>The website does not currently provide customer accounts, online checkout or online payment processing.</p>
          </section>

          <section>
            <h2>3. Technical information</h2>
            <p>Our hosting and security providers may automatically process limited technical information needed to deliver and protect the website, such as an IP address, browser and device type, requested pages, timestamps, error details and security logs. We do not intentionally use marketing or behavioural advertising cookies on this website as of the date above.</p>
          </section>

          <section>
            <h2>4. How information is used</h2>
            <p>We may use information for purposes connected with your request, including to:</p>
            <ul>
              <li>respond to enquiries and prepare quotations;</li>
              <li>confirm product specifications, artwork, pricing, quantities and timelines;</li>
              <li>produce, personalize, pack, deliver and support confirmed orders;</li>
              <li>maintain business, tax, accounting and customer-service records;</li>
              <li>protect the website, our customers and our business from misuse or fraud; and</li>
              <li>comply with applicable law or a lawful request from an authority.</li>
            </ul>
          </section>

          <section>
            <h2>5. When information may be shared</h2>
            <p>We do not sell personal information. Information may be shared only where reasonably necessary with service providers involved in communications, website hosting, printing, production, packaging, delivery, professional advice or business administration, or where disclosure is required by law.</p>
            <p>When you use WhatsApp, email, telephone or another external service, that provider processes information under its own terms and privacy policy. Those services may process information outside India.</p>
          </section>

          <section>
            <h2>6. Retention and security</h2>
            <p>We retain enquiry and order information only for as long as reasonably needed for the purpose for which it was received, customer support, dispute handling, legitimate business records and applicable legal obligations. Retention periods may differ depending on whether an enquiry becomes a confirmed order.</p>
            <p>We use reasonable administrative, technical and organizational safeguards. No online or electronic transmission can be guaranteed to be completely secure, so please avoid sending sensitive personal information that is not needed for your quotation or order.</p>
          </section>

          <section>
            <h2>7. Your choices and requests</h2>
            <p>Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may ask us about personal information associated with you, request correction or erasure where applicable, withdraw consent for future processing based on consent, or raise a grievance.</p>
            <p>We may need to verify your identity and may retain information where continued retention is required or permitted by law. Withdrawing consent does not affect processing already completed lawfully.</p>
          </section>

          <section>
            <h2>8. Children’s privacy</h2>
            <p>This website is intended for general business and product enquiries and is not directed to children. A parent or lawful guardian who believes a child has provided personal information without appropriate authorization may contact us to request review and deletion where applicable.</p>
          </section>

          <section>
            <h2>9. Updates to this policy</h2>
            <p>We may update this policy when our website, services or legal responsibilities change. The revised version will appear on this page with a new “Last updated” date. Material changes affecting an active customer relationship may also be communicated through an appropriate contact channel.</p>
          </section>

          <section>
            <h2>10. Contact and grievance requests</h2>
            <p>For a privacy question, correction request or grievance, contact:</p>
            <address>
              <strong>{siteConfig.legalName}</strong>
              <span>{siteConfig.address}</span>
              <a href={`mailto:${siteConfig.secondaryEmail}`}>{siteConfig.secondaryEmail}</a>
              <a href={siteConfig.supportPhoneHref}>{siteConfig.supportPhone}</a>
              <span>GSTIN: {siteConfig.gstin}</span>
            </address>
          </section>
        </article>
      </section>
    </>
  );
}
