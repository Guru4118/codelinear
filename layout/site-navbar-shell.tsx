import type { ReactNode } from "react";

import { NAVBAR_LAYOUT } from "@/config/navigation";

type SiteNavbarShellProps = {
  children: ReactNode;
};

/** Fixed top nav — overlays page; main uses padding-top to clear the bar */
export function SiteNavbarShell({ children }: SiteNavbarShellProps) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      style={{ paddingTop: NAVBAR_LAYOUT.topOffset, paddingBottom: 12 }}
    >
      <div className="pointer-events-auto w-full max-w-[min(900px,100%)]">{children}</div>
    </div>
  );
}
