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
  const { cardBackground, cardRadius, typography } = CASE_STUDIES_LAYOUT;

  return (
    <article
      className={cn(
        "flex w-full min-w-0 flex-col gap-6 p-5 sm:gap-8 sm:p-7 lg:flex-row lg:items-center lg:gap-10 lg:p-8",
        className,
      )}
      style={{
        backgroundColor: cardBackground,
        borderRadius: cardRadius,
      }}
    >
      <InsightCardThumbnail
        size="large"
        className={cn(
          "mx-auto w-full max-w-[220px] sm:max-w-[260px]",
          "lg:mx-0 lg:max-w-none lg:shrink-0",
        )}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <span className={typography.category}>{item.category}</span>

        <h3 className={cn(typography.cardTitle, "mt-3 sm:mt-4")}>{item.title}</h3>

        <div className="mt-4 flex items-center gap-3 sm:mt-6">
          <Image
            src={item.brandLogoSrc}
            alt=""
            width={40}
            height={40}
            className="size-9 shrink-0 rounded-full object-cover sm:size-10"
          />
          <span className={cn(typography.brand, "min-w-0 break-words")}>{item.brandName}</span>
        </div>

        <div className="mt-6 sm:mt-8">
          <InsightReadMoreButton href={item.href} label={CASE_STUDIES_COPY.readMore} />
        </div>
      </div>
    </article>
  );
}
