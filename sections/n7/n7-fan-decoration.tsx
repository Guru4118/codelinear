import Image from "next/image";

import { n7FanSrc } from "@/assets";

import { N7_LAYOUT } from "./n7.constants";

/** Vivid brand blue + glow so thin dark line art reads on #E9F4F9. */
const FAN_BLUE_FILTER = [
  "brightness(0)",
  "saturate(100%)",
  "invert(52%)",
  "sepia(100%)",
  "saturate(5000%)",
  "hue-rotate(176deg)",
  "brightness(135%)",
  "contrast(125%)",
  "drop-shadow(0 0 14px rgba(0,180,253,0.55))",
  "drop-shadow(0 0 4px rgba(0,58,206,0.4))",
].join(" ");

/**
 * Decorative fan below hero left column — tinted PNG for reliable visibility.
 */
export function N7FanDecoration() {
  const { fan } = N7_LAYOUT;
  const width = Math.round(fan.figmaWidth * fan.scale);
  const height = Math.round(fan.figmaHeight * fan.scale);

  return (
    <div
      className="pointer-events-none absolute z-0 hidden select-none lg:block"
      style={{
        top: fan.top,
        left: fan.left,
        width,
        height,
        opacity: fan.opacity,
      }}
      aria-hidden
    >
      <Image
        src={n7FanSrc}
        alt=""
        width={width}
        height={height}
        className="h-full w-full object-contain"
        style={{ filter: FAN_BLUE_FILTER }}
        sizes={`${width}px`}
        draggable={false}
      />
    </div>
  );
}
