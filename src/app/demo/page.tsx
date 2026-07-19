import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { CallAiButton } from "@/components/cta/cta-link";
import { DemoForm } from "@/components/forms/demo-form";
import { pages } from "@/content/site";
import { publicEnv } from "@/lib/env";
import { formatPhoneDisplay } from "@/lib/utils";

export const metadata: Metadata = {
  title: pages.demo.seo.title,
  description: pages.demo.seo.description,
};

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-radial-coral" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <Badge>{pages.demo.eyebrow}</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-display text-white sm:text-5xl">
            {pages.demo.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            {pages.demo.subhead}
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-midnight-950 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">
              Prefer voice now?
            </p>
            <p className="mt-2 text-2xl font-bold text-white">
              {formatPhoneDisplay(publicEnv.demoPhone)}
            </p>
            <div className="mt-4">
              <CallAiButton source="demo-page" className="w-full sm:w-auto" />
            </div>
          </div>
          <ul className="mt-8 space-y-2 text-sm text-steel">
            <li>Under 30 seconds to complete the form</li>
            <li>AI texts within 60 seconds to confirm a time</li>
            <li>Covered by The Board Doesn&apos;t Lie Guarantee for 90 days</li>
          </ul>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
