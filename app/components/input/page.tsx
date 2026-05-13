"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { inputSource } from "@/registry/sources";

export default function InputPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Form"
        title="Input"
        description="A text field that stays out of the way."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={<Input placeholder="hello@yuti.dev" className="max-w-xs" />}
        code={`<Input placeholder="hello@yuti.dev" />`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">With label</h2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-xs space-y-1.5">
            <label className="text-xs font-medium">Email</label>
            <Input type="email" placeholder="hello@yuti.dev" />
            <p className="text-xs text-ink-muted">We&apos;ll never share it.</p>
          </div>
        }
        code={`<div className="space-y-1.5">
  <label className="text-xs font-medium">Email</label>
  <Input type="email" placeholder="hello@yuti.dev" />
  <p className="text-xs text-ink-muted">We'll never share it.</p>
</div>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">With button</h2>
      <ComponentPreview
        preview={
          <div className="flex w-full max-w-sm gap-2">
            <Input placeholder="Search components…" />
            <Button>Search</Button>
          </div>
        }
        code={`<div className="flex gap-2">
  <Input placeholder="Search components…" />
  <Button>Search</Button>
</div>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <CodeBlock code={inputSource} language="components/ui/input.tsx" />
    </ComponentPageShell>
  );
}
