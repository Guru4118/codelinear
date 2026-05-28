import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";

import { Cb7CtaCard } from "./cb7-cta-card";
import { CB7_CTA_COPY, type CtaCopy } from "./cb7-cta.constants";
import type { CtaCardBackgroundText } from "./cb7-cta-card";

type Cb7CtaSectionProps = {
  copy?: CtaCopy;
  showBackgroundText?: boolean;
  backgroundText?: CtaCardBackgroundText;
  id?: string;
  headingId?: string;
  className?: string;
};

export function Cb7CtaSection({
  copy = CB7_CTA_COPY,
  showBackgroundText,
  backgroundText = "cb7",
  id = "paperless-cta",
  headingId,
  className,
}: Cb7CtaSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("relative w-full overflow-x-hidden bg-surface-page", className)}
      aria-labelledby={resolvedHeadingId}
    >
      <SectionContainer className={SECTION_LAYOUT.sectionYClass}>
        <Cb7CtaCard
          copy={copy}
          backgroundText={backgroundText}
          showBackgroundText={showBackgroundText}
          headingId={resolvedHeadingId}
        />
      </SectionContainer>
    </section>
  );
}
