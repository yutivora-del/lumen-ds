"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { tooltipSource } from "@/registry/sources";
import { Info } from "lucide-react";

export default function TooltipPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Overlay"
        title="Tooltip"
        description="Quiet labels for icon-only controls. Hairline, no decoration; the kind that gets out of the way."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Info">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Tokens, not utilities.</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Quietly informative.</TooltipContent>
            </Tooltip>
          </div>
        }
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon"><Info className="h-4 w-4" /></Button>
    </TooltipTrigger>
    <TooltipContent>Tokens, not utilities.</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Note</h2>
      <p className="mb-4 text-sm text-ink-muted">
        Tooltips need a <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">TooltipProvider</code>{" "}
        somewhere up the tree. Mount one near your app root so it works everywhere; nested providers are fine.
      </p>

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Install <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-tooltip</code>
        {" "}and paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/tooltip.tsx</code>.
      </p>
      <CodeBlock code={tooltipSource} language="components/ui/tooltip.tsx" />
    </ComponentPageShell>
  );
}
