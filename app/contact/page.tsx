import { Building2, Mail, MapPin, MessageCircle, Phone, ReceiptText } from "lucide-react";
import { PageHero } from "@/src/components/PageHero";
import { InstagramIcon } from "@/src/components/icons/InstagramIcon";
import { QuoteBuilder } from "@/src/components/whatsapp/QuoteBuilder";
import { siteConfig } from "@/src/data/site";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";
import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Texa Mart for Custom Product Quotes",
  description: "Contact Texa Mart in Mysuru for custom T-shirt printing, branded merchandise, corporate gifts and bulk product quotations by phone, email or WhatsApp.",
  path: "/contact",
  keywords: ["Texa Mart contact", "custom merchandise quote Mysuru", "bulk T-shirt printing quotation"],
});
export default function ContactPage() {
  return (
    <>
      <PageHero title="Let’s make the requirement real." copy="Choose a product, add the estimated quantity, and tell Texa Mart what needs to be customized. The form prepares a WhatsApp message—nothing is submitted to an ecommerce backend." />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-intro">
            <h2 className="display section-title">A human quotation, without the checkout theatre.</h2>
            <p className="body-large">Speak with our team about your product, printing, quantity or delivery requirement.</p>

            <div className="contact-actions">
              <a href={siteConfig.supportPhoneHref} className="button-secondary"><Phone size={18} /> Support: {siteConfig.supportPhone}</a>
              <a href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle size={18} /> WhatsApp Texa Mart</a>
            </div>

            <address className="contact-details">
              <div className="contact-detail">
                <Building2 aria-hidden="true" />
                <div><span>Registered company</span><strong>{siteConfig.legalName}</strong></div>
              </div>
              <div className="contact-detail">
                <MapPin aria-hidden="true" />
                <div><span>Address</span><p>{siteConfig.address}</p></div>
              </div>
              <div className="contact-detail">
                <Mail aria-hidden="true" />
                <div><span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`mailto:${siteConfig.secondaryEmail}`}>{siteConfig.secondaryEmail}</a></div>
              </div>
              <div className="contact-detail">
                <ReceiptText aria-hidden="true" />
                <div><span>GSTIN</span><strong>{siteConfig.gstin}</strong></div>
              </div>
              <div className="contact-detail">
                <InstagramIcon aria-hidden="true" />
                <div><span>Instagram</span><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">@texa__apparel</a></div>
              </div>
            </address>
          </div>
          <QuoteBuilder />
        </div>
      </section>
    </>
  );
}
