import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

import { CASE_STUDIES_COPY, CASE_STUDIES_LAYOUT } from "./case-studies.constants";

export function CaseStudiesViewAllLink() {
  const { viewAll } = CASE_STUDIES_LAYOUT.colors;

  return (
    <Link
      href="#case-studies"
      className={cn(
        "group inline-flex items-center gap-2",
        "font-[family-name:var(--font-chivo-mono)] text-[14px] leading-[1.3] font-medium tracking-normal",
        "transition-opacity hover:opacity-80",
      )}
      style={{ color: viewAll }}
    >
      <span className="inline-flex items-baseline" style={{ color: viewAll }}>
        <span className="relative inline-block pb-[3px] leading-none" style={{ color: viewAll }}>
          {CASE_STUDIES_COPY.viewAll}
          <span
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-px"
            style={{ backgroundColor: viewAll }}
            aria-hidden
          />
        </span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
        style={{ color: viewAll }}
        strokeWidth={1.75}
        aria-hidden
      />
    </Link>
  );
}
