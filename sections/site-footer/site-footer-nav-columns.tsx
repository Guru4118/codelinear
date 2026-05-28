import { FOOTER_LINK_GROUPS } from "@/data/footer-content";
import { cn } from "@/lib/cn";

import { FooterNavLink } from "./footer-nav-link";
import { SITE_FOOTER_LAYOUT } from "./site-footer.constants";

export function SiteFooterNavColumns() {
  const { typography, grid } = SITE_FOOTER_LAYOUT;

  return (
    <div className={cn("grid w-full", grid.contentCols, grid.contentGap)}>
      {FOOTER_LINK_GROUPS.map((group) => (
        <nav key={group.id} aria-label={group.title} className="flex flex-col" style={{ gap: 16 }}>
          <h3 className={typography.columnHeading}>{group.title}</h3>
          <ul className="m-0 flex list-none flex-col p-0" style={{ gap: 12 }}>
            {group.links.map((link) => (
              <li key={link.label}>
                <FooterNavLink link={link} />
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
