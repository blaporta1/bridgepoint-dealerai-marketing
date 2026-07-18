"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { publicEnv } from "@/lib/env";
import { formatPhoneDisplay } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  event: AnalyticsEvent;
  eventPayload?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  external?: boolean;
};

export function CtaLink({
  href,
  event,
  eventPayload,
  children,
  className,
  variant = "default",
  size = "default",
  external,
}: Props) {
  const isExternal = external || href.startsWith("http") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <Button variant={variant} size={size} className={className} asChild>
        <a
          href={href}
          onClick={() => track(event, eventPayload)}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} className={className} asChild>
      <Link href={href} onClick={() => track(event, eventPayload)}>
        {children}
      </Link>
    </Button>
  );
}

export function BookDemoButton({
  size = "lg",
  className,
  label = "Book a Demo",
  source,
  variant = "default",
}: {
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
  source?: string;
  variant?: ButtonProps["variant"];
}) {
  return (
    <CtaLink
      href="/demo"
      event="cta_book_demo"
      eventPayload={{ source }}
      size={size}
      variant={variant}
      className={className}
    >
      {label}
    </CtaLink>
  );
}

export function CallAiButton({
  size = "lg",
  variant = "outline",
  className,
  source,
  showNumber = true,
}: {
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  className?: string;
  source?: string;
  showNumber?: boolean;
}) {
  const phone = publicEnv.demoPhone;
  return (
    <CtaLink
      href={`tel:${phone.replace(/\D/g, "")}`}
      event="cta_call_ai"
      eventPayload={{ source }}
      variant={variant}
      size={size}
      className={cn("font-semibold", className)}
    >
      <Phone className="h-4 w-4" />
      {showNumber ? formatPhoneDisplay(phone) : "Call Our AI Right Now"}
    </CtaLink>
  );
}
