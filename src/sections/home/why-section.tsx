"use client";

import { CheckCircle2, Gauge, Layers3, Sparkles } from "lucide-react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { useMotionSettings } from "@/src/providers/motion-settings";

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
    <LazyMotion features={domAnimation}>
      <m.section
        className={sectionStyles.shell}
        initial={motionEnabled ? "hidden" : false}
        animate="show"
        variants={sectionVariants.section}
      >
        <div className={sectionStyles.inner}>
          <m.div className={sectionStyles.header} variants={sectionVariants.item}>
            <span className={sectionStyles.kicker}>Neden Bu Çözüm?</span>
            <h2 className={sectionStyles.title}>Hazır kalıplar yerine, markaya uygun bir yapı.</h2>
            <p className={sectionStyles.description}>
              Amacımız sadece güzel görünen bir sayfa yapmak değil; işletmenizi doğru anlatan, güven veren ve
              büyümeye uygun bir web deneyimi kurmak.
            </p>
          </m.div>

          <m.div className={sectionStyles.grid} variants={sectionVariants.cards}>
            {reasonItems.map((item) => {
              const Icon = item.icon;

              return (
                <m.div key={item.title} className={sectionStyles.card} variants={sectionVariants.item}>
                  <span className={sectionStyles.iconWrap}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className={sectionStyles.cardText}>
                    <h3 className={sectionStyles.cardTitle}>{item.title}</h3>
                    <p className={sectionStyles.cardDescription}>{item.text}</p>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
}

const sectionStyles = {
  shell: "py-6 md:py-8",
  inner: "w-full",
  header: "mx-auto flex max-w-3xl flex-col items-center text-center",
  kicker:
    "inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-2 text-sm font-medium text-slate-800 shadow-[0_10px_30px_rgba(8,17,31,0.08)]",
  title: "mt-5 text-3xl font-semibold tracking-tight text-[#07101f] sm:text-4xl md:text-5xl",
  description: "mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg",
  grid: "mt-8 grid gap-3 md:mt-10 md:grid-cols-2 xl:grid-cols-4",
  card:
    "group flex items-start gap-4 rounded-lg border border-white/70 bg-white/85 p-4 shadow-[0_10px_28px_rgba(8,17,31,0.05)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-[0_18px_40px_rgba(8,17,31,0.09)]",
  iconWrap:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition duration-300 ease-out group-hover:scale-105 group-hover:bg-emerald-100",
  cardText: "flex min-w-0 flex-col",
  cardTitle: "text-sm font-semibold text-[#07101f] transition duration-300 ease-out group-hover:text-emerald-800",
  cardDescription: "mt-1 text-sm leading-6 text-slate-600 transition duration-300 ease-out group-hover:text-slate-700",
} as const;

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
    show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" as const } },
  },
  cards: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
} satisfies Record<string, Variants>;
