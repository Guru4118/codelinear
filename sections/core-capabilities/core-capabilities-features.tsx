import Image from "next/image";

import { roundCheckIconSrc } from "@/assets";
import { cn } from "@/lib/cn";

import {
  CORE_CAPABILITIES_FEATURES,
  CORE_CAPABILITIES_LAYOUT,
} from "./core-capabilities.constants";

function FeatureItem({ text }: { text: string }) {
  const { checkIcon } = CORE_CAPABILITIES_LAYOUT;

  return (
    <li className="flex gap-3">
      <span
        className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
        style={{
          width: checkIcon.containerSize,
          height: checkIcon.containerSize,
          background: checkIcon.gradient,
        }}
      >
        <Image
          src={roundCheckIconSrc}
          alt=""
          width={checkIcon.iconSize}
          height={checkIcon.iconSize}
          className="object-contain"
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "font-[family-name:var(--font-archivo)] text-[16px] leading-[1.3] font-normal tracking-normal text-text-muted",
        )}
      >
        {text}
      </span>
    </li>
  );
}

function FeatureColumn({ items }: { items: readonly string[] }) {
  const { listRowGap } = CORE_CAPABILITIES_LAYOUT.spacing;

  return (
    <ul className="flex flex-col" style={{ gap: listRowGap }}>
      {items.map((text) => (
        <FeatureItem key={text} text={text} />
      ))}
    </ul>
  );
}

export function CoreCapabilitiesFeatures() {
  const { listColumnGap } = CORE_CAPABILITIES_LAYOUT.spacing;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ columnGap: listColumnGap }}
    >
      <FeatureColumn items={CORE_CAPABILITIES_FEATURES.left} />
      <FeatureColumn items={CORE_CAPABILITIES_FEATURES.right} />
    </div>
  );
}
