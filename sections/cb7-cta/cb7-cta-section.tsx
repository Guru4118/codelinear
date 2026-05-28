import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { Cb7CtaCard } from "./cb7-cta-card";

export function Cb7CtaSection() {
  return (
    <section
      id="paperless-cta"
      className={cn("relative w-full overflow-x-hidden bg-surface-page")}
      aria-labelledby="cb7-cta-heading"
    >
      <SectionContainer className={SECTION_LAYOUT.sectionYClass}>
        <Cb7CtaCard />
      </SectionContainer>
    </section>
  );
}
