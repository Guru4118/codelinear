"use client";

import { BREAKPOINTS, type BreakpointKey } from "@/config/breakpoints";

import { useMediaQuery } from "./use-media-query";

function minWidthQuery(px: number): string {
  return `(min-width: ${px}px)`;
}

/**
 * Returns whether the viewport is at or above the given Tailwind breakpoint.
 */
export function useBreakpoint(key: BreakpointKey): boolean | undefined {
  return useMediaQuery(minWidthQuery(BREAKPOINTS[key]));
}
