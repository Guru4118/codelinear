import { CB7_CTA_CARD_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export type CtaCopy = {
  heading: string | readonly string[];
  paragraph: string;
  contactCta: string;
  demoCta: string;
};

export const CB7_CTA_COPY: CtaCopy = {
  heading: ["Take the full advantage", "of going paper-less now."],
  paragraph:
    "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  contactCta: "CONTACT US",
  demoCta: "REQUEST DEMO",
};

export const N7_CTA_COPY: CtaCopy = {
  heading: "Take the full advantage of going paper-less now.",
  paragraph:
    "N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
  contactCta: "CONTACT US",
  demoCta: "REQUEST DEMO",
};

export const CB7_CTA_LAYOUT = {
  background: SECTION_LAYOUT.background,
  card: {
    maxWidth: 1279,
    height: 427,
    borderRadius: 27,
    background: CB7_CTA_CARD_GRADIENT,
  },
  backgroundText: {
    content: "CB7",
    fontSize: 572.63,
    fontWeight: 500,
    lineHeight: 1.2,
    strokeWidth: 1.59,
    /** Same subtle stroke as sections/cb7 (not vivid highlight) */
    strokeColors: {
      start: "rgba(0, 140, 200, 0.14)",
      end: "rgba(0, 55, 130, 0.1)",
    },
    /** Position within card */
    top: -88,
    left: "18%",
  },
  n7BackgroundText: {
    content: "N7",
    fontSize: 572.63,
    fontScale: 0.58,
    svgMaxHeight: 480,
    fontWeight: 500,
    lineHeight: 1.2,
    strokeWidth: 1.59,
    strokeColors: {
      start: "rgba(0, 140, 200, 0.14)",
      end: "rgba(0, 55, 130, 0.1)",
    },
    top: -88,
    left: "52%",
  },
  spacing: {
    cardPaddingX: 48,
    cardPaddingY: 48,
    headingToParagraph: 24,
    contentToActions: 32,
    buttonGap: 16,
  },
} as const;
