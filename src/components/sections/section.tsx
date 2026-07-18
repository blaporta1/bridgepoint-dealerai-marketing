import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  tone = "dark",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "dark" | "darker" | "panel" | "coral-band";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        tone === "dark" && "bg-midnight",
        tone === "darker" && "bg-midnight-950",
        tone === "panel" && "bg-midnight-800/50",
        tone === "coral-band" && "bg-gradient-to-r from-coral/15 via-midnight-800 to-coral/10",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">{children}</p>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-3 max-w-3xl text-3xl font-bold tracking-display text-white sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubhead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-steel sm:text-lg", className)}>
      {children}
    </p>
  );
}
