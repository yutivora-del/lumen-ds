import React from "react";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-10">
      <DocsSidebar />
      <div className="min-w-0 flex-1 py-10 lg:py-14">
        <article className="prose-lumen max-w-3xl">{children}</article>
      </div>
    </div>
  );
}
