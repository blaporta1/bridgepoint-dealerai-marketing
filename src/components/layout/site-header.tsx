"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { BookDemoButton, CallAiButton } from "@/components/cta/cta-link";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => track("nav_click", { href: item.href })}
              className="rounded-md px-3 py-2 text-sm font-medium text-steel transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <CallAiButton size="sm" variant="ghost" source="header" showNumber={false} />
          <BookDemoButton size="sm" source="header" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-t border-white/5 bg-midnight-950 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                track("nav_click", { href: item.href });
                setOpen(false);
              }}
              className="rounded-md px-3 py-3 text-sm font-medium text-surface-light hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <BookDemoButton source="header-mobile" className="w-full" />
            <CallAiButton source="header-mobile" className="w-full" showNumber />
          </div>
        </div>
      </div>
    </header>
  );
}
