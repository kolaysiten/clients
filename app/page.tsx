import HeroSection from "@/src/sections/home/hero-section";
import HomeBackground from "@/src/components/home/background";
import WhySection from "@/src/sections/home/why-section";
import { LandingPage } from "@/src/lib/landing-page";

export default function Page() {
  return (
    <main className={pageStyles.shell}>
      <HomeBackground />
      <LandingPage className={pageStyles.content}>
        <HeroSection />
        <WhySection />
      </LandingPage>
    </main>
  );
}

const pageStyles = {
  shell: "relative min-h-[calc(100svh-var(--site-content-top)-var(--site-page-gutter))] overflow-hidden",
  content: "relative z-10 w-full",
};
