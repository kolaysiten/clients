import HeroSection from "@/src/sections/home/hero-section";
import WhySection from "@/src/sections/home/why-section";
import { LandingPage } from "@/src/lib/landing-page";

export default function Page() {
  return (
    <main className={pageStyles.shell}>
      <LandingPage className={pageStyles.content}>
        <HeroSection />
        <WhySection />
      </LandingPage>
    </main>
  );
}

const pageStyles = {
  shell: "relative min-h-[calc(100lvh-var(--site-content-top)-var(--site-page-gutter))] overflow-hidden",
  content: "relative z-10 w-full",
};
