import { SECTION_GLOW_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export const INSIGHTS_COPY = {
  heading: "Get yourself up-to-speed on all the things happening in fintech",
  insightsCta: "INSIGHTS",
  readMore: "READ MORE",
  readAll: "READ ALL INSIGHTS",
} as const;

export const INSIGHTS_LAYOUT = {
  background: SECTION_LAYOUT.background,
  canvasWidth: SECTION_LAYOUT.canvasWidth,
  cardBackground: "#01141B",
  colors: {
    category: "#64A8C4",
    readAll: "#00B4FD",
  },
  cardRadius: 14,
  cardPadding: 28,
  headingToCta: 40,
  grid: {
    gap: 20,
    featuredToRow: 20,
  },
  glow: {
    width: 720,
    height: 720,
    opacity: 0.12,
    gradient: SECTION_GLOW_GRADIENT,
    blur: 200,
    top: "42%",
    left: "22%",
  },
  typography: {
    heading:
      "font-[family-name:var(--font-archivo)] text-[clamp(2rem,4vw,53px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-default",
    cardTitle:
      "font-[family-name:var(--font-archivo)] text-[clamp(1.125rem,2vw,22px)] leading-[1.25] font-normal tracking-normal text-text-default",
    category:
      "font-[family-name:var(--font-chivo-mono)] text-[11px] leading-none font-normal tracking-wide uppercase text-[#64A8C4]",
    meta: "font-[family-name:var(--font-archivo)] text-[13px] leading-[1.3] font-normal text-[#64A8C4]",
  },
} as const;
