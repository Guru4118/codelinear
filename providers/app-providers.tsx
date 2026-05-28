"use client";

import type { ReactNode } from "react";

import { MotionProvider } from "./motion-provider";

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Root client provider composition — add theme, analytics, etc. here as needed.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return <MotionProvider>{children}</MotionProvider>;
}
