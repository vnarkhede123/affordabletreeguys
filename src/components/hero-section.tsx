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
    <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black">
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
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[1] bg-black/50"
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease }}
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/50 to-black/80"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex w-full flex-col items-center px-4 py-28 text-center sm:px-6"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-medium uppercase tracking-[0.35em] text-brand-green sm:text-sm"
        >
          {HERO.badge}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-5 font-[family-name:var(--font-serif)] text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-brand-red">Affordable</span>{" "}
          <span className="text-brand-green">Tree Guys</span>
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
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-md bg-brand-red px-8 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red/90 sm:h-[52px] sm:min-w-[200px] sm:text-base"
          >
            Call Now
          </motion.a>
          <motion.a
            href="#services"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-md border border-brand-green/70 bg-black/30 px-8 text-sm font-semibold uppercase tracking-wider text-brand-green backdrop-blur-sm transition-colors hover:border-brand-green hover:bg-brand-green/10 sm:h-[52px] sm:min-w-[200px] sm:text-base"
          >
            View Services
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-brand-green"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease }}
      >
        <ChevronDown className="size-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
