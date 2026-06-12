"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroContent() {
  return (
    <>
      {/* Floating ambient orbs */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%] size-64 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[35%] size-48 rounded-full bg-emerald-400/8 blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-end">
        <motion.div
          className="mx-auto w-full max-w-7xl px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5"
            >
              <Badge className="border-emerald-400/30 bg-emerald-500/15 text-emerald-200">
                <Star className="size-3 fill-emerald-400 text-emerald-400" />
                #1 Rated on Google
              </Badge>
              <Badge
                variant="outline"
                className="border-white/20 bg-black/30 text-white/90 backdrop-blur-sm"
              >
                <Shield className="size-3" />
                Fully Insured
              </Badge>
              <Badge
                variant="outline"
                className="border-white/20 bg-black/30 text-white/90 backdrop-blur-sm"
              >
                24/7 Emergency
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl sm:leading-[1.05] lg:text-5xl xl:text-6xl"
            >
              Indiana&apos;s trusted tree experts—{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                affordable
              </span>
              , professional, and always on call.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg"
            >
              Family-owned tree service serving Gas City, Marion, and all of
              Grant County. Removal, trimming, stump grinding, and storm cleanup
              with five-star results.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <motion.a
                href={SITE.phoneHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "relative h-12 w-full justify-center overflow-hidden bg-emerald-500 text-base font-semibold text-emerald-950 hover:bg-emerald-400 sm:w-auto sm:min-w-[200px]"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
                <Phone className="size-4" />
                Call {SITE.phone}
              </motion.a>
              <a
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full justify-center border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
                )}
              >
                View Services
                <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-xs text-white/50 sm:text-sm"
            >
              Free estimates · No obligation · Most calls answered in minutes
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
