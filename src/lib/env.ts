function read(name: string, fallback = "") {
  return process.env[name]?.trim() || fallback;
}

function readNumber(name: string, fallback: number) {
  const raw = process.env[name];
  if (!raw) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) ? n : fallback;
}

/** Public marketing env (safe to expose on client via NEXT_PUBLIC_*) */
export const publicEnv = {
  siteUrl: read("NEXT_PUBLIC_SITE_URL", "https://bridgepoint-dealerai-marketing.vercel.app"),
  demoPhone: read("NEXT_PUBLIC_RETELL_DEMO_NUMBER", "1-800-555-0199"),
  retellWebCallKey: read("NEXT_PUBLIC_RETELL_WEB_CALL_KEY", ""),
  calendarEmbedUrl: read("NEXT_PUBLIC_CALENDAR_EMBED_URL", ""),
  gtmId: read("NEXT_PUBLIC_GTM_ID", ""),
  companyEmail: read("NEXT_PUBLIC_COMPANY_EMAIL", "brian@bridgepointai.com"),
  companyName: "BridgePoint AI LLC",
  productName: "BridgePoint DealerAI",
  prices: {
    integration: readNumber("NEXT_PUBLIC_PRICE_INTEGRATION", 4997),
    monthly: readNumber("NEXT_PUBLIC_PRICE_MONTHLY", 2997),
    annualMonthsFree: readNumber("NEXT_PUBLIC_PRICE_ANNUAL_MONTHS_FREE", 2),
  },
};

/** Server-only */
export const serverEnv = {
  intakeUrl: read("DEALERAI_INTAKE_URL", ""),
  leadRateLimitPerHour: readNumber("LEAD_RATE_LIMIT_PER_HOUR", 20),
};
