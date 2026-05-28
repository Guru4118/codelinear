import { CB7_LAYOUT } from "./cb7.constants";

/**
 * Outlined "CB7" behind content — large, left-anchored, subtle gradient stroke (Figma).
 */
export function Cb7BackgroundText() {
  const { backgroundText } = CB7_LAYOUT;
  const { content, strokeWidth, fontSize, strokeColors } = backgroundText;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-visible select-none"
      aria-hidden
    >
      <svg
        className="absolute top-1/2 left-[calc((100%-min(100vw,1440px))/2-250px)] h-[clamp(480px,82vh,780px)] w-auto max-w-none -translate-y-[42%] overflow-visible"
        viewBox="0 0 1280 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="cb7-stroke-gradient"
            gradientUnits="userSpaceOnUse"
            x1="40"
            y1="400"
            x2="1180"
            y2="80"
          >
            <stop offset="0%" stopColor={strokeColors.start} />
            <stop offset="86.98%" stopColor={strokeColors.end} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="340"
          fill="none"
          stroke="url(#cb7-stroke-gradient)"
          strokeWidth={strokeWidth}
          style={{
            fontSize: fontSize * 0.94,
            fontWeight: 500,
            fontFamily: "var(--font-archivo), Archivo, sans-serif",
            letterSpacing: 0,
          }}
        >
          {content}
        </text>
      </svg>
    </div>
  );
}
