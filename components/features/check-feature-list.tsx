import Image from "next/image";

import { roundCheckIconSrc } from "@/assets";
import { CHECK_BADGE_GRADIENT } from "@/config/section-layout";
import { cn } from "@/lib/cn";

const CHECK_ICON = {
  containerSize: 24,
  iconSize: 14,
  gradient: CHECK_BADGE_GRADIENT,
} as const;

type CheckFeatureListProps = {
  items: readonly string[];
  className?: string;
  textClassName?: string;
  rowGap?: number;
};

export function CheckFeatureList({
  items,
  className,
  textClassName,
  rowGap = 20,
}: CheckFeatureListProps) {
  return (
    <ul className={cn("flex flex-col", className)} style={{ gap: rowGap }}>
      {items.map((text) => (
        <li key={text} className="flex gap-3">
          <span
            className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
            style={{
              width: CHECK_ICON.containerSize,
              height: CHECK_ICON.containerSize,
              background: CHECK_ICON.gradient,
            }}
          >
            <Image
              src={roundCheckIconSrc}
              alt=""
              width={CHECK_ICON.iconSize}
              height={CHECK_ICON.iconSize}
              className="object-contain"
              aria-hidden
            />
          </span>
          <span
            className={cn(
              "font-[family-name:var(--font-archivo)] text-[16px] leading-[1.3] font-normal tracking-normal",
              textClassName ?? "text-text-on-light-muted",
            )}
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
