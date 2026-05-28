import { Button } from "@/components/ui";
import { CheckFeatureList } from "@/components/features/check-feature-list";
import { cn } from "@/lib/cn";

import { N7_LAYOUT } from "./n7.constants";

type N7ContentProps = {
  heading: string | readonly string[];
  description: string;
  bullets?: readonly string[];
  showCtas?: boolean;
  /** Hero left column uses larger heading scale per Figma. */
  variant?: "hero" | "feature";
  className?: string;
};

export function N7Content({
  heading,
  description,
  bullets,
  showCtas,
  variant = "feature",
  className,
}: N7ContentProps) {
  const { spacing, typography } = N7_LAYOUT;
  const headingLines = typeof heading === "string" ? [heading] : heading;
  const headingClass = variant === "hero" ? typography.heading : typography.subheading;

  return (
    <div className={cn("relative z-[1] flex max-w-[480px] flex-col", className)}>
      <h2 className={headingClass}>
        {headingLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className={cn(typography.body)} style={{ marginTop: spacing.headingToBody }}>
        {description}
      </p>

      {bullets?.length ? (
        <div style={{ marginTop: spacing.bodyToList }}>
          <CheckFeatureList items={bullets} />
        </div>
      ) : null}

      {showCtas ? (
        <div
          className="flex flex-col items-start"
          style={{ marginTop: spacing.bodyToCta, gap: spacing.ctaGap }}
        >
          <Button href="#request-demo" variant="primary" size="hero" width="primary">
            REQUEST DEMO
          </Button>
          <Button href="#digital-banking" variant="learnMore" />
        </div>
      ) : null}
    </div>
  );
}
