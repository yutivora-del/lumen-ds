"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";

const components = [
  {
    name: "Button",
    href: "/components/button",
    description: "Six variants, four sizes.",
    preview: (
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="accent">Accent</Button>
        <Button size="sm" variant="outline">Outline</Button>
        <Button size="sm" variant="ghost">Ghost</Button>
      </div>
    ),
  },
  {
    name: "Badge",
    href: "/components/badge",
    description: "Mono caps for taxonomy.",
    preview: (
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>
    ),
  },
  {
    name: "Card",
    href: "/components/card",
    description: "A surface for content.",
    preview: (
      <Card className="w-full max-w-[220px]">
        <CardHeader>
          <CardTitle>Field notes</CardTitle>
          <CardDescription>Monthly essays on design.</CardDescription>
        </CardHeader>
      </Card>
    ),
  },
  {
    name: "Input",
    href: "/components/input",
    description: "Text fields, restrained.",
    preview: <Input placeholder="hello@yuti.dev" className="max-w-[220px]" />,
  },
  {
    name: "Alert",
    href: "/components/alert",
    description: "Inline messages.",
    preview: (
      <Alert className="max-w-[260px]">
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Tokens updated last week.</AlertDescription>
      </Alert>
    ),
  },
  {
    name: "Switch",
    href: "/components/switch",
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
    description: "User representation.",
    preview: (
      <div className="flex items-center gap-2">
        <Avatar fallback="Y" />
        <Avatar fallback="A" size="lg" />
        <Avatar fallback="K" size="sm" />
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
            Eight primitives, designed to compose. Copy any of them into
            your project — no install required.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <Link key={c.name} href={c.href} className="group">
            <Card className="h-full transition-colors group-hover:border-ink/20">
              <CardHeader>
                <div className="mb-4 flex h-32 items-center justify-center rounded border border-line bg-paper-sunken p-4">
                  {c.preview}
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
