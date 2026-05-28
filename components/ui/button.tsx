import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "@/lib/cva";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center font-[family-name:var(--font-chivo-mono)] font-normal uppercase",
    "transition-[filter,box-shadow,background-color,border-color] duration-300",
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
          "border border-[#E9F4F9] bg-transparent text-[#E9F4F9]",
          "hover:border-[#E9F4F9]/90 hover:bg-white/[0.04]",
          "focus-visible:ring-[#E9F4F9]/30",
        ],
        nav: [
          "rounded-lg px-4 py-1.5 text-[11px] tracking-wide text-white",
          "bg-[linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)]",
          "hover:brightness-110",
          "focus-visible:ring-[#00B4FD]/50",
        ],
      },
      size: {
        hero: "h-[49px] rounded-[10px] text-[15px] leading-none",
        nav: "",
        auto: "rounded-[10px] px-6 py-3 text-[15px] leading-none",
      },
      width: {
        primary: "w-[210px] max-w-full",
        secondary: "w-[208px] max-w-full",
        auto: "w-auto",
      },
    },
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
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "children">)
  | ({ href?: never } & ComponentPropsWithoutRef<"button">)
);

export function Button({
  className,
  variant,
  size,
  width,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, width }), className);

  if (href) {
    const { href: _omit, ...linkProps } = props as ComponentPropsWithoutRef<typeof Link>;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

export { buttonVariants };
