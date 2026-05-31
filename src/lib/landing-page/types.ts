import type { ReactNode } from "react";

export type LandingSectionSlotEdge = "start" | "end";

export type LandingSectionSlotLayout = "inner" | "outer" | "outter" | "center";

export type LandingSectionSlotRenderProps = {
  edge: LandingSectionSlotEdge;
  sectionBg: string;
};

export type LandingSectionSlotContent =
  | ReactNode
  | ((props: LandingSectionSlotRenderProps) => ReactNode);

export type LandingSectionSlotConfig = {
  content?: LandingSectionSlotContent;
  layout?: LandingSectionSlotLayout;
  className?: string;
  size?: number | string;
};

export type LandingSectionSlots = Partial<Record<LandingSectionSlotEdge, LandingSectionSlotConfig | ReactNode | null>>;
