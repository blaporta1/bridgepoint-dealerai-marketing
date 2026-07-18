"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CallAiButton } from "@/components/cta/cta-link";
import { pages, roles } from "@/content/site";
import { getStoredUtms, track } from "@/lib/analytics";
import { publicEnv } from "@/lib/env";
import { formatPhoneDisplay } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    dealership: "",
    role: "GM",
    rooftops: "1",
    monthlyLeadVolume: "",
    phone: "",
    email: "",
    companyWebsite: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "demo",
          ...form,
          utms: getStoredUtms(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something broke on our side.");
      track("form_demo_submit", { ok: true, role: form.role, rooftops: form.rooftops });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something broke.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-coral/30 bg-midnight-950 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral">Confirmed</p>
        <h3 className="mt-2 text-2xl font-bold text-white">{pages.demo.successHeadline}</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel sm:text-base">
          {pages.demo.successBody.replace(
            "the demo line",
            formatPhoneDisplay(publicEnv.demoPhone)
          )}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CallAiButton source="demo-success" />
        </div>
        {publicEnv.calendarEmbedUrl ? (
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <iframe
              src={publicEnv.calendarEmbedUrl}
              title="Book a time"
              className="h-[600px] w-full"
            />
          </div>
        ) : (
          <p className="mt-6 text-xs text-steel">
            Calendar embed loads when NEXT_PUBLIC_CALENDAR_EMBED_URL is set.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-midnight-950 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Dealership" htmlFor="dealership">
          <Input
            id="dealership"
            required
            value={form.dealership}
            onChange={(e) => update("dealership", e.target.value)}
          />
        </Field>
        <Field label="Role" htmlFor="role">
          <select
            id="role"
            required
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className="flex h-11 w-full rounded-md border border-steel/25 bg-midnight-800 px-3 text-sm text-surface-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Rooftops" htmlFor="rooftops">
          <Input
            id="rooftops"
            required
            inputMode="numeric"
            value={form.rooftops}
            onChange={(e) => update("rooftops", e.target.value)}
          />
        </Field>
        <Field label="Monthly lead volume" htmlFor="volume">
          <Input
            id="volume"
            required
            placeholder="e.g. 400"
            value={form.monthlyLeadVolume}
            onChange={(e) => update("monthlyLeadVolume", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input
            id="phone"
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
        <Field label="Work email" htmlFor="email" className="sm:col-span-2">
          <Input
            id="email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
      </div>

      {/* honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={(e) => update("companyWebsite", e.target.value)}
        />
      </div>

      {error && <p className="mt-4 text-sm text-coral">{error}</p>}

      <Button type="submit" size="xl" className="mt-6 w-full" disabled={status === "loading"}>
        {status === "loading" ? "Submitting…" : "Book My Demo"}
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-steel">{pages.demo.privacy}</p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
