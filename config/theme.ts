/**
 * Semantic color tokens — single source for text, surfaces, and accents.
 * Mirrored in styles/globals.css @theme for Tailwind utilities.
 */
export const THEME_COLORS = {
  text: {
    default: "#E9F4F9",
    muted: "rgb(233 244 249 / 0.55)",
    subtle: "rgb(233 244 249 / 0.45)",
    nav: "rgb(233 244 249 / 0.75)",
  },
  accent: "#00B4FD",
  surface: {
    page: "#000D12",
    light: "#E9F4F9",
  },
  textOnLight: {
    default: "#02171F",
    muted: "rgba(2, 23, 31, 0.55)",
  },
} as const;
