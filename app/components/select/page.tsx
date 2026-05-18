"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { selectSource } from "@/registry/sources";

export default function SelectPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Input"
        title="Select"
        description="A single-value picker. Trigger plus a listbox with keyboard type-ahead, ARIA semantics, and grouped options — all from Radix."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-[260px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pick a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Pick a theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Grouped</h2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-[260px]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pick a typeface" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Serif</SelectLabel>
                  <SelectItem value="fraunces">Fraunces</SelectItem>
                  <SelectItem value="ibm-plex-serif">IBM Plex Serif</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Sans</SelectLabel>
                  <SelectItem value="geist">Geist</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        }
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Pick a typeface" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Serif</SelectLabel>
      <SelectItem value="fraunces">Fraunces</SelectItem>
      <SelectItem value="ibm-plex-serif">IBM Plex Serif</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Sans</SelectLabel>
      <SelectItem value="geist">Geist</SelectItem>
      <SelectItem value="inter">Inter</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Install <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-select</code>
        {" "}and paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/select.tsx</code>.
      </p>
      <CodeBlock code={selectSource} language="components/ui/select.tsx" />
    </ComponentPageShell>
  );
}
