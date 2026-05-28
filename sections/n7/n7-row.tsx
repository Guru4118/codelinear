import type { N7Block, N7ContentBlock, N7FeatureBlock, N7HeroBlock } from "@/data/n7-blocks";
import { cn } from "@/lib/cn";

import { N7Content } from "./n7-content";
import { N7Phone } from "./n7-phone";
import { N7_LAYOUT, n7PairClass } from "./n7.constants";

function N7Copy({
  block,
  variant = "feature",
  align,
  className,
}: {
  block: N7ContentBlock;
  variant?: "hero" | "feature";
  align: "start" | "end";
  className?: string;
}) {
  return (
    <N7Content
      heading={block.heading}
      description={block.description}
      bullets={block.bullets}
      showCtas={block.showCtas}
      variant={variant}
      className={cn(
        N7_LAYOUT.contentMaxClass,
        align === "end" ? "lg:justify-self-end" : "lg:justify-self-start",
        className,
      )}
    />
  );
}

function N7Media({
  phone,
  align,
  priority,
}: {
  phone: N7FeatureBlock["phone"];
  align: "start" | "end";
  priority?: boolean;
}) {
  return (
    <N7Phone
      phone={phone}
      priority={priority}
      className={cn(
        "mx-auto lg:mx-0",
        align === "end" ? "lg:justify-self-end" : "lg:justify-self-start",
      )}
    />
  );
}

function N7HeroRow({ block, priority }: { block: N7HeroBlock; priority?: boolean }) {
  const { rowShellClass } = N7_LAYOUT;

  return (
    <div className={rowShellClass}>
      <N7Copy block={block.lead} variant="hero" align="start" />
      <N7Media phone={block.phone} align="start" priority={priority} />
      <N7Copy block={block.copy} align="end" />
    </div>
  );
}

function N7FeatureRow({ block }: { block: N7FeatureBlock }) {
  const { rowShellClass, leadSpacerClass } = N7_LAYOUT;
  const textFirst = block.variant === "text-media";

  const copy = <N7Copy block={block.copy} align={textFirst ? "start" : "end"} />;
  const media = <N7Media phone={block.phone} align={textFirst ? "end" : "start"} />;

  return (
    <div className={rowShellClass}>
      <div className={leadSpacerClass} aria-hidden />
      <div className={n7PairClass(block.variant)}>
        {textFirst ? (
          <>
            {copy}
            {media}
          </>
        ) : (
          <>
            {media}
            {copy}
          </>
        )}
      </div>
    </div>
  );
}

type N7RowProps = {
  block: N7Block;
  priorityPhone?: boolean;
};

export function N7Row({ block, priorityPhone }: N7RowProps) {
  if (block.variant === "hero") {
    return <N7HeroRow block={block} priority={priorityPhone} />;
  }

  return <N7FeatureRow block={block} />;
}
