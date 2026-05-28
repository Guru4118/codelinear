import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";
import { SectionGlow } from "@/shared/section-glow";

import { InsightsGrid } from "./insights-grid";
import { InsightsIntro } from "./insights-intro";
import { INSIGHTS_LAYOUT } from "./insights.constants";

export function InsightsSection() {
  const { glow } = INSIGHTS_LAYOUT;

  return (
    <section
      id="insights"
      className="relative w-full overflow-hidden bg-surface-page"
      aria-labelledby="insights-heading"
    >
      <SectionGlow
        glow={glow}
        className="z-0 hidden lg:block"
        style={{
          top: glow.top,
          left: glow.left,
          transform: "translate(-50%, -50%)",
        }}
      />

      <SectionContainer className={SECTION_LAYOUT.sectionYClass}>
        <div
          className={cn(
            "relative z-[1] grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16",
          )}
        >
          <InsightsIntro />
          <InsightsGrid />
        </div>
      </SectionContainer>
    </section>
  );
}
