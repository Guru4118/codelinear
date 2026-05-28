import Image from "next/image";

import { insightsDesignImgSrc } from "@/assets";
import { cn } from "@/lib/cn";

const THUMB_SIZE = 200;

type InsightCardThumbnailProps = {
  className?: string;
};

export function InsightCardThumbnail({ className }: InsightCardThumbnailProps) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        "h-[180px] w-[180px] sm:h-[200px] sm:w-[200px]",
        className,
      )}
    >
      <Image
        src={insightsDesignImgSrc}
        alt=""
        width={THUMB_SIZE}
        height={THUMB_SIZE}
        className="h-full w-full rounded-[10px] object-contain"
        sizes="(max-width: 1024px) 180px, 200px"
        draggable={false}
      />
    </div>
  );
}
