import { SECTION_GLOW_GRADIENT } from "@/config/section-layout";
import { THEME_COLORS } from "@/config/theme";
import { cn } from "@/lib/cn";

import { N7_PHONE_SIZE } from "@/data/n7-blocks";

/**
 * N7 section grid model (matches Figma):
 *
 * Desktop uses 3 tracks: [lead 1fr] [phone auto] [copy 1fr]
 * - Hero fills all three tracks.
 * - Feature rows span tracks 2–3 (same band as hero phone + right copy):
 *   - text-media: [copy 1fr | phone]
 *   - media-text: [phone | copy 1fr]
 *
 * Shared --n7-phone-w keeps the media track width identical on every row.
 */
/** Shared subtle blue gradient for N7 watermark + fan (matches n7-background-text stroke). */
export const N7_DECORATIVE_STROKE = {
  start: "rgba(0, 140, 200, 0.09)",
  end: "rgba(0, 55, 130, 0.06)",
} as const;

export function n7DecorativeGradientCss() {
  const { start, end } = N7_DECORATIVE_STROKE;
  return `linear-gradient(106.53deg, ${start} -5.68%, ${end} 86.98%)`;
}

export const N7_LAYOUT = {
  background: THEME_COLORS.surface.light,
  phoneWidth: N7_PHONE_SIZE.width,
  /** Blurred gradient orb — bottom-left (Figma). */
  bottomGlow: {
    width: 778.742919921875,
    height: 778.742919921875,
    opacity: 0.1,
    left: -364.23,
    bottom: 0,
    gradient: SECTION_GLOW_GRADIENT,
    blur: 100,
  },
  /** Decorative fan below hero left column (scaled from Figma). */
  fan: {
    figmaWidth: 1243.248779296875,
    figmaHeight: 1245.2142333984375,
    scale: 0.68,
    opacity: 0.82,
    top: 418.17,
    left: -180,
  },
  backgroundText: {
    content: "N7",
    fontSize: 572.63,
    fontWeight: 500,
    lineHeight: 1.2,
    strokeWidth: 1.59,
    top: -150,
    left: 277,
    width: 744,
    height: 687,
    strokeColors: N7_DECORATIVE_STROKE,
  },
  spacing: {
    sectionGap: 80,
    headingToBody: 20,
    bodyToList: 24,
    bodyToCta: 32,
    ctaGap: 16,
  },
  typography: {
    heading:
      "font-[family-name:var(--font-archivo)] text-[clamp(2rem,3.5vw,40px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-on-light",
    body: "font-[family-name:var(--font-archivo)] text-base leading-[1.3] font-normal tracking-normal text-text-on-light-muted",
    subheading:
      "font-[family-name:var(--font-archivo)] text-[clamp(1.25rem,2.5vw,28px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-on-light",
  },
  rootClass: "[--n7-phone-w:269px]",
  /** Hero + feature row shell (3 tracks). */
  rowShellClass: cn(
    "relative z-[1] grid w-full grid-cols-1 items-center gap-10",
    "lg:grid-cols-[minmax(0,1fr)_var(--n7-phone-w)_minmax(0,1fr)] lg:items-center lg:gap-x-12",
  ),
  pairBaseClass: cn(
    "grid min-w-0 grid-cols-1 items-center gap-10",
    "lg:col-span-2 lg:col-start-2 lg:items-center lg:gap-x-12",
  ),
  pairTextMediaClass: "lg:grid-cols-[minmax(0,1fr)_var(--n7-phone-w)]",
  pairMediaTextClass: "lg:grid-cols-[var(--n7-phone-w)_minmax(0,1fr)]",
  leadSpacerClass: "hidden min-w-0 lg:block",
  contentMaxClass: "w-full max-w-[400px]",
} as const;

export function n7PairClass(variant: "text-media" | "media-text") {
  return cn(
    N7_LAYOUT.pairBaseClass,
    variant === "text-media" ? N7_LAYOUT.pairTextMediaClass : N7_LAYOUT.pairMediaTextClass,
  );
}
