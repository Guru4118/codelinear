/** Primary nav — labels map to homepage section `id`s */
export const SITE_NAV = {
  links: [
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "CORE BANKING", href: "#core-banking" },
    { label: "CAPABILITIES", href: "#core-capabilities" },
    { label: "DIGITAL BANKING", href: "#digital-banking" },
    { label: "INSIGHTS", href: "#insights" },
    { label: "CASE STUDIES", href: "#case-studies" },
  ],
  cta: { label: "REQUEST DEMO", href: "#request-demo" },
} as const;

export const NAVBAR_LAYOUT = {
  width: 900,
  height: 47,
  borderRadius: 12,
  paddingY: 9,
  paddingX: 10,
  topOffset: 31,
  /** Solid bar — no backdrop-blur (avoids milky white over light sections) */
  background: "#2F2F2F",
  linkColor: "#E9F4F9",
  /** Fixed nav: topOffset + bar height + breathing room */
  fixedMainOffset: 31 + 47 + 16,
} as const;
