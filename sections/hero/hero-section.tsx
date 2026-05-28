import { NAVBAR_LAYOUT } from "@/config/navigation";
import { SiteNavbar } from "@/layout/site-navbar";
import { cn } from "@/lib/cn";

import { HeroContent } from "./hero-content";
import { HeroGlow } from "./hero-glow";
import { HeroIllustration } from "./hero-illustration";
import { HERO_LAYOUT } from "./hero.constants";

export function HeroSection() {
  const { background } = HERO_LAYOUT;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: background }}
      aria-labelledby="hero-heading"
    >
      {/* Desktop — Figma glow at 873.13 / 204.52 on 1440 artboard */}
      <HeroGlow
        className="z-0 hidden lg:block"
        style={{
          top: HERO_LAYOUT.glow.top,
          left: `calc(${HERO_LAYOUT.glow.left} / ${HERO_LAYOUT.canvasWidth} * 100%)`,
        }}
      />

      <div
        className="flex justify-center px-4"
        style={{ paddingTop: NAVBAR_LAYOUT.topOffset }}
      >
        <SiteNavbar />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
        <div
          className={cn(
            "mx-auto grid w-full max-w-[1280px] items-center",
            "min-h-[640px] grid-cols-1 gap-12 pt-12 md:min-h-[720px] md:gap-14 md:pt-16",
            "lg:grid-cols-[48%_52%] lg:gap-10 lg:pt-[72px]",
            "pb-16 md:pb-20 lg:pb-24",
          )}
        >
          <div className="flex flex-col justify-center">
            <HeroContent />
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
