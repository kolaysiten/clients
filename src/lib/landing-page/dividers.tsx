import { clsx } from "clsx";
import type { CSSProperties, SVGProps } from "react";

type LandingDividerProps = Omit<SVGProps<SVGSVGElement>, "height" | "viewBox" | "children"> & {
  background?: string;
  height?: number | string;
  flip?: boolean;
};

type LandingDividerStyle = CSSProperties & {
  color?: string;
};

export function WaveDivider({
  background = "var(--landing-section-bg)",
  className,
  flip,
  height = "var(--landing-slot-size, 96px)",
  style,
  ...props
}: LandingDividerProps) {
  return (
    <BaseDivider
      background={background}
      className={className}
      flip={flip}
      height={height}
      style={style}
      {...props}
    >
      <path d="M0 54C160 10 288 10 448 54C608 98 736 98 896 54C1056 10 1184 10 1440 54V120H0V54Z" />
    </BaseDivider>
  );
}

export function CurveDivider({
  background = "var(--landing-section-bg)",
  className,
  flip,
  height = "var(--landing-slot-size, 96px)",
  style,
  ...props
}: LandingDividerProps) {
  return (
    <BaseDivider
      background={background}
      className={className}
      flip={flip}
      height={height}
      style={style}
      {...props}
    >
      <path d="M0 76C240 16 520 0 800 32C1080 64 1240 108 1440 60V120H0V76Z" />
    </BaseDivider>
  );
}

export function SlantDivider({
  background = "var(--landing-section-bg)",
  className,
  flip,
  height = "var(--landing-slot-size, 96px)",
  style,
  ...props
}: LandingDividerProps) {
  return (
    <BaseDivider
      background={background}
      className={className}
      flip={flip}
      height={height}
      style={style}
      {...props}
    >
      <path d="M0 50L1440 0V120H0V50Z" />
    </BaseDivider>
  );
}

function BaseDivider({
  background,
  children,
  className,
  flip,
  height,
  style,
  ...props
}: LandingDividerProps & {
  children: SVGProps<SVGPathElement>["children"];
}) {
  const dividerStyle: LandingDividerStyle = {
    color: background,
    display: "block",
    height: normalizeHeight(height),
    transform: `scaleY(${flip === undefined ? "var(--landing-divider-scale-y, 1)" : flip ? "-1" : "1"})`,
    transformOrigin: "center",
    width: "100%",
    ...style,
  };

  return (
    <svg
      aria-hidden="true"
      className={clsx("block w-full", className)}
      focusable="false"
      preserveAspectRatio="none"
      style={dividerStyle}
      viewBox="0 0 1440 120"
      {...props}
    >
      <g fill="currentColor">{children}</g>
    </svg>
  );
}

function normalizeHeight(height: LandingDividerProps["height"]) {
  if (typeof height === "number") {
    return `${height}px`;
  }

  return height;
}
