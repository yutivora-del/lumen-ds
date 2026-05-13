import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const colorScale = [
  { name: "Paper", var: "--paper", value: "36 33% 97%" },
  { name: "Paper / Raised", var: "--paper-raised", value: "0 0% 100%" },
  { name: "Paper / Sunken", var: "--paper-sunken", value: "36 24% 94%" },
  { name: "Line", var: "--line", value: "24 12% 88%" },
  { name: "Ink / Subtle", var: "--ink-subtle", value: "24 5% 60%" },
  { name: "Ink / Muted", var: "--ink-muted", value: "24 6% 38%" },
  { name: "Ink", var: "--ink", value: "24 10% 10%" },
];

const accents = [
  { name: "Accent", var: "--accent", value: "14 86% 52%" },
  { name: "Success", var: "--signal-success", value: "142 64% 38%" },
  { name: "Warning", var: "--signal-warning", value: "38 92% 50%" },
  { name: "Danger", var: "--signal-danger", value: "0 72% 51%" },
];

const radii = [
  { name: "XS", var: "--radius-xs", value: "2px" },
  { name: "SM", var: "--radius-sm", value: "4px" },
  { name: "MD", var: "--radius-md", value: "6px" },
  { name: "LG", var: "--radius-lg", value: "10px" },
  { name: "XL", var: "--radius-xl", value: "16px" },
];

export default function TokensPage() {
  return (
    <div className="container py-14 lg:py-20">
      <header className="mb-16 border-b border-line pb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
          Foundations · Tokens
        </p>
        <h1 className="mt-3 font-display text-display-1 text-balance">
          The vocabulary, <span className="italic text-ink-muted">in plain sight.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          Every component on this site is built from these tokens. They live in{" "}
          <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">
            app/globals.css
          </code>{" "}
          as CSS variables. Copy them, rename them, replace the values — the
          system bends to whatever brand you bring.
        </p>
      </header>

      {/* COLORS */}
      <section className="mb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
              01 · Color
            </p>
            <h2 className="mt-1 font-display text-display-3">Surfaces & ink</h2>
          </div>
          <Link
            href="/docs/colors"
            className="text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Full palette →
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-7">
          {colorScale.map((c) => (
            <div key={c.var} className="bg-paper p-4">
              <div
                className="mb-3 h-20 rounded border border-line"
                style={{ background: `hsl(${c.value})` }}
              />
              <p className="text-xs font-medium">{c.name}</p>
              <p className="mt-0.5 font-mono text-[10px] text-ink-subtle">
                {c.var}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
          {accents.map((c) => (
            <div key={c.var} className="bg-paper p-4">
              <div
                className="mb-3 h-20 rounded border border-line"
                style={{ background: `hsl(${c.value})` }}
              />
              <p className="text-xs font-medium">{c.name}</p>
              <p className="mt-0.5 font-mono text-[10px] text-ink-subtle">
                {c.var}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
            02 · Typography
          </p>
          <h2 className="mt-1 font-display text-display-3">Two voices.</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          <div className="bg-paper p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
              Display · Fraunces
            </p>
            <p className="mt-6 font-display text-display-2 text-balance">
              The seven seas
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Used for headlines, titles, anything that announces. Optical
              sizing on; soft contrast for warmth.
            </p>
            <div className="mt-6 space-y-1 font-mono text-xs text-ink-subtle">
              <p>--font-display</p>
              <p>font-display text-display-1 / display-2 / display-3</p>
            </div>
          </div>
          <div className="bg-paper p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
              Sans · Geist
            </p>
            <p className="mt-6 text-3xl font-medium tracking-tight">
              The seven seas
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              Used for body, UI, captions. Generous x-height, precise letter
              shapes; works at every size from 11px to 18px.
            </p>
            <div className="mt-6 space-y-1 font-mono text-xs text-ink-subtle">
              <p>--font-sans</p>
              <p>font-sans (default)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPACING */}
      <section className="mb-20">
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
            03 · Spacing
          </p>
          <h2 className="mt-1 font-display text-display-3">A 4px rhythm.</h2>
        </div>

        <div className="rounded-lg border border-line bg-paper p-8">
          <div className="space-y-3">
            {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((step) => (
              <div key={step} className="flex items-center gap-6">
                <span className="w-12 font-mono text-xs text-ink-subtle">
                  {step}
                </span>
                <span className="w-20 font-mono text-xs text-ink-muted">
                  {step * 4}px
                </span>
                <div
                  className="h-3 bg-ink"
                  style={{ width: `${step * 4}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RADIUS */}
      <section>
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
            04 · Radius
          </p>
          <h2 className="mt-1 font-display text-display-3">Five corners.</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-5">
          {radii.map((r) => (
            <div key={r.var} className="bg-paper p-6">
              <div
                className="mb-4 h-16 border border-line bg-paper-sunken"
                style={{ borderRadius: `var(${r.var})` }}
              />
              <p className="text-xs font-medium">{r.name}</p>
              <p className="font-mono text-[10px] text-ink-subtle">{r.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
