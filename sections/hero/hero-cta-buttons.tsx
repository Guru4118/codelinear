import { Button } from "@/components/ui/button";

import { HERO_COPY } from "./hero.constants";

export function HeroCtaButtons() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <Button href="#request-demo" variant="primary" size="hero" width="primary">
        {HERO_COPY.primaryCta}
      </Button>

      <Button href="#contact" variant="secondary" size="hero" width="secondary">
        {HERO_COPY.secondaryCta}
      </Button>
    </div>
  );
}
