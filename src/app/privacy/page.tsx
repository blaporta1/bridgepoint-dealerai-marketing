import type { Metadata } from "next";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BridgePoint AI and BridgePoint DealerAI.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <P>
        This Privacy Policy describes how {brand.legal} (&quot;BridgePoint,&quot; &quot;we,&quot;
        &quot;us&quot;) collects and uses information through the BridgePoint DealerAI marketing
        website and related demo flows. This page is a structural draft pending counsel review.
      </P>
      <H>Who we are</H>
      <P>
        {brand.legal}. Contact: {brand.email}. Website: bridgepointai.com.
      </P>
      <H>Information we collect</H>
      <P>
        Form fields you submit (name, dealership, role, rooftops, lead volume, phone, email),
        calculator inputs when you request an ROI breakdown, UTM and ad click identifiers persisted
        in session storage, device and browser data via analytics tags when configured, and
        call/text metadata if you engage our demo phone or SMS confirmation flow.
      </P>
      <H>How we use information</H>
      <P>
        To respond to demo requests, operate and improve DealerAI, route leads into our Instant Lead
        Responder intake, measure marketing performance, and meet legal or compliance obligations.
      </P>
      <H>SMS and voice</H>
      <P>
        If you provide a phone number, you consent to contact about DealerAI by call or text,
        including automated means, subject to our TCPA and Compliance page. Message and data rates
        may apply. Reply STOP to opt out of marketing texts.
      </P>
      <H>Sharing</H>
      <P>
        We use processors for hosting, telephony, analytics, and operations. We do not sell personal
        information. We may disclose information if required by law or to protect rights and safety.
      </P>
      <H>Retention and security</H>
      <P>
        We retain lead and communication records as needed for sales, support, and legal purposes.
        We apply reasonable technical and organizational safeguards. No method of transmission is
        100% secure.
      </P>
      <H>Your rights</H>
      <P>
        You may request access or deletion of personal information by emailing {brand.email}. We
        will respond as required by applicable law.
      </P>
      <H>Changes</H>
      <P>
        We may update this policy. The updated date will appear at the top of this page when
        finalized by counsel.
      </P>
      <P className="text-steel">Last updated: draft · counsel review required before production reliance.</P>
    </LegalShell>
  );
}

function LegalShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold tracking-display text-white sm:text-4xl">{title}</h1>
      <div className="mt-8 space-y-4">{children}</div>
    </section>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-4 text-lg font-bold text-white">{children}</h2>;
}

function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={className ?? "text-sm leading-relaxed text-steel"}>{children}</p>;
}
