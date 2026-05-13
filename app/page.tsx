"use client";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="container relative grid gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-3">
              <Badge variant="outline">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                v0.1 · 8 components
              </Badge>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Open source
              </span>
            </div>
            <h1 className="font-display text-display-1 text-balance">
              A quiet design system,
              <span className="italic text-ink-muted"> loudly considered.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
              Lumen is an open, editorial design system. Copy the tokens,
              paste the components — bridge the gap between Figma and code
              without dragging in a dependency.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/docs/installation">
                  Get started
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/components">Browse components</Link>
              </Button>
            </div>
          </div>

          {/* Sample composition */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative rounded-xl border border-line bg-paper-raised p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                  Sample · subscribe.tsx
                </span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="font-display text-2xl tracking-tight">
                Field notes,
                <br />
                <span className="italic text-ink-muted">monthly.</span>
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Essays on systems, AI, and design craft. No spam.
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="you@studio.com"
                  className="flex h-9 w-full rounded border border-line bg-paper px-3 text-sm placeholder:text-ink-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                />
                <Button size="md">Subscribe</Button>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs text-ink-subtle">
                <Sparkles className="h-3 w-3" />
                Built with 4 Lumen primitives.
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="overflow-hidden border-t border-line bg-paper-sunken/40">
          <div className="flex animate-marquee gap-12 whitespace-nowrap py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-subtle">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-12">
                <span>Tokens, not utilities</span>
                <span>·</span>
                <span>Copy, don&apos;t install</span>
                <span>·</span>
                <span>Built for Figma → Code</span>
                <span>·</span>
                <span>Open source</span>
                <span>·</span>
                <span>Editorial, not corporate</span>
                <span>·</span>
                <span>Quiet by default</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-display-2 text-balance max-w-xl">
              Three rules. <span className="italic text-ink-muted">Held lightly.</span>
            </h2>
            <p className="max-w-md text-sm text-ink-muted">
              A system is the agreements you keep with yourself. These are mine.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-paper p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                  Rule {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COMPONENTS */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                The library
              </p>
              <h2 className="mt-2 font-display text-display-2">A handful of primitives.</h2>
            </div>
            <Link
              href="/components"
              className="hidden text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline md:inline"
            >
              All 8 components →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link key={c.name} href={c.href} className="group">
                <Card className="h-full transition-colors group-hover:border-ink/20">
                  <CardHeader>
                    <div className="mb-4 flex h-32 items-center justify-center rounded border border-line bg-paper-sunken">
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
      </section>

      {/* CTA */}
      <section className="grain border-b border-line">
        <div className="container py-20 text-center lg:py-32">
          <h2 className="mx-auto max-w-3xl font-display text-display-2 text-balance">
            Take what&apos;s useful.{" "}
            <span className="italic text-ink-muted">Leave the rest.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-muted">
            Every component lives on this site. Copy the code, paste it into
            your project, change the tokens to match your brand. That&apos;s it.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/docs/installation">Start building</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const principles = [
  {
    title: "Tokens are the source.",
    body: "Color, type, spacing, radius — defined once as CSS variables. Change them, and every component follows. No prop drilling, no theme objects.",
  },
  {
    title: "Copy, don't install.",
    body: "There's no package to add. Components live in your repo, in your style, on your terms. Modify freely; you own them now.",
  },
  {
    title: "Quiet by default.",
    body: "One accent color. Hairline borders. Generous whitespace. Restraint reads as confidence; everything else is decoration.",
  },
];

const featured = [
  {
    name: "Button",
    href: "/components/button",
    description: "Six variants, four sizes. The workhorse.",
    preview: (
      <div className="flex gap-2">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="accent">Accent</Button>
        <Button size="sm" variant="outline">Outline</Button>
      </div>
    ),
  },
  {
    name: "Badge",
    href: "/components/badge",
    description: "Mono caps for taxonomy and status.",
    preview: (
      <div className="flex flex-wrap justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="accent">New</Badge>
        <Badge variant="success">Stable</Badge>
      </div>
    ),
  },
  {
    name: "Card",
    href: "/components/card",
    description: "A surface for everything else.",
    preview: (
      <div className="w-full max-w-[180px] rounded border border-line bg-paper p-3 text-left">
        <p className="font-display text-sm">Field notes</p>
        <p className="mt-1 text-[11px] text-ink-muted">Monthly essays.</p>
      </div>
    ),
  },
  {
    name: "Input",
    href: "/components/input",
    description: "Text fields that get out of the way.",
    preview: (
      <input
        placeholder="hello@yuti.dev"
        className="h-9 w-full max-w-[220px] rounded border border-line bg-paper px-3 text-sm placeholder:text-ink-subtle focus-visible:outline-none"
      />
    ),
  },
  {
    name: "Alert",
    href: "/components/alert",
    description: "Inline messages with quiet weight.",
    preview: (
      <div className="w-full max-w-[220px] rounded border border-line bg-paper p-3 text-left">
        <p className="text-xs font-medium">Heads up</p>
        <p className="text-[11px] text-ink-muted">Tokens updated last week.</p>
      </div>
    ),
  },
  {
    name: "Tabs",
    href: "/components/tabs",
    description: "Switching surfaces without noise.",
    preview: (
      <div className="inline-flex gap-1 rounded border border-line bg-paper p-1">
        <span className="rounded-sm bg-paper-raised px-3 py-1 text-xs shadow-sm">Preview</span>
        <span className="rounded-sm px-3 py-1 text-xs text-ink-muted">Code</span>
      </div>
    ),
  },
];
