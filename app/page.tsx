import { BankingMarqueeSection } from "@/sections/banking-marquee";
import { Cb7Section } from "@/sections/cb7";
import { Cb7CtaSection } from "@/sections/cb7-cta";
import { CoreCapabilitiesSection } from "@/sections/core-capabilities";
import { HeroSection } from "@/sections/hero";
import { SolutionsSection } from "@/sections/solutions";

export default function HomePage() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      <HeroSection />
      <SolutionsSection />
      <Cb7Section />
      <CoreCapabilitiesSection />
      <Cb7CtaSection />
      <BankingMarqueeSection />
    </main>
  );
}
