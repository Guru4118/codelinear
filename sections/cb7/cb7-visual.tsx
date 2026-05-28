import Image from "next/image";

import { cb7DashboardSrc } from "@/assets";
import { cn } from "@/lib/cn";

export function Cb7Visual() {
  return (
    <div
      className={cn(
        "relative z-10 flex w-full justify-center lg:justify-end",
        "lg:translate-x-[12%] xl:translate-x-[18%] 2xl:translate-x-[32%]",
      )}
    >
      <Image
        src={cb7DashboardSrc}
        alt="CB7 AML Dashboard interface on laptop"
        width={766}
        height={462}
        className="h-auto w-full max-w-none shrink-0 object-contain object-center lg:w-[min(1100px,180%)] lg:object-right"
        sizes="(max-width: 1024px) 100vw, 70vw"
      />
    </div>
  );
}
