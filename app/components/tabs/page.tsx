"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { tabsSource } from "@/registry/sources";

export default function TabsPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Navigation"
        title="Tabs"
        description="Switch between related surfaces without leaving the page."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="rounded-lg border border-line bg-paper-raised p-5 text-sm text-ink-muted">
                Overview content.
              </div>
            </TabsContent>
            <TabsContent value="usage">
              <div className="rounded-lg border border-line bg-paper-raised p-5 text-sm text-ink-muted">
                Usage examples.
              </div>
            </TabsContent>
            <TabsContent value="api">
              <div className="rounded-lg border border-line bg-paper-raised p-5 text-sm text-ink-muted">
                API reference.
              </div>
            </TabsContent>
          </Tabs>
        }
        code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="usage">Usage</TabsTrigger>
    <TabsTrigger value="api">API</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content.</TabsContent>
  <TabsContent value="usage">Usage examples.</TabsContent>
  <TabsContent value="api">API reference.</TabsContent>
</Tabs>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <p className="mb-4 text-sm text-ink-muted">
        Requires <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-tabs</code>.
      </p>
      <CodeBlock code={tabsSource} language="components/ui/tabs.tsx" />
    </ComponentPageShell>
  );
}
