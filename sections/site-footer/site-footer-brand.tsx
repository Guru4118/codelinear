import Image from "next/image";

import { footerN7BrandSrc } from "@/assets";
import { cn } from "@/lib/cn";

import { SITE_FOOTER_LAYOUT } from "./site-footer.constants";

export function SiteFooterBrand() {
  const { brand } = SITE_FOOTER_LAYOUT;

  return (
    <div
      className={cn(
        "relative flex w-full items-start justify-center overflow-hidden",
        "lg:justify-start lg:overflow-visible",
      )}
      aria-hidden
    >
      <div
        className={cn(
          "relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none",
        )}
        style={{ maxWidth: brand.maxWidth }}
      >
        <Image
          src={footerN7BrandSrc}
          alt=""
          width={744}
          height={400}
          className={cn(
            "h-auto w-full object-contain object-top",
            "max-h-[140px] sm:max-h-[180px] lg:max-h-none",
            "lg:-ml-4 lg:object-left",
          )}
          style={{ width: "100%", maxWidth: brand.desktopWidth }}
          sizes="(max-width: 1023px) 280px, 380px"
        />
      </div>
    </div>
  );
}
