import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

type InsightReadMoreButtonProps = {
  href: string;
  label: string;
  className?: string;
  fullWidth?: boolean;
};

const mutedSecondaryClass = cn(
  "border-text-muted bg-transparent text-text-muted",
  "hover:border-text-muted hover:bg-white/[0.04] hover:text-text-muted",
);

export function InsightReadMoreButton({
  href,
  label,
  className,
  fullWidth,
}: InsightReadMoreButtonProps) {
  return (
    <Button
      href={href}
      variant="secondary"
      size="hero"
      width={fullWidth ? "auto" : "secondary"}
      className={cn(mutedSecondaryClass, fullWidth && "w-full max-w-none", className)}
    >
      {label}
    </Button>
  );
}
