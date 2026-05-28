import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";
import { SectionGlow } from "@/shared/section-glow";

import { SolutionsGrid } from "./solutions-grid";
import { SolutionsIntro } from "./solutions-intro";
import { SOLUTIONS_LAYOUT } from "./solutions.constants";

export function SolutionsSection() {
  const { canvasWidth, glow } = SOLUTIONS_LAYOUT;

  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden bg-surface-page"
      aria-labelledby="solutions-heading"
    >
      <SectionGlow
        glow={glow}
        className="z-0 hidden lg:block"
        style={{
          top: glow.top,
          left: `calc(${glow.left} / ${canvasWidth} * 100%)`,
        }}
      />

      <SectionContainer className={SECTION_LAYOUT.sectionYClass}>
        <div
          className={cn(
            "grid grid-cols-1 items-start gap-12 lg:gap-16",
            "lg:grid-cols-2",
          )}
        >
          <SolutionsIntro />

          <SolutionsGrid />
        </div>
      </SectionContainer>
    </section>
  );
}
