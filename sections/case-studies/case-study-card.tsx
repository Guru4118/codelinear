import Image from "next/image";

import type { CaseStudyItem } from "@/data/case-studies";
import { InsightCardThumbnail } from "@/sections/insights/insight-card-thumbnail";
import { InsightReadMoreButton } from "@/sections/insights/insight-read-more-button";
import { cn } from "@/lib/cn";

import { CASE_STUDIES_COPY, CASE_STUDIES_LAYOUT } from "./case-studies.constants";

type CaseStudyCardProps = {
  item: CaseStudyItem;
  className?: string;
};

export function CaseStudyCard({ item, className }: CaseStudyCardProps) {
  const { cardBackground, cardRadius, cardPadding, typography } = CASE_STUDIES_LAYOUT;

  return (
    <article
      className={cn(
        "flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-10",
        className,
      )}
      style={{
        backgroundColor: cardBackground,
        borderRadius: cardRadius,
        padding: cardPadding,
      }}
    >
      <InsightCardThumbnail size="large" className="mx-auto lg:mx-0" />

      <div className="flex min-w-0 flex-1 flex-col">
        <span className={typography.category}>{item.category}</span>

        <h3 className={cn(typography.cardTitle, "mt-4")}>{item.title}</h3>

        <div className="mt-6 flex items-center gap-3">
          <Image
            src={item.brandLogoSrc}
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full object-cover"
          />
          <span className={typography.brand}>{item.brandName}</span>
        </div>

        <div className="mt-8">
          <InsightReadMoreButton href={item.href} label={CASE_STUDIES_COPY.readMore} />
        </div>
      </div>
    </article>
  );
}
