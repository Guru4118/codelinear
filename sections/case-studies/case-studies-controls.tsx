"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/cn";

type CaseStudiesControlsProps = {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export function CaseStudiesControls({
  total,
  activeIndex,
  onPrev,
  onNext,
  onSelect,
}: CaseStudiesControlsProps) {
  return (
    <div className="flex max-w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onPrev}
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-text-muted/40",
            "text-[#00B4FD] transition-colors hover:border-[#00B4FD]/60 hover:bg-white/[0.04]",
          )}
          aria-label="Previous case study"
        >
          <ChevronLeft className="size-5 text-[#00B4FD]" strokeWidth={1.5} aria-hidden />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Case study slides">
          {Array.from({ length: total }, (_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to case study ${index + 1}`}
                onClick={() => onSelect(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  isActive ? "w-8 bg-[#00B4FD]" : "w-2 bg-text-muted/50 hover:bg-text-muted",
                )}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={onNext}
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-text-muted/40",
            "text-[#00B4FD] transition-colors hover:border-[#00B4FD]/60 hover:bg-white/[0.04]",
          )}
          aria-label="Next case study"
        >
          <ChevronRight className="size-5 text-[#00B4FD]" strokeWidth={1.5} aria-hidden />
        </button>
    </div>
  );
}
