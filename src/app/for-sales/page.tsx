import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton, CallAiButton } from "@/components/cta/cta-link";
import { Section, SectionHeading, SectionSubhead } from "@/components/sections/section";
import { agents, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.forSales.seo.title,
  description: pages.forSales.seo.description,
};

const salesAgentIds = [
  "instant-lead-responder",
  "sales-bdc",
  "missed-call-rescue",
  "enrichment",
] as const;

export default function ForSalesPage() {
  const p = pages.forSales;
  const mapped = agents.filter((a) =>
    (salesAgentIds as readonly string[]).includes(a.id)
  );

  return (
    <>
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Badge>{p.eyebrow}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-display text-white sm:text-5xl">
            {p.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">{p.subhead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookDemoButton source="for-sales-hero" />
            <CallAiButton source="for-sales-hero" />
          </div>
        </div>
      </section>

      <Section tone="darker">
        <SectionHeading>{p.painHeadline}</SectionHeading>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {p.pains.map((pain) => (
            <li
              key={pain}
              className="rounded-xl border border-white/10 bg-midnight-950 px-5 py-4 text-sm text-surface-light"
            >
              {pain}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading>Solution map</SectionHeading>
        <SectionSubhead>
          Four agents that protect sales gross from first click to confirmed show.
        </SectionSubhead>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {mapped.map((agent) => (
            <div
              key={agent.id}
              className="rounded-2xl border border-white/10 bg-midnight-950 p-5"
            >
              <h3 className="text-lg font-bold text-white">{agent.name}</h3>
              <p className="mt-2 text-sm text-steel">{agent.job}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-coral">
                {agent.metric}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="coral-band">
        <div className="rounded-2xl border border-coral/30 bg-midnight-950/80 p-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{p.outcomeHeadline}</h2>
          <p className="mt-3 max-w-2xl text-steel">{p.outcomeBody}</p>
          <div className="mt-6">
            <BookDemoButton source="for-sales-outcome" label="Book a sales-focused demo" />
          </div>
        </div>
      </Section>
    </>
  );
}
