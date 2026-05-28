import Image from "next/image";

import { coreCapabilitiesDashboardSrc } from "@/assets";
import { cn } from "@/lib/cn";

export function CoreCapabilitiesVisual() {
  return (
    <div
      className={cn(
        "relative z-10 flex w-full justify-center lg:justify-start",
        "lg:-translate-x-[24%] xl:-translate-x-[32%] 2xl:-translate-x-[44%]",
      )}
    >
      <Image
        src={coreCapabilitiesDashboardSrc}
        alt="CKYC Dashboard interface on laptop"
        width={792}
        height={462}
        className="h-auto w-full max-w-none shrink-0 object-contain object-center lg:w-[min(1100px,190%)] lg:object-left"
        sizes="(max-width: 1024px) 100vw, 70vw"
      />
    </div>
  );
}
