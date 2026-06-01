import { LogIn, Menu } from "lucide-react";
import Banner from "@/src/components/banner";

export default function Header() {
  return (
    <>
      <div className={headerStyles.guard} aria-hidden="true" />
      <header className={headerStyles.shell}>
        <div className={headerStyles.inner}>
          <div className={headerStyles.mobileRow}>
            <button type="button" className={headerStyles.iconButton} aria-label="Menü aç">
              <Menu className="h-5 w-5" />
            </button>

            <div className={headerStyles.mobileBanner}>
              <Banner />
            </div>

            <button type="button" className={headerStyles.loginButton} aria-label="Giriş yap">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          </div>

          <div className={headerStyles.desktopBanner}>
            <Banner />
          </div>
        </div>
      </header>
    </>
  );
}

const headerStyles = {
  guard:
    "pointer-events-none fixed inset-x-0 top-0 z-40 h-[var(--site-header-guard-height)] bg-[var(--site-bg)] bg-[url('/peak_bg.png')] bg-cover bg-top bg-no-repeat",
  shell:
    "fixed left-1/2 top-[var(--site-header-top)] z-50 w-[min(calc(100vw-(var(--site-page-gutter)*2)),var(--site-content-max))] -translate-x-1/2",
  inner:
    "grid h-[var(--site-header-height)] w-full items-center overflow-hidden rounded-2xl border border-white/10 bg-[#08111f]/94 px-4 shadow-[0_18px_40px_rgba(8,17,31,0.22)] backdrop-blur-md",
  mobileRow: "grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 md:hidden",
  mobileBanner: "justify-self-center",
  desktopBanner: "hidden md:flex md:justify-start",
  iconButton:
    "inline-flex h-9 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10",
  loginButton:
    "inline-flex h-9 items-center justify-center justify-self-end gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10",
};
