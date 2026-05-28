import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NAVBAR_LAYOUT, SITE_NAV } from "@/config/navigation";
import { cn } from "@/lib/cn";

const navLinkClass = cn(
  "font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal uppercase",
  "whitespace-nowrap transition-opacity hover:opacity-80",
);

export function SiteNavbar() {
  const { background, borderRadius, height, linkColor, paddingX, paddingY } = NAVBAR_LAYOUT;

  return (
    <header
      className={cn(
        "flex w-full items-center justify-between gap-3 sm:gap-4",
        "border border-white/[0.06]",
      )}
      style={{
        height,
        borderRadius,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        backgroundColor: background,
      }}
    >
      <Link
        href="/"
        className="shrink-0 font-[family-name:var(--font-archivo)] text-lg font-medium tracking-tight text-text-default"
        aria-label="N7 home"
      >
        N7
      </Link>

      <nav
        className={cn(
          "hidden min-w-0 flex-1 items-center justify-center gap-5 md:flex lg:gap-7",
        )}
        aria-label="Primary"
      >
        {SITE_NAV.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={navLinkClass}
            style={{ color: linkColor }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button
        href={SITE_NAV.cta.href}
        variant="secondary"
        size="auto"
        width="auto"
        className="h-[33px] shrink-0 rounded-lg px-4 text-[11px] leading-none tracking-wide"
      >
        {SITE_NAV.cta.label}
      </Button>
    </header>
  );
}
