# Zeal — Corporate Website

A premium, SEO-first Next.js website for **Zeal Enterprises**, built with the
App Router, TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

Fully static-friendly — deploys cleanly to **Vercel** (recommended) or any
Node hosting.

## Editing content (no code changes needed)

All business content lives in `src/content/`:

- `site.ts` — company name, address, GSTIN, email, WhatsApp number & default
  messages, navigation links.
- `services.ts` — the 5 core services (Trading & Supply, Procurement &
  Sourcing, Distribution, Business Facilitation, Agency & Commission
  Services) — each with its own approach, benefits and FAQs, which
  automatically power both the homepage cards and the dedicated service
  pages.
- `insights.ts` — blog/article content for `/insights`.
- `placeholders.ts` — placeholder Product / Industry / Market categories.
  Replace with real categories once confirmed by the client, and the
  `/products/[slug]`, `/industries/[slug]`, `/markets/[slug]` pages update
  automatically.

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

```
NEXT_PUBLIC_SITE_URL=https://your-live-domain.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=918110807884
```

## Replacing placeholder images

Temporary stock photography from Unsplash is used in a few places (About
section, Insights article covers). Search the codebase for
`images.unsplash.com` and swap in real photography — ideally stored in
`public/images/` and referenced locally for full control and performance.

## WhatsApp & Email pre-filled messages

Both the floating WhatsApp button and the "WhatsApp Us" / "Email Us" buttons
open with a pre-filled message, configured in `src/content/site.ts`
(`whatsappDefaultMessage`, `emailDefaultSubject`, `emailDefaultBody`).

## Contact form

The form on `/contact` (`src/components/contact/ContactForm.tsx`) is
frontend-ready with validation and a success state, but does not yet send
anywhere — wire the `handleSubmit` function to an API route or an email
service (e.g. Resend, Formspree, or a custom `/api/contact` route) when
ready to go live.

## SEO infrastructure

- Per-page metadata via `src/lib/seo.ts` (`pageMetadata`) — unique titles,
  descriptions, canonical URLs, Open Graph & Twitter cards on every route.
- `sitemap.xml` (`src/app/sitemap.ts`) and `robots.txt`
  (`src/app/robots.ts`) generated automatically from the content files.
- JSON-LD: Organization + WebSite on every page, BreadcrumbList on every
  inner page, Article schema on every Insights post.
- Semantic HTML, one H1 per page, descriptive image `alt` text throughout.

## Design system

Colors, fonts and motion tokens live in `src/app/globals.css`
(`--z-black`, `--z-gold`, `--z-gold-light`, `--z-cream`, etc.) matching the
brand's black / gold / warm off-white identity. The recurring animated gold
line (`src/components/ui/RouteLine.tsx`) is the site's signature motif, used
throughout as a section divider.

## Known placeholders (clearly marked, ready to replace)

- Product, Industry categories (`Category 01/02/03`, `Industry 01/02/03`)
- "Other International Markets" (status: to be confirmed)
- Business hours (Mon–Sat, 9:30 AM – 6:30 PM IST) — confirm actual hours
- Google Analytics ID
- A handful of stock photos (see above)

Real business facts (address, GSTIN, email, WhatsApp number) are already
wired in from the details provided.
