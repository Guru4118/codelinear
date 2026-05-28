import { SolutionCard } from "@/components/solutions/solution-card";
import { SOLUTION_ITEMS } from "@/data/solutions";
import { cn } from "@/lib/cn";

import { SOLUTIONS_LAYOUT } from "./solutions.constants";

export function SolutionsGrid() {
  const { grid } = SOLUTIONS_LAYOUT;

  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2")}
      style={{
        columnGap: grid.gapX,
        rowGap: grid.gapY,
      }}
    >
      {SOLUTION_ITEMS.map((item) => (
        <SolutionCard key={item.id} item={item} />
      ))}
    </div>
  );
}
