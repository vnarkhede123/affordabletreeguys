"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO, SITE } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

const contentVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};


export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0f1a12]">
      {/* Background image — subtle zoom on load */}
      <motion.div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease }}
      >
        <Image
          src={HERO.imageUrl}
          alt={HERO.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 z-[1] bg-black/45"
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease }}
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/40 to-black/70"
        aria-hidden="true"
      />

      {/* Centered content */}
      <motion.div
        className="relative z-10 flex w-full flex-col items-center px-4 py-28 text-center sm:px-6"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-medium uppercase tracking-[0.35em] text-amber-400/90 sm:text-sm"
        >
          {HERO.badge}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-5 font-[family-name:var(--font-serif)] text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-xl font-[family-name:var(--font-serif)] text-lg italic leading-relaxed text-white/90 drop-shadow-sm sm:text-xl md:text-2xl"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href={SITE.phoneHref}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-md bg-lime-400 px-8 text-sm font-bold uppercase tracking-wider text-[#1a1a0a] shadow-lg shadow-lime-400/25 transition-colors hover:bg-lime-300 sm:h-[52px] sm:min-w-[200px] sm:text-base"
          >
            Call Now
          </motion.a>
          <motion.a
            href="#services"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-md border border-lime-400/60 bg-black/25 px-8 text-sm font-semibold uppercase tracking-wider text-lime-400 backdrop-blur-sm transition-colors hover:border-lime-300 hover:bg-lime-400/10 hover:text-lime-300 sm:h-[52px] sm:min-w-[200px] sm:text-base"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white/80"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease }}
      >
        <ChevronDown className="size-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
