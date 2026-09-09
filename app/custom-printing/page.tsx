import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/src/components/PageHero";
import { CTASection } from "@/src/components/CTASection";
import { Reveal } from "@/src/components/motion/Reveal";

export const metadata: Metadata = { title: "Custom Printing", description: "Turn your idea and brand requirement into custom apparel, merchandise, gifts and accessories with Texa Mart." };
const journey = ["Choose the product", "Share your design or branding requirement", "Confirm the quantity", "Get the quotation", "Finalize the order directly with Texa Mart"];

export default function CustomPrintingPage() {
  return (
    <>
      <PageHero title="Your idea. Your identity. Your merchandise." copy="Start with the object, then shape how your identity should live on it. Texa Mart helps you move from a product choice to a clear customization and quotation conversation." />
      <section className="section"><div className="container story-grid"><Reveal><div><h2 className="display section-title">A useful object is your brand’s best canvas.</h2><p className="label mt-5 text-[var(--brand-primary)]">Choose what carries the idea</p><p className="body-large mt-7">Apparel for a team. Merchandise for an event. Gifts for a relationship. Accessories that travel. Begin with the role the product should play, not with a complicated order form.</p><Link className="button-primary mt-8" href="/products">Explore products <ArrowRight size={18} /></Link></div></Reveal><Reveal delay={.1} className="feature-visual product-cutout custom-printing-polo"><Image src="/images/custom-printing-polo.png" alt="Beige TEXA polo shirt shown from the front and back, ready for customization" fill sizes="(max-width: 820px) 100vw, 45vw" /></Reveal></div></section>
      <section className="ink-section section"><div className="container grid gap-16 lg:grid-cols-[.9fr_1.1fr]"><div><h2 className="display section-title">Bring the brief. Build the conversation.</h2><p className="label mt-5 text-white/55">The customization journey</p></div><ol className="grid gap-0">{journey.map((item,index) => <Reveal key={item} className="flex items-center gap-5 border-t border-white/20 py-6"><span className="display text-xl text-white/45">0{index + 1}</span><span className="display text-[clamp(1.5rem,3vw,2.7rem)]">{item}</span></Reveal>)}</ol></div></section>
      <section className="section"><div className="container"><div className="grid gap-px bg-[var(--brand-border)] md:grid-cols-2 lg:grid-cols-4">{["Apparel","Merchandise","Gifts","Accessories"].map((item) => <div key={item} className="min-h-56 bg-[var(--brand-background)] p-7"><Check className="text-[var(--brand-primary)]" /><h3 className="display mt-20 text-3xl">{item}</h3></div>)}</div></div></section>
      <CTASection title="Turn the idea into a clear brief." copy="Choose a product, share your quantity and explain how you want it customized. Texa Mart will continue with the quotation on WhatsApp." />
    </>
  );
}
