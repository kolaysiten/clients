"use client";

import Image from "next/image";
import { ArrowRight, Palette, Search, Smartphone, Zap } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { useMotionSettings } from "@/src/providers/motion-settings";

const badgeItems = [
  {
    label: "Sıfırdan özel tasarım",
    dotClass: "bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]",
  },
  {
    label: "Modern ve hızlı siteler",
    dotClass: "bg-sky-500 shadow-[0_0_0_5px_rgba(14,165,233,0.12)]",
  },
  {
    label: "Mobil uyumlu",
    dotClass: "bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.12)]",
  },
  {
    label: "SEO hazır",
    dotClass: "bg-amber-500 shadow-[0_0_0_5px_rgba(245,158,11,0.14)]",
  },
  {
    label: "Temiz yapı",
    dotClass: "bg-rose-500 shadow-[0_0_0_5px_rgba(244,63,94,0.12)]",
  },
] as const;

const featureItems = [
  {
    icon: Palette,
    title: "Markaya Özel",
    text: "Sıfırdan kurulum, hazır şablon içermez.",
  },
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
              <m.div className={heroStyles.badgeGrid} variants={heroVariants.item} aria-label="Öne çıkan özellikler">
                {badgeItems.map((item, index) => (
                  <span
                    key={item.label}
                    className={`${index < 2 ? heroStyles.badgeWide : heroStyles.badgeSmall} ${heroStyles.badgeBase}`}
                  >
                    <span className={`${heroStyles.badgeDot} ${item.dotClass}`} />
                    <span className={heroStyles.badgeText}>{item.label}</span>
                  </span>
                ))}
              </m.div>

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
  shell: "px-5 py-12 sm:px-8 md:px-16 lg:px-16",
  inner: "w-full",
  main: "grid gap-10 xl:grid-cols-[6fr_4fr] xl:items-center",
  content:
    "relative z-10 flex w-full max-w-none flex-col items-center text-center xl:w-[592px] xl:items-start xl:text-left",
  badgeGrid: "mx-auto grid w-fit grid-cols-6 gap-2 sm:mx-0 sm:max-w-[470px]",
  badgeBase:
    "inline-flex w-full items-center justify-start gap-1.5 whitespace-nowrap rounded-full border border-slate-200 bg-white/85 px-2 py-1.5 text-[10px] font-medium leading-none text-slate-800 shadow-[0_10px_30px_rgba(8,17,31,0.08)] sm:gap-2 sm:px-3 sm:py-2 sm:text-sm sm:leading-normal",
  badgeWide: "col-span-3",
  badgeSmall: "col-span-2",
  badgeDot: "h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5",
  badgeText: "min-w-0 text-left text-slate-800",
  title:
    "mx-auto mt-7 flex w-full flex-col text-4xl font-semibold leading-[0.98] text-[#07101f] sm:text-5xl md:text-6xl xl:mx-0",
  titleLine: "block whitespace-nowrap",
  titleAccent: "text-emerald-700",
  description: "mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl xl:max-w-[40rem]",
  actions: "mt-8 flex w-full flex-col gap-3 md:flex-row md:items-center md:justify-center xl:w-full xl:justify-end",
  primaryAction:
    "inline-flex h-[52px] min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#08111f] px-6 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(8,17,31,0.2)] transition hover:bg-slate-800 md:w-auto",
  secondaryAction:
    "inline-flex h-[52px] min-h-[52px] w-full items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-[#08111f] transition hover:border-slate-400 hover:bg-white md:w-auto",
  visual: "relative hidden min-h-[360px] items-center justify-center xl:flex xl:min-h-[470px]",
  artwork:
    "h-auto w-full max-w-[465px] select-none drop-shadow-[0_28px_65px_rgba(8,17,31,0.18)]",
  features: "mt-10 grid gap-3 grid-cols-1 md:mt-14 md:grid-cols-2 xl:grid-cols-4",
  featureCard:
    "group flex items-start gap-4 rounded-lg border border-white/70 bg-white/85 p-4 shadow-[0_10px_28px_rgba(8,17,31,0.05)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(8,17,31,0.09)]",
  featureIcon:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition duration-300 ease-out group-hover:scale-105 group-hover:bg-emerald-100",
  featureText: "flex min-w-0 flex-col",
  featureTitle: "text-sm font-semibold text-[#07101f] transition duration-300 ease-out group-hover:text-emerald-800",
  featureDescription: "mt-1 text-sm leading-6 text-slate-600 transition duration-300 ease-out group-hover:text-slate-700",
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
