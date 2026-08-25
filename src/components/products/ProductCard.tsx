import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getCategory } from "@/src/data/categories";
import { buildProductEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";
import type { Product } from "@/src/types/product";
import { PriceDisplay } from "./PriceDisplay";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const href = `/products/${product.category}/${product.slug}`;
  const quote = createWhatsAppUrl(buildProductEnquiryMessage({ product }));
  return (
    <article className={`product-card ${product.preserveImageColors ? "true-color-images" : ""}`}>
      <Link href={href} className="product-card-image" aria-label={`View ${product.name}`}>
        {product.image ? <Image src={product.image} alt={product.name} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" /> : <div className="product-fallback" aria-hidden="true">{product.name.slice(0,2).toUpperCase()}</div>}
      </Link>
      <div className="product-card-body">
        <p className="label text-[var(--brand-muted)]">{category?.name}</p>
        <h3 className="product-title display">{product.name}</h3>
        <div className="mt-3"><PriceDisplay product={product} /></div>
        {product.moq && <p className="price-note mt-1">MOQ {product.moq}</p>}
        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm font-extrabold">
          <Link href={href} className="inline-flex items-center gap-1 hover:text-[var(--brand-primary)]">View product <ArrowUpRight size={16} /></Link>
          <a href={quote} target="_blank" rel="noreferrer" aria-label={`Request a WhatsApp quote for ${product.name}`} className="product-quote-button inline-flex h-11 w-11 items-center justify-center"><MessageCircle size={17} /></a>
        </div>
      </div>
    </article>
  );
}
