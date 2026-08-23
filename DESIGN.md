---
name: Texa Mart
description: Compact merchandise wayfinding and sample-library system.
colors:
  texa-navy: "#1f1b64"
  texa-navy-deep: "#17134f"
  navy-soft: "#e7e2ff"
  warm-stock: "#fffaf2"
  warm-surface: "#f2ede6"
  carbon: "#191633"
  muted: "#575268"
  hairline: "#d9d1e2"
  signal-orange: "#ff6948"
  signal-orange-soft: "#f38c76"
  signal-orange-ink: "#3f3650"
  marigold: "#ffd84d"
  marigold-soft: "#f6d66b"
  aqua: "#65d9ca"
  sky: "#b9dcff"
  lilac: "#d8c8ff"
  rose: "#ffd1dc"
  mint: "#c5efd4"
  on-dark: "#c9c7dc"
  on-dark-muted: "#aaa7c6"
  whatsapp: "#26d07c"
  board-label-ink: "#26120e"
  error: "#a12a18"
  warning-ink: "#77430d"
  warning-surface: "#fff0cf"
  overlay-deep: "rgba(12, 10, 38, 0.94)"
  white: "#ffffff"
typography:
  hero: "Bricolage Grotesque Variable 760, clamp(2.85rem, 5.6vw, 4.5rem), line-height .91"
  page: "Bricolage Grotesque Variable 760, clamp(2.55rem, 6vw, 5.4rem), line-height .95"
  section: "Bricolage Grotesque Variable 760, clamp(2rem, 3.8vw, 3.65rem), line-height .95"
  body: "Outfit Variable 400–430, 1rem–1.2rem, line-height 1.6–1.65"
  label: "Outfit Variable 720, .72rem, uppercase, .11em tracking"
rounded:
  control: ".25rem"
  media: ".5rem"
  tile: ".75rem"
  inset: ".4rem"
  choice: ".35rem"
  pill: "999px"
---

# Texa Mart Design System

## North star

Texa Mart is a compact merchandise dispatch board: part airport wayfinding, part industrial sample library. The site helps business buyers orient quickly, compare truthful product and price information, and move directly to a WhatsApp quotation. Direction seed `1336941b`, assigned concept 5.

## Visual language

- Exact Texa navy (`#1f1b64`) carries identity, primary actions and ink sections.
- The header and sharing metadata use the supplied Texa Mart artwork exactly as provided, including its original black field and blue treatment. The footer uses the same geometry in white on transparency.
- Warm stock (`#faf9f5`) and warm surface (`#efeee8`) keep the catalogue tactile rather than clinical.
- Signal coral (`#ff6948`) marks decisive emphasis; marigold, aqua, sky, lilac, rose and mint turn product bays into a lively sample library.
- Conversion bands use softened coral (`#f38c76`) with deep tinted ink, keeping the handoff colorful but calmer than catalogue bays.
- Navy remains the action color. WhatsApp green is reserved for the service icon rather than full button surfaces.
- Supporting colors own complete surfaces and product stages instead of appearing as scattered decoration.
- Bricolage Grotesque gives headings and product names a friendly, expressive silhouette; Outfit handles navigation, prices, forms and readable body copy with a calmer rhythm.
- Use crisp rules, square controls, restrained half-rem media radii and one soft interaction shadow.
- The final CTA and footer form a balanced premium handoff: lower coral intensity, readable on-dark secondary text and a restrained marigold closing line.
- Products sit in aligned bays. Avoid floating, rotated or overlapping catalogue collages.

## Type and spacing

The hero is capped at 72px on desktop and about 54px on phones. Page headings top out near 86px where the copy permits; section headings near 58px. Body copy stays at 16–19px with 45–75 character measures. Labels are compact, high contrast and uppercase. The content container is capped at 77.5rem with 24px desktop gutters and 10px mobile gutters. Sections use roughly 52–96px vertical rhythm.

## Layout rules

- The first viewport uses a two-column grid: concise promise and actions on the left, strict merchandise board on the right.
- Category grids step from 4 columns to 3 and then 2.
- Catalogue grids step from 4 columns to 3 and then 2; never force a wasteful single-column phone catalogue.
- Featured products become a horizontal snap rail on phones.
- Story, process, detail and form layouts stack below 820px.
- Product imagery uses `object-fit: contain` on neutral stages; honest letter fallbacks replace mismatched imagery.

## Components

Buttons are at least 44px high, rectangular, and use direct action copy. Product cards pair a fixed media bay with category, compact title, truthful price/MOQ and separate view/WhatsApp actions. Forms use visible labels, warm fields, explicit errors and two-column-to-one-column reflow. The header is sticky, uses `aria-current` for active routes, and exposes an accessible focus-trapped mobile menu.

## Motion and accessibility

Motion is limited to short physical lifts, menu transitions and one service marquee. `prefers-reduced-motion` disables the marquee and collapses transitions. All interactive controls require visible focus, meaningful accessible names, readable contrast and a minimum 44px touch target. Content remains visible without animation.

## Do / do not

Do preserve verified prices, MOQs, supplied logo and exact brand navy. Do keep all major edges on the container grid. Do use the signal color sparingly. Do not invent testimonials, business details or product claims. Do not turn the quotation journey into a fake ecommerce checkout. Replace catalogue crops with clean transparent product photography and add genuine project gallery imagery when those assets are supplied.
