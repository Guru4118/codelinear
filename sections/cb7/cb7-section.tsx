import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { Cb7BackgroundText } from "./cb7-background-text";
import { Cb7Content } from "./cb7-content";
import { Cb7Visual } from "./cb7-visual";

export function Cb7Section() {
  return (
    <section
      id="core-banking"
      className={cn(
        "relative w-full overflow-visible bg-surface-page",
        "min-h-[680px] lg:min-h-[760px]",
      )}
      aria-labelledby="cb7-heading"
    >
      <Cb7BackgroundText />

      <SectionContainer
        className={cn(
          SECTION_LAYOUT.sectionYClass,
          "relative z-[1] flex min-h-[600px] items-center lg:min-h-[680px]",
        )}
        innerClassName="overflow-visible"
      >
        <div
          className={cn(
            "grid w-full grid-cols-1 items-center gap-10",
            "lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.18fr)] lg:gap-6",
          )}
        >
          <Cb7Content />
          <Cb7Visual />
        </div>
      </SectionContainer>
    </section>
  );
}
