import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/src/data/categories";
import { siteConfig } from "@/src/data/site";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo brand-logo-footer relative"><Image src="/brand/texa-mart-logo-white.png" alt="Texa Mart" fill className="object-contain" sizes="144px" /></div>
            <p className="footer-intro">Custom apparel, merchandise and corporate gifts made to put your brand into the real world.</p>
            <a href={createWhatsAppUrl(buildGeneralEnquiryMessage())} target="_blank" rel="noreferrer" className="button-light mt-7">Start a quote <ArrowUpRight size={18} /></a>
          </div>
          <div>
            <p className="footer-heading label mb-5">Explore</p>
            <div className="grid gap-3">{categories.slice(0,5).map((category) => <Link key={category.slug} href={`/products/${category.slug}`}>{category.shortName}</Link>)}</div>
          </div>
          <div>
            <p className="footer-heading label mb-5">Company</p>
            <div className="grid gap-3"><Link href="/custom-printing">Custom Printing</Link><Link href="/corporate-gifts">Corporate Gifts</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
          </div>
          <div>
            <p className="footer-heading label mb-5">Contact</p>
            <a href={siteConfig.phoneHref} className="text-xl !text-white">{siteConfig.phone}</a>
            <div className="mt-8 grid gap-3 text-sm"><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms</Link></div>
          </div>
        </div>
        <p className="footer-word display">MAKE YOUR BRAND TANGIBLE.</p>
        <div className="footer-meta mt-8 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-5 text-xs"><span>© {new Date().getFullYear()} Texa Mart. Powered by <a style={{ fontSize: "0.75rem", color: "var(--brand-marigold-soft)" }} href="https://dreambuzz.in/" target="_blank" rel="noreferrer" className="hover:underline">Dream Buzz Solutions</a></span><span>Custom Printing · Merchandise · Corporate Gifts</span></div>
      </div>
    </footer>
  );
}
