export default function HomeBackground() {
  return (
    <div aria-hidden="true" className={backgroundStyles.shell}>
      <div className={backgroundStyles.texture} />
    </div>
  );
}

const backgroundStyles = {
  shell: "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#f7f9fc]",
  texture:
    "absolute inset-0 bg-gradient-to-br from-white/70 via-[#f7f9fc] to-slate-100/70",
};
