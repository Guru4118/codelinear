import type { CSSProperties } from "react";

import { FOOTER_COPYRIGHT } from "@/data/footer-content";
import { cn } from "@/lib/cn";

import { SITE_FOOTER_LAYOUT } from "./site-footer.constants";

type SiteFooterCopyrightProps = {
  className?: string;
  style?: CSSProperties;
};

export function SiteFooterCopyright({ className, style }: SiteFooterCopyrightProps) {
  return (
    <p className={cn(SITE_FOOTER_LAYOUT.typography.copyright, className)} style={style}>
      {FOOTER_COPYRIGHT}
    </p>
  );
}
