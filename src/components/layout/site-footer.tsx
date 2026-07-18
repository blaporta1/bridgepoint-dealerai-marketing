import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { brand, nav } from "@/content/site";

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "TCPA and Compliance", href: "/tcpa" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-midnight-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
            AI Employees for dealerships. More appointments and ROs from the leads and calls you
            already pay for.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">Product</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface-light/90 hover:text-coral">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">Company</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-surface-light/90 hover:text-coral">
                About
              </Link>
            </li>
            <li>
              <Link href="/demo" className="text-sm text-surface-light/90 hover:text-coral">
                Book a Demo
              </Link>
            </li>
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface-light/90 hover:text-coral">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-surface-light/90">
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-coral">
                {brand.email}
              </a>
            </li>
            <li>
              <a
                href="https://bridgepointai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral"
              >
                bridgepointai.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-steel sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {brand.legal}. All rights reserved.
          </p>
          <p className="tracking-brand">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
