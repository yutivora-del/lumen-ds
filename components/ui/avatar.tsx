import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-7 w-7 text-[10px]",
  md: "h-9 w-9 text-xs",
  lg: "h-12 w-12 text-sm",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden rounded-full border border-line bg-paper-sunken",
          sizeMap[size],
          className
        )}
        {...props}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center font-mono uppercase tracking-widest text-ink-muted">
            {fallback ?? "?"}
          </span>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";
