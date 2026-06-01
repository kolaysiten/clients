"use client";

import { LandingSection } from "@/src/lib/landing-page";

const subtitleItems = [
  {
    firstLine: "Markanızı dijitale taşıyor, modern ve güven",
    secondLine: "veren web deneyimleri kuruyoruz.",
  },
  {
    firstLine: "Sıfırdan, elle hazırlanmış, modern teknolojilerle",
    secondLine: " kurulmuş ve büyümeye açık yapılar sunuyoruz.",
  },
] as const;

export default function WhySection() {
  return (
    <LandingSection className={sectionStyles.section} sectionBg="#5d79b3">
      <div className={sectionStyles.inner}>
        <div className={sectionStyles.body}>
          <h2 className={sectionStyles.title}>Neden KolaySiten?</h2>
          <div className={sectionStyles.lower}>
            <div className={sectionStyles.copy}>
              <div className={sectionStyles.content}>
                {subtitleItems.map((item) => (
                  <div key={item.firstLine} className={sectionStyles.subtitleItem}>
                    <p className={sectionStyles.subtitle}>
                      <span className={sectionStyles.subtitleLine}>
                        <span className={sectionStyles.subtitleBullet}>•</span>
                        {item.firstLine}
                      </span>
                      <span className={sectionStyles.subtitleLine}>{item.secondLine}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={sectionStyles.visual} aria-hidden="true" />
          </div>
        </div>
      </div>
    </LandingSection>
  );
}

const sectionStyles = {
  section:
    "px-5 py-10 pt-24 text-white before:pointer-events-none before:absolute before:inset-0 before:content-[''] sm:px-8 sm:py-12 sm:pt-28 md:px-16 md:py-16 md:pt-32 xl:pt-40",
  inner: "relative z-10 mx-auto w-full max-w-[1440px]",
  body: "mx-auto flex w-fit max-w-full flex-col gap-8 text-left lg:w-full lg:max-w-[1200px]",
  lower: "flex w-fit max-w-full flex-col gap-10 lg:w-full lg:flex-row lg:gap-0",
  copy: "flex w-fit max-w-full flex-col items-start gap-3 lg:w-1/2",
  title:
    "max-w-3xl text-left text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-5xl md:leading-[0.98] lg:text-[3.75rem]",
  content: "flex w-fit max-w-full flex-col gap-5 lg:w-full",
  subtitleItem:
    "flex w-full flex-col items-start gap-2 px-0 py-0 sm:gap-3",
  subtitle: "max-w-2xl text-base leading-7 text-white/82 sm:text-lg md:text-xl",
  subtitleLine: "block whitespace-nowrap",
  subtitleBullet: "inline-block w-4 text-white/62",
  visual: "hidden xl:block xl:w-1/2",
} as const;
