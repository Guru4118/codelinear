import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";

import { HERO_LAYOUT } from "./hero.constants";

type HeroGlowProps = {
  className?: string;
  style?: CSSProperties;
};

/** Figma glow orb — gradient fill + blur */
export function HeroGlow({ className, style }: HeroGlowProps) {
  const { glow } = HERO_LAYOUT;

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
