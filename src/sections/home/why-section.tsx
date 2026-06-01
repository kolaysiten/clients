"use client";

import { LandingSection } from "@/src/lib/landing-page";

export default function WhySection() {
  return (
    <LandingSection className={sectionStyles.section} sectionBg="#5d79b3">
      <div className={sectionStyles.inner} />
    </LandingSection>
  );
}

const sectionStyles = {
  section:
    "px-5 py-8 pt-24 text-white before:pointer-events-none before:absolute before:inset-0 before:content-[''] sm:px-8 sm:py-10 sm:pt-28 md:px-16 md:py-14 md:pt-28 xl:pt-40",
  inner: "relative z-10 mx-auto w-full max-w-[1440px] min-h-[120px]",
} as const;
