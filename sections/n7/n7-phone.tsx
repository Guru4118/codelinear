import Image from "next/image";

import { N7_PHONE_SIZE, N7_PHONE_SRC, type N7PhoneKey } from "@/data/n7-blocks";
import { cn } from "@/lib/cn";

type N7PhoneProps = {
  phone: N7PhoneKey;
  className?: string;
  priority?: boolean;
  /** Display width cap (asset is 269×543). */
  maxWidth?: number;
};

const PHONE_ALT: Record<N7PhoneKey, string> = {
  "ph-1": "N7 digital banking app dashboard",
  "ph-2": "N7 banking app activity and charts",
  "ph-3": "N7 banking app profile screen",
};

export function N7Phone({ phone, className, priority, maxWidth = 269 }: N7PhoneProps) {
  return (
    <div className={cn("relative flex shrink-0 justify-center", className)}>
      <Image
        src={N7_PHONE_SRC[phone]}
        alt={PHONE_ALT[phone]}
        width={N7_PHONE_SIZE.width}
        height={N7_PHONE_SIZE.height}
        className="h-auto w-auto max-w-full object-contain"
        style={{ maxWidth }}
        sizes={`(max-width: 1024px) 50vw, ${maxWidth}px`}
        priority={priority}
      />
    </div>
  );
}
