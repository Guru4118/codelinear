export type CaseStudyItem = {
  id: string;
  category: string;
  title: string;
  brandName: string;
  brandLogoSrc: string;
  href: string;
};

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "zoomerr",
    category: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    brandName: "Zoomerr",
    brandLogoSrc: "/images/zoomer.png",
    href: "#case-study-zoomerr",
  },
  {
    id: "north-bank",
    category: "GETTING STARTED",
    title: "Scaling digital onboarding for a regional retail bank",
    brandName: "NorthBank",
    brandLogoSrc: "/images/zoomer.png",
    href: "#case-study-north-bank",
  },
  {
    id: "payflow",
    category: "GETTING STARTED",
    title: "Launching instant payments with a cloud-native core",
    brandName: "PayFlow",
    brandLogoSrc: "/images/zoomer.png",
    href: "#case-study-payflow",
  },
  {
    id: "union-credit",
    category: "GETTING STARTED",
    title: "Modernizing lending workflows for faster approvals",
    brandName: "Union Credit",
    brandLogoSrc: "/images/zoomer.png",
    href: "#case-study-union-credit",
  },
];
