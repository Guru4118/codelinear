import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { HeroContent } from "./hero-content";
import { HeroGlow } from "./hero-glow";
import { HeroIllustration } from "./hero-illustration";
import { HERO_LAYOUT } from "./hero.constants";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-surface-page"
      aria-labelledby="hero-heading"
    >
      <HeroGlow
        className="z-0 hidden lg:block"
        style={{
          top: HERO_LAYOUT.glow.top,
          left: `calc(${HERO_LAYOUT.glow.left} / ${HERO_LAYOUT.canvasWidth} * 100%)`,
        }}
      />

      <SectionContainer
        className={SECTION_LAYOUT.sectionPaddingBottomClass}
        innerClassName={cn(
          "grid min-h-[640px] grid-cols-1 items-center gap-12 pt-12 md:min-h-[720px] md:gap-14 md:pt-16",
          "lg:grid-cols-[48%_52%] lg:gap-10 lg:pt-[72px]",
        )}
      >
        <div className="flex flex-col justify-center">
          <HeroContent />
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </SectionContainer>
    </section>
  );
}
