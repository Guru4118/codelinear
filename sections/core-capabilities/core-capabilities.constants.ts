import { CHECK_BADGE_GRADIENT, SECTION_LAYOUT } from "@/config/section-layout";

export const CORE_CAPABILITIES_COPY = {
  heading: [
    "Run a more efficient, flexible,and digitally",
    "connected corebanking system",
  ] as const,
  subheading: "What you will get:",
} as const;

export const CORE_CAPABILITIES_FEATURES = {
  left: [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ] as const,
  right: [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ] as const,
} as const;

export const CORE_CAPABILITIES_LAYOUT = {
  background: SECTION_LAYOUT.background,
  checkIcon: {
    containerSize: 24,
    iconSize: 14,
    gradient: CHECK_BADGE_GRADIENT,
  },
  spacing: {
    headingToSubheading: 28,
    subheadingToList: 32,
    listColumnGap: 48,
    listRowGap: 20,
  },
  dashboard: {
    maxWidth: 1100,
  },
} as const;
