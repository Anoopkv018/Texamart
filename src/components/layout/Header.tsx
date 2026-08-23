"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/src/data/site";
import { buildGeneralEnquiryMessage, createWhatsAppUrl } from "@/src/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && open && menuRef.current) {
        const focusable = [...menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const quoteUrl = createWhatsAppUrl(buildGeneralEnquiryMessage());

  return (
    <>
      <header className={`header-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="container flex items-center justify-between gap-6">
          <Link href="/" aria-label="Texa Mart home" className="brand-logo brand-logo-header relative">
            <Image src="/brand/texa-mart-glow-logo.png" alt="Texa Mart" fill className="object-contain" loading="eager" sizes="84px" />
          </Link>
          <nav className="desktop-nav flex items-center gap-5" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`nav-link ${active ? "active" : ""}`}>{item.label}</Link>;
            })}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Start a WhatsApp quote" className={`${open ? "button-light" : "button-primary"} !min-h-11 !py-2.5`}>
              <MessageCircle size={17} aria-hidden="true" /> <span className="header-quote-label">WhatsApp Quote</span>
            </a>
            <button ref={triggerRef} className={`mobile-trigger hidden h-11 w-11 shrink-0 items-center justify-center border ${open ? "border-white text-white" : "border-[var(--brand-primary)] text-[var(--brand-primary)]"}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav ref={menuRef} id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: reduceMotion ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }} transition={{ duration: reduceMotion ? .1 : .45, ease: [0.16, 1, 0.3, 1] }}>
            <div className="grid gap-2">
              {navigation.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .08 + index * .045 }}>
                  <Link href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} className="mobile-menu-link display">{item.label}</Link>
                </motion.div>
                );
              })}
            </div>
            <a href={quoteUrl} target="_blank" rel="noreferrer" className="button-light mt-8">Start a WhatsApp quote <MessageCircle size={18} /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
