export default function HomeBackground() {
  return <div aria-hidden="true" className={backgroundStyles.shell} />;
}

const backgroundStyles = {
  shell: "pointer-events-none absolute inset-0 z-0 bg-[var(--site-surface)]",
};
