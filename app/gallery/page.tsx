import type { Metadata } from "next";
import { GalleryGrid } from "@/src/components/GalleryGrid";
import { PageHero } from "@/src/components/PageHero";
import { CTASection } from "@/src/components/CTASection";

export const metadata: Metadata = { title: "Gallery", description: "Explore the Texa Mart product catalogue across apparel, merchandise, drinkware, gifts and bags." };
export default function GalleryPage() {
  return <><PageHero title="Objects ready for your identity." copy="A visual starting point across apparel, merchandise, corporate gifts, drinkware and bags. These are catalogue placeholders—not customer project claims—and can be replaced with real Texa Mart work in one data-driven gallery." aside={<p className="label text-[var(--brand-primary)]">Supplied catalogue imagery</p>} /><section className="section"><div className="container"><GalleryGrid /></div></section><CTASection title="See a direction for your brand?" copy="Reference the product or category in your WhatsApp message, then share the customization and quantity you have in mind." /></>;
}
