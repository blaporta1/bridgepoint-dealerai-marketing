"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton, CtaLink } from "@/components/cta/cta-link";
import { pricingOffer } from "@/content/site";
import { track } from "@/lib/analytics";
import { publicEnv } from "@/lib/env";
import { formatCurrency, cn } from "@/lib/utils";

export function PricingCards() {
  const [annual, setAnnual] = useState(false);
  const monthsFree = publicEnv.prices.annualMonthsFree;
  const annualFactor = (12 - monthsFree) / 12;
  const integrationPrice = publicEnv.prices.integration;
  const monthlyPrice = publicEnv.prices.monthly;
  const monthlyDisplay = annual
    ? Math.round(monthlyPrice * annualFactor)
    : monthlyPrice;

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            setAnnual(false);
            track("pricing_billing_toggle", { annual: false });
          }}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            !annual ? "bg-coral text-midnight" : "bg-white/5 text-steel hover:text-white"
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => {
            setAnnual(true);
            track("pricing_billing_toggle", { annual: true });
          }}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            annual ? "bg-coral text-midnight" : "bg-white/5 text-steel hover:text-white"
          )}
        >
          Annual · save {monthsFree} months
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-steel">
        Toggle applies to DealerAI Monthly only. Integration is one time.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {/* Integration */}
        <div className="relative flex flex-col rounded-2xl border border-white/10 bg-midnight-950 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {pricingOffer.integration.headline}
          </h3>
          <p className="mt-2 text-sm text-steel">{pricingOffer.integration.subhead}</p>
          <div className="mt-6">
            <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {formatCurrency(integrationPrice)}
            </p>
            <p className="mt-1 text-xs text-steel">{pricingOffer.integration.priceSubtext}</p>
          </div>
          <div className="mt-4">
            <Badge>{pricingOffer.integration.callout}</Badge>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {pricingOffer.integration.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-light">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookDemoButton
              source="pricing-integration"
              className="w-full"
              label="Book a Demo"
            />
          </div>
        </div>

        {/* Monthly */}
        <div className="relative flex flex-col rounded-2xl border border-coral/50 bg-gradient-to-b from-coral/10 to-midnight-950 p-6 shadow-glow sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            {pricingOffer.monthly.headline}
          </h3>
          <p className="mt-2 text-sm text-steel">{pricingOffer.monthly.subhead}</p>
          <div className="mt-6">
            <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {formatCurrency(monthlyDisplay)}
            </p>
            <p className="mt-1 text-xs text-steel">
              {pricingOffer.monthly.priceSubtext}
              {annual ? ", billed annually" : ""}
            </p>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {pricingOffer.monthly.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-surface-light">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookDemoButton
              source="pricing-monthly"
              className="w-full"
              label="Book a Demo"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-midnight-800/40 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">{pricingOffer.multiHeadline}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-steel">{pricingOffer.multiBody}</p>
        <div className="mt-6">
          <CtaLink
            href="/demo"
            event="cta_book_demo"
            eventPayload={{ source: "multi-rooftop" }}
            size="lg"
          >
            Talk to Sales
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
