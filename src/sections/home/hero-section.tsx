"use client";

import Image from "next/image";
import { ArrowRight, FileCode2, Layers3, Palette, Smartphone } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionSettings } from "@/src/providers/motion-settings";
import { LandingSection, WaveDivider } from "@/src/lib/landing-page";

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
    title: "Özel Tasarım",
    text: "İhtiyacınıza uygun sıfırdan kurulum.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    text: "Tüm cihazlarda düzgün görünüm.",
  },
  {
    icon: FileCode2,
    title: "Kod Teslimi",
    text: "Proje dosyalarıyla birlikte teslim.",
  },
  {
    icon: Layers3,
    title: "Kolay Genişleme",
    text: "Teslim sonrası ekleme mümkün.",
  },
];

export default function HeroSection() {
  const { motionEnabled } = useMotionSettings();
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdUp(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <LandingSection className={heroStyles.section} sectionBg="var(--site-surface)"
      slots={{
        end: {
          content: <WaveDivider flip={true} />,
          layout: "outter",
          size: 76,
        },
      }}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className={heroStyles.main}
          initial={motionEnabled ? "hidden" : false}
          animate="show"
          variants={heroVariants.section}
        >
          <div className={heroStyles.content}>
            <m.div className={heroStyles.badgeGrid} variants={heroVariants.group} aria-label="Öne çıkan özellikler">
              {badgeItems.map((item, index) => (
                <m.span
                  key={item.label}
                  className={`${index < 2 ? heroStyles.badgeWide : heroStyles.badgeSmall} ${heroStyles.badgeBase}`}
                  custom={index}
                  variants={heroVariants.item}
                >
                  <span className={`${heroStyles.badgeDot} ${item.dotClass}`} />
                  <span className={heroStyles.badgeText}>{item.label}</span>
                </m.span>
              ))}
            </m.div>

            <m.h1 className={heroStyles.title} variants={heroVariants.group}>
              <m.span className={heroStyles.titleLine} custom={5} variants={heroVariants.item}>
                İşletmeniz için
              </m.span>
              <m.span className={heroStyles.titleLine} custom={6} variants={heroVariants.item}>
                <span className={heroStyles.titleAccent}>özel</span> web siteleri.
              </m.span>
            </m.h1>

            <m.p className={heroStyles.description} custom={7} variants={heroVariants.item}>
              KolaySiten olarak, ihtiyacınıza göre tasarlanan ve modern teknolojilerle kodlanan web siteleri geliştiriyoruz.
            </m.p>

            <m.div className={heroStyles.actions} variants={heroVariants.group}>
              <m.a
                href="#paketler"
                className={heroStyles.secondaryAction}
                custom={{ step: 8, axis: isMdUp ? "x-left" : "y" }}
                variants={heroVariants.cta}
              >
                Paketleri İncele
              </m.a>
              <m.a
                href="#iletisim"
                className={heroStyles.primaryAction}
                custom={{ step: 9, axis: isMdUp ? "x-right" : "y" }}
                variants={heroVariants.cta}
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </m.a>
            </m.div>
          </div>

          <m.div
            className={heroStyles.visual}
            variants={heroVariants.visual}
            aria-hidden="true"
            initial={motionEnabled ? undefined : false}
            custom={10}
          >
            <Image src="/hero-mockup3.png" alt="" width={465} height={465} priority className={heroStyles.artwork} />
          </m.div>
        </m.div>

        <m.div
          className={heroStyles.features}
          initial={motionEnabled ? "hidden" : false}
          animate="show"
          variants={heroVariants.features}
        >
          {featureItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <m.div key={item.title} className={heroStyles.featureCard} custom={11 + index} variants={heroVariants.item}>
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
      </LazyMotion>
    </LandingSection>
  );
}

const heroStyles = {
  section: "px-5 py-18 sm:px-8 md:px-16 lg:px-16",
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
    "group flex items-start gap-4 rounded-lg border border-white/70 bg-white/90 p-4 shadow-[0_12px_28px_rgba(8,17,31,0.11)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(8,17,31,0.13)]",
  featureIcon:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition duration-300 ease-out group-hover:scale-105 group-hover:bg-emerald-100",
  featureText: "flex min-w-0 flex-col",
  featureTitle: "text-sm font-semibold text-[#07101f] transition duration-300 ease-out group-hover:text-emerald-800",
  featureDescription: "mt-1 text-sm leading-6 text-slate-600 transition duration-300 ease-out group-hover:text-slate-700",
};

const heroVariants = {
  section: { hidden: {}, show: {} },
  group: { hidden: {}, show: {} },
  item: {
    hidden: { opacity: 0, y: 12 },
    show: (step = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.06 + step * 0.09,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  },
  cta: {
    hidden: () => ({
      opacity: 0,
      x: 0,
      y: 0,
    }),
    show: (custom?: { step?: number }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.06 + (custom?.step ?? 0) * 0.09,
        duration: 0.42,
        ease: "easeOut" as const,
      },
    }),
  },
  visual: {
    hidden: { opacity: 0, y: 16, scale: 0.985 },
    show: (step = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.06 + step * 0.09,
        duration: 0.68,
        ease: "easeOut" as const,
      },
    }),
  },
  features: { hidden: {}, show: {} },
} satisfies Record<string, Variants>;
