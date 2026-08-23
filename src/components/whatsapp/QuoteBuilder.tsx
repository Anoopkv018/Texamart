"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { products } from "@/src/data/products";
import { buildQuoteMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

type Fields = { product: string; quantity: string; name: string; company: string; requirement: string; notes: string };
const initial: Fields = { product: "", quantity: "", name: "", company: "", requirement: "", notes: "" };

export function QuoteBuilder({ initialProduct = "" }: { initialProduct?: string }) {
  const [fields, setFields] = useState({ ...initial, product: initialProduct });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const selected = useMemo(() => products.find((product) => product.name === fields.product), [fields.product]);
  const belowMoq = selected?.moq && Number(fields.quantity) > 0 && Number(fields.quantity) < selected.moq;

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (!fields.product) next.product = "Choose a product or enquiry type.";
    if (!fields.quantity) next.quantity = "Add an estimated quantity.";
    if (!fields.name.trim()) next.name = "Tell us your name.";
    if (!fields.requirement.trim()) next.requirement = "Briefly describe the customization you need.";
    setErrors(next);
    if (Object.keys(next).length) return;
    window.open(createWhatsAppUrl(buildQuoteMessage(fields)), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-shell" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-product">Product</label>
          <select id="quote-product" value={fields.product} onChange={(event) => set("product", event.target.value)} aria-invalid={!!errors.product} aria-describedby={errors.product ? "quote-product-error" : undefined}>
            <option value="">Choose a product</option>
            <option value="General custom merchandise enquiry">General custom merchandise enquiry</option>
            {products.map((product) => <option value={product.name} key={product.id}>{product.name}</option>)}
          </select>
          {errors.product && <p id="quote-product-error" role="alert" className="form-error">{errors.product}</p>}
        </div>
        <div className="field">
          <label htmlFor="quote-quantity">Quantity</label>
          <input id="quote-quantity" type="number" inputMode="numeric" min="1" value={fields.quantity} onChange={(event) => set("quantity", event.target.value)} placeholder="e.g. 100" aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? "quote-quantity-error" : undefined} />
          {errors.quantity && <p id="quote-quantity-error" role="alert" className="form-error">{errors.quantity}</p>}
        </div>
        {belowMoq && <p role="status" className="moq-warning field full">This product lists an MOQ of {selected?.moq}. You can still contact Texa Mart to discuss your requirement.</p>}
        <div className="field"><label htmlFor="quote-name">Name</label><input id="quote-name" value={fields.name} onChange={(event) => set("name", event.target.value)} autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "quote-name-error" : undefined} />{errors.name && <p id="quote-name-error" role="alert" className="form-error">{errors.name}</p>}</div>
        <div className="field"><label htmlFor="quote-company">Company <span className="font-normal text-[var(--brand-muted)]">(optional)</span></label><input id="quote-company" value={fields.company} onChange={(event) => set("company", event.target.value)} autoComplete="organization" placeholder="Company or team" /></div>
        <div className="field full"><label htmlFor="quote-requirement">Customization requirement</label><textarea id="quote-requirement" value={fields.requirement} onChange={(event) => set("requirement", event.target.value)} placeholder="Logo placement, colours, sizes or the outcome you have in mind" aria-invalid={!!errors.requirement} aria-describedby={errors.requirement ? "quote-requirement-error" : undefined} />{errors.requirement && <p id="quote-requirement-error" role="alert" className="form-error">{errors.requirement}</p>}</div>
        <div className="field full"><label htmlFor="quote-notes">Additional notes <span className="font-normal text-[var(--brand-muted)]">(optional)</span></label><textarea id="quote-notes" value={fields.notes} onChange={(event) => set("notes", event.target.value)} placeholder="Timeline, packaging preferences or anything else we should know" /></div>
      </div>
      <button className="button-primary mt-5" type="submit">Prepare WhatsApp enquiry <MessageCircle size={18} /></button>
      <p className="price-note mt-3">Your details are used only to prepare a WhatsApp message. This form does not place an online order.</p>
    </form>
  );
}
