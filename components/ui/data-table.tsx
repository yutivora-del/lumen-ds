"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortDirection = "asc" | "desc" | null;

export interface DataTableColumn<T> {
  key: keyof T & string;
  header: React.ReactNode;
  /** Render cell content. Defaults to `String(row[key])`. */
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  /** "right" right-aligns the column and uses mono numerics. */
  align?: "left" | "right";
  width?: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  className?: string;
  /** Optional row key resolver — defaults to index. */
  getRowId?: (row: T, index: number) => string;
  caption?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  className,
  getRowId,
  caption,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState<SortDirection>(null);

  const onSort = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
      return;
    }
    if (sortDir === "asc") setSortDir("desc");
    else if (sortDir === "desc") {
      setSortKey(null);
      setSortDir(null);
    } else setSortDir("asc");
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey || !sortDir) return data;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av === bv) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return copy;
  }, [data, sortKey, sortDir]);

  return (
    <div className={cn("overflow-hidden rounded-lg border border-line", className)}>
      <div className="max-h-[480px] overflow-auto">
        <table className="w-full caption-bottom text-sm">
          {caption && (
            <caption className="border-t border-line bg-paper-sunken py-2 text-xs text-ink-subtle">
              {caption}
            </caption>
          )}
          <thead className="sticky top-0 z-10 bg-paper-sunken">
            <tr>
              {columns.map((col) => {
                const isSorted = sortKey === col.key;
                const Icon = !isSorted ? ArrowUpDown : sortDir === "asc" ? ArrowUp : ArrowDown;
                return (
                  <th
                    key={col.key}
                    scope="col"
                    style={{ width: col.width }}
                    className={cn(
                      "border-b border-line px-4 py-2 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle",
                      col.align === "right" && "text-right"
                    )}
                  >
                    {col.sortable ? (
                      <button
                        type="button"
                        onClick={() => onSort(col.key)}
                        className={cn(
                          "inline-flex items-center gap-1.5 transition-colors hover:text-ink",
                          col.align === "right" && "flex-row-reverse",
                          isSorted && "text-ink"
                        )}
                      >
                        {col.header}
                        <Icon className="h-3 w-3" />
                      </button>
                    ) : (
                      col.header
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, i) => (
              <tr
                key={getRowId ? getRowId(row, i) : i}
                className="border-b border-line last:border-b-0 transition-colors hover:bg-paper-sunken/50"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-3 text-ink",
                      col.align === "right" && "text-right font-mono tabular-nums"
                    )}
                  >
                    {col.cell ? col.cell(row) : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
            {sortedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-10 text-center text-sm text-ink-subtle"
                >
                  No data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
