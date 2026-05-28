import { n7Phone1Src, n7Phone2Src, n7Phone3Src } from "@/assets";

export type N7PhoneKey = "ph-1" | "ph-2" | "ph-3";

export const N7_PHONE_SRC: Record<N7PhoneKey, string> = {
  "ph-1": n7Phone1Src,
  "ph-2": n7Phone2Src,
  "ph-3": n7Phone3Src,
};

export const N7_PHONE_SIZE = { width: 269, height: 543 } as const;

const PLACEHOLDER_BULLETS = [
  "Streamline customer onboarding and digital journeys",
  "Automate core workflows with cloud-native architecture",
  "Stay aligned with evolving regulatory requirements",
] as const;

export type N7ContentBlock = {
  heading: string | readonly string[];
  description: string;
  bullets?: readonly string[];
  showCtas?: boolean;
};

/** Row 1 — lead | phone | copy (all three tracks). */
export type N7HeroBlock = {
  id: string;
  variant: "hero";
  lead: N7ContentBlock & { heading: readonly string[]; showCtas: true };
  phone: N7PhoneKey;
  copy: N7ContentBlock & { heading: string; bullets: readonly string[] };
};

/** Rows 2–3 — copy | phone pair on tracks 2–3 (order defines zig-zag). */
export type N7FeatureBlock = {
  id: string;
  variant: "text-media" | "media-text";
  phone: N7PhoneKey;
  copy: N7ContentBlock & { heading: string; bullets: readonly string[] };
};

export type N7Block = N7HeroBlock | N7FeatureBlock;

export const N7_BLOCKS: N7Block[] = [
  {
    id: "digital-banking-hero",
    variant: "hero",
    lead: {
      heading: ["Digital banking", "out-of-the-box"],
      description:
        "Launch modern banking experiences faster with a ready-to-run digital platform built for scale, compliance, and customer delight.",
      showCtas: true,
    },
    phone: "ph-1",
    copy: {
      heading: "Fully compliant with regulatory requirement",
      description:
        "Meet oversight expectations while shipping features quickly, with controls and reporting designed into the platform from day one.",
      bullets: PLACEHOLDER_BULLETS,
    },
  },
  {
    id: "no-legacy",
    variant: "text-media",
    phone: "ph-2",
    copy: {
      heading: "No legacy IT systems",
      description:
        "Replace brittle cores with modular services that are easier to upgrade, integrate, and operate across your institution.",
      bullets: PLACEHOLDER_BULLETS,
    },
  },
  {
    id: "no-branches",
    variant: "media-text",
    phone: "ph-3",
    copy: {
      heading: "No traditional branches",
      description:
        "Serve customers anywhere with mobile-first experiences that reduce branch dependency without sacrificing trust or support.",
      bullets: PLACEHOLDER_BULLETS,
    },
  },
];
