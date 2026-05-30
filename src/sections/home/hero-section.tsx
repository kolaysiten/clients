"use client";

import { ArrowRight, Palette, Search, Smartphone, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useMotionSettings } from "@/src/providers/motion-settings";

const featureItems = [
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    text: "Tüm ekranlarda net ve rahat deneyim.",
  },
  {
    icon: Zap,
    title: "Hızlı Altyapı",
    text: "Performans odaklı modern kurulum.",
  },
  {
    icon: Search,
    title: "SEO Temeli",
    text: "Arama motorları için düzenli yapı.",
  },
  {
    icon: Palette,
    title: "Özel Tasarım",
    text: "Markanıza uygun sade arayüz.",
  },
];

export default function HeroSection() {
  const { motionEnabled } = useMotionSettings();

  return (
    <motion.section
      className={heroStyles.shell}
      initial={motionEnabled ? "hidden" : false}
      animate="show"
      variants={heroVariants.section}
    >
      <div className={heroStyles.inner}>
        <div className={heroStyles.main}>
          <div className={heroStyles.content}>
            <motion.span className={heroStyles.badge} variants={heroVariants.item}>
              <span className={heroStyles.badgeDot} />
              Profesyonel Web Siteleri
            </motion.span>

            <motion.h1 className={heroStyles.title} variants={heroVariants.item}>
              <span className={heroStyles.titleLine}>İşletmeniz için</span>
              <span className={heroStyles.titleLine}>
                <span className={heroStyles.titleAccent}>modern</span> web siteleri.
              </span>
            </motion.h1>

            <motion.p className={heroStyles.description} variants={heroVariants.item}>
              Markanızı dijitale taşıyor, kullanıcı dostu ve performans odaklı web siteleri geliştiriyoruz.
            </motion.p>

            <motion.div className={heroStyles.actions} variants={heroVariants.item}>
              <a href="#paketler" className={heroStyles.secondaryAction}>
                Paketleri İncele
              </a>
              <a href="#iletisim" className={heroStyles.primaryAction}>
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className={heroStyles.visual}
            variants={heroVariants.visual}
            aria-hidden="true"
            initial={motionEnabled ? undefined : false}
          >
            <div className={heroStyles.laptop}>
              <div className={heroStyles.laptopTop}>
                <span className={heroStyles.mockBrand}>KolaySiten</span>
                <span className={heroStyles.mockButton}>Teklif Al</span>
              </div>
              <div className={heroStyles.mockGrid}>
                <div className={heroStyles.mockCopy}>
                  <span className={heroStyles.mockTitle}>Modern web</span>
                  <span className={heroStyles.mockTitleMuted}>sitesi hazır.</span>
                  <span className={heroStyles.mockLine} />
                  <span className={heroStyles.mockLineShort} />
                </div>
                <div className={heroStyles.mockPreview} />
              </div>
            </div>

            <div className={heroStyles.phone}>
              <span className={heroStyles.phoneNotch} />
              <span className={heroStyles.phoneTitle}>KolaySiten</span>
              <span className={heroStyles.phoneText}>Dijitalde güçlü görünüm.</span>
              <span className={heroStyles.phonePreview} />
            </div>
          </motion.div>
        </div>

        <motion.div className={heroStyles.features} variants={heroVariants.features}>
          {featureItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} className={heroStyles.featureCard} variants={heroVariants.item}>
                <span className={heroStyles.featureIcon}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className={heroStyles.featureText}>
                  <span className={heroStyles.featureTitle}>{item.title}</span>
                  <span className={heroStyles.featureDescription}>{item.text}</span>
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

const heroStyles = {
  shell: "py-6 md:py-8",
  inner: "w-full",
  main: "grid gap-10 xl:grid-cols-[6fr_4fr] xl:items-center",
  content:
    "relative z-10 flex w-full max-w-none flex-col items-center text-center xl:w-[592px] xl:items-start xl:text-left",
  badge:
    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-medium text-slate-800 shadow-[0_10px_30px_rgba(8,17,31,0.08)]",
  badgeDot: "h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]",
  title:
    "mx-auto mt-7 flex w-full flex-col text-4xl font-semibold leading-[0.98] text-[#07101f] sm:text-5xl md:text-6xl xl:mx-0",
  titleLine: "block whitespace-nowrap",
  titleAccent: "text-emerald-700",
  description: "mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl xl:max-w-[40rem]",
  actions: "mt-8 flex w-full flex-col gap-3 md:w-max md:flex-row md:items-center",
  primaryAction:
    "inline-flex h-[52px] min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#08111f] px-6 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(8,17,31,0.2)] transition hover:bg-slate-800 md:w-auto",
  secondaryAction:
    "inline-flex h-[52px] min-h-[52px] w-full items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-[#08111f] transition hover:border-slate-400 hover:bg-white md:w-auto",
  visual: "relative hidden min-h-[360px] xl:block xl:min-h-[470px]",
  laptop:
    "absolute right-0 top-10 w-[86%] rotate-[-4deg] rounded-[22px] border-[10px] border-[#07101f] bg-[#fdf9f1] p-7 shadow-[0_28px_65px_rgba(8,17,31,0.32)] lg:top-8 lg:w-[88%]",
  laptopTop: "mb-16 flex items-center justify-between text-[10px] font-semibold text-[#07101f]",
  mockBrand: "text-sm",
  mockButton: "rounded-md bg-[#07101f] px-3 py-2 text-[10px] text-white",
  mockGrid: "grid grid-cols-[0.85fr_1.15fr] items-end gap-5",
  mockCopy: "flex flex-col pb-4",
  mockTitle: "text-3xl font-semibold leading-tight text-[#07101f]",
  mockTitleMuted: "text-3xl font-semibold leading-tight text-emerald-700",
  mockLine: "mt-5 h-2 w-36 rounded-full bg-slate-300/70",
  mockLineShort: "mt-3 h-2 w-24 rounded-full bg-slate-300/70",
  mockPreview: "h-48 rounded-lg bg-[linear-gradient(135deg,#d8d1c5_0%,#f8f3eb_45%,#b98554_46%,#7a4a2c_62%,#d8d1c5_63%)]",
  phone:
    "absolute bottom-2 right-1 w-[34%] min-w-[150px] rounded-[30px] border-[8px] border-[#07101f] bg-[#fdf9f1] px-4 py-7 shadow-[0_24px_60px_rgba(8,17,31,0.3)] lg:right-3",
  phoneNotch: "absolute left-1/2 top-2 h-3 w-16 -translate-x-1/2 rounded-full bg-[#07101f]",
  phoneTitle: "block text-xs font-semibold text-[#07101f]",
  phoneText: "mt-9 block text-xl font-semibold leading-tight text-[#07101f]",
  phonePreview:
    "mt-8 block h-24 rounded-lg bg-[linear-gradient(135deg,#ded6ca_0%,#f9f4eb_45%,#b98554_46%,#7a4a2c_63%,#ded6ca_64%)]",
  features: "mt-10 grid gap-3 grid-cols-1 md:mt-14 md:grid-cols-2 xl:grid-cols-4",
  featureCard:
    "flex items-start gap-4 rounded-lg border border-white/70 bg-white/70 p-4 shadow-[0_12px_35px_rgba(8,17,31,0.06)] backdrop-blur",
  featureIcon:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700",
  featureText: "flex min-w-0 flex-col",
  featureTitle: "text-sm font-semibold text-[#07101f]",
  featureDescription: "mt-1 text-sm leading-6 text-slate-600",
};

const heroVariants = {
  section: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.68, ease: "easeOut" as const } },
  },
  visual: {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.82, ease: "easeOut" as const } },
  },
  features: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
} satisfies Record<string, Variants>;
