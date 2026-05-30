import HeroSection from "@/src/sections/home/hero-section";
import HomeBackground from "@/src/components/home-background";

export default function Page() {
  return (
    <main className={pageStyles.shell}>
      <HomeBackground />
      <div className={pageStyles.content}>
        <HeroSection />
      </div>
    </main>
  );
}

const pageStyles = {
  shell: "relative min-h-screen overflow-hidden",
  content: "relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-[92px] md:px-6 md:pb-14 md:pt-[100px]",
};
