"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const gallery = [
  { src: "/images/products/round-neck-tshirt.jpg", label: "Apparel placeholder", width: 700, height: 880 },
  { src: "/images/products/bottle.jpg", label: "Drinkware placeholder", width: 700, height: 1050 },
  { src: "/images/products/tote-bag.jpg", label: "Bags placeholder", width: 700, height: 850 },
  { src: "/images/products/cap.jpg", label: "Merchandise placeholder", width: 700, height: 700 },
  { src: "/images/products/diary.jpg", label: "Corporate gifts placeholder", width: 700, height: 940 },
  { src: "/images/products/mug.jpg", label: "Branding placeholder", width: 700, height: 760 },
  { src: "/images/products/backpack.jpg", label: "Bags placeholder", width: 700, height: 980 },
  { src: "/images/products/custom-flag.jpg", label: "Merchandise placeholder", width: 700, height: 720 },
];

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    requestAnimationFrame(() => returnFocusRef.current?.focus());
  }, []);

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") { event.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);
  return (
    <>
      <div className="gallery-grid">
        {gallery.map((item, index) => <button className="gallery-item" onClick={(event) => { returnFocusRef.current = event.currentTarget; setOpen(index); }} key={`${item.src}-${index}`} aria-label={`Open ${item.label}`}><Image src={item.src} alt={`${item.label}. Supplied catalogue visual, not customer project photography.`} width={item.width} height={item.height} /><span className="gallery-label">{item.label}</span></button>)}
      </div>
      {open !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image"><button ref={closeRef} className="absolute right-5 top-5 grid h-12 w-12 place-items-center bg-white text-[var(--brand-primary)]" onClick={close} aria-label="Close image"><X /></button><Image src={gallery[open].src} alt={gallery[open].label} width={900} height={1100} /></div>}
    </>
  );
}
