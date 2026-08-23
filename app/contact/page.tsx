import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/src/components/PageHero";
import { QuoteBuilder } from "@/src/components/whatsapp/QuoteBuilder";
import { siteConfig } from "@/src/data/site";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = { title: "Contact & Quote", description: "Call Texa Mart or prepare a custom merchandise quotation request for WhatsApp." };
export default function ContactPage() {
  return (
    <><PageHero title="Let’s make the requirement real." copy="Choose a product, add the estimated quantity, and tell Texa Mart what needs to be customized. The form prepares a WhatsApp message—nothing is submitted to an ecommerce backend." />
    <section className="section"><div className="container grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><h2 className="display section-title">A human quotation, without the checkout theatre.</h2><p className="label mt-5 text-[var(--brand-primary)]">Talk directly</p><div className="mt-9 grid gap-3"><a href={siteConfig.phoneHref} className="button-secondary !justify-start"><Phone size={18} /> {siteConfig.phone}</a><a href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer" className="button-primary !justify-start"><MessageCircle size={18} /> WhatsApp Texa Mart</a></div><p className="price-note mt-6">No street address, email address or business hours were supplied, so this page displays only verified contact details.</p></div><QuoteBuilder /></div></section></>
  );
}
