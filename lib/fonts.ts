import { Archivo, Chivo_Mono } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
});

export const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const fontVariables = `${archivo.variable} ${chivoMono.variable}`;
