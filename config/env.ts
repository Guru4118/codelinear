/**
 * Typed environment access.
 * Extend as new variables are introduced; keep secrets server-only.
 */

function requireEnv(key: string, value: string | undefined): string {
  if (value === undefined || value === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",

  appUrl:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;

export { requireEnv };
