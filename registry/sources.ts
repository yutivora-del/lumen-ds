// These are the raw source strings users will see and copy on the docs pages.
// Kept inline rather than read from disk to keep the static build simple.

export const buttonSource = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-ink/85",
        accent: "bg-accent text-accent-fg hover:bg-accent/90",
        outline: "border border-line bg-transparent text-ink hover:bg-paper-sunken",
        ghost: "text-ink hover:bg-paper-sunken",
        link: "text-ink underline-offset-4 hover:underline",
        destructive: "bg-signal-danger text-white hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";`;

export const badgeSource = `import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]",
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

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}`;

export const cardSource = `import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border border-line bg-paper-raised", className)}
    {...props}
  />
));

export const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("font-display text-xl tracking-tight", className)} {...props} />
);

export const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-ink-muted", className)} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);`;

export const inputSource = `import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-9 w-full rounded border border-line bg-paper-raised px-3 py-1 text-sm shadow-sm placeholder:text-ink-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));`;

export const alertSource = `import * as React from "react";
import { cn } from "@/lib/utils";

export const Alert = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "border-line bg-paper-raised text-ink",
    info: "border-line bg-paper-sunken text-ink",
    warning: "border-signal-warning/30 bg-signal-warning/5",
    danger: "border-signal-danger/30 bg-signal-danger/5",
  };
  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border px-4 py-3 text-sm",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};

export const AlertTitle = ({ className, ...props }) => (
  <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
);

export const AlertDescription = ({ className, ...props }) => (
  <div className={cn("text-sm text-ink-muted", className)} {...props} />
);`;

export const tabsSource = `"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center gap-1 rounded border border-line bg-paper-sunken p-1",
      className
    )}
    {...props}
  />
));

export const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-xs font-medium text-ink-muted transition-all data-[state=active]:bg-paper-raised data-[state=active]:text-ink data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));

export const TabsContent = TabsPrimitive.Content;`;

export const switchSource = `"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-line bg-paper-sunken transition-colors data-[state=checked]:bg-ink",
      className
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className="pointer-events-none block h-4 w-4 rounded-full bg-paper-raised shadow-sm transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5"
    />
  </SwitchPrimitives.Root>
));`;

export const avatarSource = `import * as React from "react";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-12 w-12 text-sm",
};

export const Avatar = ({ className, src, alt, fallback, size = "md", ...props }) => (
  <div
    className={cn(
      "relative inline-flex shrink-0 overflow-hidden rounded-full border border-line bg-paper-sunken",
      sizeMap[size],
      className
    )}
    {...props}
  >
    {src ? (
      <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
    ) : (
      <span className="flex h-full w-full items-center justify-center font-mono uppercase tracking-widest text-ink-muted">
        {fallback ?? "?"}
      </span>
    )}
  </div>
);`;
