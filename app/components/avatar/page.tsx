"use client";
import { Avatar } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsHeader } from "@/components/docs/docs-header";
import { ComponentPageShell } from "@/components/docs/component-page-shell";
import { avatarSource } from "@/registry/sources";

export default function AvatarPage() {
  return (
    <ComponentPageShell>
      <DocsHeader
        eyebrow="Components / Display"
        title="Avatar"
        description="A small graphic representation of a user."
      />

      <h2 className="mb-3 font-display text-2xl tracking-tight">Sizes</h2>
      <ComponentPreview
        preview={
          <div className="flex items-center gap-4">
            <Avatar size="sm" fallback="Y" />
            <Avatar size="md" fallback="A" />
            <Avatar size="lg" fallback="K" />
          </div>
        }
        code={`<Avatar size="sm" fallback="Y" />
<Avatar size="md" fallback="A" />
<Avatar size="lg" fallback="K" />`}
      />

      <h2 className="mb-3 mt-12 font-display text-2xl tracking-tight">Stack</h2>
      <ComponentPreview
        preview={
          <div className="flex -space-x-2">
            <div className="rounded-full ring-2 ring-paper-raised">
              <Avatar fallback="A" />
            </div>
            <div className="rounded-full ring-2 ring-paper-raised">
              <Avatar fallback="B" />
            </div>
            <div className="rounded-full ring-2 ring-paper-raised">
              <Avatar fallback="C" />
            </div>
            <div className="rounded-full ring-2 ring-paper-raised">
              <Avatar fallback="+3" />
            </div>
          </div>
        }
        code={`<div className="flex -space-x-2">
  {users.map(u => (
    <div key={u.id} className="rounded-full ring-2 ring-paper-raised">
      <Avatar fallback={u.initial} />
    </div>
  ))}
</div>`}
      />

      <h2 className="mb-3 mt-16 font-display text-2xl tracking-tight">Source</h2>
      <CodeBlock code={avatarSource} language="components/ui/avatar.tsx" />
    </ComponentPageShell>
  );
}
