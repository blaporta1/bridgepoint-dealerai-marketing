# BridgePoint DealerAI — Marketing Site

Conversion-focused marketing site for **BridgePoint DealerAI** (BridgePoint AI LLC). Primary job: book qualified demos with dealership decision makers.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn-style UI primitives
- Framer Motion ready (installed)
- Zod-validated lead API with honeypot + in-memory rate limit
- Vercel-ready

## Brand

Uses the **BridgePoint AI Brand Guide 2026**:

| Token | Hex |
|---|---|
| Midnight | `#0F1B2D` |
| Coral | `#FF7849` |
| Steel Blue | `#8FA3C2` |
| Light Gray | `#E8EAEE` |

Typography: **Inter**. Voice: operators, numbers, no em dashes in marketing copy.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|---|---|
| `DEALERAI_INTAKE_URL` | Platform lead intake (dogfood Instant Lead Responder) |
| `NEXT_PUBLIC_RETELL_DEMO_NUMBER` | "Call Our AI Right Now" number |
| `NEXT_PUBLIC_RETELL_WEB_CALL_KEY` | Retell web call widget key |
| `NEXT_PUBLIC_CALENDAR_EMBED_URL` | Cal.com / Calendly embed |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container |
| `NEXT_PUBLIC_PRICE_*` | Public Core / Growth / Dominate prices |

Default public prices (change via env):

- **Core** $1,497 / rooftop / month  
- **Growth** $2,997 / rooftop / month  
- **Dominate** $4,997 / rooftop / month  
- **Annual:** 2 months free  

## Content

All site copy lives in `src/content/site.ts`. Iterate wording there without touching page components.

Approved copy deck: `../COPY_DECK.md`

## Lead flow

1. Demo form or ROI PDF gate posts to `POST /api/leads`
2. Zod validates payload
3. Honeypot field `companyWebsite` drops bots
4. IP rate limit (default 20/hour)
5. Forwards JSON to `DEALERAI_INTAKE_URL` when set
6. Success copy: AI texts within 60 seconds (product dogfood)

Without `DEALERAI_INTAKE_URL`, leads log to the server console (dev-safe).

## Launch checklist

- [ ] Confirm Retell demo agent live; set `NEXT_PUBLIC_RETELL_DEMO_NUMBER`
- [ ] Wire Retell web SDK with `NEXT_PUBLIC_RETELL_WEB_CALL_KEY`
- [ ] Point `DEALERAI_INTAKE_URL` at production Instant Lead Responder
- [ ] Confirm 60-second SMS confirmation path works end-to-end
- [ ] Set calendar embed URL
- [ ] Install GTM; verify CTA events in dataLayer
- [ ] Confirm public pricing env vars match signed commercial sheet
- [ ] Counsel review Privacy, Terms, TCPA pages
- [ ] Replace Results illustrative models after first pilot
- [ ] Honor 30-day performance pilot as written (approved)
- [ ] Set `NEXT_PUBLIC_SITE_URL` for sitemap / OG
- [ ] `npm run build` clean on Vercel
- [ ] Lighthouse pass (perf / a11y / SEO targets 90+)
- [ ] Connect custom domain

## Deploy (Vercel)

```bash
npm i -g vercel
vercel link
vercel env pull
vercel --prod
```

Or connect the Git repo in the Vercel dashboard and set the env vars above.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Site map

| Path | Page |
|---|---|
| `/` | Home |
| `/ai-employees` | Product / agents |
| `/for-sales` | Sales BDC use case |
| `/for-service` | Fixed ops use case |
| `/pricing` | Core / Growth / Dominate |
| `/results` | Illustrative models + metric defs |
| `/about` | BridgePoint AI |
| `/demo` | Book a demo |
| `/privacy` `/terms` `/tcpa` | Legal |

## Approvals locked

1. Brand Guide (coral, not gold)  
2. 30-day pilot honored as written  
3. Real public pricing numbers (env-driven defaults above)  
4. Problem strip stats labeled industry estimate  
