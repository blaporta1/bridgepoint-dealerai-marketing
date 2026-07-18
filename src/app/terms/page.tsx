import type { Metadata } from "next";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the BridgePoint DealerAI marketing website.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold tracking-display text-white sm:text-4xl">Terms of Use</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-steel">
        <p>
          These Terms govern use of the BridgePoint DealerAI marketing website operated by{" "}
          {brand.legal}. This page is a structural draft pending counsel review.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Site use</h2>
        <p>
          Content is for informational and marketing purposes. It is not legal, financial, or
          compliance advice. Platform services are governed by a separate order form or master
          agreement.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Pilots and pricing</h2>
        <p>
          Published pricing, pilot language, and feature descriptions may change. Binding commercial
          terms are only those in an executed agreement. The 30-day performance pilot applies only
          when confirmed in writing for a qualified rooftop.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Illustrative models</h2>
        <p>
          ROI calculators and Results page models are estimates for planning. They are not
          guarantees of appointments, units, or gross.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Acceptable use</h2>
        <p>
          You will not misuse the site, attempt unauthorized access, scrape at abusive volumes, or
          submit fraudulent lead information.
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {brand.legal} is not liable for indirect,
          incidental, or consequential damages arising from site use. Total liability related to the
          marketing site is limited to the greater of one hundred dollars or amounts you paid us
          solely for site-related services in the prior three months (typically zero).
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Governing law</h2>
        <p>
          Governing law and venue will be specified in the final counsel-approved terms (state to
          confirm).
        </p>
        <h2 className="pt-4 text-lg font-bold text-white">Contact</h2>
        <p>{brand.email}</p>
        <p className="text-steel">
          Last updated: draft · counsel review required before production reliance.
        </p>
      </div>
    </section>
  );
}
