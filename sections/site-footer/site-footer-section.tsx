import { SECTION_LAYOUT } from "@/config/section-layout";
import { SectionContainer } from "@/layout/section-container";
import { cn } from "@/lib/cn";
import { SectionGlow } from "@/shared/section-glow";

import { SiteFooterBrand } from "./site-footer-brand";
import { SiteFooterCopyright } from "./site-footer-copyright";
import { SiteFooterNavColumns } from "./site-footer-nav-columns";
import { SiteFooterOffices } from "./site-footer-offices";
import { SITE_FOOTER_LAYOUT } from "./site-footer.constants";

export function SiteFooterSection() {
  const { glow, grid } = SITE_FOOTER_LAYOUT;

  return (
    <footer
      id="site-footer"
      className="relative w-full overflow-hidden bg-surface-page"
      aria-label="Site footer"
    >
      <SectionGlow
        glow={glow}
        className="z-0 hidden lg:block"
        style={{
          bottom: glow.bottom,
          left: glow.left,
          top: "auto",
          transform: "translateX(-50%)",
        }}
      />

      <SectionContainer
        className={cn(
          SECTION_LAYOUT.sectionYClass,
          "relative z-[1] pb-12 md:pb-16 lg:pb-20",
        )}
      >
        <div className={cn("grid w-full grid-cols-1", grid.desktop)}>
          <SiteFooterBrand />

          <div className="flex min-w-0 flex-col gap-12 lg:gap-14">
            <SiteFooterOffices />
            <SiteFooterNavColumns />
            <SiteFooterCopyright style={{ marginTop: grid.mainToCopyright }} />
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
