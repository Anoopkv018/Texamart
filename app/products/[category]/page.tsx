import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryRail } from "@/src/components/CategoryRail";
import { PageHero } from "@/src/components/PageHero";
import { ProductGrid } from "@/src/components/products/ProductGrid";
import { CTASection } from "@/src/components/CTASection";
import { categories, getCategory } from "@/src/data/categories";
import { getProductsByCategory } from "@/src/data/products";

export function generateStaticParams() { return categories.map((category) => ({ category: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProductsByCategory(slug);
  return (
    <>
      <PageHero title={category.name} copy={category.description} aside={<p className="label text-[var(--brand-primary)]">{items.length} catalogue options</p>} />
      <CategoryRail active={category.slug} />
      <section className="section"><div className="container"><ProductGrid products={items} /><p className="price-note mt-10 max-w-4xl border-t border-[var(--brand-border)] pt-5">Prices and minimum quantities may vary depending on product specification, customization and order requirement. Contact Texa Mart for the final quotation.</p></div></section>
      <CTASection title={`Need custom ${category.shortName.toLowerCase()}?`} copy="Share your quantity, branding requirement and preferred option. We’ll prepare the conversation for a clear quotation." />
    </>
  );
}
