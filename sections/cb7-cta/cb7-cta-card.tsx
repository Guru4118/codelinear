import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import { Cb7CtaBackgroundText } from "./cb7-cta-background-text";
import { CB7_CTA_COPY, CB7_CTA_LAYOUT } from "./cb7-cta.constants";

export function Cb7CtaCard() {
  const { card, spacing } = CB7_CTA_LAYOUT;

  return (
    <article
      className={cn(
        "relative mx-auto grid w-full overflow-hidden",
        "grid-cols-1 items-center gap-8",
        "lg:grid-cols-[1fr_auto] lg:gap-12",
      )}
      style={{
        maxWidth: card.maxWidth,
        minHeight: card.height,
        borderRadius: card.borderRadius,
        background: card.background,
        padding: `${spacing.cardPaddingY}px ${spacing.cardPaddingX}px`,
      }}
    >
      <Cb7CtaBackgroundText />

      <div className="relative z-[1] flex w-full max-w-[560px] flex-col">
        <h2
          id="cb7-cta-heading"
          className={cn(
            "font-[family-name:var(--font-archivo)] text-[clamp(2rem,4vw,53px)] leading-[1.2] font-normal tracking-[-0.01em] text-text-default",
          )}
        >
          {CB7_CTA_COPY.heading.map((line) => (
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
          {CB7_CTA_COPY.paragraph}
        </p>
      </div>

      <div
        className={cn(
          "relative z-[1] flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto lg:shrink-0 lg:justify-self-end",
        )}
        style={{ gap: spacing.buttonGap }}
      >
        <Button href="#contact" variant="secondary" size="hero" width="secondary">
          {CB7_CTA_COPY.contactCta}
        </Button>
        <Button href="#request-demo" variant="primary" size="hero" width="primary">
          {CB7_CTA_COPY.demoCta}
        </Button>
      </div>
    </article>
  );
}
