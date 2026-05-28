import Image from "next/image";

import { trustedByLogosSrc } from "@/assets";
import { cn } from "@/lib/cn";

import { HERO_COPY } from "./hero.constants";

export function HeroTrustedBy() {
  return (
    <div className="flex flex-col gap-4">
      <p
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[13px] font-normal text-text-subtle",
        )}
      >
        {HERO_COPY.trustedByLabel}
      </p>

      <div className="relative w-full max-w-[520px] opacity-70">
        <Image
          src={trustedByLogosSrc}
          alt="Trusted by Shells, SmartFinder, Zoomerr, ArtVenue, kontrastr, and Waves Marathon"
          width={622}
          height={19}
          className="h-auto w-full object-contain object-left"
          sizes="(max-width: 640px) 90vw, 520px"
        />
      </div>
    </div>
  );
}
