import { formatCurrency } from "@/lib/utils";

const metrics = [
  { label: "Appointments set", value: "47", sub: "30 days", trend: "+18%" },
  { label: "Show rate", value: "61%", sub: "AI-sourced", trend: "+9 pts" },
  { label: "Sold", value: "12", sub: "from AI appts", trend: "+4" },
  { label: "Median response", value: "18s", sub: "first touch", trend: "live" },
  { label: "Missed calls rescued", value: "214", sub: "30 days", trend: "92%" },
  { label: "Attributed gross", value: formatCurrency(38400), sub: "front + back", trend: "pilot" },
];

export function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-steel/20 bg-midnight-950 shadow-panel">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="text-xs font-semibold text-surface-light">DealerAI Command Board</span>
        </div>
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-steel">
          Live mock
        </span>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-white/5 bg-midnight-800/80 p-4"
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-steel">{m.label}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <p className="text-2xl font-bold tracking-tight text-white">{m.value}</p>
              <span className="mb-1 rounded-full bg-coral/15 px-2 py-0.5 text-[10px] font-semibold text-coral">
                {m.trend}
              </span>
            </div>
            <p className="mt-1 text-xs text-steel">{m.sub}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 px-4 py-3 sm:px-5">
        <div className="flex h-16 items-end gap-1.5">
          {[40, 55, 48, 70, 62, 80, 75, 88, 72, 90, 85, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-coral/30 to-coral"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-steel">Appointments set · last 12 weeks</p>
      </div>
    </div>
  );
}
