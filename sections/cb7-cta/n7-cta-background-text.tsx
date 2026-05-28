import { CB7_CTA_LAYOUT } from "./cb7-cta.constants";

export function N7CtaBackgroundText() {
  const { n7BackgroundText } = CB7_CTA_LAYOUT;
  const { content, strokeWidth, fontSize, fontScale, svgMaxHeight, strokeColors, top, left } =
    n7BackgroundText;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] select-none"
      aria-hidden
    >
      <svg
        className="absolute w-auto max-w-none"
        style={{ top, left, height: `min(${svgMaxHeight}px, 125%)` }}
        viewBox="0 0 900 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="n7-cta-stroke-gradient"
            gradientUnits="userSpaceOnUse"
            x1="40"
            y1="380"
            x2="860"
            y2="60"
          >
            <stop offset="0%" stopColor={strokeColors.start} />
            <stop offset="86.98%" stopColor={strokeColors.end} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="320"
          fill="none"
          stroke="url(#n7-cta-stroke-gradient)"
          strokeWidth={strokeWidth}
          style={{
            fontSize: fontSize * fontScale,
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
