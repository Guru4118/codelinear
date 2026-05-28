import { THEME_COLORS } from "./theme";

/**
 * Global layout tokens for marketing sections — single place to adjust frame/padding.
 */
export const SECTION_LAYOUT = {
  canvasWidth: 1440,
  frameMaxWidth: 1440,
  contentMaxWidth: 1280,
  background: THEME_COLORS.surface.page,

  /** Horizontal padding: 20px → 32px → 80px (matches hero at 1440) */
  frameClass: "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20",

  /** Inner content cap */
  innerClass: "mx-auto w-full max-w-[1280px]",

  /** Default vertical rhythm between sections */
  sectionYClass: "py-16 md:py-20 lg:py-24",

  /** Bottom padding when top spacing is handled separately (e.g. hero grid) */
  sectionPaddingBottomClass: "pb-16 md:pb-20 lg:pb-24",
} as const;

export const SECTION_GLOW_GRADIENT =
  "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)" as const;

export const CHECK_BADGE_GRADIENT =
  "linear-gradient(87.28deg, #00B4FD -65.9%, #003ACE 78.4%)" as const;

export const CB7_CTA_CARD_GRADIENT =
  "linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)" as const;
