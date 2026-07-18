import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton } from "@/components/cta/cta-link";
import { Section, SectionHeading, SectionSubhead } from "@/components/sections/section";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.results.seo.title,
  description: pages.results.seo.description,
};

const metrics = [
  {
    name: "Appointments set",
    def: "Net new appointments attributed to AI outreach or recovery",
  },
  { name: "Show rate", def: "Shown ÷ set for AI-sourced appointments" },
  {
    name: "Sold",
    def: "Delivered units or closed deals from AI-sourced appointments",
  },
  {
    name: "Median first response",
    def: "Median time from lead create or missed call to first AI touch",
  },
  {
    name: "Attributed gross",
    def: "Front + back gross on sold deals tied to AI-sourced appointments",
  },
];

export default function ResultsPage() {
  const p = pages.results;
  return (
    <>
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Badge>{p.eyebrow}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-display text-white sm:text-5xl">
            {p.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">{p.subhead}</p>
          <div className="mt-8 rounded-xl border border-coral/40 bg-coral/10 p-4 text-sm text-surface-light">
            <span className="font-semibold text-coral">Illustrative. </span>
            {p.honesty}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading>Metric definitions</SectionHeading>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {metrics.map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-midnight-950 p-5">
              <p className="font-semibold text-white">{m.name}</p>
              <p className="mt-2 text-sm text-steel">{m.def}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="darker">
        <SectionHeading>Illustrative rooftop models</SectionHeading>
        <SectionSubhead>
          Planning models only. Not live customer case studies.
        </SectionSubhead>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-midnight-950 p-6">
            <Badge variant="steel">Illustrative model · not a live customer</Badge>
            <h3 className="mt-4 text-xl font-bold text-white">Sales-heavy single point</h3>
            <p className="mt-2 text-sm text-steel">~450 sales leads / month</p>
            <p className="mt-4 text-sm leading-relaxed text-surface-light">
              Before: slow after-hours response, thin aged-lead work. Modeled after Instant Lead
              Responder + Sales BDC + Missed Call Rescue.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>Contact rate 44% → 82%</li>
              <li>+28 appointments set / month</li>
              <li>+9 shown / month</li>
              <li>Gross impact shown as a range on the pilot board, not a vanity single number</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-midnight-950 p-6">
            <Badge variant="steel">Illustrative model · not a live customer</Badge>
            <h3 className="mt-4 text-xl font-bold text-white">Metro fixed ops</h3>
            <p className="mt-2 text-sm text-steel">Heavy inbound service volume</p>
            <p className="mt-4 text-sm leading-relaxed text-surface-light">
              Service phones overflow at open. Recall list untouched. Modeled after Service Agent +
              Recall/Reactivation + Missed Call Rescue.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>Higher book rate on inbound</li>
              <li>Reactivation ROs from open recall and 12-month lapsed lists</li>
              <li>Advisor hours returned to the drive</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading>What we publish after pilot 1</SectionHeading>
        <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 text-sm text-steel">
          <li>Named rooftop (with permission) or anonymized dealer group</li>
          <li>Before / after window</li>
          <li>Agent mix</li>
          <li>Appointments, shows, sold, median response, attributed gross</li>
          <li>Quote from GM, GSM, or fixed ops director</li>
        </ul>
        <div className="mt-10 rounded-2xl border border-coral/30 bg-midnight-950 p-8">
          <h3 className="text-2xl font-bold text-white">{p.ctaHeadline}</h3>
          <div className="mt-6">
            <BookDemoButton source="results-cta" label="Apply for the 30-day pilot" />
          </div>
        </div>
      </Section>
    </>
  );
}
