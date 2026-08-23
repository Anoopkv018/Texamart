import type { Product } from "@/src/types/product";
import { siteConfig } from "@/src/data/site";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralEnquiryMessage(context = "a custom merchandise requirement") {
  return `Hi Texa Mart,\n\nI'd like to discuss ${context}.\n\nName:\nCompany:\nQuantity:\nCustomization requirement:\nAdditional notes:\n\nPlease share the quotation and order details.`;
}

export function buildProductEnquiryMessage({
  product,
  quantity,
  preferredPrice,
  notes,
  pageUrl,
}: {
  product: Product;
  quantity?: string;
  preferredPrice?: string;
  notes?: string;
  pageUrl?: string;
}) {
  const category = product.category.replaceAll("-", " ");
  const prices = product.priceOptions?.map((price) => `₹${price}`).join(" / ") ?? "Price on request";
  return `Hi Texa Mart,\n\nI'm interested in the ${product.name}.\n\nCategory: ${category}\nAvailable price options: ${prices}${product.moq ? `\nMOQ: ${product.moq}` : ""}\nQuantity: ${quantity || ""}\nPreferred price/variant: ${preferredPrice || ""}\nCustomization requirement:\nAdditional requirement: ${notes || ""}${pageUrl ? `\nProduct page: ${pageUrl}` : ""}\n\nPlease share the quotation and order details.`;
}

export function buildQuoteMessage(fields: {
  product: string;
  quantity: string;
  name: string;
  company: string;
  requirement: string;
  notes: string;
}) {
  return `Hi Texa Mart,\n\nI'd like a quotation.\n\nProduct: ${fields.product}\nQuantity: ${fields.quantity}\nName: ${fields.name}\nCompany: ${fields.company || "—"}\nCustomization requirement: ${fields.requirement}\nAdditional notes: ${fields.notes || "—"}\n\nPlease share the quotation and order details.`;
}

export function buildGiftCombinationMessage(items: string[]) {
  return `Hi Texa Mart,\n\nI'd like to plan a corporate gift set with:\n${items.map((item) => `• ${item}`).join("\n")}\n\nQuantity:\nBranding requirement:\nBudget or preference:\nAdditional notes:\n\nPlease share a quotation and the available options.`;
}
