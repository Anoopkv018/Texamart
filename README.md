# Texa Mart Website

A multi-page, enquiry-first website for Texa Mart custom apparel, merchandise and corporate gifts. It is intentionally not an ecommerce application: there is no cart, checkout, payment, account or inventory system. Product and quote actions prepare a structured WhatsApp enquiry.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Copy `.env.example` to `.env.local`, then set `NEXT_PUBLIC_SITE_URL` to the final verified HTTPS origin. It enables absolute social preview image URLs, robots metadata and sitemap URLs without inventing a domain during development. Until it is set, social images and sitemap entries are deliberately omitted instead of emitting localhost or relative production URLs.

## Production checks

```bash
npm run lint
npm run build
npm start
```

The build uses webpack because the Next.js 16 Turbopack compiler stalled in this local workspace while compiling the static catalogue route set.

## Edit business details

Update `src/data/site.ts` to change the phone number, WhatsApp destination, business description, or later add verified email, address and social URLs. Optional fields are deliberately blank rather than displaying fabricated information.

## Edit products, pricing and MOQ

All catalogue items live in `src/data/products.ts` and follow the `Product` type in `src/types/product.ts`.

- Change `priceOptions` to edit supplied price options.
- Change or add `moq` for a confirmed minimum order quantity.
- Use `priceOnRequest: true` when no verified price is available.
- Keep unexplained price tiers unnamed until the client confirms what they mean.
- The ambiguous ₹55 fridge-magnet label is isolated as `pending-fridge-magnet-label`.

Categories and their editorial descriptions live in `src/data/categories.ts`.

## Add or replace product images

Product assets live in `public/images/products/`. Add a suitably optimized image there, then update the product's `image` path in `src/data/products.ts`. Missing imagery uses a branded fallback instead of a broken image.

The supplied source sheets are retained in `public/images/source/` for traceability. The current crops are catalogue source visuals and should be replaced by clean product cut-outs when available.

## Add real gallery work

Place verified Texa Mart project photography in `public/images/gallery/` and update the data array in `src/components/GalleryGrid.tsx`. Current gallery items are explicitly labelled catalogue placeholders and do not claim to be client work.

## WhatsApp messages

Message creation is centralized in `src/lib/whatsapp.ts`. It includes consistent builders for general enquiries, products, the quote form and corporate gift combinations. URLs are encoded with `encodeURIComponent` and open in a new tab.

## Design system

Brand variables, type, responsive layout, motion fallbacks and component styling live in `app/globals.css`. The primary colour `#1f1b64` was sampled from the supplied Texa Mart logo artwork. Product truth is recorded in `PRODUCT.md`; the built visual system is recorded in `DESIGN.md`.

## Impeccable

Impeccable is project-installed in `.agents/skills/impeccable/`.

Useful project workflows include:

```text
$impeccable adapt entire website
$impeccable audit entire website
$impeccable critique entire website
$impeccable animate important interactions
$impeccable polish entire website
$impeccable optimize entire website
```

The project also includes Impeccable's detector and context scripts under `.agents/skills/impeccable/scripts/`.
