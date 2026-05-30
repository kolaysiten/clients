import Banner from "@/src/components/banner";

export default function Header() {
  return (
    <header className={headerStyles.shell}>
      <div className={headerStyles.inner}>
        <Banner />
      </div>
    </header>
  );
}

const headerStyles = {
  shell: "sticky top-0 z-50 select-none border-b border-slate-800/70 bg-slate-950/90 backdrop-blur",
  inner: "mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-4",
};
