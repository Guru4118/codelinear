"use client";

import { cn } from "@/lib/cn";

import { BANKING_MARQUEE_LAYOUT } from "./banking-marquee.constants";
import { BankingMarqueeSequence } from "./banking-marquee-sequence";

export function BankingMarqueeTrack() {
  const { loopDurationSec, itemGap } = BANKING_MARQUEE_LAYOUT;

  return (
    <div
      className="banking-marquee-track flex w-max items-center"
      style={{
        gap: itemGap,
        animationDuration: `${loopDurationSec}s`,
      }}
    >
      <BankingMarqueeSequence className="px-10" />
      <BankingMarqueeSequence className="px-10" aria-hidden />
    </div>
  );
}
