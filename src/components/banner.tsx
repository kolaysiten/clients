export default function Banner() {
  return (
    <div className={bannerStyles.shell}>
      <span className={bannerStyles.mark}>K</span>
      <span className={bannerStyles.text}>
        <span className={bannerStyles.title}>KolaySiten</span>
        <span className={bannerStyles.subtitle}>Sonra düşünürüz</span>
      </span>
    </div>
  );
}

const bannerStyles = {
  shell: "inline-flex items-center gap-4 bg-transparent",
  mark:
    "flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-base font-semibold text-white",
  text: "flex flex-col",
  title: "text-lg font-semibold leading-tight text-slate-950",
  subtitle: "text-sm leading-tight text-slate-500",
};
