"use client";

import Image from "next/image";
import { ArrowRight, Palette, Search, Smartphone, Zap } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
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
    <LazyMotion features={domAnimation}>
      <m.section
        className={heroStyles.shell}
        initial={motionEnabled ? "hidden" : false}
        animate="show"
        variants={heroVariants.section}
      >
        <div className={heroStyles.inner}>
          <div className={heroStyles.main}>
            <div className={heroStyles.content}>
              <m.span className={heroStyles.badge} variants={heroVariants.item}>
                <span className={heroStyles.badgeDot} />
                Profesyonel Web Siteleri
              </m.span>

              <m.h1 className={heroStyles.title} variants={heroVariants.item}>
                <span className={heroStyles.titleLine}>İşletmeniz için</span>
                <span className={heroStyles.titleLine}>
                  <span className={heroStyles.titleAccent}>modern</span> web siteleri.
                </span>
              </m.h1>

              <m.p className={heroStyles.description} variants={heroVariants.item}>
                Markanızı dijitale taşıyor, kullanıcı dostu ve performans odaklı web siteleri geliştiriyoruz.
              </m.p>

              <m.div className={heroStyles.actions} variants={heroVariants.item}>
                <a href="#paketler" className={heroStyles.secondaryAction}>
                  Paketleri İncele
                </a>
                <a href="#iletisim" className={heroStyles.primaryAction}>
                  Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </a>
              </m.div>
            </div>

            <m.div
              className={heroStyles.visual}
              variants={heroVariants.visual}
              aria-hidden="true"
              initial={motionEnabled ? undefined : false}
            >
              <Image
                src="/hero-mockup3.png"
                alt=""
                width={465}
                height={465}
                priority
                className={heroStyles.artwork}
              />
            </m.div>
          </div>

          <m.div className={heroStyles.features} variants={heroVariants.features}>
            {featureItems.map((item) => {
              const Icon = item.icon;

              return (
                <m.div key={item.title} className={heroStyles.featureCard} variants={heroVariants.item}>
                  <span className={heroStyles.featureIcon}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={heroStyles.featureText}>
                    <span className={heroStyles.featureTitle}>{item.title}</span>
                    <span className={heroStyles.featureDescription}>{item.text}</span>
                  </span>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
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
  visual: "relative hidden min-h-[360px] items-center justify-center xl:flex xl:min-h-[470px]",
  artwork:
    "h-auto w-full max-w-[465px] select-none drop-shadow-[0_28px_65px_rgba(8,17,31,0.18)]",
  features: "mt-10 grid gap-3 grid-cols-1 md:mt-14 md:grid-cols-2 xl:grid-cols-4",
  featureCard:
    "flex items-start gap-4 rounded-lg border border-white/70 bg-white/85 p-4 shadow-[0_10px_28px_rgba(8,17,31,0.05)]",
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
        staggerChildren: 0.07,
        delayChildren: 0.04,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" as const } },
  },
  visual: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  },
  features: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
} satisfies Record<string, Variants>;
