import { N7_BLOCKS } from "@/data/n7-blocks";
import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { Cb7CtaCard, N7_CTA_COPY } from "@/sections/cb7-cta";

import { N7BackgroundText } from "./n7-background-text";
import { N7BottomGlow } from "./n7-bottom-glow";
import { N7FanDecoration } from "./n7-fan-decoration";
import { N7Row } from "./n7-row";
import { N7_LAYOUT } from "./n7.constants";

export function N7Section() {
  const { background, spacing, rootClass } = N7_LAYOUT;

  return (
    <section
      id="digital-banking"
      className={cn("relative w-full overflow-x-hidden", rootClass)}
      style={{ backgroundColor: background }}
      aria-label="Digital Banking N7"
    >
      <N7BackgroundText />
      <N7FanDecoration />
      <N7BottomGlow />

      <SectionContainer
        className={cn(SECTION_LAYOUT.sectionYClass, "relative z-[1]")}
      >
        <div className="flex flex-col" style={{ gap: spacing.sectionGap }}>
          {N7_BLOCKS.map((block, index) => (
            <N7Row key={block.id} block={block} priorityPhone={index === 0} />
          ))}
          <Cb7CtaCard
            copy={N7_CTA_COPY}
            backgroundText="n7"
            headingId="n7-cta-heading"
          />
        </div>
      </SectionContainer>
    </section>
  );
}
