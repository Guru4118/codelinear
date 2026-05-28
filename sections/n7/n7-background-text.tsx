import { N7_LAYOUT } from "./n7.constants";

export function N7BackgroundText() {
  const { backgroundText } = N7_LAYOUT;
  const { content, strokeWidth, fontSize, top, left, strokeColors } = backgroundText;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden
    >
      <svg
        className="absolute h-[min(687px,90%)] w-auto max-w-none"
        style={{ top, left }}
        viewBox="0 0 744 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="n7-stroke-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="360"
            x2="744"
            y2="40"
          >
            <stop offset="0%" stopColor={strokeColors.start} />
            <stop offset="86.98%" stopColor={strokeColors.end} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="320"
          fill="none"
          stroke="url(#n7-stroke-gradient)"
          strokeWidth={strokeWidth}
          style={{
            fontSize: fontSize * 0.52,
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
