import { DocsHeader } from "@/components/docs/docs-header";

const radii = [
  { name: "XS", token: "--radius-xs", value: "2px", usage: "Inline tags, dividers" },
  { name: "SM", token: "--radius-sm", value: "4px", usage: "Badges, small inputs" },
  { name: "MD", token: "--radius-md", value: "6px", usage: "Buttons, inputs (default)" },
  { name: "LG", token: "--radius-lg", value: "10px", usage: "Cards, alerts, panels" },
  { name: "XL", token: "--radius-xl", value: "16px", usage: "Hero blocks, modals" },
];

export default function RadiusPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Tokens / Radius"
        title="Radius"
        description="Five corner radii. Restraint here keeps the system feeling editorial, not toy-like."
      />

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-5">
        {radii.map((r) => (
          <div key={r.token} className="bg-paper p-6">
            <div
              className="mb-4 h-20 border border-line bg-paper-sunken"
              style={{ borderRadius: `var(${r.token})` }}
            />
            <p className="font-display text-lg">{r.name}</p>
            <p className="font-mono text-xs text-ink-subtle">{r.value}</p>
            <p className="mt-2 text-xs text-ink-muted">{r.usage}</p>
          </div>
        ))}
      </div>
    </>
  );
}
