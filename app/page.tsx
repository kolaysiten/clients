import HeroSection from "@/src/sections/home/hero-section";
import HomeBackground from "@/src/components/home/background";
import WhySection from "@/src/sections/home/why-section";

export default function Page() {
  return (
    <main className={pageStyles.shell}>
      <HomeBackground />
      <div className={pageStyles.content}>
        <HeroSection />
        <WhySection />
      </div>
    </main>
  );
}

const pageStyles = {
  shell: "relative min-h-[calc(100svh-var(--site-content-top)-var(--site-page-gutter))] overflow-hidden",
  content: "relative z-10 w-full",
};
