import Image from "next/image";

import { heroIllustrationSrc } from "@/assets";
import { cn } from "@/lib/cn";

import { HeroGlow } from "./hero-glow";
import { HERO_LAYOUT } from "./hero.constants";

export function HeroIllustration() {
  const { illustration } = HERO_LAYOUT;

  return (
    <div
      className="relative mx-auto w-full lg:mx-0 lg:ml-auto"
      style={{ maxWidth: illustration.width }}
    >
      {/* Mobile / tablet — centered glow behind image */}
      <HeroGlow
        className={cn(
          "top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 lg:hidden",
        )}
      />

      <div className="relative z-10">
        <Image
          src={heroIllustrationSrc}
          alt="Banking app interface with customer using mobile banking"
          width={illustration.width}
          height={illustration.height}
          className="h-auto w-full object-contain"
          priority
          sizes="(max-width: 1024px) 92vw, 630px"
        />
      </div>
    </div>
  );
}
