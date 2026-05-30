import clsx from "clsx";
import Link from "next/link";

import { navigation } from "@/src/data/navigation";

export default function Header() {
  return (
    <header className={headerStyles.shell}>
      <div className={headerStyles.inner}>
        <Link className={headerStyles.brand} href="/">
          <span className={headerStyles.mark}>K</span>
          <span className={headerStyles.brandText}>
            <span className={headerStyles.brandName}>KolaySiten</span>
            <span className={headerStyles.brandTag}>Freelance ve proje pazarı</span>
          </span>
        </Link>
        <nav aria-label="Ana menü" className={headerStyles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              className={headerStyles.navLink}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={headerStyles.actions}>
          <Link className={clsx(headerStyles.button, headerStyles.secondaryButton)} href="/giris">
            Giriş Yap
          </Link>
          <Link className={clsx(headerStyles.button, headerStyles.primaryButton)} href="/kayit-ol">
            Ücretsiz Başla
          </Link>
        </div>
      </div>
    </header>
  );
}

const headerStyles = {
  shell: "border-b border-slate-200/80 bg-white/95 backdrop-blur",
  inner:
    "mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8",
  brand: "flex items-center gap-3",
  mark:
    "flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white",
  brandText: "flex flex-col",
  brandName: "text-sm font-semibold text-slate-950",
  brandTag: "text-xs text-slate-500",
  nav: "hidden items-center gap-6 md:flex",
  navLink: "text-sm font-medium text-slate-600 transition-colors hover:text-slate-950",
  actions: "flex items-center gap-2",
  button:
    "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors",
  secondaryButton:
    "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  primaryButton:
    "bg-slate-950 text-white hover:bg-slate-800",
};
