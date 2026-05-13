"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

interface PreviewProps {
  preview: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export function ComponentPreview({ preview, code, language, className }: PreviewProps) {
  return (
    <Tabs defaultValue="preview" className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="preview">
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg border border-line bg-paper-raised p-10">
          <div className="absolute inset-0 hairline-grid opacity-[0.35]" />
          <div className="relative z-10 flex w-full items-center justify-center">
            {preview}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} language={language} />
      </TabsContent>
    </Tabs>
  );
}
