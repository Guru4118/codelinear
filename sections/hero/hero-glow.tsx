import type { CSSProperties } from "react";

import { SectionGlow } from "@/shared/section-glow";

import { HERO_LAYOUT } from "./hero.constants";

type HeroGlowProps = {
  className?: string;
  style?: CSSProperties;
};

export function HeroGlow({ className, style }: HeroGlowProps) {
  return (
    <SectionGlow glow={HERO_LAYOUT.glow} className={className} style={style} />
  );
}
