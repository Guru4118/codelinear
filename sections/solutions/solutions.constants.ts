import { SECTION_GLOW_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export const SOLUTIONS_COPY = {
  heading: ["All of our solutions are", "tailor-made to your needs"] as const,
  cta: "REQUEST DEMO",
  learnMore: "LEARN MORE",
} as const;

export const SOLUTIONS_LAYOUT = {
  background: SECTION_LAYOUT.background,
  canvasWidth: SECTION_LAYOUT.canvasWidth,
  headingToCta: 48,
  grid: {
    gapX: 48,
    gapY: 56,
  },
  glow: {
    width: 556.7720947265625,
    height: 556.7720947265625,
    opacity: 0.1,
    top: 447.5,
    left: 968.64,
    gradient: SECTION_GLOW_GRADIENT,
    blur: 200,
  },
} as const;
