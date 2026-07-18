import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { Section, SectionHeading } from "@/components/sections/section";
import { pages, riskReversal } from "@/content/site";

export const metadata: Metadata = {
  title: pages.pricing.seo.title,
  description: pages.pricing.seo.description,
};

export default function PricingPage() {
  const p = pages.pricing;
  return (
    <>
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <Badge>{p.eyebrow}</Badge>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-display text-white sm:text-5xl">
            {p.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-steel">{p.subhead}</p>
        </div>
      </section>

      <Section>
        <PricingCards />
      </Section>

      <Section tone="darker">
        <SectionHeading>Pricing FAQ</SectionHeading>
        <div className="mt-6 max-w-3xl">
          <Accordion type="single" collapsible>
            {p.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`p-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <p className="mt-8 max-w-2xl text-sm text-steel">{riskReversal.short}</p>
      </Section>
    </>
  );
}
