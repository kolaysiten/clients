"use client";

import { CheckCircle2, Gauge, Layers3, Sparkles } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { useMotionSettings } from "@/src/providers/motion-settings";
import { LandingSection, WaveDivider } from "@/src/lib/landing-page";

const reasonItems = [
  {
    icon: Sparkles,
    title: "Hazır tema değil",
    text: "Markanıza göre tasarlanan, tek tip his vermeyen bir yapı.",
  },
  {
    icon: Layers3,
    title: "Sıfırdan kurulum",
    text: "İhtiyaca göre şekillenen, büyümeye açık bir temel.",
  },
  {
    icon: Gauge,
    title: "Hızlı deneyim",
    text: "Açılışı hızlı, kullanımı akıcı ve sade sayfalar.",
  },
  {
    icon: CheckCircle2,
    title: "Güven veren sonuç",
    text: "Dışarıdan profesyonel, içeride düzenli ve sağlam yapı.",
  },
] as const;

export default function WhySection() {
  const { motionEnabled } = useMotionSettings();

  return (
    <LandingSection
      className={sectionStyles.section}
      sectionBg="#5d79b3"
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className={sectionStyles.inner}
          initial={motionEnabled ? "hidden" : false}
          whileInView={motionEnabled ? "show" : undefined}
          viewport={motionEnabled ? { once: true, amount: 0.35 } : undefined}
          variants={sectionVariants.section}
        >
          <div className={sectionStyles.layout}>
            <m.div className={sectionStyles.copy} variants={sectionVariants.item}>
              <span className={sectionStyles.kicker}>Neden Bu Çözüm?</span>
              <h2 className={sectionStyles.title}>Hazır kalıplar yerine, markaya göre kurulan bir yapı.</h2>
              <p className={sectionStyles.description}>
                Burada amaç sadece güzel duran bir ekran üretmek değil. Markayı doğru anlatan, güven veren ve
                gerektiğinde büyüyebilen bir sistem kurmak.
              </p>

              <div className={sectionStyles.promiseList}>
                {promiseItems.map((item) => (
                  <div key={item.label} className={sectionStyles.promiseItem}>
                    <span className={sectionStyles.promiseValue}>{item.value}</span>
                    <span className={sectionStyles.promiseLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </m.div>

            <m.aside className={sectionStyles.panel} variants={sectionVariants.item}>
              <div className={sectionStyles.panelHeader}>
                <span className={sectionStyles.panelKicker}>Neler değişiyor?</span>
                <p className={sectionStyles.panelTitle}>Her parça aynı yoğunlukta düşünülüyor.</p>
              </div>

              <div className={sectionStyles.reasonList}>
                {reasonItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <m.article key={item.title} className={sectionStyles.reasonItem} variants={sectionVariants.item}>
                      <span className={sectionStyles.reasonIndex}>{String(index + 1).padStart(2, "0")}</span>

                      <span className={sectionStyles.reasonIconWrap}>
                        <Icon className="h-5 w-5" />
                      </span>

                      <div className={sectionStyles.reasonText}>
                        <h3 className={sectionStyles.reasonTitle}>{item.title}</h3>
                        <p className={sectionStyles.reasonDescription}>{item.text}</p>
                      </div>
                    </m.article>
                  );
                })}
              </div>
            </m.aside>
          </div>
        </m.div>
      </LazyMotion>
    </LandingSection>
  );
}

const sectionStyles = {
  section:
    "px-5 py-8 pt-24 text-white before:pointer-events-none before:absolute before:inset-0 before:content-[''] sm:px-8 sm:py-10 sm:pt-28 md:px-16 md:py-14 md:pt-28 xl:40",
  inner: "relative z-10 mx-auto w-full max-w-[1440px]",
  layout: "grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start",
  copy: "max-w-3xl",
  kicker:
    "inline-flex items-center rounded-full border border-white/15 bg-white/12 px-3 py-2 text-sm font-medium text-white/92 backdrop-blur-sm",
  title: "mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl xl:text-[3.75rem] xl:leading-[0.95]",
  description: "mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg",
  promiseList: "mt-8 grid gap-3 sm:grid-cols-3",
  promiseItem:
    "flex items-center gap-3 border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-sm transition duration-300 ease-out hover:bg-white/12",
  promiseValue:
    "inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-white/12 text-sm font-semibold text-white",
  promiseLabel: "text-sm font-medium text-white/90",
  panel:
    "border border-white/15 bg-[#17315d]/74 p-5 shadow-[0_30px_70px_rgba(7,16,31,0.2)] backdrop-blur-sm md:p-6",
  panelHeader: "flex flex-col gap-2 border-b border-white/12 pb-5",
  panelKicker: "text-xs font-semibold uppercase tracking-[0.26em] text-white/55",
  panelTitle: "text-lg font-semibold leading-7 text-white md:text-xl",
  reasonList: "divide-y divide-white/12",
  reasonItem: "grid grid-cols-[auto_auto_1fr] items-start gap-4 py-5 first:pt-0 last:pb-0",
  reasonIndex: "mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/48",
  reasonIconWrap:
    "flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/12 text-white",
  reasonText: "flex min-w-0 flex-col",
  reasonTitle: "text-sm font-semibold text-white",
  reasonDescription: "mt-1 text-sm leading-6 text-white/72",
} as const;

const promiseItems = [
  { value: "01", label: "Strateji" },
  { value: "02", label: "Tasarım" },
  { value: "03", label: "Kurulum" },
] as const;

const sectionVariants = {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" as const } },
  },
} satisfies Record<string, Variants>;
