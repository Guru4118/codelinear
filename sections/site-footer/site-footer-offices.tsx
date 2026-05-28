import { FOOTER_OFFICES } from "@/data/footer-content";
import { cn } from "@/lib/cn";

import { SITE_FOOTER_LAYOUT } from "./site-footer.constants";

export function SiteFooterOffices() {
  const { typography, grid } = SITE_FOOTER_LAYOUT;

  return (
    <div className={cn("grid w-full", grid.contentCols, grid.contentGap)}>
      {FOOTER_OFFICES.map((office) => (
        <address
          key={office.id}
          className="flex flex-col not-italic"
          style={{ gap: 12 }}
        >
          <h3 className={typography.columnHeading}>{office.city}</h3>
          <div className={cn("flex flex-col", typography.officeBody)} style={{ gap: 4 }}>
            {office.lines.map((line) => (
              <p key={line} className="m-0">
                {line}
              </p>
            ))}
          </div>
        </address>
      ))}
    </div>
  );
}
