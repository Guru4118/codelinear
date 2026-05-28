import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type LearnMoreLinkProps = {
  href: string;
  className?: string;
};

/**
 * Underline runs the full width of "LEARN" (through the "R"), not under " MORE" or the arrow.
 */
export function LearnMoreLink({ href, className }: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-[family-name:var(--font-chivo-mono)] text-[14px] leading-[1.3] font-medium tracking-normal text-accent uppercase",
        "transition-opacity hover:opacity-80",
        "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none",
        className,
      )}
    >
      <span className="inline-flex items-baseline gap-2">
        <span className="inline-block border-b border-accent pb-[3px] leading-none">
          LEARN
        </span>
        <span className="leading-none">MORE</span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  );
}
