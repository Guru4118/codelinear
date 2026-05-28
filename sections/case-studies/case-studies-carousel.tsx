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

type CarouselFooterProps = {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  className?: string;
};

function CarouselFooter({
  total,
  activeIndex,
  onPrev,
  onNext,
  onSelect,
  className,
}: CarouselFooterProps) {
  return (
    <div className={cn("relative z-30 w-full", className)}>
      <div className="flex justify-center">
        <CaseStudiesControls
          total={total}
          activeIndex={activeIndex}
          onPrev={onPrev}
          onNext={onNext}
          onSelect={onSelect}
        />
      </div>
      <div className="mt-6 flex justify-center sm:justify-end">
        <CaseStudiesViewAllLink />
      </div>
    </div>
  );
}

/** Mobile / tablet — single card in document flow (no stacked absolute slides). */
function CaseStudiesCarouselMobile({
  activeIndex,
  onPrev,
  onNext,
  onSelect,
  total,
}: {
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const active = CASE_STUDIES[activeIndex];

  if (!active) return null;

  return (
    <div className="mt-8 flex w-full min-w-0 flex-col gap-8 sm:mt-10 lg:hidden" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-w-0"
        >
          <CaseStudyCard item={active} />
        </motion.div>
      </AnimatePresence>

      <CarouselFooter
        total={total}
        activeIndex={activeIndex}
        onPrev={onPrev}
        onNext={onNext}
        onSelect={onSelect}
      />
    </div>
  );
}

/** Desktop — stacked peek carousel. */
function CaseStudiesCarouselDesktop({
  activeIndex,
  onPrev,
  onNext,
  onSelect,
  total,
}: {
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const { cardMaxWidth, carousel } = CASE_STUDIES_LAYOUT;
  const { minHeight, slideOffset } = carousel;

  return (
    <div className="mt-14 hidden w-full flex-col items-center lg:flex" aria-live="polite">
      <div
        className="relative w-full max-w-[1100px]"
        style={{ minHeight }}
      >
        {CASE_STUDIES.map((item, index) => {
          const offset = getOffset(index, activeIndex, total);
          if (Math.abs(offset) > 1) return null;

          const isActive = offset === 0;

          return (
            <motion.div
              key={item.id}
              className={cn(
                "absolute top-1/2 left-1/2 w-full max-w-full px-6 xl:px-8",
                !isActive && "pointer-events-none",
              )}
              style={{ maxWidth: cardMaxWidth, zIndex: isActive ? 20 : 10 - Math.abs(offset) }}
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * slideOffset}px)`,
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

      <CarouselFooter
        className="mt-10 max-w-[1100px] px-6 xl:px-8"
        total={total}
        activeIndex={activeIndex}
        onPrev={onPrev}
        onNext={onNext}
        onSelect={onSelect}
      />
    </div>
  );
}

export function CaseStudiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CASE_STUDIES.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  const controls = {
    activeIndex,
    total,
    onPrev: goPrev,
    onNext: goNext,
    onSelect: goTo,
  };

  return (
    <>
      <CaseStudiesCarouselMobile {...controls} />
      <CaseStudiesCarouselDesktop {...controls} />
    </>
  );
}
