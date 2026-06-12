"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { ABOUT, SITE, STATS } from "@/lib/site-data";

const HIGHLIGHTS = [
  "Free on-site estimates",
  "Licensed & fully insured",
  "Professional rigging & equipment",
  "Complete debris haul-away",
  "24/7 emergency availability",
  "Serving all of Grant County",
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-16 text-white sm:py-24">
      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-brand-green/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="relative pb-4 sm:pb-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:rounded-3xl">
              <Image
                src={ABOUT.imageUrl}
                alt={ABOUT.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <StaggerContainer className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:gap-3 lg:absolute lg:-bottom-6 lg:-right-6 lg:mt-0">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-xl border border-white/10 bg-black/90 px-3 py-2.5 backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
                    <p className="font-[family-name:var(--font-display)] text-xl font-bold text-brand-green sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-white/60 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="pt-2 sm:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              About Us
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Your neighbors in professional tree care
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
              Affordable Tree Guys is a locally owned tree service company based
              in Gas City, Indiana. We&apos;ve built our reputation one yard at a
              time—showing up when we say we will, quoting fair prices, and
              leaving every property cleaner than we found it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you need a hazardous oak removed, routine canopy trimming,
              or emergency cleanup after a storm, our experienced crew treats
              your trees—and your home—with the respect they deserve.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-2">
              {SITE.serviceArea.map((city) => (
                <Badge
                  key={city}
                  variant="outline"
                  className="border-brand-green/30 bg-brand-green/5 text-white/80"
                >
                  <MapPin className="size-3 text-brand-green" />
                  {city}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
