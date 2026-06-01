"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

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
  const [clientMotionEnabled, setClientMotionEnabled] = useState(motionEnabled);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)");
    const updateMotionPreference = () => {
      setClientMotionEnabled(motionEnabled && !motionQuery.matches);
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, [motionEnabled]);

  return (
    <MotionConfig reducedMotion={clientMotionEnabled ? "user" : "always"}>
      <MotionSettingsContext.Provider value={{ motionEnabled: clientMotionEnabled }}>
        {children}
      </MotionSettingsContext.Provider>
    </MotionConfig>
  );
}

export function useMotionSettings() {
  return useContext(MotionSettingsContext);
}
