import { LogIn, Menu } from "lucide-react";
import Banner from "@/src/components/banner";

export default function Header() {
  return (
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
  );
}

const headerStyles = {
  shell: "sticky top-0 z-50 h-16 select-none border-b border-slate-800/70 bg-slate-950/90 backdrop-blur",
  inner: "mx-auto grid h-full w-full max-w-6xl items-center px-4",
  mobileRow: "grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 md:hidden",
  mobileBanner: "justify-self-center",
  desktopBanner: "hidden md:flex md:justify-start",
  iconButton:
    "inline-flex h-9 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-100 transition hover:border-slate-500 hover:bg-slate-800",
  loginButton:
    "inline-flex h-9 items-center justify-center justify-self-end gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800",
};
