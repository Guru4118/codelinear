import { SECTION_LAYOUT } from "@/config/section-layout";

export const CASE_STUDIES_COPY = {
  heading: "Our Case Studies",
  readMore: "READ MORE",
  viewAll: "VIEW ALL",
} as const;

export const CASE_STUDIES_LAYOUT = {
  background: SECTION_LAYOUT.background,
  cardBackground: "#01141B",
  cardRadius: 16,
  cardMaxWidth: 960,
  carousel: {
    /** Desktop stacked carousel */
    minHeight: 420,
    slideOffset: 72,
  },
  colors: {
    heading: "#E9F4F9",
    cardTitle: "#E9F4F9",
    category: "#2490BB",
    brand: "#586E84",
    viewAll: "#00B4FD",
  },
  typography: {
    sectionHeading:
      "text-center font-[family-name:var(--font-archivo)] text-[clamp(1.75rem,5vw,53px)] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9] px-1",
    cardTitle:
      "font-[family-name:var(--font-archivo)] text-[clamp(1.25rem,4vw,43px)] font-normal leading-[1.2] tracking-normal text-[#E9F4F9]",
    category:
      "font-[family-name:var(--font-chivo-mono)] text-[10px] font-normal leading-[1.3] tracking-normal text-[#2490BB] uppercase sm:text-xs",
    brand:
      "font-[family-name:var(--font-roboto)] text-[clamp(1rem,2.5vw,22.51px)] leading-[1.1] font-bold text-[#586E84]",
  },
} as const;
