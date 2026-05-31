import HeroSection from "@/src/sections/home/hero-section";
import HomeBackground from "@/src/components/home/background";
import WhySection from "@/src/sections/home/why-section";
import { LandingPage, LandingSection, WaveDivider } from "@/src/lib/landing-page";

export default function Page() {
  return (
    <main className={pageStyles.shell}>
      <HomeBackground />
      <LandingPage className={pageStyles.content}>
        <LandingSection className={pageStyles.heroSection} sectionBg="var(--site-surface)">
          <HeroSection />
        </LandingSection>

        <LandingSection
          className={pageStyles.whySection}
          sectionBg="#5d79b3"
          slots={{
            start: {
              content: <WaveDivider />,
              layout: "outter",
              size: 76,
            },
          }}
        >
          <WhySection />
        </LandingSection>
      </LandingPage>
    </main>
  );
}

const pageStyles = {
  shell: "relative min-h-[calc(100svh-var(--site-content-top)-var(--site-page-gutter))] overflow-hidden",
  content: "relative z-10 w-full",
  heroSection: "px-5 py-18 sm:px-8 md:px-16 md:pb-24 lg:px-16 xl:pb-32",
  whySection:
    "px-5 py-8 text-white before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_42%)] before:content-[''] sm:px-8 sm:py-10 md:px-16 md:py-14",
};
