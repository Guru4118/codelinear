import type { InsightItem } from "@/data/insights";
import { cn } from "@/lib/cn";

import { InsightCardThumbnail } from "./insight-card-thumbnail";
import { InsightReadMoreButton } from "./insight-read-more-button";
import { INSIGHTS_COPY, INSIGHTS_LAYOUT } from "./insights.constants";

type InsightCardProps = {
  item: InsightItem;
  variant?: "featured" | "compact";
  className?: string;
};

export function InsightCard({ item, variant = "compact", className }: InsightCardProps) {
  const { cardBackground, cardRadius, cardPadding, typography } = INSIGHTS_LAYOUT;
  const isFeatured = variant === "featured";

  return (
    <article
      className={cn(
        "flex h-full w-full flex-col",
        !isFeatured && "min-h-[300px]",
        isFeatured && "lg:flex-row lg:items-center lg:gap-8",
        className,
      )}
      style={{
        backgroundColor: cardBackground,
        borderRadius: cardRadius,
        padding: cardPadding,
      }}
    >
      {isFeatured ? (
        <InsightCardThumbnail className="mx-auto lg:mx-0" />
      ) : null}

      <div className={cn("flex min-w-0 flex-1 flex-col", isFeatured && "justify-center")}>
        <span className={typography.category}>{item.category}</span>

        <h3 className={cn(typography.cardTitle, "mt-4")}>{item.title}</h3>

        <p className={cn(typography.meta, "mt-3")}>
          {item.author} {item.date}
        </p>

        <div className={cn(isFeatured ? "mt-8" : "mt-auto pt-6")}>
          <InsightReadMoreButton
            href={item.href}
            label={INSIGHTS_COPY.readMore}
            fullWidth={!isFeatured}
          />
        </div>
      </div>
    </article>
  );
}
