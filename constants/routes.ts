/**
 * Application route paths — single source of truth for navigation and links.
 */
export const ROUTES = {
  home: "/",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
