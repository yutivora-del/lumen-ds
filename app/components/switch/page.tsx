"use client";
import { Switch } from "@/components/ui/switch";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { switchSource } from "@/registry/sources";

export default function SwitchPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Form"
        title="Switch"
        description="A two-state toggle for binary settings."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 text-sm">
              <Switch />
              <span>Notifications</span>
            </label>
            <label className="flex items-center gap-3 text-sm">
              <Switch defaultChecked />
              <span>Marketing emails</span>
            </label>
            <label className="flex items-center gap-3 text-sm opacity-50">
              <Switch disabled />
              <span>Disabled</span>
            </label>
          </div>
        }
        code={`<label className="flex items-center gap-3">
  <Switch />
  <span>Notifications</span>
</label>

<label className="flex items-center gap-3">
  <Switch defaultChecked />
  <span>Marketing emails</span>
</label>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <p className="mb-4 text-sm text-ink-muted">
        Requires <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-switch</code>.
      </p>
      <CodeBlock code={switchSource} language="components/ui/switch.tsx" />
    </ComponentPageShell>
  );
}
