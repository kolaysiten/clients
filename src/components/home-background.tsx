"use client";

import { motion } from "framer-motion";

export default function HomeBackground() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className={backgroundStyles.layer}
        initial={{ x: "18%", opacity: 0, scale: 1.045, rotate: -0.6 }}
        animate={{ x: "0%", opacity: 0.45, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.65,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <div aria-hidden="true" className={backgroundStyles.grain} />
    </>
  );
}

const backgroundStyles = {
  layer:
    "pointer-events-none absolute inset-0 z-0 bg-[url('/bg-lsteps.png')] bg-no-repeat bg-cover bg-center mix-blend-multiply",
  grain:
    "pointer-events-none absolute inset-0 z-[1] bg-[url('/bg-grain.svg')] bg-repeat bg-[length:256px_256px] opacity-[0.16] mix-blend-multiply",
};
