import type { Metadata } from "next";
import { CategoryRail } from "@/src/components/CategoryRail";
import { PageHero } from "@/src/components/PageHero";
import { ProductGrid } from "@/src/components/products/ProductGrid";
import { CTASection } from "@/src/components/CTASection";
import { products } from "@/src/data/products";

export const metadata: Metadata = { title: "Products", description: "Browse Texa Mart custom apparel, merchandise, gifts, drinkware, bags and branded essentials." };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Products made to put your brand everywhere." copy="Browse custom apparel, merchandise, gifts and branded essentials for teams, events and businesses." aside={<p className="label max-w-xs text-[var(--brand-primary)]">{products.length} catalogue options · direct WhatsApp quotation</p>} />
      <CategoryRail />
      <section className="section">
        <div className="container"><ProductGrid products={products} /><p className="price-note mt-10 max-w-4xl border-t border-[var(--brand-border)] pt-5">Prices and minimum quantities may vary depending on product specification, customization and order requirement. Contact Texa Mart for the final quotation.</p></div>
      </section>
      <CTASection title="Found a starting point?" copy="Share the product, estimated quantity and branding requirement. Texa Mart will help confirm the right option and final quotation." />
    </>
  );
}
