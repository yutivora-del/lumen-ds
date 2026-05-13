import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { cardSource } from "@/registry/sources";

export default function CardPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Surface"
        title="Card"
        description="A bordered container for grouping related content."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Field notes</CardTitle>
              <CardDescription>
                Monthly essays on systems and craft.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-ink-muted">
                Issue 04 ships in two weeks. Subscribe to get it first.
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button size="sm">Subscribe</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>Field notes</CardTitle>
    <CardDescription>Monthly essays on systems and craft.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Issue 04 ships in two weeks. Subscribe to get it first.</p>
  </CardContent>
  <CardFooter className="justify-end">
    <Button size="sm">Subscribe</Button>
  </CardFooter>
</Card>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <CodeBlock code={cardSource} language="components/ui/card.tsx" />
    </ComponentPageShell>
  );
}
