"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-emerald-500/20 bg-[#0a1208]/95 p-3 backdrop-blur-lg pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={SITE.phoneHref}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 text-base font-semibold text-emerald-950 active:bg-emerald-400"
      >
        <Phone className="size-5" />
        Call Now — {SITE.phone}
      </a>
    </div>
  );
}
