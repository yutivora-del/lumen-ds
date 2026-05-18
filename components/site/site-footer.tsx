import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">
            A quiet system, loudly considered.
          </p>
          <p className="mt-2 max-w-md text-sm text-ink-muted">
            Lumen is an open design system by Yuti Vora, a product designer — built to bridge the gap
            between Figma and code. Take what's useful.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
          <Link href="/docs/installation" className="hover:text-ink">Installation</Link>
          <Link href="/tokens" className="hover:text-ink">Tokens</Link>
          <Link href="/components" className="hover:text-ink">Components</Link>
          <Link href="/support" className="hover:text-ink">Support</Link>
          <Link href="/about" className="hover:text-ink">Colophon</Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container flex h-12 items-center justify-between text-xs text-ink-subtle">
          <span>© {new Date().getFullYear()} Yuti Vora</span>
          <span className="font-mono uppercase tracking-[0.2em]">
            Lumen / v0.1
          </span>
        </div>
      </div>
    </footer>
  );
}
