export type InsightItem = {
  id: string;
  category: string;
  title: string;
  author: string;
  date: string;
  href: string;
  featured?: boolean;
};

export const INSIGHTS_ITEMS: InsightItem[] = [
  {
    id: "transition-digital-bank-featured",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insights-transition",
    featured: true,
  },
  {
    id: "transition-digital-bank-2",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insights-transition-2",
  },
  {
    id: "transition-digital-bank-3",
    category: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
    href: "#insights-transition-3",
  },
];
