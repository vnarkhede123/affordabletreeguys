"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone, Quote, Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { SITE, TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function TestimonialCard({
  quote,
  author,
  location,
  featured = false,
}: {
  quote: string;
  author: string;
  location: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-2xl border backdrop-blur-md",
        featured
          ? "border-emerald-400/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-10"
          : "w-[320px] border-white/10 bg-white/[0.04] p-5 sm:w-[360px]"
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote
        className={cn(
          "text-emerald-500/30",
          featured ? "mt-6 size-10" : "mt-3 size-6"
        )}
      />
      <blockquote
        className={cn(
          "leading-relaxed text-white/85",
          featured ? "mt-4 text-lg sm:text-xl" : "mt-2 text-sm"
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className={cn("border-t border-white/10", featured ? "mt-8 pt-6" : "mt-4 pt-3")}>
        <p className={cn("font-semibold text-white", featured && "text-lg")}>
          {author}
        </p>
        <p className="text-sm text-emerald-400/70">{location}</p>
      </footer>
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
      rotateY: dir > 0 ? 8 : -8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      rotateY: dir > 0 ? -8 : 8,
    }),
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#0a1208] py-20 sm:py-28"
    >
      {/* Ambient mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(74,222,128,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(74,222,128,0.06),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Real Neighbor Reviews
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Don&apos;t take our word for it—
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              ask Grant County
            </span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-sm font-semibold text-amber-200">
              5.0 on Google
            </span>
          </div>
        </AnimatedSection>

        {/* Featured auto-sliding carousel */}
        <div className="relative mx-auto mt-14 max-w-3xl" style={{ perspective: 1200 }}>
          <div className="relative min-h-[280px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-0"
              >
                <TestimonialCard
                  quote={TESTIMONIALS[active].quote}
                  author={TESTIMONIALS[active].author}
                  location={TESTIMONIALS[active].location}
                  featured
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress + dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`View review ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active
                    ? "w-8 bg-emerald-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>

          <motion.div
            className="mx-auto mt-2 h-0.5 max-w-xs overflow-hidden rounded-full bg-white/10"
            key={`progress-${active}`}
          >
            <motion.div
              className="h-full origin-left bg-emerald-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Conversion CTA */}
        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <p className="text-white/60">
            Ready to join hundreds of satisfied neighbors?
          </p>
          <a
            href={SITE.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-4 inline-flex bg-emerald-500 font-semibold text-emerald-950 hover:bg-emerald-400"
            )}
          >
            <Phone className="size-4" />
            Call Now
            <ArrowRight className="size-4" />
          </a>
        </AnimatedSection>
      </div>

      {/* Dual infinite marquee rows */}
      <div className="relative mt-16 space-y-4 sm:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a1208] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a1208] to-transparent sm:w-20" />

        <Marquee speed="slow">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`row1-${i}`}
              quote={t.quote}
              author={t.author}
              location={t.location}
            />
          ))}
        </Marquee>

        <Marquee speed="slow" reverse>
          {[...TESTIMONIALS].reverse().map((t, i) => (
            <TestimonialCard
              key={`row2-${i}`}
              quote={t.quote}
              author={t.author}
              location={t.location}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
