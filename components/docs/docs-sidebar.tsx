"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs/installation", label: "Installation" },
      { href: "/about", label: "Philosophy" },
    ],
  },
  {
    title: "Tokens",
    items: [
      { href: "/tokens", label: "Overview" },
      { href: "/docs/colors", label: "Colors" },
      { href: "/docs/typography", label: "Typography" },
      { href: "/docs/spacing", label: "Spacing" },
      { href: "/docs/radius", label: "Radius" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/components/button", label: "Button" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/card", label: "Card" },
      { href: "/components/input", label: "Input" },
      { href: "/components/alert", label: "Alert" },
      { href: "/components/tabs", label: "Tabs" },
      { href: "/components/switch", label: "Switch" },
      { href: "/components/avatar", label: "Avatar" },
      { href: "/components/dialog", label: "Dialog" },
      { href: "/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/components/tooltip", label: "Tooltip" },
      { href: "/components/accordion", label: "Accordion" },
      { href: "/components/toast", label: "Toast" },
      { href: "/components/command", label: "Command" },
      { href: "/components/data-table", label: "Data Table" },
      { href: "/components/select", label: "Select" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-line py-8 pr-6 md:block">
      <nav className="space-y-7">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded px-2 py-1 text-sm transition-colors",
                        active
                          ? "bg-paper-sunken font-medium text-ink"
                          : "text-ink-muted hover:bg-paper-sunken hover:text-ink"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
