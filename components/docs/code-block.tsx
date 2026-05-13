"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-line bg-paper-sunken",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          {language}
        </span>
        <button
          onClick={onCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-ink-muted transition hover:bg-paper-raised hover:text-ink"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-ink">{code}</code>
      </pre>
    </div>
  );
}
