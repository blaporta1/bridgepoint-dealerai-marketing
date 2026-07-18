import type { Metadata } from "next";
import { BookDemoButton } from "@/components/cta/cta-link";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "TCPA and Compliance",
  description:
    "How BridgePoint DealerAI approaches TCPA, consent, quiet hours, and suppression.",
};

export default function TcpaPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Compliance</p>
      <h1 className="mt-3 text-3xl font-bold tracking-display text-white sm:text-4xl">
        TCPA and Compliance
      </h1>
      <p className="mt-4 text-lg text-steel">
        Compliance is part of the product, not a footnote.
      </p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-steel">
        <p>
          {brand.legal} designs DealerAI outreach with consent, quiet hours, and suppression in
          mind. This page states operating intent. It is not legal advice. Final compliance language
          requires counsel review and your store&apos;s counsel on dealer-side advertising claims.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Consent and source data</h2>
        <p>
          Dealers remain responsible for capturing and documenting compliant consent on their
          properties and lead sources. DealerAI is configured to honor the consent and contact rules
          you provide during install.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Quiet hours and suppression</h2>
        <p>
          Quiet hours, internal do-not-contact lists, and DNC-aware configuration are part of the
          operating design. Agents should not contact numbers that are suppressed in your rules.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Demo and marketing communications</h2>
        <p>
          Our demo line and marketing texts include opt-out paths. Reply STOP to opt out of
          marketing texts. Call frequency and content for production agents follow the playbook
          approved for your rooftop.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Dealer responsibilities</h2>
        <p>
          You remain responsible for advertising claims, inventory accuracy approvals, and consent
          capture on forms and third-party lead sources you buy.
        </p>
        <p className="text-steel">
          Last updated: draft · counsel review required before production reliance.
        </p>
      </div>
      <div className="mt-10">
        <BookDemoButton source="tcpa" label="Discuss compliance on a demo" />
      </div>
    </section>
  );
}
