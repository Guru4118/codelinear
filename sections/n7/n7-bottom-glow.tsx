import { SectionGlow } from "@/shared/section-glow";

import { N7_LAYOUT } from "./n7.constants";

/** Soft blue blur at the bottom-left of the N7 section (Figma). */
export function N7BottomGlow() {
  const { bottomGlow } = N7_LAYOUT;

  return (
    <SectionGlow
      glow={bottomGlow}
      className="z-0 hidden lg:block"
      style={{
        left: bottomGlow.left,
        bottom: bottomGlow.bottom,
        top: "auto",
      }}
    />
  );
}
