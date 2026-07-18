export type AnalyticsEvent =
  | "cta_book_demo"
  | "cta_call_ai"
  | "cta_live_demo_web"
  | "cta_roi_calc_submit"
  | "cta_roi_pdf_gate"
  | "form_demo_submit"
  | "form_roi_pdf_submit"
  | "nav_click"
  | "pricing_tier_select"
  | "pricing_billing_toggle";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  });
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type UtmBag = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtms(): UtmBag {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmBag = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  });

  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem("dealerai_utms", JSON.stringify(fromUrl));
    } catch {
      /* ignore */
    }
    return fromUrl;
  }

  try {
    const raw = sessionStorage.getItem("dealerai_utms");
    return raw ? (JSON.parse(raw) as UtmBag) : {};
  } catch {
    return {};
  }
}

export function getStoredUtms(): UtmBag {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("dealerai_utms");
    return raw ? (JSON.parse(raw) as UtmBag) : {};
  } catch {
    return {};
  }
}
