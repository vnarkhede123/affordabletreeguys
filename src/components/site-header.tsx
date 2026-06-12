"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, TreePine, X } from "lucide-react";
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
        "max-lg:border-b max-lg:border-white/10 max-lg:bg-[#0a1208]/90 max-lg:backdrop-blur-xl",
        scrolled
          ? "border-b border-white/10 bg-[#0a1208]/90 backdrop-blur-xl shadow-lg shadow-black/20"
          : "lg:bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 text-white sm:gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30 transition group-hover:bg-emerald-500/30">
            <TreePine className="size-5 text-emerald-400" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-tight sm:text-sm">
              {SITE.name}
            </span>
            <span className="block truncate text-[10px] text-emerald-200/70 sm:text-[11px]">
              Grant County, Indiana
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden text-emerald-300 hover:bg-emerald-500/10 hover:text-emerald-200 sm:inline-flex"
            )}
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <a
            href={SITE.phoneHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden bg-emerald-500 text-emerald-950 hover:bg-emerald-400 md:inline-flex"
            )}
          >
            Free Estimate
          </a>
          <a
            href={SITE.phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30 active:bg-emerald-500/30 sm:hidden"
          >
            <Phone className="size-4" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="size-10 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/10 bg-[#0a1208]/98 backdrop-blur-xl md:hidden">
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
              className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-500 text-base font-semibold text-emerald-950 active:bg-emerald-400"
            >
              <Phone className="size-4" />
              Call {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
