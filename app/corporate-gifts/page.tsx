import type { Metadata } from "next";
import Image from "next/image";
import { GiftSelector } from "@/src/components/GiftSelector";
import { PageHero } from "@/src/components/PageHero";
import { ProductGrid } from "@/src/components/products/ProductGrid";
import { CTASection } from "@/src/components/CTASection";
import { products } from "@/src/data/products";

export const metadata: Metadata = { title: "Corporate Gifts", description: "Build custom corporate gift combinations with bottles, diaries, pens, mugs, bags and branded merchandise." };
const giftProducts = products.filter((product) => ["uv-bottle-750ml","diary","metal-pen","mug","tote-bag","backpack","premium-caps","acrylic-keychain"].includes(product.slug));

export default function CorporateGiftsPage() {
  return (
    <>
      <PageHero title="Corporate gifts that keep your brand around." copy="Curate useful, custom branded pieces for teams, events and business relationships—then send the combination directly to Texa Mart for quotation." />
      <section className="section"><div className="container story-grid"><div className="gift-collage corporate-gift-board"><div className="gift-collage-item"><Image src="/images/products/diary.jpg" alt="Diary" fill sizes="24vw" /></div><div className="gift-collage-item"><Image src="/images/products/bottle.jpg" alt="Bottle" fill sizes="18vw" /></div><div className="gift-collage-item"><Image src="/images/products/mug.jpg" alt="Mug" fill sizes="18vw" /></div></div><div><h2 className="display section-title">One gift. Many useful moments.</h2><p className="label mt-5 text-[var(--brand-primary)]">Build the combination</p><p className="body-large mt-7">Start with pieces that fit the audience and occasion. A desk set can pair a diary and pen. A daily-use kit can bring together a bottle, tote and keychain. Texa Mart will confirm product options and final pricing with you.</p></div></div></section>
      <section className="ink-section section"><div className="container"><h2 className="display section-title">Pick the starting pieces.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">This is a selection tool, not a cart. Choose what belongs in the set and send the combination to WhatsApp.</p><GiftSelector /></div></section>
      <section className="section"><div className="container"><h2 className="display section-title">Products that work well together.</h2><div className="mt-12"><ProductGrid products={giftProducts} /></div></div></section>
      <section className="section-tight bg-[var(--brand-surface)]"><div className="container grid gap-8 md:grid-cols-4">{[["Choose","Select the pieces"],["Share","Add quantity and branding"],["Quote","Confirm options on WhatsApp"],["Finalize","Complete the order discussion"]].map(([title,copy],i) => <div key={title} className="border-t border-[var(--brand-primary)] pt-5"><span className="label text-[var(--brand-muted)]">0{i+1}</span><h3 className="display mt-8 text-3xl">{title}</h3><p className="mt-3 text-[var(--brand-muted)]">{copy}</p></div>)}</div></section>
      <CTASection title="Plan a set people will actually use." copy="Tell Texa Mart who the gift is for, which products you’re considering, and the estimated quantity. The final quotation happens directly on WhatsApp." />
    </>
  );
}
