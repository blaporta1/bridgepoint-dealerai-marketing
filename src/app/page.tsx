import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton, CallAiButton } from "@/components/cta/cta-link";
import { LiveDemoPanel } from "@/components/demo/live-demo";
import { RoiCalculator } from "@/components/forms/roi-calculator";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import {
  Section,
  SectionHeading,
  SectionLabel,
  SectionSubhead,
} from "@/components/sections/section";
import { agents, home, riskReversal } from "@/content/site";
import { publicEnv } from "@/lib/env";

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
  openGraph: {
    title: "AI Employees for Dealerships | BridgePoint DealerAI",
    description: home.seo.description,
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BridgePoint DealerAI",
    description: home.seo.description,
    brand: { "@type": "Brand", name: "BridgePoint AI" },
    offers: [
      {
        "@type": "Offer",
        name: "DealerAI Full Integration",
        priceCurrency: "USD",
        price: publicEnv.prices.integration,
        description: "One time, per rooftop",
      },
      {
        "@type": "Offer",
        name: "DealerAI Monthly",
        priceCurrency: "USD",
        price: publicEnv.prices.monthly,
        description: "Per rooftop / month",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-midnight">
        <div className="pointer-events-none absolute inset-0 bg-radial-coral" />
        <div
          className="pointer-events-none absolute inset-0 bg-hero-grid opacity-40"
          style={{ backgroundSize: "48px 48px" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <Badge>{home.hero.eyebrow}</Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-display text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {home.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              {home.hero.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookDemoButton size="xl" source="hero" />
              <CallAiButton size="xl" source="hero" />
            </div>
            <p className="mt-5 text-sm text-steel">{home.hero.trust}</p>
            <Link
              href="/guarantee"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-coral-400"
            >
              90-day money-back guarantee
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* Problem strip */}
      <Section tone="darker">
        <SectionLabel>{home.problem.label}</SectionLabel>
        <SectionHeading>{home.problem.headline}</SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.problem.stats.map((stat) => (
            <div
              key={stat.number}
              className="rounded-2xl border border-white/10 bg-midnight-800/40 p-6"
            >
              <p className="text-4xl font-bold tracking-tight text-coral">{stat.number}</p>
              <p className="mt-3 text-sm leading-relaxed text-surface-light">{stat.label}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wider text-steel">{stat.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base text-steel">{home.problem.closer}</p>
      </Section>

      {/* AI Employees */}
      <Section id="employees">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>{home.employees.label}</SectionLabel>
            <SectionHeading>{home.employees.headline}</SectionHeading>
            <SectionSubhead>{home.employees.subhead}</SectionSubhead>
          </div>
          <Link
            href="/ai-employees"
            className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-400"
          >
            See all AI Employees
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-midnight-950 p-5 transition hover:border-coral/30"
            >
              <h3 className="text-lg font-bold text-white">{agent.name}</h3>
              <p className="mt-2 text-sm text-steel">{agent.job}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-coral">
                Moves: {agent.metric}
              </p>
              <div className="mt-4 flex-1 rounded-xl border border-white/5 bg-midnight-800/50 p-3">
                {agent.snippet.map((line, i) => (
                  <p key={i} className="text-xs leading-relaxed text-steel/90">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Live demo */}
      <Section id="live-demo" tone="panel">
        <SectionLabel>{home.liveDemo.label}</SectionLabel>
        <div className="mt-6">
          <LiveDemoPanel />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionLabel>{home.howItWorks.label}</SectionLabel>
        <SectionHeading>{home.howItWorks.headline}</SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-midnight-950 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-coral">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-steel">{home.howItWorks.closer}</p>
      </Section>

      {/* ROI */}
      <Section id="roi" tone="darker">
        <SectionLabel>{home.roi.label}</SectionLabel>
        <SectionHeading>{home.roi.headline}</SectionHeading>
        <SectionSubhead>{home.roi.subhead}</SectionSubhead>
        <div className="mt-10">
          <RoiCalculator />
        </div>
      </Section>

      {/* Dashboard proof */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>{home.dashboard.label}</SectionLabel>
            <SectionHeading>{home.dashboard.headline}</SectionHeading>
            <SectionSubhead>{home.dashboard.subhead}</SectionSubhead>
            <p className="mt-6 text-xs text-steel">{home.dashboard.caption}</p>
          </div>
          <DashboardMockup />
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="panel">
        <SectionLabel>{home.comparison.label}</SectionLabel>
        <SectionHeading>{home.comparison.headline}</SectionHeading>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-midnight-950">
              <tr>
                <th className="px-4 py-4 font-semibold text-steel">Capability</th>
                {home.comparison.columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-4 font-semibold text-white first:text-steel"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {home.comparison.rows.map((row) => (
                <tr key={row.feature} className="border-t border-white/5 bg-midnight-900/40">
                  <td className="px-4 py-4 font-medium text-surface-light">{row.feature}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={
                        i === 0
                          ? "px-4 py-4 text-coral"
                          : "px-4 py-4 text-steel"
                      }
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-steel">{home.comparison.foot}</p>
      </Section>

      {/* Guarantee: primary trust signal */}
      <Section tone="coral-band">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-coral/40 bg-midnight-950/80 p-8 shadow-glow lg:flex-row lg:items-center lg:p-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-coral">
              <CheckCircle2 className="h-6 w-6" aria-hidden />
              <SectionLabel>Our Promise</SectionLabel>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-display text-white sm:text-3xl">
              {riskReversal.headline}
            </h2>
            <p className="mt-3 text-base font-medium text-surface-light sm:text-lg">
              {riskReversal.body}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <BookDemoButton size="xl" source="guarantee-home" label="Book a Demo" />
            <Link
              href="/guarantee"
              className="inline-flex h-12 items-center justify-center rounded-md border border-steel/40 px-8 text-base font-semibold text-surface-light transition hover:border-coral hover:text-coral"
            >
              {riskReversal.ctaLabel}
            </Link>
          </div>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section tone="darker">
        <SectionLabel>{home.pricingTeaser.label}</SectionLabel>
        <SectionHeading>{home.pricingTeaser.headline}</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-midnight-950 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">
              Integration
            </p>
            <p className="mt-2 text-2xl font-bold text-white">
              {home.pricingTeaser.integration}
            </p>
          </div>
          <div className="rounded-2xl border border-coral/30 bg-midnight-950 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">
              Monthly
            </p>
            <p className="mt-2 text-2xl font-bold text-white">
              {home.pricingTeaser.monthly}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-steel">{home.pricingTeaser.note}</p>
        <Link
          href="/pricing"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-400"
        >
          See full pricing
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionLabel>Straight answers</SectionLabel>
        <SectionHeading>What operators ask before they buy</SectionHeading>
        <div className="mt-8 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {home.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="darker">
        <div className="rounded-2xl border border-white/10 bg-midnight-800/40 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-display text-white sm:text-4xl">
            {home.finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">{home.finalCta.subhead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookDemoButton size="xl" source="final-cta" />
            <CallAiButton size="xl" source="final-cta" />
          </div>
          {publicEnv.calendarEmbedUrl && (
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-white/10">
              <iframe
                src={publicEnv.calendarEmbedUrl}
                title="Book a demo"
                className="h-[500px] w-full"
              />
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
