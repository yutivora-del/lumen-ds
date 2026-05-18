"use client";
import Link from "next/link";
import { ArrowUpRight, MoreHorizontal, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";

type ComponentMeta = {
  name: string;
  href: string;
  category: string;
  description: string;
  preview: React.ReactNode;
  status?: "new";
};

const components: ComponentMeta[] = [
  {
    name: "Button",
    href: "/components/button",
    category: "Action",
    description: "Six variants, four sizes.",
    preview: (
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="accent">Accent</Button>
        <Button size="sm" variant="outline">Outline</Button>
      </div>
    ),
  },
  {
    name: "Badge",
    href: "/components/badge",
    category: "Display",
    description: "Mono caps for taxonomy.",
    preview: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success">Success</Badge>
      </div>
    ),
  },
  {
    name: "Card",
    href: "/components/card",
    category: "Layout",
    description: "A surface for content.",
    preview: (
      <div className="w-full max-w-[200px] rounded border border-line bg-paper p-3 text-left">
        <p className="font-display text-sm">Field notes</p>
        <p className="mt-1 text-[11px] text-ink-muted">Monthly essays.</p>
      </div>
    ),
  },
  {
    name: "Input",
    href: "/components/input",
    category: "Input",
    description: "Text fields, restrained.",
    preview: <Input placeholder="hello@yuti.dev" className="max-w-[220px]" />,
  },
  {
    name: "Alert",
    href: "/components/alert",
    category: "Feedback",
    description: "Inline messages.",
    preview: (
      <Alert className="max-w-[260px]">
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Tokens updated.</AlertDescription>
      </Alert>
    ),
  },
  {
    name: "Tabs",
    href: "/components/tabs",
    category: "Navigation",
    description: "Switching surfaces.",
    preview: (
      <div className="inline-flex gap-1 rounded border border-line bg-paper-sunken p-1">
        <span className="rounded-sm bg-paper-raised px-3 py-1 text-xs shadow-sm">Preview</span>
        <span className="rounded-sm px-3 py-1 text-xs text-ink-muted">Code</span>
      </div>
    ),
  },
  {
    name: "Switch",
    href: "/components/switch",
    category: "Input",
    description: "Boolean toggle.",
    preview: (
      <div className="flex items-center gap-3">
        <Switch defaultChecked />
        <span className="text-xs text-ink-muted">Theme · dark</span>
      </div>
    ),
  },
  {
    name: "Avatar",
    href: "/components/avatar",
    category: "Display",
    description: "User representation.",
    preview: (
      <div className="flex items-center gap-2">
        <Avatar fallback="Y" />
        <Avatar fallback="A" size="lg" />
        <Avatar fallback="K" size="sm" />
      </div>
    ),
  },
  {
    name: "Dialog",
    href: "/components/dialog",
    category: "Overlay",
    description: "Modal surface with focus trap.",
    status: "new",
    preview: (
      <div className="relative h-24 w-full max-w-[240px]">
        <div className="absolute inset-0 rounded border border-line bg-paper-sunken" />
        <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded border border-line bg-paper-raised p-2 shadow-md">
          <p className="text-[11px] font-medium">Confirm</p>
          <p className="text-[10px] text-ink-muted">Save changes?</p>
        </div>
      </div>
    ),
  },
  {
    name: "Dropdown Menu",
    href: "/components/dropdown-menu",
    category: "Overlay",
    description: "Action lists, keyboard-first.",
    status: "new",
    preview: (
      <div className="flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded border border-line bg-paper">
          <MoreHorizontal className="h-3.5 w-3.5 text-ink-muted" />
        </div>
        <div className="w-32 rounded border border-line bg-paper-raised p-1 text-left shadow-sm">
          <p className="rounded-sm bg-paper-sunken px-2 py-1 text-[11px]">Edit</p>
          <p className="px-2 py-1 text-[11px] text-ink-muted">Duplicate</p>
        </div>
      </div>
    ),
  },
  {
    name: "Tooltip",
    href: "/components/tooltip",
    category: "Overlay",
    description: "Quiet labels for icons.",
    status: "new",
    preview: (
      <div className="flex flex-col items-center gap-1">
        <div className="rounded bg-ink px-2 py-1 text-[10px] text-paper">Tokens, not utilities</div>
        <div className="h-1 w-1 bg-ink" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
        <div className="flex h-6 w-6 items-center justify-center rounded border border-line bg-paper">
          <Info className="h-3 w-3 text-ink-muted" />
        </div>
      </div>
    ),
  },
  {
    name: "Accordion",
    href: "/components/accordion",
    category: "Disclosure",
    description: "Vertically stacked sections.",
    status: "new",
    preview: (
      <div className="w-full max-w-[220px] text-left">
        <div className="border-b border-line py-2 text-xs font-medium">Section one ⌄</div>
        <p className="py-2 text-[11px] text-ink-muted">Content visible when open.</p>
        <div className="border-t border-line py-2 text-xs text-ink-muted">Section two ›</div>
      </div>
    ),
  },
  {
    name: "Toast",
    href: "/components/toast",
    category: "Feedback",
    description: "Ephemeral notifications.",
    status: "new",
    preview: (
      <div className="w-full max-w-[240px] rounded border border-line bg-paper-raised p-2 text-left shadow-md">
        <p className="text-[11px] font-medium">Saved</p>
        <p className="text-[10px] text-ink-muted">Tokens updated.</p>
      </div>
    ),
  },
  {
    name: "Command",
    href: "/components/command",
    category: "Input",
    description: "⌘K palette with keyboard nav.",
    status: "new",
    preview: (
      <div className="w-full max-w-[220px] overflow-hidden rounded border border-line bg-paper-raised text-left">
        <div className="border-b border-line px-2 py-1.5 text-[11px] text-ink-subtle">
          Type a command…
        </div>
        <div className="px-2 py-1">
          <p className="rounded-sm bg-paper-sunken px-1.5 py-1 text-[11px]">Calendar</p>
          <p className="px-1.5 py-1 text-[11px] text-ink-muted">Settings</p>
        </div>
      </div>
    ),
  },
  {
    name: "Data Table",
    href: "/components/data-table",
    category: "Display",
    description: "Sortable rows, mono numerics.",
    status: "new",
    preview: (
      <div className="w-full max-w-[240px] overflow-hidden rounded border border-line text-left">
        <div className="flex gap-2 bg-paper-sunken px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-ink-subtle">
          <span className="flex-1">ID</span>
          <span>P</span>
        </div>
        <div className="flex gap-2 border-t border-line px-2 py-1 text-[10px]">
          <span className="flex-1">LUM-12</span>
          <span className="font-mono">1</span>
        </div>
        <div className="flex gap-2 border-t border-line px-2 py-1 text-[10px]">
          <span className="flex-1">LUM-11</span>
          <span className="font-mono">2</span>
        </div>
      </div>
    ),
  },
  {
    name: "Select",
    href: "/components/select",
    category: "Input",
    description: "Single-value picker.",
    status: "new",
    preview: (
      <div className="flex h-9 w-full max-w-[200px] items-center justify-between rounded border border-line bg-paper-raised px-3 text-xs">
        <span>Dark</span>
        <span className="text-ink-subtle">⌄</span>
      </div>
    ),
  },
];

export default function ComponentsIndex() {
  return (
    <div className="container py-14 lg:py-20">
      <header className="mb-14 flex flex-col gap-4 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            The library
          </p>
          <h1 className="mt-3 font-display text-display-1 text-balance">
            Components.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Sixteen primitives, designed to compose. Copy any of them into
            your project — no install required.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">v0.2 · 16 components</Badge>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <Link key={c.name} href={c.href} className="group">
            <Card className="h-full transition-colors group-hover:border-ink/20">
              <CardHeader>
                <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded border border-line bg-paper-sunken p-4">
                  {c.preview}
                </div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    {c.category}
                  </span>
                  {c.status === "new" && (
                    <Badge variant="accent" className="text-[9px]">
                      New
                    </Badge>
                  )}
                </div>
                <CardTitle className="flex items-center justify-between">
                  {c.name}
                  <ArrowUpRight className="h-4 w-4 text-ink-subtle transition group-hover:translate-x-0.5 group-hover:translate-y-[-2px] group-hover:text-ink" />
                </CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
