import Link from "next/link";
import { TreePine } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-950/10 bg-[#0a1208] pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-white/60 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30">
                <TreePine className="size-5 text-emerald-400" />
              </span>
              <span className="font-semibold">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional, affordable tree service for Gas City, Marion, and
              all of Grant County, Indiana. Fully insured with a 5-star Google
              rating.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Navigate</p>
              <ul className="mt-3 space-y-2">
                {[
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#reviews", label: "Reviews" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-emerald-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Services</p>
              <ul className="mt-3 space-y-2">
                <li>Tree Removal</li>
                <li>Trimming & Pruning</li>
                <li>Stump Grinding</li>
                <li>Storm Cleanup</li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-semibold text-white">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="transition hover:text-emerald-300"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>{SITE.address.full}</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="text-center text-xs">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
