"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { home } from "@/content/site";
import { getStoredUtms, track } from "@/lib/analytics";
import { formatCurrency } from "@/lib/utils";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function RoiCalculator() {
  const d = home.roi.defaults;
  const [leads, setLeads] = useState(d.monthlyLeads);
  const [contactRate, setContactRate] = useState(d.contactRate);
  const [showRate, setShowRate] = useState(d.showRate);
  const [avgGross, setAvgGross] = useState(d.avgGross);
  const [emailGate, setEmailGate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dealership, setDealership] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const results = useMemo(() => {
    const currentContacted = leads * (contactRate / 100);
    const targetContacted = leads * (d.targetContactRate / 100);

    const currentShows = currentContacted * (showRate / 100);
    const newShowRate = clamp(showRate + d.showRateLiftPts, 0, 100);
    const targetShows = targetContacted * (newShowRate / 100);
    const recoveredShows = Math.max(0, targetShows - currentShows);

    const recoveredSold = recoveredShows * (d.closeRate / 100);
    const recoveredGross = recoveredSold * avgGross;

    return {
      recoveredAppointments: Math.round(recoveredShows),
      recoveredSold: Math.round(recoveredSold * 10) / 10,
      recoveredGross: Math.round(recoveredGross),
    };
  }, [leads, contactRate, showRate, avgGross, d]);

  async function submitPdf(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    track("cta_roi_pdf_gate", { leads, contactRate, showRate, avgGross });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "roi_pdf",
          name,
          email,
          dealership,
          monthlyLeadVolume: String(leads),
          phone: "",
          role: "Other",
          rooftops: "1",
          companyWebsite: "", // honeypot empty
          utms: getStoredUtms(),
          roi: {
            leads,
            contactRate,
            showRate,
            avgGross,
            ...results,
          },
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something broke. Retry or book a demo.");
      }
      track("form_roi_pdf_submit", { ok: true });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something broke.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-white/10 bg-midnight-950 p-5 sm:p-6">
        <Field
          label="Monthly leads"
          value={leads}
          onChange={setLeads}
          min={50}
          max={5000}
          step={10}
        />
        <Field
          label="Current contact rate (%)"
          value={contactRate}
          onChange={setContactRate}
          min={5}
          max={100}
          step={1}
        />
        <Field
          label="Current show rate (%)"
          value={showRate}
          onChange={setShowRate}
          min={5}
          max={100}
          step={1}
        />
        <Field
          label="Average front + back gross ($)"
          value={avgGross}
          onChange={setAvgGross}
          min={500}
          max={20000}
          step={100}
        />
        <p className="text-xs leading-relaxed text-steel">
          Assumptions: DealerAI contact rate target {d.targetContactRate}% · show rate lift +
          {d.showRateLiftPts} pts on contacted · close rate held flat at {d.closeRate}% of shown
          (conservative).
        </p>
      </div>

      <div className="flex flex-col rounded-2xl border border-coral/25 bg-gradient-to-b from-coral/10 to-midnight-950 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral">Estimated lift</p>
        <div className="mt-6 grid gap-4">
          <Result
            label="Recovered appointments / month"
            value={String(results.recoveredAppointments)}
          />
          <Result label="Sold units / month" value={String(results.recoveredSold)} />
          <Result
            label="Recovered gross / month"
            value={formatCurrency(results.recoveredGross)}
            highlight
          />
        </div>
        <p className="mt-6 text-xs leading-relaxed text-steel">{home.roi.methodology}</p>

        {!emailGate && status !== "done" && (
          <Button
            className="mt-6"
            size="lg"
            onClick={() => {
              track("cta_roi_calc_submit", results);
              setEmailGate(true);
            }}
          >
            Email me the detailed ROI breakdown
          </Button>
        )}

        {emailGate && status !== "done" && (
          <form onSubmit={submitPdf} className="mt-6 space-y-3">
            <div>
              <Label htmlFor="roi-name">Name</Label>
              <Input
                id="roi-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="roi-email">Work email</Label>
              <Input
                id="roi-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="roi-store">Dealership</Label>
              <Input
                id="roi-store"
                required
                value={dealership}
                onChange={(e) => setDealership(e.target.value)}
                className="mt-1"
              />
            </div>
            {/* honeypot */}
            <input
              type="text"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            {error && <p className="text-xs text-coral">{error}</p>}
            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send my ROI breakdown"}
            </Button>
          </form>
        )}

        {status === "done" && (
          <p className="mt-6 rounded-md border border-coral/30 bg-midnight p-4 text-sm text-surface-light">
            ROI breakdown sent. Check your inbox. Want the live board walkthrough? Book a demo.
          </p>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <Label>{label}</Label>
        <Input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="h-9 w-28 text-right"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-coral"
      />
    </div>
  );
}

function Result({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-end justify-between border-b border-white/10 pb-3">
      <span className="text-sm text-steel">{label}</span>
      <span
        className={
          highlight
            ? "text-2xl font-bold text-coral"
            : "text-2xl font-bold text-white"
        }
      >
        {value}
      </span>
    </div>
  );
}
