import { cn } from "@/lib/utils";

interface DocsHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function DocsHeader({ eyebrow, title, description, className }: DocsHeaderProps) {
  return (
    <header className={cn("mb-10 border-b border-line pb-6", className)}>
      {eyebrow && (
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-display-2 text-balance">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">{description}</p>
      )}
    </header>
  );
}
