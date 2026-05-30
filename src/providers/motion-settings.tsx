"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext } from "react";

type MotionSettingsValue = {
  motionEnabled: boolean;
};

const MotionSettingsContext = createContext<MotionSettingsValue>({ motionEnabled: true });

export function MotionSettingsProvider({
  children,
  motionEnabled,
}: Readonly<{
  children: React.ReactNode;
  motionEnabled: boolean;
}>) {
  return (
    <MotionConfig reducedMotion={motionEnabled ? "user" : "always"}>
      <MotionSettingsContext.Provider value={{ motionEnabled }}>{children}</MotionSettingsContext.Provider>
    </MotionConfig>
  );
}

export function useMotionSettings() {
  return useContext(MotionSettingsContext);
}
