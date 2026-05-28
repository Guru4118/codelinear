import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

export function InsightsReadAllLink() {
  return (
    <Link
      href="#insights"
      className={cn(
        "group relative z-[2] inline-flex items-center gap-2",
        "font-[family-name:var(--font-chivo-mono)] text-[14px] leading-[1.3] font-medium tracking-normal",
        "text-[#00B4FD] transition-opacity hover:opacity-80",
      )}
    >
      <span className="inline-flex items-baseline text-[#00B4FD]">
        <span className="relative inline-block pb-[3px] leading-none text-[#00B4FD]">
          READ ALL
          <span
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-[#00B4FD]"
            aria-hidden
          />
        </span>
        <span className="ml-2 leading-none text-[#00B4FD]">INSIGHTS</span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 text-[#00B4FD] transition-transform group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  );
}
