import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import { Cb7CtaBackgroundText } from "./cb7-cta-background-text";
import { N7CtaBackgroundText } from "./n7-cta-background-text";
import { CB7_CTA_COPY, CB7_CTA_LAYOUT, type CtaCopy } from "./cb7-cta.constants";

export type CtaCardBackgroundText = false | "cb7" | "n7";
export type CtaCardVariant = "default" | "flat";

type Cb7CtaCardProps = {
  copy?: CtaCopy;
  headingId?: string;
  variant?: CtaCardVariant;
  /** @deprecated Use `backgroundText` instead */
  showBackgroundText?: boolean;
  backgroundText?: CtaCardBackgroundText;
};

function resolveBackgroundText(
  backgroundText: CtaCardBackgroundText | undefined,
  showBackgroundText: boolean | undefined,
): CtaCardBackgroundText {
  if (backgroundText !== undefined) {
    return backgroundText;
  }
  if (showBackgroundText === false) {
    return false;
  }
  return "cb7";
}

export function Cb7CtaCard({
  copy = CB7_CTA_COPY,
  headingId = "cb7-cta-heading",
  variant = "default",
  showBackgroundText,
  backgroundText,
}: Cb7CtaCardProps) {
  const resolvedBackground = resolveBackgroundText(backgroundText, showBackgroundText);
  const { card, spacing } = CB7_CTA_LAYOUT;
  const isFlat = variant === "flat";
  const headingLines = typeof copy.heading === "string" ? [copy.heading] : copy.heading;

  return (
    <article
      className={cn(
        "relative mx-auto grid w-full overflow-hidden",
        "grid-cols-1 items-center gap-8",
        "lg:grid-cols-[1fr_auto] lg:gap-12",
        isFlat && "bg-transparent",
      )}
      style={{
        maxWidth: card.maxWidth,
        ...(isFlat
          ? {}
          : {
              minHeight: card.height,
              borderRadius: card.borderRadius,
              background: card.background,
              padding: `${spacing.cardPaddingY}px ${spacing.cardPaddingX}px`,
            }),
      }}
    >
      {resolvedBackground === "cb7" ? <Cb7CtaBackgroundText /> : null}
      {resolvedBackground === "n7" ? <N7CtaBackgroundText /> : null}

      <div className="relative z-[1] flex w-full max-w-[560px] flex-col">
        <h2
          id={headingId}
          className={cn(
            "font-[family-name:var(--font-archivo)] text-[clamp(2rem,4vw,53px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-default",
          )}
        >
          {headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p
          className={cn(
            "max-w-[480px] font-[family-name:var(--font-archivo)] text-[16px] leading-[1.3] font-normal tracking-normal text-text-muted",
          )}
          style={{ marginTop: spacing.headingToParagraph }}
        >
          {copy.paragraph}
        </p>
      </div>

      <div
        className={cn(
          "relative z-[1] flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto lg:shrink-0 lg:justify-self-end",
        )}
        style={{ gap: spacing.buttonGap }}
      >
        <Button href="#contact" variant="secondary" size="hero" width="secondary">
          {copy.contactCta}
        </Button>
        <Button href="#request-demo" variant="primary" size="hero" width="primary">
          {copy.demoCta}
        </Button>
      </div>
    </article>
  );
}
