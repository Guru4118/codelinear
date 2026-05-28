import Image from "next/image";

import { marqueeHandWaveSrc, marqueeStarSrc } from "@/assets";
import { cn } from "@/lib/cn";

import {
  BANKING_MARQUEE_LAYOUT,
  BANKING_MARQUEE_SEQUENCE,
  type BankingMarqueeSegment,
} from "./banking-marquee.constants";

const textBaseClass = cn(
  "shrink-0 font-[family-name:var(--font-archivo)] text-[47px] leading-[1.2] tracking-normal",
);

function MarqueeSegment({ segment }: { segment: BankingMarqueeSegment }) {
  const { icons } = BANKING_MARQUEE_LAYOUT;

  switch (segment.type) {
    case "star":
      return (
        <Image
          src={marqueeStarSrc}
          alt=""
          width={icons.star.width}
          height={icons.star.height}
          className="shrink-0 object-contain opacity-70"
          aria-hidden
        />
      );
    case "hand":
      return (
        <Image
          src={marqueeHandWaveSrc}
          alt=""
          width={icons.hand.width}
          height={icons.hand.height}
          className="shrink-0 object-contain"
          aria-hidden
        />
      );
    case "product":
      return (
        <span
          className={cn(
            textBaseClass,
            "bg-clip-text font-medium text-transparent",
            "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]",
          )}
        >
          {segment.label}
        </span>
      );
    case "text":
      return (
        <span className={cn(textBaseClass, "font-semibold text-black")}>
          {segment.label}
        </span>
      );
  }
}

type BankingMarqueeSequenceProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function BankingMarqueeSequence({
  className,
  "aria-hidden": ariaHidden,
}: BankingMarqueeSequenceProps) {
  const { itemGap } = BANKING_MARQUEE_LAYOUT;

  return (
    <div
      className={cn("flex shrink-0 items-center", className)}
      style={{ gap: itemGap }}
      aria-hidden={ariaHidden}
    >
      {BANKING_MARQUEE_SEQUENCE.map((segment, index) => (
        <MarqueeSegment key={`${segment.type}-${index}`} segment={segment} />
      ))}
    </div>
  );
}
