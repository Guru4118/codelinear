import Image from "next/image";

import { insightsDesignImgSrc } from "@/assets";
import { cn } from "@/lib/cn";

const THUMB_SIZES = {
  default: {
    box: "h-[180px] w-[180px] sm:h-[200px] sm:w-[200px]",
    img: 200,
    sizes: "(max-width: 1024px) 180px, 200px",
  },
  large: {
    box: "h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px]",
    img: 300,
    sizes: "(max-width: 1024px) 240px, 300px",
  },
} as const;

type InsightCardThumbnailProps = {
  className?: string;
  size?: keyof typeof THUMB_SIZES;
};

export function InsightCardThumbnail({
  className,
  size = "default",
}: InsightCardThumbnailProps) {
  const thumb = THUMB_SIZES[size];

  return (
    <div
      className={cn("relative flex shrink-0 items-center justify-center", thumb.box, className)}
    >
      <Image
        src={insightsDesignImgSrc}
        alt=""
        width={thumb.img}
        height={thumb.img}
        className="h-full w-full rounded-[10px] object-contain"
        sizes={thumb.sizes}
        draggable={false}
      />
    </div>
  );
}
