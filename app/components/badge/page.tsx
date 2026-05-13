import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { badgeSource } from "@/registry/sources";

export default function BadgePage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Display"
        title="Badge"
        description="Small mono-cap labels for taxonomy, status, and metadata."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Variants</h2>
      <ComponentPreview
        preview={
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Stable</Badge>
            <Badge variant="warning">Beta</Badge>
            <Badge variant="danger">Deprecated</Badge>
          </div>
        }
        code={`<Badge>Default</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Stable</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="danger">Deprecated</Badge>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">With dot</h2>
      <ComponentPreview
        preview={
          <Badge variant="outline">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </Badge>
        }
        code={`<Badge variant="outline">
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
  Live
</Badge>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <CodeBlock code={badgeSource} language="components/ui/badge.tsx" />
    </ComponentPageShell>
  );
}
