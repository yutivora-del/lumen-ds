import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { alertSource } from "@/registry/sources";
import { Info, AlertTriangle, ShieldAlert } from "lucide-react";

export default function AlertPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Feedback"
        title="Alert"
        description="Inline messages that inform without shouting."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Variants</h2>
      <ComponentPreview
        preview={
          <div className="w-full max-w-md space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                Tokens were updated in the last release.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>
                This component is still in beta.
              </AlertDescription>
            </Alert>
            <Alert variant="danger">
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please retry.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Tokens were updated.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>This is still in beta.</AlertDescription>
</Alert>

<Alert variant="danger">
  <ShieldAlert className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <CodeBlock code={alertSource} language="components/ui/alert.tsx" />
    </ComponentPageShell>
  );
}
