import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle, Phone } from "lucide-react";
import { getCategory } from "@/src/data/categories";
import { getProduct, getProductsByCategory, products } from "@/src/data/products";
import { siteConfig } from "@/src/data/site";
import { buildProductEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";
import { PriceDisplay } from "@/src/components/products/PriceDisplay";
import { ProductCard } from "@/src/components/products/ProductCard";
import { ColourAvailability } from "@/src/components/products/ColourAvailability";
import { ProductGallery } from "@/src/components/products/ProductGallery";
import { CTASection } from "@/src/components/CTASection";

export function generateStaticParams() { return products.map((product) => ({ category: product.category, product: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string; product: string }> }): Promise<Metadata> {
  const value = await params;
  const product = getProduct(value.category, value.product);
  if (!product) return {};
  return { title: product.name, description: `${product.description} Request a Texa Mart quotation on WhatsApp.` };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const value = await params;
  const product = getProduct(value.category, value.product);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category).filter((item) => item.id !== product.id).slice(0,3);
  const quote = createWhatsAppUrl(buildProductEnquiryMessage({ product }));
  const productImages = product.image
    ? [{ src: product.image, alt: product.name, caption: "Product view" }, ...(product.gallery ?? [])]
    : product.gallery ?? [];
  return (
    <>
      <section className="section pt-32 md:pt-40">
        <div className="container">
          <Link href={`/products/${product.category}`} className="mb-8 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand-primary)]"><ArrowLeft size={16} /> Back to {category?.name}</Link>
          <div className="detail-grid">
            {productImages.length > 0 ? (
              product.galleryDisplay === "thumbnails" ? (
                <ProductGallery key={product.id} images={productImages} preserveImageColors={product.preserveImageColors} />
              ) : (
                <div className={`detail-gallery ${productImages.length > 1 ? "detail-gallery-multiple" : ""} ${product.preserveImageColors ? "true-color-images" : ""}`}>
                  {productImages.map((item, index) => (
                    <figure className={`detail-gallery-item ${index === 0 ? "detail-gallery-primary" : ""}`} key={item.src}>
                      <div className="detail-gallery-media">
                        <Image src={item.src} alt={item.alt} fill loading={index === 0 ? "eager" : "lazy"} sizes={index === 0 ? "(max-width: 820px) 100vw, 52vw" : "(max-width: 560px) 100vw, 26vw"} />
                      </div>
                      {productImages.length > 1 && <figcaption>{item.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )
            ) : (
              <div className="detail-gallery"><div className="detail-gallery-media"><div className="product-fallback">{product.name.slice(0,2).toUpperCase()}</div></div></div>
            )}
            <div className="detail-panel">
              <p className="label text-[var(--brand-primary)]">{category?.name}</p>
              <h1 className="detail-title display mt-4">{product.name}</h1>
              <p className="body-large mt-7">{product.description}</p>
              <div className="mt-8"><PriceDisplay product={product} detailed /></div>
              {product.moq && <p className="mt-4 inline-flex bg-[var(--brand-primary-soft)] px-3 py-2 text-sm font-extrabold text-[var(--brand-primary)]">Minimum order quantity: {product.moq}</p>}
              {product.pricingNote && <p className="price-note mt-5 border-l border-[var(--brand-primary)] pl-4">{product.pricingNote}</p>}
              {product.availableColours && <ColourAvailability colours={product.availableColours} />}
              <div className="detail-list">
                <p className="label text-[var(--brand-muted)]">Product highlights</p>
                <ul className="grid gap-3">
                  <li><Check size={18} className="mt-1 shrink-0 text-[var(--brand-primary)]" /> Suitable for custom brand or event requirements</li>
                  <li><Check size={18} className="mt-1 shrink-0 text-[var(--brand-primary)]" /> Confirm the required variant and branding on WhatsApp</li>
                  <li><Check size={18} className="mt-1 shrink-0 text-[var(--brand-primary)]" /> Final pricing depends on product specification and customization</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-2"><a href={quote} target="_blank" rel="noreferrer" className="button-primary">WhatsApp quote <MessageCircle size={18} /></a><a href={siteConfig.phoneHref} className="button-secondary">Call Texa Mart <Phone size={18} /></a></div>
              <p className="price-note mt-4">No online payment is taken here. Texa Mart confirms the quotation and order details directly with you.</p>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && <section className="section-tight bg-[var(--brand-surface)]"><div className="container"><h2 className="display section-title">More from {category?.name}.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{related.map((item) => <ProductCard product={item} key={item.id} />)}</div></div></section>}
      <CTASection title="Need a different quantity or format?" copy="Use WhatsApp to share your requirement. Price options shown are taken directly from the supplied Texa Mart catalogue and should be confirmed for your final specification." />
    </>
  );
}
