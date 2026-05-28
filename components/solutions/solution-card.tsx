import Image from "next/image";

import type { SolutionItem } from "@/data/solutions";
import { cn } from "@/lib/cn";

import { Button } from "@/components/ui";

const CARD_LAYOUT = {
  iconSize: 40,
  headerToTitle: 20,
  titleToDescription: 16,
  descriptionToLink: 20,
} as const;

type SolutionCardProps = {
  item: SolutionItem;
  className?: string;
};

export function SolutionCard({ item, className }: SolutionCardProps) {
  const { iconSize, headerToTitle, titleToDescription, descriptionToLink } =
    CARD_LAYOUT;

  return (
    <article className={cn("flex w-full flex-col", className)}>
      {/* Icon (left) + NBFC tag (right) — same row */}
      <div className="flex w-full items-end justify-between gap-4">
        <div
          className="relative shrink-0"
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src={item.iconSrc}
            alt=""
            width={iconSize}
            height={iconSize}
            className="object-contain"
          />
        </div>

        {item.badge ? (
          <span className="shrink-0 font-[family-name:var(--font-archivo)] text-[11px] leading-none font-normal tracking-wide text-text-muted uppercase">
            {item.badge}
          </span>
        ) : null}
      </div>

      <h3
        className="font-[family-name:var(--font-archivo)] text-[22px] leading-[1.2] font-normal tracking-normal text-text-default"
        style={{ marginTop: headerToTitle }}
      >
        {item.title}
      </h3>

      <p
        className="font-[family-name:var(--font-archivo)] text-base leading-[1.3] font-normal tracking-normal text-text-muted"
        style={{ marginTop: titleToDescription }}
      >
        {item.description}
      </p>

      <div style={{ marginTop: descriptionToLink }}>
        <Button href={item.href} variant="learnMore" />
      </div>
    </article>
  );
}
