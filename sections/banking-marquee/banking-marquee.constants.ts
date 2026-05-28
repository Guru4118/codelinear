import { PRODUCT_LABEL_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export type BankingMarqueeSegment =
  | { type: "star" }
  | { type: "product"; label: "N7" | "CB7" }
  | { type: "text"; label: string }
  | { type: "hand" };

/** One full loop of the ticker (repeated twice in the track for seamless scroll). */
export const BANKING_MARQUEE_SEQUENCE: BankingMarqueeSegment[] = [
  { type: "star" },
  { type: "product", label: "N7" },
  { type: "star" },
  { type: "text", label: "Say" },
  { type: "hand" },
  { type: "text", label: "to the new way of banking" },
  { type: "star" },
  { type: "product", label: "CB7" },
  { type: "star" },
  { type: "text", label: "Say" },
];

export const BANKING_MARQUEE_LAYOUT = {
  canvasWidth: SECTION_LAYOUT.canvasWidth,
  height: 116,
  typography: {
    fontSize: 47,
    lineHeight: 1.2,
    semiboldWeight: 600,
    mediumWeight: 500,
    productGradient: PRODUCT_LABEL_GRADIENT,
  },
  icons: {
    star: { width: 32, height: 32 },
    hand: { width: 48, height: 48 },
  },
  itemGap: 40,
  loopDurationSec: 32,
} as const;
