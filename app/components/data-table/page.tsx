"use client";
import { DataTable, type DataTableColumn } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { dataTableSource } from "@/registry/sources";

type Issue = {
  id: string;
  title: string;
  status: "open" | "closed" | "draft";
  priority: number;
  updated: string;
};

const issues: Issue[] = [
  { id: "LUM-12", title: "Token: warm vermillion drift in dark mode", status: "open", priority: 1, updated: "2d" },
  { id: "LUM-11", title: "Accordion: chevron rotation flicker on Safari", status: "open", priority: 2, updated: "4d" },
  { id: "LUM-09", title: "Switch: focus ring offset misaligned", status: "closed", priority: 3, updated: "1w" },
  { id: "LUM-08", title: "Docs: typography page bleeds into sidebar", status: "draft", priority: 4, updated: "2w" },
  { id: "LUM-04", title: "Button: link variant underline thickness", status: "closed", priority: 5, updated: "3w" },
];

const statusVariant = {
  open: "warning",
  closed: "success",
  draft: "outline",
} as const;

const columns: DataTableColumn<Issue>[] = [
  { key: "id", header: "ID", sortable: true, width: "100px" },
  { key: "title", header: "Title", sortable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    cell: (r) => <Badge variant={statusVariant[r.status]}>{r.status}</Badge>,
  },
  { key: "priority", header: "P", sortable: true, align: "right", width: "60px" },
  { key: "updated", header: "Updated", align: "right", width: "100px" },
];

export default function DataTablePage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Display"
        title="Data Table"
        description="Tabular data with sortable columns, sticky header, mono numerics. A foundation — extend with selection, pagination, filtering as you need them."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Default</h2>
      <ComponentPreview
        preview={<DataTable data={issues} columns={columns} getRowId={(r) => r.id} />}
        code={`const columns: DataTableColumn<Issue>[] = [
  { key: "id", header: "ID", sortable: true },
  { key: "title", header: "Title", sortable: true },
  { key: "status", header: "Status", sortable: true,
    cell: (r) => <Badge variant={statusVariant[r.status]}>{r.status}</Badge> },
  { key: "priority", header: "P", sortable: true, align: "right" },
  { key: "updated", header: "Updated", align: "right" },
];

<DataTable data={issues} columns={columns} getRowId={(r) => r.id} />`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Notes</h2>
      <ul className="space-y-1.5 text-sm text-ink-muted">
        <li>Click a sortable header to sort ascending; click again to flip; a third click clears the sort.</li>
        <li>
          Set <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">align=&quot;right&quot;</code> on
          numeric columns — Lumen will switch to tabular monospace automatically.
        </li>
        <li>Pass a <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-xs">cell</code> render fn for rich content (badges, links, avatars).</li>
      </ul>

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Installation</h2>
      <p className="mb-4 text-ink-muted">
        No extra packages. Paste the source into{" "}
        <code className="rounded bg-paper-sunken px-1.5 py-0.5 font-mono text-sm">components/ui/data-table.tsx</code>.
      </p>
      <CodeBlock code={dataTableSource} language="components/ui/data-table.tsx" />
    </ComponentPageShell>
  );
}
