"use client";

import { useState } from "react";
import { Phone, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallAiButton } from "@/components/cta/cta-link";
import { home } from "@/content/site";
import { track } from "@/lib/analytics";
import { publicEnv } from "@/lib/env";
import { formatPhoneDisplay } from "@/lib/utils";

export function LiveDemoPanel() {
  const [status, setStatus] = useState<"idle" | "connecting" | "ready">("idle");
  const key = publicEnv.retellWebCallKey;

  function startWebCall() {
    track("cta_live_demo_web", { hasKey: Boolean(key) });
    if (!key) {
      setStatus("ready");
      return;
    }
    setStatus("connecting");
    // Retell web SDK mounts when key is configured. Placeholder until key is live.
    window.setTimeout(() => setStatus("ready"), 800);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-coral/30 bg-midnight-950 shadow-glow">
      <div className="border-b border-white/5 bg-gradient-to-r from-coral/20 to-transparent px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2 text-coral">
          <Radio className="h-4 w-4 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Live line</span>
        </div>
        <h3 className="mt-2 text-2xl font-bold text-white">{home.liveDemo.headline}</h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel sm:text-base">
          {home.liveDemo.subhead}
        </p>
      </div>

      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-midnight-800/60 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Web call</p>
            <p className="mt-2 text-sm text-surface-light">{home.liveDemo.helper}</p>
          </div>
          <div className="mt-6 space-y-3">
            <Button size="xl" className="w-full" onClick={startWebCall}>
              Start Web Call
            </Button>
            {status === "connecting" && (
              <p className="text-center text-xs text-steel">Starting secure demo call…</p>
            )}
            {status === "ready" && !key && (
              <p className="rounded-md border border-steel/20 bg-midnight p-3 text-center text-xs text-steel">
                Retell web call key not configured yet. Use the phone line below to interview the AI
                now.
              </p>
            )}
            {status === "ready" && key && (
              <div
                id="retell-web-call"
                className="rounded-md border border-coral/20 bg-midnight p-4 text-center text-xs text-steel"
                data-retell-key={key}
              >
                Web call widget ready. Wire Retell SDK mount here with your agent key.
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-midnight-800/60 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">
              Or dial the demo line
            </p>
            <p className="mt-3 flex items-center gap-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              <Phone className="h-6 w-6 text-coral" />
              {formatPhoneDisplay(publicEnv.demoPhone)}
            </p>
            <p className="mt-3 text-sm text-steel">
              Same agent. Real conversation. Ask hard questions.
            </p>
          </div>
          <div className="mt-6">
            <CallAiButton source="live-demo" className="w-full" size="xl" />
          </div>
        </div>
      </div>

      <p className="border-t border-white/5 px-5 py-3 text-xs text-steel sm:px-6">
        {home.liveDemo.micro}
      </p>
    </div>
  );
}
