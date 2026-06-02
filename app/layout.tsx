import ContentScrollShell from "@/src/components/content-scroll-shell";
import Header from "@/src/components/header";
import MotionProvider from "@/src/providers/motion-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="relative isolate">
        <div aria-hidden="true" className={layoutStyles.background} />
        <Header />
        <ContentScrollShell>
          <MotionProvider>{children}</MotionProvider>
        </ContentScrollShell>
        <Analytics />
      </body>
    </html>
  );
}

const layoutStyles = {
  background:
    "pointer-events-none fixed inset-x-0 -top-24 -bottom-24 z-0 transform-gpu bg-[url('/peak_bg.png')] bg-cover bg-top bg-no-repeat will-change-transform",
};
