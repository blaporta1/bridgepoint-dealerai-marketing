import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton } from "@/components/cta/cta-link";
import { Section, SectionHeading } from "@/components/sections/section";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.guarantee.seo.title,
  description: pages.guarantee.seo.description,
};

export default function GuaranteePage() {
  const p = pages.guarantee;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-radial-coral" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Badge>{p.eyebrow}</Badge>
          <div className="mt-6 flex items-start gap-4">
            <ShieldCheck
              className="mt-1 hidden h-10 w-10 shrink-0 text-coral sm:block"
              aria-hidden
            />
            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-display text-white sm:text-5xl lg:text-6xl">
                {p.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-steel sm:text-xl">{p.subhead}</p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading>The promise</SectionHeading>
        <div className="mt-8 max-w-3xl space-y-5">
          {p.promise.map((para) => (
            <p key={para.slice(0, 48)} className="text-base leading-relaxed text-surface-light sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="darker">
        <SectionHeading>{p.whyHeader}</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-steel sm:text-lg">
          {p.whyBody}
        </p>
      </Section>

      <Section tone="panel">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
          The terms
        </p>
        <SectionHeading>{p.termsHeader}</SectionHeading>
        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {p.terms.map((term, i) => (
            <li
              key={term.title}
              className="rounded-2xl border border-white/10 bg-midnight-950 p-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-coral">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{term.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{term.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="coral-band">
        <div className="rounded-2xl border border-coral/30 bg-midnight-950/80 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-display text-white sm:text-4xl">
            {p.ctaHeadline}
          </h2>
          <div className="mt-8 flex justify-center">
            <BookDemoButton size="xl" source="guarantee-cta" label="Book a Demo" />
          </div>
        </div>
      </Section>
    </>
  );
}
