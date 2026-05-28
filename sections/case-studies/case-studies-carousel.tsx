"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CASE_STUDIES } from "@/data/case-studies";
import { cn } from "@/lib/cn";

import { CaseStudiesControls } from "./case-studies-controls";
import { CaseStudiesViewAllLink } from "./case-studies-view-all-link";
import { CaseStudyCard } from "./case-study-card";
import { CASE_STUDIES_LAYOUT } from "./case-studies.constants";

function getOffset(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export function CaseStudiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CASE_STUDIES.length;
  const { cardMaxWidth, carouselMinHeight } = CASE_STUDIES_LAYOUT;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <div className="mt-14 flex w-full flex-col items-center">
      <div
        className="relative w-full max-w-[1100px]"
        style={{ minHeight: carouselMinHeight }}
        aria-live="polite"
      >
        {CASE_STUDIES.map((item, index) => {
          const offset = getOffset(index, activeIndex, total);
          if (Math.abs(offset) > 1) return null;

          const isActive = offset === 0;

          return (
            <motion.div
              key={item.id}
              className={cn(
                "absolute top-1/2 left-1/2 w-full max-w-full px-4 sm:px-8",
                !isActive && "pointer-events-none",
              )}
              style={{ maxWidth: cardMaxWidth, zIndex: isActive ? 20 : 10 - Math.abs(offset) }}
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 72}px)`,
                y: "-50%",
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.45,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={!isActive}
            >
              <CaseStudyCard item={item} />
            </motion.div>
          );
        })}

        <AnimatePresence mode="wait">
          <motion.div
            key={CASE_STUDIES[activeIndex]?.id}
            className="sr-only"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {CASE_STUDIES[activeIndex]?.title}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-30 mt-10 w-full max-w-[1100px] px-4 sm:px-8">
        <div className="flex justify-center">
          <CaseStudiesControls
            total={total}
            activeIndex={activeIndex}
            onPrev={goPrev}
            onNext={goNext}
            onSelect={goTo}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <CaseStudiesViewAllLink />
        </div>
      </div>
    </div>
  );
}
