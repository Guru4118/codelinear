/**
 * Motion constants and defaults — no visual presets until design is finalized.
 */
export const MOTION_EASING = {
  default: [0.25, 0.1, 0.25, 1] as const,
} as const;

export const MOTION_DURATION = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
} as const;
