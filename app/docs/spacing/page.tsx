import { DocsHeader } from "@/components/docs/docs-header";

const steps = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

export default function SpacingPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Tokens / Spacing"
        title="Spacing"
        description="A 4px rhythm. Every layout decision should be a multiple of it."
      />

      <div className="mt-10 overflow-hidden rounded-lg border border-line bg-paper-raised">
        <table className="w-full text-sm">
          <thead className="border-b border-line bg-paper-sunken">
            <tr>
              <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Step
              </th>
              <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Pixels
              </th>
              <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Tailwind
              </th>
              <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Visual
              </th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s} className="border-b border-line last:border-0">
                <td className="px-5 py-3 font-mono">{s}</td>
                <td className="px-5 py-3 font-mono text-ink-muted">{s * 4}px</td>
                <td className="px-5 py-3 font-mono text-ink-muted">p-{s} / m-{s} / gap-{s}</td>
                <td className="px-5 py-3">
                  <div className="h-3 bg-ink" style={{ width: `${s * 4}px` }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-lg border border-line bg-paper-sunken p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          Heuristic
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          Within a component, prefer 1–4 (4–16px). Between components,
          prefer 6–12 (24–48px). Between sections, prefer 16–24 (64–96px).
        </p>
      </div>
    </>
  );
}
