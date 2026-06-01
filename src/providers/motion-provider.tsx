import { headers } from "next/headers";
import { MotionSettingsProvider } from "@/src/providers/motion-settings";

export default async function MotionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") ?? "";
  const fetchDest = requestHeaders.get("sec-fetch-dest") ?? "";
  const motionEnabled = !(isBotUserAgent(userAgent) || isLikelyTouchUserAgent(userAgent) || fetchDest === "iframe");

  return <MotionSettingsProvider motionEnabled={motionEnabled}>{children}</MotionSettingsProvider>;
}

function isBotUserAgent(userAgent: string) {
  return /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|twitterbot|discordbot|linkedinbot|embedly|preview/i.test(
    userAgent,
  );
}

function isLikelyTouchUserAgent(userAgent: string) {
  return /android|iphone|ipad|ipod|mobile|tablet|kindle|silk|playbook/i.test(userAgent);
}
