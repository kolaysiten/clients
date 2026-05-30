"use client";

import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className={heroStyles.shell}
      initial="hidden"
      animate="show"
      variants={heroVariants.section}
    >
      <div className={heroStyles.inner}>
        <div className={heroStyles.content}>
          <motion.h1 className={heroStyles.title} variants={heroVariants.item}>
            <span className={heroStyles.brand}>KolaySiten</span>
            <span className={heroStyles.headline}>Markanızı dijitale taşıyoruz</span>
          </motion.h1>

          <motion.p className={heroStyles.description} variants={heroVariants.item}>
            Markanızı dijitalde net, modern ve güçlü bir şekilde sunuyoruz.
          </motion.p>

          <motion.div className={heroStyles.actions} variants={heroVariants.item}>
            <a href="#iletisim" className={heroStyles.primaryAction}>
              Teklif Al
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#paketler" className={heroStyles.secondaryAction}>
              Paketleri İncele
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const heroStyles = {
  shell: "px-4 py-12 md:px-6 md:py-16",
  inner: "mx-auto flex w-full max-w-6xl",
  content: "flex w-full max-w-3xl flex-col items-start",
  title: "flex flex-col gap-3 text-slate-950",
  brand: "text-5xl font-semibold leading-none md:text-6xl",
  headline: "max-w-3xl text-3xl font-semibold leading-tight text-slate-700 md:text-4xl",
  description: "mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg",
  actions: "mt-8 flex w-full flex-col gap-3 md:w-auto md:flex-row md:justify-end",
  primaryAction:
    "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#08111f] px-5 text-sm font-medium text-white transition hover:bg-slate-800",
  secondaryAction:
    "inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white",
};

const heroVariants = {
  section: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: "easeOut" as const } },
  },
} satisfies Record<string, Variants>;
