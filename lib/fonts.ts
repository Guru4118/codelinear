import { Archivo, Chivo_Mono, Roboto } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

export const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
  display: "swap",
});

export const fontVariables = `${archivo.variable} ${chivoMono.variable} ${roboto.variable}`;
