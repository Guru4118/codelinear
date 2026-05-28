import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

import { SOLUTIONS_COPY, SOLUTIONS_LAYOUT } from "./solutions.constants";

export function SolutionsIntro() {
  return (
    <div className="flex max-w-[520px] flex-col">
      <h2
        id="solutions-heading"
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[clamp(1.75rem,3.5vw,37px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-default",
        )}
      >
        {SOLUTIONS_COPY.heading.map((line) => (
          <span key={line} className="block lg:whitespace-nowrap">
            {line}
          </span>
        ))}
      </h2>

      <div style={{ marginTop: SOLUTIONS_LAYOUT.headingToCta }}>
        <Button
          href="#request-demo"
          variant="secondary"
          size="hero"
          width="secondary"
        >
          {SOLUTIONS_COPY.cta}
        </Button>
      </div>
    </div>
  );
}
