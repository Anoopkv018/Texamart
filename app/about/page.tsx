import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import { AboutExperience } from "@/src/components/about/AboutExperience";
import { CTASection } from "@/src/components/CTASection";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "About TEXA T-Shirts",
  description: "Meet TEXA T-Shirts, a Mysuru-based custom apparel brand creating printed and embroidered garments for teams, institutions, events and businesses.",
};

const quoteUrl = createWhatsAppUrl(buildGeneralEnquiryMessage("a custom apparel or bulk garment requirement"));

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <h1 className="display"><span>Quality<br />apparel,</span>{" "}<em>made for<br />your brand.</em></h1>
            <p>TEXA T-Shirts is a Mysuru-based apparel and custom garment brand creating thoughtful, dependable clothing for businesses, institutions, schools, events, teams, brands and individuals.</p>
            <div className="about-hero-actions">
              <Link className="button-primary" href="/products/apparel">Explore apparel <ArrowRight size={18} /></Link>
              <a className="button-secondary" href={quoteUrl} target="_blank" rel="noreferrer">Discuss your requirement <MessageCircle size={18} /></a>
            </div>
          </div>

          <figure className="about-hero-visual">
            <Image src="/images/about/texa-navy-apparel-hero.png" alt="Model wearing a navy round-neck T-shirt" fill priority sizes="(max-width: 820px) 100vw, 30rem" />
            <figcaption>Custom apparel for work, teams, events and identity.</figcaption>
          </figure>
        </div>
      </section>

      <div className="about-proof-rail" aria-label="TEXA priorities">
        <div className="container">
          <span>Quality</span><span>Customization</span><span>Local expertise</span><span>Bulk orders</span>
        </div>
      </div>

      <section className="section">
        <div style={{ position: "relative", display: "grid", placeItems: "center", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <Image
              className="about-origin-logo"
              src="/brand/texa-mart-glow-logo.png"
              alt="Texa Mart"
              width={144}
              height={96}
            />
        </div>
        <div className="container about-origin-grid">
          <div className="about-origin-heading">
            <h2 className="display section-title">Built in Mysuru. Made to represent you.</h2>
            <ArrowDownRight aria-hidden="true" />
          </div>
          <div className="about-origin-copy">
            <p className="body-large">With a strong focus on quality, comfort, design and dependable service, TEXA provides customized apparel solutions that bring ideas to life.</p>
            <p>From selecting the right fabric and fit to printing, embroidery and finishing, we pay attention to the details that help every garment represent your brand with pride.</p>
            <p>Whether you need a few customized T-shirts for a special occasion or a large bulk order for your organization, we work closely with you to understand the requirement and prepare apparel around your specifications.</p>
          </div>
        </div>
      </section>

      <section className="section-tight about-services-section">
        <div className="container">
          <div className="about-section-heading">
            <h2 className="display section-title">What we make.</h2>
            <p>Hover to preview. Click or tap to keep a service selected.</p>
          </div>
          <AboutExperience />
        </div>
      </section>

      <section className="section about-commitment">
        <div className="container about-commitment-grid">
          <article className="about-commitment-card about-commitment-identity">
            <Image
              className="about-commitment-image"
              src="/images/products/round-neck-tshirt-lifestyle.webp"
              alt=""
              fill
              sizes="(max-width: 820px) calc(100vw - 2rem), 620px"
            />
            <div className="about-commitment-content">
              <h2 className="display section-title">A T-shirt is more than clothing.</h2>
              <p>It can represent a brand, create an identity and bring people together.</p>
            </div>
          </article>
          <blockquote className="about-commitment-card about-commitment-quality">
            <Image
              className="about-commitment-image"
              src="/images/products/collar-tshirt-detail.webp"
              alt=""
              fill
              sizes="(max-width: 820px) calc(100vw - 2rem), 620px"
            />
            <div className="about-commitment-content">
              <p>Quality Products.<br />Honest Service.<br />Reliable Delivery.</p>
              <footer>TEXA T-Shirts · Wear Your Identity.</footer>
            </div>
          </blockquote>
        </div>
      </section>

      <CTASection className="about-cta" title="Tell us what you want to make." copy="Share the garment, quantity, artwork and customization requirement. TEXA will continue the quotation and order discussion directly with you." />
    </>
  );
}
