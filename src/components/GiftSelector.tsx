"use client";

import { Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { buildGiftCombinationMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

const giftItems = ["UV Bottle", "Diary", "Metal Pen", "Mug", "Tote Bag", "Keychain", "Backpack", "Premium Cap"];

export function GiftSelector() {
  const [selected, setSelected] = useState<string[]>(["UV Bottle", "Diary", "Metal Pen"]);
  function toggle(item: string) { setSelected((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]); }
  return (
    <div>
      <div className="gift-selector">
        {giftItems.map((item) => {
          const active = selected.includes(item);
          return <button type="button" key={item} className={`gift-option ${active ? "selected" : ""}`} onClick={() => toggle(item)} aria-pressed={active}><span className="label">{active ? "Selected" : "Add to set"}</span><span className="display flex items-end justify-between gap-3 text-2xl">{item}{active && <Check size={20} />}</span></button>;
        })}
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a className={`button-light ${selected.length === 0 ? "pointer-events-none opacity-50" : ""}`} aria-disabled={selected.length === 0} href={selected.length ? createWhatsAppUrl(buildGiftCombinationMessage(selected)) : undefined} target="_blank" rel="noreferrer">Request this combination <MessageCircle size={18} /></a>
        <p className="text-sm text-white/65">{selected.length ? `${selected.length} items selected` : "Choose at least one item"}</p>
      </div>
    </div>
  );
}
