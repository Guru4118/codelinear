export const HERO_COPY = {
  heading: ["The new foundation", "of modern banking"] as const,
  paragraph: [
    "We drive innovation and growth, provide seamless",
    "customer experience and operational excellence",
  ] as const,
  primaryCta: "REQUEST DEMO",
  secondaryCta: "CONTACT US",
  trustedByLabel: "Trusted By:",
} as const;

import { SECTION_GLOW_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

/** Figma-extracted layout tokens — hero-scoped only */
export const HERO_LAYOUT = {
  canvasWidth: SECTION_LAYOUT.canvasWidth,
  background: SECTION_LAYOUT.background,
  contentMaxWidth: 560,
  columnSplit: { left: "48%", right: "52%" },
  illustration: { width: 630, height: 337 },
  /** Figma glow layer — 1440px artboard coordinates */
  glow: {
    width: 340,
    height: 340,
    opacity: 0.5,
    top: 234,
    left: 903,
    gradient: SECTION_GLOW_GRADIENT,
    blur: 85,
  },
  spacing: {
    headingToParagraph: 28,
    paragraphToButtons: 40,
    buttonsToTrusted: 48,
  },
} as const;
