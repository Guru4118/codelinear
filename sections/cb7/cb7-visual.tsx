import Image from "next/image";

import { cb7DashboardSrc } from "@/assets";
import { cn } from "@/lib/cn";

import { CB7_LAYOUT } from "./cb7.constants";

export function Cb7Visual() {
  const { dashboard } = CB7_LAYOUT;

  return (
    <div
      className={cn(
        "relative z-10 flex w-full justify-center lg:justify-end",
        "lg:translate-x-[14%] xl:translate-x-[24%] 2xl:translate-x-[42%]",
        "lg:-mr-10 xl:-mr-16 2xl:-mr-24",
      )}
    >
      <Image
        src={cb7DashboardSrc}
        alt="CB7 AML Dashboard interface on laptop"
        width={766}
        height={462}
        className="h-auto w-full max-w-none object-contain object-center lg:object-right"
        style={{ maxWidth: dashboard.maxWidth }}
        sizes="(max-width: 1024px) 95vw, 820px"
      />
    </div>
  );
}
