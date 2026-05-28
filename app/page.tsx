import { HeroSection } from "@/sections/hero";
import { SolutionsSection } from "@/sections/solutions";

export default function HomePage() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      <HeroSection />
      <SolutionsSection />
    </main>
  );
}
