export default function Header() {
  return (
    <header className={headerStyles.shell}>
      <div className={headerStyles.inner}>
        <Banner />
      </div>
    </header>
  );
}

import Banner from "@/src/components/banner";

const headerStyles = {
  shell: "sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur",
  inner: "mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-4",
};
