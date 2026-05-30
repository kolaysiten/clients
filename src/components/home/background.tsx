export default function HomeBackground() {
  return (
    <div aria-hidden="true" className={backgroundStyles.shell}>
      <div className={backgroundStyles.texture} />
    </div>
  );
}

const backgroundStyles = {
  shell: "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#f6f3ee]",
  texture:
    "absolute inset-0 bg-gradient-to-br from-white/75 via-white/20 to-emerald-50/70",
};
