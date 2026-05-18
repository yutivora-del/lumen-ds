"use client";
import * as React from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { commandSource } from "@/registry/sources";
import { FileText, Settings, User, Mail, Calendar, Smile } from "lucide-react";

function CommandDemo() {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <div className="w-full max-w-md">
      <Command onItemSelect={setSelected} className="shadow-sm">
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem id="cal" value="Calendar — schedule events">
              <Calendar className="h-4 w-4" />
              Calendar
            </CommandItem>
            <CommandItem id="emo" value="Search emoji">
              <Smile className="h-4 w-4" />
              Search emoji
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem id="prof" value="Profile" shortcut="⌘P">
              <User className="h-4 w-4" />
              Profile
            </CommandItem>
            <CommandItem id="mail" value="Mail preferences" shortcut="⌘M">
              <Mail className="h-4 w-4" />
              Mail
            </CommandItem>
            <CommandItem id="set" value="Settings" shortcut="⌘,">
              <Settings className="h-4 w-4" />
              Settings
            </CommandItem>
            <CommandItem id="docs" value="Documentation">
              <FileText className="h-4 w-4" />
              Docs
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      {selected && (
        <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          Selected · {selected}
        </p>
      )}
    </div>
  );
}

export default function CommandPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Input"
        title="Command"
        description="A keyboard-first palette. Filterable list with groups, shortcuts, and arrow-key navigation — the bones of any ⌘K menu."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={<CommandDemo />}
        code={`<Command onItemSelect={(id) => console.log(id)}>
  <CommandInput placeholder="Type a command or search…" />
  <CommandList>
    <CommandGroup heading="Suggestions">
      <CommandItem id="cal" value="Calendar">
        <Calendar className="h-4 w-4" /> Calendar
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem id="prof" value="Profile" shortcut="⌘P">
        <User className="h-4 w-4" /> Profile
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Keyboard</h2>
      <ul className="space-y-1.5 text-sm text-ink-muted">
        <li><kbd className="rounded border border-line bg-paper-sunken px-1.5 py-0.5 font-mono text-[10px]">↑ ↓</kbd> Move between items</li>
        <li><kbd className="rounded border border-line bg-paper-sunken px-1.5 py-0.5 font-mono text-[10px]">⏎</kbd> Select the active item</li>
        <li>Typing filters items by their <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">value</code> prop.</li>
      </ul>

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        No extra packages. Paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/command.tsx</code>.
        Pair it with the Dialog component to build a full ⌘K experience.
      </p>
      <CodeBlock code={commandSource} language="components/ui/command.tsx" />
    </ComponentPageShell>
  );
}
