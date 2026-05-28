import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion type aliases — use when defining variants and transitions.
 */
export type MotionVariants = Variants;

export type MotionTransition = Transition;

export type MotionVariantDefinition = {
  variants: MotionVariants;
  transition?: MotionTransition;
};
