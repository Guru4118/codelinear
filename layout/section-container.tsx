import type { ReactNode } from "react";

import { SECTION_LAYOUT } from "@/config/section-layout";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionContainer({
  children,
  className,
  innerClassName,
}: SectionContainerProps) {
  return (
    <div className={cn(SECTION_LAYOUT.frameClass, className)}>
      <div className={cn(SECTION_LAYOUT.innerClass, innerClassName)}>{children}</div>
    </div>
  );
}
