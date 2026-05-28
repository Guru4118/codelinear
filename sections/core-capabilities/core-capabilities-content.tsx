import { cn } from "@/lib/cn";

import { CoreCapabilitiesFeatures } from "./core-capabilities-features";
import {
  CORE_CAPABILITIES_COPY,
  CORE_CAPABILITIES_LAYOUT,
} from "./core-capabilities.constants";

export function CoreCapabilitiesContent() {
  const { spacing } = CORE_CAPABILITIES_LAYOUT;
  const [headingLine1, headingLine2] = CORE_CAPABILITIES_COPY.heading;

  return (
    <div className="relative z-10 flex w-full flex-col lg:max-w-[600px] lg:justify-self-end">
      <h2
        id="core-capabilities-heading"
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[27px] leading-[1.3] font-normal tracking-normal text-text-default",
        )}
      >
        <span className="block">{headingLine1}</span>
        <span className="block">{headingLine2}</span>
      </h2>

      <p
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[16px] leading-[1.3] font-semibold tracking-normal text-text-default",
        )}
        style={{ marginTop: spacing.headingToSubheading }}
      >
        {CORE_CAPABILITIES_COPY.subheading}
      </p>

      <div style={{ marginTop: spacing.subheadingToList }}>
        <CoreCapabilitiesFeatures />
      </div>
    </div>
  );
}
