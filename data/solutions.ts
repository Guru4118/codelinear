export type SolutionItem = {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
};

export const SOLUTION_ITEMS: SolutionItem[] = [
  {
    id: "core-banking",
    iconSrc: "/images/core-banking.png",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    href: "#core-banking",
  },
  {
    id: "digital-banking",
    iconSrc: "/images/dig-banking.png",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#digital-banking",
  },
  {
    id: "open-banking",
    iconSrc: "/images/open-banking.png",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    href: "#open-banking",
  },
  {
    id: "loan-origination",
    iconSrc: "/images/loan-banking.png",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#loan-origination",
    badge: "NBFC",
  },
  {
    id: "loan-management",
    iconSrc: "/images/loan-management.png",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#loan-management",
    badge: "NBFC",
  },
];
