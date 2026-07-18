"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookDemoButton, CtaLink } from "@/components/cta/cta-link";
import { pricingTiers } from "@/content/site";
import { track } from "@/lib/analytics";
import { publicEnv } from "@/lib/env";
import { formatCurrency, cn } from "@/lib/utils";

export function PricingCards() {
  const [annual, setAnnual] = useState(false);
  const monthsFree = publicEnv.prices.annualMonthsFree;
  const annualFactor = (12 - monthsFree) / 12;

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

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingTiers.map((tier) => {
          const monthly = publicEnv.prices[tier.priceKey];
          const display = annual ? Math.round(monthly * annualFactor) : monthly;

          return (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6",
                tier.featured
                  ? "border-coral/50 bg-gradient-to-b from-coral/10 to-midnight-950 shadow-glow"
                  : "border-white/10 bg-midnight-950"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-6">
                  <Badge>{tier.badge}</Badge>
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-steel">{tier.forWho}</p>
              <div className="mt-6">
                <p className="text-4xl font-bold tracking-tight text-white">
                  {formatCurrency(display)}
                </p>
                <p className="mt-1 text-xs text-steel">
                  per rooftop / month{annual ? ", billed annually" : ""}
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-coral">
                Moves: {tier.metric}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-surface-light">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookDemoButton
                  source={`pricing-${tier.id}`}
                  className="w-full"
                  label="Book a Demo"
                />
                <Button
                  variant="ghost"
                  className="mt-2 w-full"
                  onClick={() => track("pricing_tier_select", { tier: tier.id, annual })}
                  asChild
                >
                  <a href="/demo">{tier.name} plan details</a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-midnight-800/40 p-8 text-center">
        <h3 className="text-2xl font-bold text-white">Multi-rooftop or dealer group?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-steel">
          Central playbooks, shared reporting, and rollout sequencing across stores. Pricing depends
          on rooftop count and agent mix.
        </p>
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
