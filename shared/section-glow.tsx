import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";

export type SectionGlowConfig = {
  width: number;
  height: number;
  opacity: number;
  gradient: string;
  blur: number;
};

type SectionGlowProps = {
  glow: SectionGlowConfig;
  className?: string;
  style?: CSSProperties;
};

/** Figma-style gradient orb with blur — used across sections */
export function SectionGlow({ glow, className, style }: SectionGlowProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: glow.width,
        height: glow.height,
        opacity: glow.opacity,
        background: glow.gradient,
        filter: `blur(${glow.blur}px)`,
        backdropFilter: `blur(${glow.blur}px)`,
        WebkitBackdropFilter: `blur(${glow.blur}px)`,
        ...style,
      }}
    />
  );
}
