"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-black/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="justify-self-start"
          onClick={() => setMobileOpen(false)}
          aria-label={`${SITE.name} home`}
        >
          <BrandLogo priority />
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-xl border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-sm font-semibold text-brand-green transition hover:bg-brand-green/20 sm:inline-flex md:px-4"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="size-4 shrink-0" />
            <span className="whitespace-nowrap">{SITE.phone}</span>
          </a>

          <a
            href={SITE.phoneHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-brand-red font-bold text-white hover:bg-brand-red/90 md:inline-flex"
            )}
          >
            Call Now
          </a>

          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="flex size-10 items-center justify-center rounded-xl border border-brand-green/40 bg-brand-green/10 text-brand-green sm:hidden"
          >
            <Phone className="size-4" />
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="size-10 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/10 bg-black/98 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-white/90 active:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-brand-red text-base font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Call Now
            </a>
            <a
              href={SITE.phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-brand-green/40 text-base font-semibold text-brand-green"
            >
              <Phone className="size-4" />
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
