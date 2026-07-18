import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <span className="relative flex h-9 w-9 items-end justify-center gap-[3px] pb-1.5" aria-hidden>
        <span className="h-2.5 w-1.5 rounded-sm bg-steel/80" />
        <span className="h-4 w-1.5 rounded-sm bg-steel" />
        <span className="h-5 w-1.5 rounded-sm bg-surface-light" />
        <span className="h-6 w-1.5 rounded-sm bg-surface-light" />
        <span className="relative h-7 w-1.5 rounded-sm bg-surface-light">
          <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-coral shadow-[0_0_8px_rgba(255,120,73,0.8)]" />
        </span>
        <span className="h-6 w-1.5 rounded-sm bg-surface-light" />
        <span className="h-5 w-1.5 rounded-sm bg-surface-light" />
        <span className="h-4 w-1.5 rounded-sm bg-steel" />
        <span className="h-2.5 w-1.5 rounded-sm bg-steel/80" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-sm font-bold tracking-tight",
            light ? "text-midnight" : "text-white"
          )}
        >
          BridgePoint <span className="text-coral">/</span> AI
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-brand text-steel">
          FORWARD AI
        </span>
      </span>
    </Link>
  );
}
