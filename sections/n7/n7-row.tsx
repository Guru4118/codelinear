import type { N7Block, N7ContentBlock, N7FeatureBlock, N7HeroBlock } from "@/data/n7-blocks";
import { cn } from "@/lib/cn";

import { N7Content } from "./n7-content";
import { N7Phone } from "./n7-phone";
import { N7_LAYOUT, n7PairClass } from "./n7.constants";

const { mobileMediaOrder, mobileCopyOrder, contentMaxClass, rowShellClass, leadSpacerClass } =
  N7_LAYOUT;

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
        contentMaxClass,
        "mx-auto w-full max-lg:max-w-none lg:order-none",
        mobileCopyOrder,
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
  className,
}: {
  phone: N7FeatureBlock["phone"];
  align: "start" | "end";
  priority?: boolean;
  className?: string;
}) {
  return (
    <N7Phone
      phone={phone}
      priority={priority}
      className={cn(
        mobileMediaOrder,
        "mx-auto w-full max-lg:max-w-[var(--n7-phone-w)] lg:mx-0",
        align === "end" ? "lg:justify-self-end" : "lg:justify-self-start",
        className,
      )}
    />
  );
}

/**
 * Mobile: lead (heading, body, REQUEST DEMO) → phone → compliance copy.
 * Desktop: lead | phone | copy.
 */
function N7HeroRow({ block, priority }: { block: N7HeroBlock; priority?: boolean }) {
  return (
    <div className={rowShellClass}>
      <N7Copy
        block={block.lead}
        variant="hero"
        align="start"
        className="max-lg:order-1 lg:col-start-1 lg:row-start-1 lg:max-w-none"
      />
      <N7Media
        phone={block.phone}
        align="start"
        priority={priority}
        className="max-lg:order-2 lg:col-start-2 lg:row-start-1"
      />
      <N7Copy
        block={block.copy}
        variant="feature"
        align="end"
        className="max-lg:order-3 lg:col-start-3 lg:row-start-1 lg:max-w-none"
      />
    </div>
  );
}

/**
 * Mobile: phone → copy.
 * Desktop: text-media or media-text zig-zag.
 */
function N7FeatureRow({ block }: { block: N7FeatureBlock }) {
  const textFirst = block.variant === "text-media";

  return (
    <div className={rowShellClass}>
      <div className={leadSpacerClass} aria-hidden />

      <div className={n7PairClass(block.variant)}>
        <N7Media
          phone={block.phone}
          align={textFirst ? "end" : "start"}
          className={textFirst ? "lg:order-2" : "lg:order-1"}
        />
        <N7Copy
          block={block.copy}
          align={textFirst ? "start" : "end"}
          className={textFirst ? "lg:order-1" : "lg:order-2"}
        />
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
