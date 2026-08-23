import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export function CTASection({ title = "Ready to make your brand tangible?", copy = "Tell us what you need, how many, and how you want it customized. We’ll continue the quotation on WhatsApp." }: { title?: string; copy?: string }) {
  return (
    <section className="cta-band section-tight">
      <div className="container cta-layout">
        <div><h2 className="display section-title">{title}</h2><p className="cta-copy">{copy}</p></div>
        <div className="flex shrink-0 flex-wrap gap-3"><a className="button-primary" href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer">WhatsApp Texa Mart <MessageCircle size={18} /></a><Link className="button-secondary" href="/contact">Build a detailed quote <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  );
}
