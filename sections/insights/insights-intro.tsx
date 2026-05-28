import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import { INSIGHTS_COPY, INSIGHTS_LAYOUT } from "./insights.constants";

export function InsightsIntro() {
  const { typography, headingToCta } = INSIGHTS_LAYOUT;

  return (
    <div className="flex max-w-[480px] flex-col lg:max-w-[520px]">
      <h2 id="insights-heading" className={cn(typography.heading)}>
        {INSIGHTS_COPY.heading}
      </h2>

      <div style={{ marginTop: headingToCta }}>
        <Button href="#insights" variant="secondary" size="hero" width="secondary">
          {INSIGHTS_COPY.insightsCta}
        </Button>
      </div>
    </div>
  );
}
