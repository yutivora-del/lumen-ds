import { DocsHeader } from "@/components/docs/docs-header";
import { CodeBlock } from "@/components/docs/code-block";

const scale = [
  { class: "text-display-1", label: "Display 1", sample: "Quiet system" },
  { class: "text-display-2", label: "Display 2", sample: "Quiet system" },
  { class: "text-display-3", label: "Display 3", sample: "Quiet system" },
  { class: "text-2xl", label: "Heading L", sample: "Quiet system" },
  { class: "text-xl", label: "Heading M", sample: "Quiet system" },
  { class: "text-base", label: "Body", sample: "The quick brown fox jumps over the lazy dog." },
  { class: "text-sm", label: "Body Sm", sample: "The quick brown fox jumps over the lazy dog." },
  { class: "text-xs", label: "Caption", sample: "The quick brown fox jumps over the lazy dog." },
];

export default function TypographyPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Tokens / Typography"
        title="Typography"
        description="Two voices — a serif that announces, a sans that explains. Both via next/font for zero CLS."
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">Display · Fraunces</h2>
      <div className="rounded-lg border border-line bg-paper-raised p-8">
        <p className="font-display text-display-2">The quick brown fox</p>
        <p className="mt-4 text-sm text-ink-muted">
          Optical sizing on. Soft contrast axis at 50 for warmth. Use for
          headlines, titles, anything that wants to be read first.
        </p>
      </div>

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">Sans · Geist</h2>
      <div className="rounded-lg border border-line bg-paper-raised p-8">
        <p className="text-3xl font-medium tracking-tight">The quick brown fox</p>
        <p className="mt-4 text-sm text-ink-muted">
          A precise, modern sans by Vercel. Generous x-height makes it
          legible from 11px captions to 18px body.
        </p>
      </div>

      <h2 className="mt-12 mb-6 font-display text-2xl tracking-tight">Scale</h2>
      <div className="space-y-3">
        {scale.map((s) => (
          <div
            key={s.class}
            className="flex items-center gap-6 rounded-lg border border-line bg-paper-raised p-5"
          >
            <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              {s.label}
            </span>
            <span
              className={`${s.class} ${
                s.class.startsWith("text-display") ? "font-display tracking-tight" : ""
              } min-w-0 flex-1 truncate`}
            >
              {s.sample}
            </span>
            <code className="hidden shrink-0 rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-[11px] md:inline">
              {s.class}
            </code>
          </div>
        ))}
      </div>

      <h2 className="mt-16 mb-3 font-display text-2xl tracking-tight">Setup</h2>
      <p className="mb-4 text-ink-muted">
        Wire the fonts via <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">next/font/google</code>.
      </p>
      <CodeBlock
        language="app/layout.tsx"
        code={`import { Fraunces, Geist } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});`}
      />
    </>
  );
}
