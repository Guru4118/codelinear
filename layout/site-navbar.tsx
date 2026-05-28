"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NAVBAR_LAYOUT, SITE_NAV } from "@/config/navigation";
import { cn } from "@/lib/cn";

const navLinkClass = cn(
  "font-[family-name:var(--font-chivo-mono)] text-[12px] font-normal leading-[1.3] tracking-normal uppercase",
  "transition-opacity hover:opacity-80",
);

export function SiteNavbar() {
  const { background, borderRadius, height, linkColor, paddingX, paddingY } = NAVBAR_LAYOUT;
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
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
          onClick={close}
        >
          N7
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-6"
          aria-label="Primary"
        >
          {SITE_NAV.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(navLinkClass, "whitespace-nowrap")}
              style={{ color: linkColor }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            href={SITE_NAV.cta.href}
            variant="secondary"
            size="auto"
            width="auto"
            className="hidden h-[33px] shrink-0 rounded-lg px-4 text-[11px] leading-none tracking-wide sm:inline-flex"
            onClick={close}
          >
            {SITE_NAV.cta.label}
          </Button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-text-default hover:bg-white/[0.06] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </header>

      <div
        id="mobile-nav-panel"
        className={cn("fixed inset-0 z-[60] lg:hidden", open ? "" : "pointer-events-none")}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={close}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
        />

        <nav
          className={cn(
            "absolute top-0 right-0 flex h-full w-[min(100%,300px)] flex-col",
            "border-l border-white/[0.08] bg-[#2F2F2F] px-6 py-6",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobile primary"
        >
          <div className="mb-6 flex justify-end">
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg text-text-default hover:bg-white/[0.06]"
              onClick={close}
              aria-label="Close menu"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {SITE_NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(navLinkClass, "flex min-h-11 items-center text-[13px]")}
                  style={{ color: linkColor }}
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <Button
              href={SITE_NAV.cta.href}
              variant="secondary"
              size="hero"
              width="primary"
              className="w-full max-w-none"
              onClick={close}
            >
              {SITE_NAV.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
