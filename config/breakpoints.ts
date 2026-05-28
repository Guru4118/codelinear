/**
 * Breakpoint keys aligned with tailwind.config.ts screens.
 * Use for JS-driven responsive logic (hooks, matchMedia, SSR-safe checks).
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

export const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS) as BreakpointKey[];
