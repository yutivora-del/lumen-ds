import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-14 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
            Colophon
          </p>
          <h1 className="mt-3 font-display text-display-2 text-balance">
            Why Lumen exists.
          </h1>
          <div className="mt-8 space-y-1 font-mono text-xs text-ink-subtle">
            <p>v0.1 · May 2026</p>
            <p>Open source</p>
            <p>Built in Boston</p>
          </div>
        </aside>

        <article className="space-y-8 text-lg leading-relaxed text-ink-muted lg:col-span-8">
          <p className="text-balance text-2xl text-ink">
            Most design systems are built for teams. Lumen is built for
            the gap between teams — the place a designer hands a Figma file
            to a developer and something gets lost in the room between them.
          </p>

          <p>
            I&apos;ve spent the last few years building B2B systems from
            scratch and watching the same gap appear over and over. Tokens
            drift. Components fork. The Figma file becomes a museum. Lumen
            is the smallest possible answer: a set of tokens and primitives
            so plainly written that a designer can read them and a developer
            can paste them, and they&apos;ll agree on what they see.
          </p>

          <p>
            It&apos;s editorial on purpose. A serif display face, hairline
            borders, a single accent color. The constraints are part of
            the point — when there&apos;s only one accent, every other
            choice gets sharper.
          </p>

          <h2 className="!mt-12 font-display text-2xl tracking-tight text-ink">
            What&apos;s in the box
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-ink" />
              <span>Eight primitives — Button, Badge, Card, Input, Alert, Tabs, Switch, Avatar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-ink" />
              <span>A token layer in raw HSL, ready for any brand.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-ink" />
              <span>Light and dark themes that share the same structure.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-ink" />
              <span>Copy-paste source on every component page.</span>
            </li>
          </ul>

          <h2 className="!mt-12 font-display text-2xl tracking-tight text-ink">
            What&apos;s next
          </h2>
          <p>
            More primitives (Dialog, Select, Tooltip), a small layout
            section, and a published Figma library that mirrors the code
            exactly. The end goal is a one-to-one map: a token in Figma is
            a token in code, with the same name.
          </p>

          <div className="!mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
            <Button asChild>
              <Link href="/docs/installation">
                Start building
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/components">Browse components</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}
