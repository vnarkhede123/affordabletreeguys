import { Shield, Star, Zap } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { SITE } from "@/lib/site-data";

const TICKER_ITEMS = [
  { icon: Star, text: "5.0 Google Rating", highlight: true },
  { icon: Shield, text: "Fully Insured & Licensed" },
  { text: "Free On-Site Estimates" },
  { icon: Zap, text: "24/7 Emergency Response" },
  { text: "#1 in Grant County" },
  { text: "Same-Day Quotes Available" },
  { text: "100% Cleanup Guaranteed" },
  { text: "Serving Marion & Gas City" },
  { text: `Call ${SITE.phone}` },
];

export function TrustTicker() {
  return (
    <div className="relative overflow-hidden border-y border-brand-green/25 bg-black py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />

      <Marquee speed="slow" className="gap-0">
        {TICKER_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2 px-6 text-sm font-medium"
            >
              {Icon && (
                <Icon
                  className={`size-4 ${item.highlight ? "fill-brand-red text-brand-red" : "text-brand-green"}`}
                />
              )}
              <span
                className={
                  item.highlight ? "text-brand-red" : "text-white/70"
                }
              >
                {item.text}
              </span>
              <span className="text-brand-green/40">✦</span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
