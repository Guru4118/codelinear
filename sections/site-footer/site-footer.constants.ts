import { SECTION_GLOW_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export const SITE_FOOTER_LAYOUT = {
  background: SECTION_LAYOUT.background,
  grid: {
    desktop: "lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-14",
    contentCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    contentGap: "gap-x-8 gap-y-10 lg:gap-x-10 lg:gap-y-12",
    mainToCopyright: 48,
  },
  brand: {
    maxWidth: 420,
    mobileMaxHeight: 140,
    desktopWidth: 380,
  },
  glow: {
    width: 880,
    height: 420,
    opacity: 0.1,
    gradient: SECTION_GLOW_GRADIENT,
    blur: 180,
    bottom: "-35%",
    left: "50%",
  },
  typography: {
    columnHeading:
      "font-[family-name:var(--font-archivo)] text-[18px] leading-[1.3] font-medium tracking-normal text-text-default",
    officeBody:
      "font-[family-name:var(--font-archivo)] text-[14px] leading-[1.45] font-normal tracking-normal text-text-muted",
    copyright:
      "font-[family-name:var(--font-chivo-mono)] text-[11px] leading-[1.5] font-normal tracking-normal text-text-subtle",
  },
} as const;
