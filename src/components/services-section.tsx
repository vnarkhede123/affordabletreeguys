"use client";

import {
  Axe,
  CircleDot,
  CloudLightning,
  Scissors,
  Trees,
  Truck,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { Marquee } from "@/components/ui/marquee";
import { SERVICES } from "@/lib/site-data";

const ICONS: Record<(typeof SERVICES)[number]["icon"], LucideIcon> = {
  Axe,
  Scissors,
  CircleDot,
  CloudLightning,
  Trees,
  Truck,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-neutral-50 py-16 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-brand-green/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green-dark">
            What We Do
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
            Complete tree care for your property
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From routine maintenance to emergency storm response, our crew
            handles every job with professional equipment and neighbor-level
            care.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <StaggerItem key={service.title}>
                <Card className="group h-full border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/10">
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark ring-1 ring-brand-green/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white group-hover:ring-brand-green/40">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

      <div className="relative mt-14 border-t border-black/5 pt-8 sm:mt-16">
        <Marquee speed="fast" className="opacity-60">
          {SERVICES.map((s) => (
            <span
              key={s.title}
              className="shrink-0 px-4 text-sm font-semibold uppercase tracking-widest text-brand-green-dark/40"
            >
              {s.title} ✦
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
