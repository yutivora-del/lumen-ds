"use client";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { buttonSource } from "@/registry/sources";
import { ArrowRight, Download } from "lucide-react";

export default function ButtonPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Action"
        title="Button"
        description="The workhorse. Six variants, four sizes, full keyboard support."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        }
        code={`<Button>Default</Button>
<Button variant="accent">Accent</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Sizes</h2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Download"><Download className="h-4 w-4" /></Button>
          </div>
        }
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Download className="h-4 w-4" /></Button>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">With icon</h2>
      <ComponentPreview
        preview={
          <Button>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        }
        code={`<Button>
  Continue
  <ArrowRight className="h-4 w-4" />
</Button>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Paste the source into <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/button.tsx</code>.
        You&apos;ll need <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-slot</code>,{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">class-variance-authority</code>,{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">clsx</code>, and{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">tailwind-merge</code>.
      </p>
      <CodeBlock code={buttonSource} language="components/ui/button.tsx" />
    </ComponentPageShell>
  );
}
