import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { BookDemoButton, CallAiButton, CtaLink } from "@/components/cta/cta-link";
import { Section, SectionHeading, SectionSubhead } from "@/components/sections/section";
import { agents, pages } from "@/content/site";

export const metadata: Metadata = {
  title: pages.aiEmployees.seo.title,
  description: pages.aiEmployees.seo.description,
};

export default function AiEmployeesPage() {
  const p = pages.aiEmployees;
  return (
    <>
      <section className="border-b border-white/5 bg-midnight">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Badge>{p.eyebrow}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-display text-white sm:text-5xl">
            {p.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel">{p.subhead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookDemoButton source="ai-employees-hero" />
            <CallAiButton source="ai-employees-hero" />
          </div>
        </div>
      </section>

      {agents.map((agent, i) => (
        <Section
          key={agent.id}
          id={agent.id}
          tone={i % 2 === 0 ? "dark" : "darker"}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                Agent 0{i + 1}
              </p>
              <SectionHeading>{agent.name}</SectionHeading>
              <p className="mt-3 text-lg font-medium text-surface-light">{agent.longJob}</p>
              <p className="mt-2 text-sm font-semibold text-coral">Metric: {agent.metric}</p>
              <SectionSubhead>{agent.body}</SectionSubhead>
              <p className="mt-4 text-sm font-medium text-white">{agent.proof}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-midnight-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-steel">
                Sample conversation
              </p>
              <div className="mt-4 space-y-2">
                {agent.snippet.map((line, idx) => (
                  <p key={idx} className="text-sm leading-relaxed text-steel">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="panel">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">{p.bottomHeadline}</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href="/pricing" event="nav_click" eventPayload={{ href: "/pricing" }} size="lg">
              See pricing
            </CtaLink>
            <BookDemoButton source="ai-employees-bottom" variant="outline" />
          </div>
        </div>
      </Section>
    </>
  );
}
