"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { accordionSource } from "@/registry/sources";

export default function AccordionPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Disclosure"
        title="Accordion"
        description="Vertically stacked sections that open one at a time, or several at once. Animated, keyboard-navigable, ARIA-correct."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default (single)</h2>
      <ComponentPreview
        preview={
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Lumen really free?</AccordionTrigger>
              <AccordionContent>
                Yes. MIT licensed. Copy what you need, change what you don&apos;t.
                No attribution required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to install a package?</AccordionTrigger>
              <AccordionContent>
                No. Components live in your repo. The only dependencies are the ones
                each component genuinely needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I change the tokens?</AccordionTrigger>
              <AccordionContent>
                Tokens are the source. Edit globals.css, every component follows.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        }
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is Lumen really free?</AccordionTrigger>
    <AccordionContent>Yes. MIT licensed.</AccordionContent>
  </AccordionItem>
</Accordion>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Install <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-accordion</code>
        {" "}and paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/accordion.tsx</code>.
      </p>
      <CodeBlock code={accordionSource} language="components/ui/accordion.tsx" />
    </ComponentPageShell>
  );
}
