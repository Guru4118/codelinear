"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/cn";

import { HeroCtaButtons } from "./hero-cta-buttons";
import { HeroTrustedBy } from "./hero-trusted-by";
import { HERO_COPY } from "./hero.constants";

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

export function HeroContent() {
  return (
    <div className="flex w-full max-w-[620px] flex-col">
      <m.h1
        id="hero-heading"
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[clamp(2.25rem,5vw,67px)] leading-[1.2] font-medium tracking-[-0.01em] text-text-default",
        )}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {HERO_COPY.heading.map((line) => (
          <span key={line} className="block lg:whitespace-nowrap">
            {line}
          </span>
        ))}
      </m.h1>

      <m.p
        className={cn(
          "mt-7 max-w-[520px] font-[family-name:var(--font-archivo)] text-base leading-[1.3] font-normal text-text-muted",
        )}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.08}
      >
        {HERO_COPY.paragraph.map((line) => (
          <span key={line} className="block lg:whitespace-nowrap">
            {line}
          </span>
        ))}
      </m.p>

      <m.div
        className="mt-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.16}
      >
        <HeroCtaButtons />
      </m.div>

      <m.div
        className="mt-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.24}
      >
        <HeroTrustedBy />
      </m.div>
    </div>
  );
}
