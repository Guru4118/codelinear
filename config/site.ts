import { env } from "./env";

export const siteConfig = {
  name: "Codelinear",
  url: env.appUrl,
  defaultLocale: "en",
} as const;
