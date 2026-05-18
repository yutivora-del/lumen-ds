"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { dialogSource } from "@/registry/sources";

export default function DialogPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Overlay"
        title="Dialog"
        description="A modal surface for confirmations, forms, and short-form interactions. Built on Radix; focus is trapped, the page beneath is inert."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update your preferences</DialogTitle>
                <DialogDescription>
                  Change how field notes arrive. We&apos;ll only email when there&apos;s something
                  worth saying.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 py-2">
                <Input placeholder="hello@studio.com" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Update your preferences</DialogTitle>
      <DialogDescription>Change how field notes arrive.</DialogDescription>
    </DialogHeader>
    <Input placeholder="hello@studio.com" />
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Install <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-dialog</code>{" "}
        and paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/dialog.tsx</code>.
      </p>
      <CodeBlock code={dialogSource} language="components/ui/dialog.tsx" />
    </ComponentPageShell>
  );
}
