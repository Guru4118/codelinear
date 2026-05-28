"use client";

import { m } from "framer-motion";

import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

import { CB7_COPY, CB7_LAYOUT } from "./cb7.constants";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function Cb7Content() {
  const { spacing } = CB7_LAYOUT;

  return (
    <div className="relative z-10 flex w-full max-w-[540px] flex-col">
      <m.h2
        id="cb7-heading"
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[clamp(2rem,4.2vw,52px)] leading-[1.2] font-medium tracking-normal text-text-default",
        )}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0}
      >
        {CB7_COPY.heading.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </m.h2>

      <m.p
        className={cn(
          "max-w-[460px] font-[family-name:var(--font-archivo)] text-base leading-[1.3] font-normal tracking-normal text-text-muted",
        )}
        style={{ marginTop: spacing.headingToParagraph }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0.08}
      >
        {CB7_COPY.paragraph}
      </m.p>

      <m.div
        className="flex flex-col items-start"
        style={{
          marginTop: spacing.paragraphToCta,
          gap: spacing.ctaToLearnMore,
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={0.16}
      >
        <Button href="#request-demo" variant="primary" size="hero" width="primary">
          {CB7_COPY.cta}
        </Button>
        <Button href="#core-banking" variant="learnMore" />
      </m.div>
    </div>
  );
}
