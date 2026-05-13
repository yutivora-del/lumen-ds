import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-line bg-paper-raised text-ink",
        accent: "border-transparent bg-accent text-accent-fg",
        outline: "border-line text-ink-muted",
        success: "border-transparent bg-signal-success/10 text-signal-success",
        warning: "border-transparent bg-signal-warning/15 text-signal-warning",
        danger: "border-transparent bg-signal-danger/10 text-signal-danger",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
