import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "@/lib/cva";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center font-[family-name:var(--font-chivo-mono)] font-normal uppercase",
    "transition-[filter,box-shadow,background-color,border-color,opacity] duration-300",
    "focus-visible:ring-2 focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]",
          "hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,100,253,0.35)]",
          "focus-visible:ring-[#00B4FD]/50",
        ],
        secondary: [
          "border border-text-default bg-transparent text-text-default",
          "hover:border-text-default/90 hover:bg-white/[0.04]",
          "focus-visible:ring-text-default/30",
        ],
        nav: [
          "rounded-lg px-4 py-1.5 text-[11px] tracking-wide text-white",
          "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]",
          "hover:brightness-110",
          "focus-visible:ring-[#00B4FD]/50",
        ],
        learnMore: [
          "group h-auto w-auto justify-start gap-2 rounded-none border-0 bg-transparent p-0",
          "text-[14px] leading-[1.3] font-medium tracking-normal text-accent",
          "hover:opacity-80",
          "focus-visible:ring-accent/40",
        ],
      },
      size: {
        hero: "h-[49px] rounded-[10px] text-[15px] leading-none",
        nav: "",
        link: "h-auto p-0",
        auto: "rounded-[10px] px-6 py-3 text-[15px] leading-none",
      },
      width: {
        primary: "w-[210px] max-w-full",
        secondary: "w-[208px] max-w-full",
        auto: "w-auto",
      },
    },
    compoundVariants: [
      {
        variant: "learnMore",
        size: "link",
        width: "auto",
        className: "inline-flex",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "hero",
      width: "primary",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonVariants & {
  className?: string;
  children?: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "children">)
  | ({ href?: never } & ComponentPropsWithoutRef<"button">)
);

function LearnMoreLabel() {
  return (
    <>
      <span className="inline-flex items-baseline">
        {/* Underline under LEAR only — N and MORE are not underlined */}
        <span className="relative inline-block w-max pb-[3px] leading-none">
          LEAR
          <span
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-accent"
            aria-hidden
          />
        </span>
        <span className="leading-none">N</span>
        <span className="ml-2 leading-none">MORE</span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
        strokeWidth={1.75}
        aria-hidden
      />
    </>
  );
}

export function Button({
  className,
  variant,
  size,
  width,
  children,
  href,
  ...props
}: ButtonProps) {
  const isLearnMore = variant === "learnMore";
  const resolvedSize = isLearnMore ? (size ?? "link") : size;
  const resolvedWidth = isLearnMore ? (width ?? "auto") : width;
  const content = isLearnMore ? (children ?? <LearnMoreLabel />) : children;

  const classes = cn(
    buttonVariants({ variant, size: resolvedSize, width: resolvedWidth }),
    className,
  );

  if (href) {
    const {
      href: _hrefProp,
      ...linkProps
    } = props as ComponentPropsWithoutRef<typeof Link> & { href?: string };
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}

export { buttonVariants };
