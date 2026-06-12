import Image from "next/image";
import { PoemAnimation } from "@/components/ui/3d-animation";
import { HeroContent } from "@/components/hero-content";
import { HERO_ANIMATION } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative h-dvh min-h-[600px] w-full overflow-hidden bg-[#0a1208]">
      {/* Layer 1 — full-bleed tree removal photo (always visible) */}
      <Image
        src={HERO_ANIMATION.backgroundImageUrl}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Layer 2 — 3D scrolling text (no photo inside, text only) */}
      <div className="absolute inset-0">
        <PoemAnimation
          poemHTML={HERO_ANIMATION.poemHTML}
          backgroundImageUrl={HERO_ANIMATION.backgroundImageUrl}
          textOnly
        />
      </div>

      {/* Layer 3 — light vignette for text readability (photo stays visible) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent"
        aria-hidden="true"
      />

      {/* Layer 4 — headline + CTAs pinned to bottom */}
      <HeroContent />
    </section>
  );
}
