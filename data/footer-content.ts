export type FooterOffice = {
  id: string;
  city: string;
  lines: readonly string[];
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterLinkGroup = {
  id: string;
  title: string;
  links: readonly FooterLink[];
};

export const FOOTER_OFFICES: readonly FooterOffice[] = [
  {
    id: "london",
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "26 Main Road Sundridge, TN14 6EP,",
      "England, United Kingdom.",
    ],
  },
  {
    id: "dubai",
    city: "Dubai",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "Jumeirah Business, Center 5 Cluster W,",
      "Jumeirah Lakes Towers, Dubai,",
      "United Arab Emirates.",
    ],
  },
  {
    id: "pune",
    city: "Pune",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "Nirmal, Anand Nagar, Suncity Road,",
      "Pune, Maharashtra, 411041, India.",
    ],
  },
] as const;

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    id: "solutions",
    title: "Solutions",
    links: [
      { label: "Core Banking CB7", href: "#core-banking" },
      { label: "Digital Banking N7", href: "#digital-banking" },
      { label: "Open Banking", href: "#solutions" },
      { label: "Loan Origination System", href: "#solutions" },
      { label: "Loan Management System", href: "#solutions" },
      { label: "Digital Transformation", href: "#solutions" },
    ],
  },
  {
    id: "n7-banking",
    title: "N7 Banking",
    links: [
      { label: "About Us", href: "#" },
      { label: "Solutions", href: "#solutions" },
      { label: "Contact", href: "#contact" },
      { label: "Company", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Insights", href: "#insights" },
      { label: "Core Team", href: "#" },
      { label: "Brand Center", href: "#" },
    ],
  },
  {
    id: "socials",
    title: "Our Socials",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        external: true,
      },
      {
        label: "X",
        href: "https://x.com",
        external: true,
      },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT =
  "Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]" as const;
