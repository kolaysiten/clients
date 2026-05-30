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
  shell: "flex h-full select-none items-center gap-2 bg-transparent sm:gap-3 xl:gap-4",
  mark: "h-10 w-10 rounded-full",
  text: "flex flex-col justify-center",
  title: "text-base font-semibold leading-tight text-white md:text-lg",
  subtitle: "text-xs leading-tight text-slate-300 md:text-sm",
};
