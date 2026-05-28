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
  cardPadding: 32,
  cardMaxWidth: 960,
  carouselMinHeight: 420,
  colors: {
    heading: "#E9F4F9",
    cardTitle: "#E9F4F9",
    category: "#2490BB",
    brand: "#586E84",
    viewAll: "#00B4FD",
  },
  typography: {
    sectionHeading:
      "text-center font-[family-name:var(--font-archivo)] text-[clamp(2rem,5vw,53px)] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9]",
    cardTitle:
      "font-[family-name:var(--font-archivo)] text-[clamp(1.5rem,3.5vw,43px)] font-normal leading-[1.2] tracking-normal text-[#E9F4F9]",
    category:
      "font-[family-name:var(--font-chivo-mono)] text-xs font-normal leading-[1.3] tracking-normal text-[#2490BB] uppercase",
    brand:
      "font-[family-name:var(--font-roboto)] text-[22.51px] leading-[1.1] font-bold text-[#586E84]",
  },
} as const;
