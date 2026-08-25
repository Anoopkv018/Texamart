import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  CupSoda,
  HardHat,
  KeyRound,
  Magnet,
  MessageCircle,
  NotebookPen,
  Ribbon,
  Shapes,
  Shirt,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/src/data/categories";
import { featuredProducts } from "@/src/data/products";
import { ProductCard } from "@/src/components/products/ProductCard";
import { ProductConstellation } from "@/src/components/ProductConstellation";
import { Reveal } from "@/src/components/motion/Reveal";
import { CTASection } from "@/src/components/CTASection";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";
import type { ProductCategory } from "@/src/types/product";

const marquee = ["CUSTOM APPAREL", "CORPORATE GIFTS", "MERCHANDISE", "CUSTOM PRINTING", "BULK ORDERS", "BRANDED PRODUCTS"];
const steps = [
  ["Choose your product", "Browse apparel, gifts, drinkware, bags and branded merchandise."],
  ["Share your requirement", "Tell us the quantity, branding requirement and customization details."],
  ["Get your quote", "Texa Mart confirms pricing and order details directly through WhatsApp."],
  ["Confirm your order", "Continue the final order discussion with the Texa Mart team."],
];

const categoryIcons = {
  apparel: Shirt,
  caps: HardHat,
  "fridge-magnets": Magnet,
  "keychains-gifts": KeyRound,
  drinkware: CupSoda,
  stationery: NotebookPen,
  sachets: Ribbon,
  "bags-accessories": ShoppingBag,
  "other-products": Shapes,
} satisfies Record<ProductCategory, LucideIcon>;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="relative z-10">
            <Reveal delay={.08}><h1 className="hero-title display mt-5">Your Brand. <em>Made Wearable.</em></h1></Reveal>
            <Reveal><p className="label mt-6 text-[var(--brand-primary)]">Custom Printing · Merchandise · Corporate Gifts</p></Reveal>
            <Reveal delay={.18}><p className="hero-copy">Custom apparel, merchandise and corporate gifts designed to bring your brand into everyday use.</p></Reveal>
            <Reveal delay={.28} className="hero-actions"><Link href="/products" className="button-primary">Explore products <ArrowRight size={18} /></Link><a href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer" className="button-secondary">Get a WhatsApp quote <MessageCircle size={18} /></a></Reveal>
            <Reveal delay={.36} className="hero-stamp"><span className="grid h-10 w-10 place-items-center border border-current"><Sparkles size={17} /></span><span className="label">Wear it · Carry it · Remember it</span></Reveal>
          </div>
          <Reveal delay={.22} className="hero-stage"><ProductConstellation variant="apparel" /></Reveal>
        </div>
      </section>

      <div className="marquee" aria-label="Texa Mart services">
        <div className="marquee-track">{[...marquee, ...marquee].map((item, index) => <span aria-hidden={index >= marquee.length ? "true" : undefined} key={`${item}-${index}`} className="flex items-center gap-8"><span>{item}</span><span aria-hidden="true">•</span></span>)}</div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <Reveal><h2 className="section-title display">Everything your brand can wear, carry & share.</h2></Reveal>
            <Reveal delay={.08}><Link href="/products" className="button-secondary">Browse the full catalogue <ArrowRight size={18} /></Link></Reveal>
          </div>
          <nav className="category-mosaic" aria-label="Product categories">
            {categories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.slug];

              return (
                <Reveal key={category.slug} className={`category-tile tone-${category.tone}`} delay={(index % 3) * .05}>
                  <Link href={`/products/${category.slug}`} className="category-link" aria-label={`Explore ${category.name}`}>
                    <div className="category-top">
                      <h3 className="category-name">{category.name}</h3>
                      <ArrowDownRight className="category-arrow" aria-hidden="true" />
                    </div>
                    <span className="category-icon" aria-hidden="true">
                      <CategoryIcon focusable="false" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="section-tight bg-[var(--brand-surface)]">
        <div className="container section-heading-row">
          <Reveal><div><h2 className="display section-title">Start with an everyday favourite.</h2><p className="body-large mt-5">Useful pieces, clear pricing, and a direct route to the right quotation.</p></div></Reveal>
          <p className="label text-[var(--brand-muted)]">Swipe or scroll to explore</p>
        </div>
        <div className="product-rail">{featuredProducts.map((product) => <ProductCard product={product} key={product.id} />)}</div>
      </section>

      {/* <section className="section">
        <div className="container story-grid">
          <Reveal className="story-art"><Image src="/images/source/product-catalogue.jpg" alt="Texa Mart supplied custom products catalogue" fill sizes="(max-width: 820px) 100vw, 42vw" /></Reveal>
          <Reveal delay={.1}>
            <h2 className="section-title display">Your logo deserves more than a screen.</h2>
            <p className="label mt-5 text-[var(--brand-primary)]">Made for your brand</p>
            <p className="body-large mt-7">From team apparel to desk essentials and gift sets, Texa Mart helps turn a brand requirement into something useful and physical. Choose the products; then share the quantity, branding and customization details that make them yours.</p>
            <Link href="/custom-printing" className="button-primary mt-8">See the customization journey <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section> */}

      <section className="ink-section section">
        <div className="container process">
          <div className="process-intro"><h2 className="display section-title">From idea to order discussion.</h2><p className="label mt-5 text-white/55">A simple human process</p><p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">No cart. No confusing checkout. Just the right product information and a direct conversation.</p></div>
          <div>{steps.map(([title, copy], index) => <Reveal className="process-step" key={title}><span className="process-number">0{index + 1}</span><div><h3 className="display text-3xl">{title}</h3><p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="container story-grid">
          <Reveal>
            <h2 className="section-title display">Gift combinations built around useful everyday pieces.</h2>
            <p className="label mt-5 text-[var(--brand-primary)]">Corporate gifting</p>
            <p className="body-large mt-7">Combine a bottle, diary, pen, mug, tote, keychain, backpack or cap into a considered gift set. Pick the starting pieces and let Texa Mart help shape the final requirement.</p>
            <Link className="button-primary mt-8" href="/corporate-gifts">Plan your corporate gift set <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal delay={.1}><ProductConstellation variant="gifts" /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
