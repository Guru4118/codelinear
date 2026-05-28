import { cn } from "@/lib/cn";

import { BANKING_MARQUEE_LAYOUT } from "./banking-marquee.constants";
import { BankingMarqueeTrack } from "./banking-marquee-track";

export function BankingMarqueeSection() {
  const { height, canvasWidth } = BANKING_MARQUEE_LAYOUT;

  return (
    <section
      id="banking-marquee"
      className={cn("relative w-full overflow-hidden bg-white")}
      style={{ height }}
      aria-label="Product announcement ticker"
    >
      <div
        className="mx-auto flex h-full w-full max-w-[1440px] items-center"
        style={{ maxWidth: canvasWidth }}
      >
        <div className="w-full overflow-hidden">
          <BankingMarqueeTrack />
        </div>
      </div>
    </section>
  );
}
