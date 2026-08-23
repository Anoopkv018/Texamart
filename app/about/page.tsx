import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/src/components/PageHero";
import { CTASection } from "@/src/components/CTASection";
import { categories } from "@/src/data/categories";

export const metadata: Metadata = { title: "About", description: "Texa Mart turns brand requirements into custom apparel, merchandise and corporate gifts." };
export default function AboutPage() {
  return (
    <><PageHero title="We turn brands into things people can hold, wear and remember." copy="Texa Mart helps businesses, teams and event organisers explore custom merchandise and move from a product idea to a clear quotation conversation." />
    <section className="section"><div className="container grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><p className="label text-[var(--brand-primary)]">Who we are</p><div><h2 className="display section-title">The screen is only the starting point.</h2><p className="body-large mt-7">A brand becomes part of daily life when it appears on something genuinely useful: a T-shirt worn by a team, a bottle carried every day, a diary kept on a desk, or a gift that stays in reach. Texa Mart brings those product possibilities together and keeps the enquiry process direct.</p></div></div></section>
    <section className="section-tight bg-[var(--brand-surface)]"><div className="container"><h2 className="display section-title">What we create.</h2><div className="mt-12 grid gap-px bg-[var(--brand-border)] sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <Link href={`/products/${category.slug}`} key={category.slug} className="group min-h-56 bg-[var(--brand-background)] p-6"><p className="label text-[var(--brand-muted)]">Explore</p><h3 className="display mt-20 text-3xl">{category.shortName}</h3><ArrowRight className="mt-5 transition-transform group-hover:translate-x-2" /></Link>)}</div></div></section>
    <section className="ink-section section"><div className="container grid gap-14 lg:grid-cols-2"><h2 className="display section-title">A direct, honest approach.</h2><div className="grid gap-8 text-lg leading-relaxed text-white/70"><p>Browse verified product options and the pricing information supplied by Texa Mart.</p><p>Share the quantity and customization details needed for a useful quotation.</p><p>Continue directly with the team on WhatsApp—without a cart, account or online payment step.</p></div></div></section>
    <CTASection /></>
  );
}
