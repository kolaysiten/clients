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

        <motion.div className={heroStyles.panel} variants={heroVariants.panel}>
          <div className={heroStyles.panelTop}>
            <span className={heroStyles.panelLabel}>Odak</span>
            <span className={heroStyles.panelTitle}>Kişisel marka ve küçük işletme siteleri</span>
          </div>

          <div className={heroStyles.panelGrid}>
            <div className={heroStyles.statCard}>
              <span className={heroStyles.statLabel}>Hız</span>
              <span className={heroStyles.statValue}>Hafif, temiz, hızlı</span>
            </div>
            <div className={heroStyles.statCard}>
              <span className={heroStyles.statLabel}>Tasarım</span>
              <span className={heroStyles.statValue}>Sade ama güçlü bir görünüm</span>
            </div>
            <div className={heroStyles.statCard}>
              <span className={heroStyles.statLabel}>Süreç</span>
              <span className={heroStyles.statValue}>İhtiyaca göre şekillenen kurgu</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const heroStyles = {
  shell: "px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14",
  inner:
    "mx-auto grid w-full max-w-6xl gap-8 lg:min-h-[calc(100svh-4rem-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10",
  content: "flex max-w-3xl flex-col items-start",
  title: "flex flex-col gap-3 text-slate-950",
  brand: "text-5xl font-semibold leading-none md:text-6xl lg:text-7xl",
  headline: "max-w-3xl text-3xl font-semibold leading-tight text-slate-700 md:text-4xl",
  description: "mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg",
  actions: "mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
  primaryAction:
    "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#08111f] px-5 text-sm font-medium text-white transition hover:bg-slate-800",
  secondaryAction:
    "inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white",
  panel:
    "rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:p-8",
  panelTop: "border-b border-slate-200 pb-5",
  panelLabel: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-500",
  panelTitle: "mt-2 text-lg font-medium leading-7 text-slate-900",
  panelGrid: "mt-5 grid gap-3",
  statCard: "rounded-2xl bg-slate-50 p-4",
  statLabel: "text-xs font-semibold uppercase tracking-[0.14em] text-slate-500",
  statValue: "mt-1 block text-sm leading-6 text-slate-700",
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
  panel: {
    hidden: { opacity: 0, y: 22, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  },
} satisfies Record<string, Variants>;
