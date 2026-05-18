"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { toastSource } from "@/registry/sources";

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={() =>
          toast({ title: "Saved", description: "Tokens updated. Refresh to apply." })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            variant: "success",
            title: "Copied",
            description: "Source on its way to your clipboard.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            variant: "danger",
            title: "Couldn't save",
            description: "Try again in a moment.",
            action: { label: "Retry", onClick: () => {} },
          })
        }
      >
        Danger + action
      </Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Feedback"
        title="Toast"
        description="Ephemeral notifications. Stack on the bottom-right, auto-dismiss, can carry an action. No dependency, just a provider and a hook."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={<ToastDemo />}
        code={`const { toast } = useToast();

<Button onClick={() => toast({ title: "Saved", description: "Tokens updated." })}>
  Show toast
</Button>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Setup</h2>
      <p className="mb-4 text-sm text-ink-muted">
        Wrap your app once with <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">ToastProvider</code>, then call <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">useToast()</code> anywhere inside it.
      </p>
      <CodeBlock
        language="app/layout.tsx"
        code={`import { ToastProvider } from "@/components/ui/toast";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        No extra packages. Paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/toast.tsx</code>.
      </p>
      <CodeBlock code={toastSource} language="components/ui/toast.tsx" />
    </ComponentPageShell>
  );
}
