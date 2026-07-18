import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton, CallAiButton } from "@/components/cta/cta-link";
import { Section, SectionHeading } from "@/components/sections/section";
import { pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.about.seo.title,
  description: pages.about.seo.description,
};

export default function AboutPage() {
  const p = pages.about;
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
            <BookDemoButton source="about-hero" />
            <CallAiButton source="about-hero" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading>Mission</SectionHeading>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-surface-light">{p.mission}</p>
      </Section>

      <Section tone="darker">
        <SectionHeading>Values</SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {p.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-midnight-950 p-6">
              <h3 className="text-lg font-bold text-coral">{v.title}</h3>
              <p className="mt-2 text-sm text-steel">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading>Why dealerships</SectionHeading>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">{p.why}</p>
      </Section>
    </>
  );
}
