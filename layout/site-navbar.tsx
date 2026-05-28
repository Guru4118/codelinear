import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NAVBAR_LAYOUT, SITE_NAV } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function SiteNavbar() {
  return (
    <header
      className={cn(
        "mx-auto flex w-[min(716.45px,calc(100%-2rem))] items-center justify-between gap-4",
        "rounded-[12px] border border-white/[0.08] bg-white/[0.04] py-[9px] pr-[10px] pl-[10px]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md",
      )}
      style={{ height: NAVBAR_LAYOUT.height }}
    >
      <Link
        href="/"
        className="shrink-0 font-[family-name:var(--font-archivo)] text-lg font-medium tracking-tight text-[#E9F4F9]"
        aria-label="N7 home"
      >
        N7
      </Link>

      <nav
        className="hidden min-w-0 flex-1 items-center justify-center gap-8 font-[family-name:var(--font-archivo)] text-[13px] font-normal text-[#E9F4F9]/75 sm:gap-10 md:flex lg:gap-10"
        aria-label="Primary"
      >
        {SITE_NAV.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-[#E9F4F9]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button
        href={SITE_NAV.cta.href}
        variant="nav"
        size="nav"
        width="auto"
        className="shrink-0"
      >
        {SITE_NAV.cta.label}
      </Button>
    </header>
  );
}
