import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Droplets,
  MessageCircle,
  MoveDiagonal2,
  ShieldCheck,
  Shirt,
  Sun,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { ProductGallery } from "@/src/components/products/ProductGallery";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Swing Style Golf T-Shirts",
  description: "Explore seven Swing Style printed golf T-shirts in 93% micro polyester and 7% spandex, then request pricing and order details from Texa Mart.",
};

const designs = [
  { name: "Geometric Teal", src: "/images/golf/geometric-teal.jpg" },
  { name: "Leaf Mint", src: "/images/golf/leaf-mint.jpg" },
  { name: "Linear White", src: "/images/golf/linear-white.jpg" },
  { name: "Aqua Chevron", src: "/images/golf/aqua-chevron.jpg" },
  { name: "Mosaic Red", src: "/images/golf/mosaic-red.jpg" },
  { name: "Cobalt Chevron", src: "/images/golf/cobalt-chevron.jpg" },
  { name: "Botanical Yellow", src: "/images/golf/botanical-yellow.jpg" },
] as const;

const galleryImages = designs.map((design) => ({
  src: design.src,
  alt: `${design.name} Swing Style printed golf T-shirt`,
  caption: `${design.name} print`,
}));

const features: { name: string; icon: LucideIcon }[] = [
  { name: "UV protection", icon: Sun },
  { name: "Anti-curl collar", icon: Shirt },
  { name: "Breathable", icon: Wind },
  { name: "Moisture wicking", icon: Droplets },
  { name: "Anti-odour", icon: ShieldCheck },
  { name: "4-way stretch", icon: MoveDiagonal2 },
];

const quoteUrl = createWhatsAppUrl(buildGeneralEnquiryMessage("Swing Style golf T-shirts"));

export default function GolfTshirtsPage() {
  return (
    <>
      <section className="golf-hero">
        <div className="container golf-hero-grid">
          <div className="golf-hero-copy">
            <Image className="golf-brand-mark" src="/brand/swing-style-logo.png" alt="Swing Style Classic Golf" width={3901} height={985} priority />
            <h1 className="display">Printed golf T-shirts, built to move.</h1>
            <p>Seven expressive prints on a performance-led fabric base: 93% micro polyester and 7% spandex.</p>
            <div className="golf-hero-actions">
              <a className="button-light" href={quoteUrl} target="_blank" rel="noreferrer">Ask for a quote <MessageCircle size={18} /></a>
              <a className="golf-text-link" href="#golf-designs">See all seven prints <ArrowDown size={17} /></a>
            </div>
            <dl className="golf-quick-facts">
              <div><dt>Fabric</dt><dd>93 / 7 blend</dd></div>
              <div><dt>Prints</dt><dd>7 options</dd></div>
              <div><dt>Pricing</dt><dd>On request</dd></div>
            </dl>
          </div>
          <div className="golf-hero-gallery">
            <ProductGallery images={galleryImages} preserveImageColors />
          </div>
        </div>
      </section>

      <section className="golf-feature-band" aria-label="Golf T-shirt features">
        <ul className="container">
          {features.map(({ name, icon: Icon }) => (
            <li key={name}><Icon aria-hidden="true" focusable="false" /><span>{name}</span></li>
          ))}
        </ul>
      </section>

      <section className="section golf-design-section" id="golf-designs">
        <div className="container">
          <div className="golf-section-heading">
            <h2 className="display section-title">Seven prints. One performance base.</h2>
            <p>Compare the supplied pattern options below. Final availability, sizes, pricing and order quantities are confirmed directly with Texa Mart.</p>
          </div>
          <div className="golf-design-grid">
            {designs.map((design, index) => (
              <figure className="golf-design" key={design.src}>
                <div className="golf-design-image">
                  <Image src={design.src} alt={`${design.name} printed golf T-shirt product sheet`} fill sizes="(max-width: 560px) 50vw, (max-width: 1000px) 33vw, 25vw" loading={index < 2 ? "eager" : "lazy"} />
                </div>
                <figcaption><span>{design.name}</span><span>{String(index + 1).padStart(2, "0")}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section golf-spec-section">
        <div className="container golf-spec-layout">
          <div>
            <h2 className="display section-title">The fabric story, at a glance.</h2>
            <p className="body-large mt-6">A concise specification drawn directly from the supplied product sheets.</p>
          </div>
          <dl className="golf-spec-list">
            <div><dt>Composition</dt><dd>93% micro polyester<br />7% spandex</dd></div>
            <div><dt>Comfort</dt><dd>Breathable<br />4-way stretch</dd></div>
            <div><dt>Moisture</dt><dd>Superwick<br />Moisture wicking</dd></div>
            <div><dt>Finish</dt><dd>Anti-curl collar<br />Anti-odour</dd></div>
            <div><dt>Protection</dt><dd>UV protection</dd></div>
            <div><dt>Range</dt><dd>Seven supplied print options</dd></div>
          </dl>
        </div>
      </section>

      <section className="section golf-quote-section">
        <div className="container golf-quote-layout">
          <div>
            <h2 className="display section-title">Build the golf-day brief.</h2>
            <p>Share the quantity, preferred print, required sizes, branding requirement and timeline. Texa Mart will confirm customization options, pricing and order details.</p>
          </div>
          <a className="button-primary" href={quoteUrl} target="_blank" rel="noreferrer">Discuss on WhatsApp <MessageCircle size={18} /></a>
        </div>
      </section>

      <section className="section-tight golf-faq-section">
        <div className="container golf-faq-layout">
          <h2 className="display section-title">Before you request a quote.</h2>
          <div className="golf-faq-list">
            <details>
              <summary>Can the golf T-shirts be customized?</summary>
              <p>Share the logo placement and branding outcome you need. Texa Mart will confirm the available customization options for your selected print.</p>
            </details>
            <details>
              <summary>What are the price and minimum quantity?</summary>
              <p>Pricing and minimum order quantity were not supplied for this range, so both are confirmed during the quotation conversation.</p>
            </details>
            <details>
              <summary>What should I include in my enquiry?</summary>
              <p>Add your preferred print, estimated quantity, size mix, branding requirement and required timeline so the team can prepare a useful response.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="golf-closing">
        <div className="container">
          <p className="display">Choose the print. Share the brief. Take it to the course.</p>
          <Link href="/products/apparel" className="golf-text-link">Explore all apparel <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
