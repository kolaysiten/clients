export default function Banner() {
  return (
    <div className={bannerStyles.shell}>
      <img src="/logo.png" alt="K" className={bannerStyles.mark} />
      <span className={bannerStyles.text}>
        <span className={bannerStyles.title}>KolaySiten</span>
        <span className={bannerStyles.subtitle}>M. Kayra Freelance</span>
      </span>
    </div>
  );
}

const bannerStyles = {
  shell: "inline-flex items-center gap-4 bg-transparent",
  mark:
    "flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white",
  text: "flex flex-col",
  title: "text-lg font-semibold leading-tight text-slate-950",
  subtitle: "text-sm leading-tight text-slate-500",
};
