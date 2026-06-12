"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
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
    </section>
  );
}
