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
      <body>
        <Header />
        <ContentScrollShell>
          <MotionProvider>{children}</MotionProvider>
        </ContentScrollShell>
        <Analytics />
      </body>
    </html>
  );
}
