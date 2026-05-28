import { INSIGHTS_ITEMS } from "@/data/insights";

import { InsightCard } from "./insight-card";
import { InsightsReadAllLink } from "./insights-read-all-link";
import { INSIGHTS_LAYOUT } from "./insights.constants";

export function InsightsGrid() {
  const featured = INSIGHTS_ITEMS.find((item) => item.featured);
  const compact = INSIGHTS_ITEMS.filter((item) => !item.featured);
  const { grid } = INSIGHTS_LAYOUT;

  return (
    <div className="flex w-full min-w-0 flex-col" style={{ gap: grid.gap }}>
      {featured ? <InsightCard item={featured} variant="featured" /> : null}

      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        style={{ gap: grid.gap }}
      >
        {compact.map((item) => (
          <InsightCard key={item.id} item={item} variant="compact" />
        ))}
      </div>

      <div className="relative z-[2] flex justify-end pt-4">
        <InsightsReadAllLink />
      </div>
    </div>
  );
}
