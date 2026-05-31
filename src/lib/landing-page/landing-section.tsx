import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import type {
  LandingSectionSlotConfig,
  LandingSectionSlotContent,
  LandingSectionSlotEdge,
  LandingSectionSlotLayout,
  LandingSectionSlots,
} from "./types";

type LandingSectionProps = Omit<ComponentPropsWithoutRef<"section">, "children" | "content"> & {
  children?: ReactNode;
  content?: ReactNode;
  sectionBg?: string;
  contentClassName?: string;
  slots?: LandingSectionSlots;
};

type LandingSectionStyle = CSSProperties & {
  "--landing-section-bg"?: string;
};

type LandingSlotStyle = CSSProperties & {
  "--landing-slot-size"?: string;
  "--landing-divider-scale-y"?: "1" | "-1";
};

const DEFAULT_SECTION_BG = "var(--site-surface)";
const DEFAULT_SLOT_SIZE = "96px";

export default function LandingSection({
  children,
  className,
  content,
  contentClassName,
  sectionBg = DEFAULT_SECTION_BG,
  slots,
  style,
  ...props
}: LandingSectionProps) {
  const sectionStyle: LandingSectionStyle = {
    "--landing-section-bg": sectionBg,
    background: "var(--landing-section-bg)",
    ...style,
  };
  const sectionContent = content ?? children;

  return (
    <section className={clsx("relative overflow-visible", className)} style={sectionStyle} {...props}>
      <LandingSectionSlot edge="start" sectionBg={sectionBg} slot={slots?.start} />
      <div className={clsx("relative z-10", contentClassName)}>{sectionContent}</div>
      <LandingSectionSlot edge="end" sectionBg={sectionBg} slot={slots?.end} />
    </section>
  );
}

function LandingSectionSlot({
  edge,
  sectionBg,
  slot,
}: {
  edge: LandingSectionSlotEdge;
  sectionBg: string;
  slot?: LandingSectionSlots[LandingSectionSlotEdge];
}) {
  const config = normalizeSlot(slot);

  if (!config?.content) {
    return null;
  }

  const layout = normalizeLayout(config.layout);
  const size = normalizeSize(config.size);
  const slotStyle: LandingSlotStyle = {
    "--landing-slot-size": size,
    "--landing-divider-scale-y": edge === "end" ? "-1" : "1",
  };

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute left-0 right-0 z-20 h-[var(--landing-slot-size)] overflow-visible",
        getSlotPositionClassName(edge, layout),
        config.className,
      )}
      style={slotStyle}
    >
      {renderSlotContent(config.content, { edge, sectionBg })}
    </div>
  );
}

function normalizeSlot(slot: LandingSectionSlots[LandingSectionSlotEdge]): LandingSectionSlotConfig | null {
  if (!slot) {
    return null;
  }

  if (isSlotConfig(slot)) {
    return slot;
  }

  return { content: slot };
}

function isSlotConfig(slot: LandingSectionSlots[LandingSectionSlotEdge]): slot is LandingSectionSlotConfig {
  return Boolean(slot && typeof slot === "object" && !Array.isArray(slot) && "content" in slot);
}

function normalizeLayout(layout: LandingSectionSlotLayout | undefined): Exclude<LandingSectionSlotLayout, "outter"> {
  if (layout === "outter") {
    return "outer";
  }

  return layout ?? "inner";
}

function normalizeSize(size: LandingSectionSlotConfig["size"]): string {
  if (typeof size === "number") {
    return `${size}px`;
  }

  return size ?? DEFAULT_SLOT_SIZE;
}

function renderSlotContent(
  content: LandingSectionSlotContent,
  props: {
    edge: LandingSectionSlotEdge;
    sectionBg: string;
  },
) {
  if (typeof content === "function") {
    return content(props);
  }

  return content;
}

function getSlotPositionClassName(edge: LandingSectionSlotEdge, layout: Exclude<LandingSectionSlotLayout, "outter">) {
  if (edge === "start") {
    return {
      inner: "top-0",
      outer: "top-0 -translate-y-full",
      center: "top-0 -translate-y-1/2",
    }[layout];
  }

  return {
    inner: "bottom-0",
    outer: "bottom-0 translate-y-full",
    center: "bottom-0 translate-y-1/2",
  }[layout];
}
