"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a
        href={SITE.phoneHref}
        className="mt-1 block text-emerald-200/80 hover:text-emerald-200"
      >
        {SITE.phone}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: (
      <p className="mt-1 text-emerald-200/80">{SITE.address.full}</p>
    ),
  },
  {
    icon: Clock,
    title: "Hours",
    content: (
      <p className="mt-1 text-emerald-200/80">
        24/7 emergency service available
      </p>
    ),
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-emerald-950 py-16 sm:py-24"
    >
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/2 size-80 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(74,222,128,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Get Started Today
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Ready for a{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              free estimate?
            </span>
          </h2>
          <p className="mt-4 text-base text-emerald-100/70 sm:text-lg">
            Call now for same-day quotes on tree removal, trimming, and
            emergency service. Most neighbors hear back within minutes.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <motion.a
              href={SITE.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative h-12 w-full justify-center overflow-hidden bg-emerald-400 text-base font-semibold text-emerald-950 hover:bg-emerald-300 sm:min-w-[240px] sm:w-auto"
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              <Phone className="size-5" />
              {SITE.phone}
            </motion.a>
            <a
              href={`mailto:${SITE.email}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 w-full justify-center border-emerald-400/30 bg-transparent text-white hover:bg-emerald-400/10 sm:min-w-[220px] sm:w-auto"
              )}
            >
              <Mail className="size-5" />
              Email Us
            </a>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-900/30 p-5 backdrop-blur-sm transition-colors hover:border-emerald-400/30 hover:bg-emerald-900/50">
                <card.icon className="size-5 text-emerald-400" />
                <p className="mt-3 font-semibold text-white">{card.title}</p>
                {card.content}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
