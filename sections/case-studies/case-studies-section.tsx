import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { CaseStudiesCarousel } from "./case-studies-carousel";
import { CASE_STUDIES_COPY, CASE_STUDIES_LAYOUT } from "./case-studies.constants";

export function CaseStudiesSection() {
  const { typography } = CASE_STUDIES_LAYOUT;

  return (
    <section
      id="case-studies"
      className="relative w-full overflow-hidden bg-surface-page"
      aria-labelledby="case-studies-heading"
    >
      <SectionContainer className={SECTION_LAYOUT.sectionYClass}>
        <h2 id="case-studies-heading" className={cn(typography.sectionHeading)}>
          {CASE_STUDIES_COPY.heading}
        </h2>

        <CaseStudiesCarousel />
      </SectionContainer>
    </section>
  );
}
