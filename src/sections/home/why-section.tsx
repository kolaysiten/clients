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
  {
    firstLine: "Hız, mobil uyum ve temiz kod odağıyla",
    secondLine: "uzun ömürlü web siteleri hazırlıyoruz.",
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
                      <span className={`${sectionStyles.subtitleLine} ${sectionStyles.subtitleLineSpaced}`}>
                        {item.secondLine}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={sectionStyles.visual} aria-hidden="true">
              <div className={sectionStyles.mockupShell}>
                <div className={sectionStyles.mockupTopbar}>
                  <span className={sectionStyles.mockupDot} />
                  <span className={sectionStyles.mockupDot} />
                  <span className={sectionStyles.mockupDot} />
                </div>
                <div className={sectionStyles.mockupHero}>
                  <span className={sectionStyles.mockupHeroLineLarge} />
                  <span className={sectionStyles.mockupHeroLineSmall} />
                </div>
                <div className={sectionStyles.mockupGrid}>
                  <span className={sectionStyles.mockupTile} />
                  <span className={sectionStyles.mockupTile} />
                  <span className={sectionStyles.mockupTile} />
                </div>
              </div>
              <div className={sectionStyles.mockupPanel}>
                <span className={sectionStyles.mockupPanelBar} />
                <span className={sectionStyles.mockupPanelLine} />
                <span className={sectionStyles.mockupPanelLineShort} />
              </div>
              <div className={sectionStyles.mockupPhone}>
                <span className={sectionStyles.mockupPhoneNotch} />
                <span className={sectionStyles.mockupPhoneBlock} />
                <span className={sectionStyles.mockupPhoneLine} />
                <span className={sectionStyles.mockupPhoneLineShort} />
              </div>
            </div>
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
  lower: "flex w-fit max-w-full flex-col gap-10 lg:w-full lg:flex-row lg:gap-0 xl:items-stretch",
  copy: "flex w-fit max-w-full flex-col items-start gap-3 lg:w-1/2 xl:min-h-[384px]",
  title:
    "max-w-3xl text-left text-3xl font-semibold leading-[1.04] text-white sm:text-4xl md:text-5xl md:leading-[0.98] lg:text-[3.75rem]",
  content: "flex w-fit max-w-full flex-col gap-5 lg:w-full xl:h-full xl:justify-evenly xl:gap-0",
  subtitleItem:
    "flex w-full flex-col items-start gap-2 px-0 py-0 sm:gap-3",
  subtitle: "max-w-2xl text-base leading-7 text-white/82 sm:text-lg md:text-xl",
  subtitleLine: "block whitespace-nowrap",
  subtitleLineSpaced: "mt-1",
  subtitleBullet: "inline-block w-4 text-white/62",
  visual: "relative hidden min-h-[384px] xl:block xl:w-1/2",
  mockupShell:
    "absolute right-4 top-6 w-[430px] overflow-hidden rounded-2xl border border-white/28 bg-white/18 shadow-[0_28px_80px_rgba(8,17,31,0.18)] backdrop-blur-md",
  mockupTopbar:
    "flex h-11 items-center gap-2 border-b border-white/18 bg-white/16 px-5",
  mockupDot: "h-2.5 w-2.5 rounded-full bg-white/45",
  mockupHero: "flex flex-col gap-4 px-7 py-8",
  mockupHeroLineLarge: "h-5 w-64 rounded-full bg-white/78",
  mockupHeroLineSmall: "h-3 w-48 rounded-full bg-white/42",
  mockupGrid: "grid grid-cols-3 gap-4 px-7 pb-7",
  mockupTile:
    "h-24 rounded-xl border border-white/20 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
  mockupPanel:
    "absolute right-0 top-56 flex w-56 flex-col gap-3 rounded-2xl border border-white/28 bg-[#eef6ff]/90 p-5 shadow-[0_22px_55px_rgba(8,17,31,0.18)]",
  mockupPanelBar: "h-3 w-24 rounded-full bg-[#5d79b3]/55",
  mockupPanelLine: "h-2.5 w-full rounded-full bg-[#5d79b3]/25",
  mockupPanelLineShort: "h-2.5 w-32 rounded-full bg-[#5d79b3]/20",
  mockupPhone:
    "absolute left-16 top-32 flex h-64 w-32 flex-col items-center gap-3 rounded-[1.75rem] border border-white/30 bg-white/22 px-4 py-5 shadow-[0_24px_65px_rgba(8,17,31,0.2)] backdrop-blur-md",
  mockupPhoneNotch: "h-1.5 w-10 rounded-full bg-white/52",
  mockupPhoneBlock: "mt-3 h-20 w-full rounded-2xl bg-white/32",
  mockupPhoneLine: "h-2.5 w-full rounded-full bg-white/58",
  mockupPhoneLineShort: "h-2.5 w-16 rounded-full bg-white/38",
} as const;
