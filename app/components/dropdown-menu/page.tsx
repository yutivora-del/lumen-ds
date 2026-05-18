"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { dropdownMenuSource } from "@/registry/sources";
import { MoreHorizontal, Copy, Edit, Trash } from "lucide-react";

export default function DropdownMenuPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Overlay"
        title="Dropdown Menu"
        description="Action lists anchored to a trigger. Keyboard navigation, sub-menus, separators, and checkbox/radio items — all from one primitive."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Actions">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Edit className="h-3.5 w-3.5" />
                Edit
                <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="h-3.5 w-3.5" />
                Duplicate
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-signal-danger focus:text-signal-danger">
                <Trash className="h-3.5 w-3.5" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-52">
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edit <DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuItem>Duplicate <DropdownMenuShortcut>⌘D</DropdownMenuShortcut></DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-signal-danger">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        Install <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">@radix-ui/react-dropdown-menu</code>
        {" "}and paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/dropdown-menu.tsx</code>.
      </p>
      <CodeBlock code={dropdownMenuSource} language="components/ui/dropdown-menu.tsx" />
    </ComponentPageShell>
  );
}
