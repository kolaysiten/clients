export default function HomeBackground() {
  return (
    <div aria-hidden="true" className={backgroundStyles.shell}>
      <div className={backgroundStyles.texture} />
      <div className={backgroundStyles.grain} />
    </div>
  );
}

const backgroundStyles = {
  shell: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  texture:
    "absolute inset-0 bg-[url('/bg-lsteps.png')] bg-cover bg-center bg-no-repeat opacity-45",
  grain:
    "absolute inset-0 bg-[url('/bg-grain.svg')] bg-[length:256px_256px] bg-repeat opacity-15 mix-blend-multiply",
};
