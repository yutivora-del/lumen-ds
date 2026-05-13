import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";

export default function InstallationPage() {
  return (
    <>
      <DocsHeader
        eyebrow="Getting Started"
        title="Installation"
        description="Lumen is not a package. It's a set of components you copy into your project, then own forever."
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">1. Start with Next.js + Tailwind</h2>
      <p className="mb-4 text-ink-muted">
        Spin up a fresh project. Any Tailwind-based stack works — Next, Vite,
        Astro, Remix.
      </p>
      <CodeBlock
        language="terminal"
        code={`npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app`}
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">2. Add the tokens</h2>
      <p className="mb-4 text-ink-muted">
        Drop these CSS variables into your <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">globals.css</code>.
        They're the foundation — every component reads from them.
      </p>
      <CodeBlock
        language="app/globals.css"
        code={`@layer base {
  :root {
    --paper: 36 33% 97%;
    --paper-raised: 0 0% 100%;
    --paper-sunken: 36 24% 94%;

    --ink: 24 10% 10%;
    --ink-muted: 24 6% 38%;
    --ink-subtle: 24 5% 60%;

    --line: 24 12% 88%;

    --accent: 14 86% 52%;
    --accent-fg: 0 0% 100%;

    --signal-danger: 0 72% 51%;
    --signal-warning: 38 92% 50%;
    --signal-success: 142 64% 38%;

    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 10px;
    --radius-xl: 16px;
  }

  .dark {
    --paper: 24 8% 8%;
    --paper-raised: 24 7% 11%;
    --paper-sunken: 24 9% 6%;
    --ink: 36 20% 94%;
    --ink-muted: 36 8% 70%;
    --ink-subtle: 36 5% 48%;
    --line: 24 6% 20%;
    --accent: 14 86% 58%;
    --accent-fg: 24 10% 10%;
  }
}`}
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">3. Map them in Tailwind</h2>
      <p className="mb-4 text-ink-muted">
        Wire the variables to Tailwind so every utility is theme-aware.
      </p>
      <CodeBlock
        language="tailwind.config.ts"
        code={`theme: {
  extend: {
    colors: {
      ink: {
        DEFAULT: "hsl(var(--ink))",
        muted: "hsl(var(--ink-muted))",
        subtle: "hsl(var(--ink-subtle))",
      },
      paper: {
        DEFAULT: "hsl(var(--paper))",
        raised: "hsl(var(--paper-raised))",
        sunken: "hsl(var(--paper-sunken))",
      },
      line: "hsl(var(--line))",
      accent: {
        DEFAULT: "hsl(var(--accent))",
        fg: "hsl(var(--accent-fg))",
      },
    },
  },
}`}
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">4. Add the utility</h2>
      <p className="mb-4 text-ink-muted">
        Every component imports a small <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">cn()</code> helper.
      </p>
      <CodeBlock
        language="lib/utils.ts"
        code={`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
      />
      <CodeBlock
        className="mt-3"
        language="terminal"
        code={`npm install clsx tailwind-merge class-variance-authority`}
      />

      <h2 className="mt-12 mb-3 font-display text-2xl tracking-tight">5. Copy your first component</h2>
      <p className="mb-4 text-ink-muted">
        Visit any component page (start with{" "}
        <a href="/components/button" className="text-ink underline-offset-4 hover:underline">
          Button
        </a>
        ), copy the source, paste it into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/</code>.
        That&apos;s it. You own the code now — modify freely.
      </p>

      <div className="mt-12 rounded-lg border border-line bg-paper-sunken p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          Why no install?
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          Design systems shouldn&apos;t lock you in. When you copy the source,
          you can change the radius, swap the font, add a variant — without
          fighting a published API. Lumen is a reference, not a dependency.
        </p>
      </div>
    </>
  );
}
