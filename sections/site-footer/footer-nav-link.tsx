import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { FooterLink } from "@/data/footer-content";
import { cn } from "@/lib/cn";

type FooterNavLinkProps = {
  link: FooterLink;
};

export function FooterNavLink({ link }: FooterNavLinkProps) {
  return (
    <Link
      href={link.href}
      className={cn(
        "group flex w-full items-center justify-between gap-3",
        "font-[family-name:var(--font-archivo)] text-[14px] leading-[1.3] font-normal tracking-normal",
        "text-text-muted transition-colors hover:text-text-default",
      )}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      <span>{link.label}</span>
      <ArrowRight
        className="size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  );
}
