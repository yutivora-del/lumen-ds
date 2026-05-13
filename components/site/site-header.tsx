"use client";

import Link from "next/link";
import { Moon, Sun, Github } from "lucide-react";
import { useTheme } from "./theme-provider";

export function SiteHeader() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-2">
            <LumenMark />
            <span className="font-display text-lg tracking-tight">Lumen</span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-ink-subtle sm:inline">
              v0.1
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/docs/installation" className="text-ink-muted transition hover:text-ink">
              Docs
            </Link>
            <Link href="/tokens" className="text-ink-muted transition hover:text-ink">
              Tokens
            </Link>
            <Link href="/components" className="text-ink-muted transition hover:text-ink">
              Components
            </Link>
            <Link href="/about" className="text-ink-muted transition hover:text-ink">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded text-ink-muted transition hover:bg-paper-sunken hover:text-ink"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded text-ink-muted transition hover:bg-paper-sunken hover:text-ink"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function LumenMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="11" cy="11" r="4" fill="hsl(var(--accent))" />
    </svg>
  );
}
