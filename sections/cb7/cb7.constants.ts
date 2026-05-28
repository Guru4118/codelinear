import { SECTION_LAYOUT } from "@/config/section-layout";

export const CB7_COPY = {
  heading: ["A complete cloud-based", "core banking."] as const,
  paragraph:
    "Faster time to market with our cloud-based core banking services",
  cta: "REQUEST DEMO",
} as const;

export const CB7_LAYOUT = {
  background: SECTION_LAYOUT.background,
  canvasWidth: SECTION_LAYOUT.canvasWidth,
  spacing: {
    headingToParagraph: 28,
    paragraphToCta: 40,
    ctaToLearnMore: 20,
  },
  backgroundText: {
    content: "CB7",
    fontSize: 572.63,
    fontWeight: 500,
    lineHeight: 1.2,
    strokeWidth: 1.59,
    /** Subtle stroke — readable outline, not vivid (Figma) */
    strokeColors: {
      start: "rgba(0, 140, 200, 0.14)",
      end: "rgba(0, 55, 130, 0.1)",
    },
  },
  dashboard: {
    src: "/images/Dashboard-image.png",
    maxWidth: 1100,
  },
} as const;
