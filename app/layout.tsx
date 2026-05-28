import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";
import { AppProviders } from "@/providers";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.defaultLocale} className={`h-full ${fontVariables}`}>
      <body className="flex min-h-full flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
