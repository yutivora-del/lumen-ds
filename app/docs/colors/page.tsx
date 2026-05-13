import { DocsHeader } from "@/components/docs/docs-header";
import { CodeBlock } from "@/components/docs/code-block";

const allColors = [
  { name: "paper", desc: "Default page background", value: "36 33% 97%", dark: "24 8% 8%" },
  { name: "paper-raised", desc: "Cards, popovers, lifted surfaces", value: "0 0% 100%", dark: "24 7% 11%" },
  { name: "paper-sunken", desc: "Inset / recessed surfaces", value: "36 24% 94%", dark: "24 9% 6%" },
  { name: "ink", desc: "Primary text, primary button bg", value: "24 10% 10%", dark: "36 20% 94%" },
  { name: "ink-muted", desc: "Secondary text", value: "24 6% 38%", dark: "36 8% 70%" },
  { name: "ink-subtle", desc: "Tertiary text, placeholders", value: "24 5% 60%", dark: "36 5% 48%" },
  { name: "line", desc: "Hairlines, dividers, borders", value: "24 12% 88%", dark: "24 6% 20%" },
  { name: "accent", desc: "The single signal color", value: "14 86% 52%", dark: "14 86% 58%" },
];

export default function ColorsPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Tokens / Color"
        title="Color"
        description="Three layers of paper. Three layers of ink. One signal accent. That's it."
      />

      <div className="mt-10 space-y-3">
        {allColors.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-4 rounded-lg border border-line bg-paper-raised p-4"
          >
            <div className="flex gap-1.5">
              <div
                className="h-12 w-12 rounded border border-line"
                style={{ background: `hsl(${c.value})` }}
                title="Light"
              />
              <div
                className="h-12 w-12 rounded border border-line"
                style={{ background: `hsl(${c.dark})` }}
                title="Dark"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-sm">--{c.name}</p>
              <p className="text-xs text-ink-muted">{c.desc}</p>
            </div>
            <div className="hidden text-right font-mono text-[11px] text-ink-subtle md:block">
              <p>{c.value}</p>
              <p>{c.dark}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 mb-3 font-display text-2xl tracking-tight">Why HSL?</h2>
      <p className="mb-6 text-ink-muted">
        Tokens are stored as raw HSL values (not <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">hsl()</code> wrappers)
        so Tailwind can compose them with opacity modifiers like{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">bg-ink/85</code>{" "}
        without losing the channel structure.
      </p>

      <CodeBlock
        language="usage"
        code={`<div className="bg-paper text-ink">Default surface</div>
<div className="bg-paper-raised text-ink-muted">Lifted card</div>
<button className="bg-ink text-paper hover:bg-ink/85">Primary</button>
<span className="text-accent">Highlight</span>`}
      />
    </>
  );
}
