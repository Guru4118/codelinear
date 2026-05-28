import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { CoreCapabilitiesContent } from "./core-capabilities-content";
import { CoreCapabilitiesVisual } from "./core-capabilities-visual";

export function CoreCapabilitiesSection() {
  return (
    <section
      id="core-capabilities"
      className={cn(
        "relative w-full overflow-x-hidden bg-surface-page",
        "min-h-[640px] lg:min-h-[720px]",
      )}
      aria-labelledby="core-capabilities-heading"
    >
      <SectionContainer
        className={cn(
          SECTION_LAYOUT.sectionYClass,
          "relative z-[1] flex min-h-[560px] items-center lg:min-h-[640px]",
        )}
      >
        <div
          className={cn(
            "grid w-full min-w-0 grid-cols-1 items-center gap-12",
            "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10",
          )}
        >
          <div className="relative">
            <CoreCapabilitiesVisual />
          </div>
          <CoreCapabilitiesContent />
        </div>
      </SectionContainer>
    </section>
  );
}
