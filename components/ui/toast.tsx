"use client";

import * as React from "react";
import { X, CheckCircle2, AlertTriangle, Info, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastVariant = "default" | "success" | "warning" | "danger" | "info";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

type ToastInput = Omit<Toast, "id">;

interface ToastContextValue {
  toasts: Toast[];
  toast: (t: ToastInput) => string;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    (t: ToastInput) => {
      const id = Math.random().toString(36).slice(2, 9);
      const next: Toast = { id, duration: 4500, variant: "default", ...t };
      setToasts((current) => [...current, next]);
      if (next.duration && next.duration > 0) {
        window.setTimeout(() => dismiss(id), next.duration);
      }
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

const variantStyles: Record<ToastVariant, string> = {
  default: "border-line bg-paper-raised text-ink",
  success: "border-signal-success/30 bg-paper-raised text-ink [&_[data-icon]]:text-signal-success",
  warning: "border-signal-warning/30 bg-paper-raised text-ink [&_[data-icon]]:text-signal-warning",
  danger: "border-signal-danger/30 bg-paper-raised text-ink [&_[data-icon]]:text-signal-danger",
  info: "border-line bg-paper-raised text-ink [&_[data-icon]]:text-accent",
};

const variantIcons: Record<ToastVariant, React.ComponentType<{ className?: string }>> = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: AlertCircle,
  info: Info,
};

function ToastViewport() {
  const { toasts, dismiss } = useToast();
  return (
    <div
      role="region"
      aria-label="Notifications"
      className="pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2"
    >
      {toasts.map((t) => {
        const Icon = variantIcons[t.variant ?? "default"];
        return (
          <div
            key={t.id}
            role="status"
            className={cn(
              "pointer-events-auto flex animate-fade-up items-start gap-3 rounded-lg border px-4 py-3 shadow-md",
              variantStyles[t.variant ?? "default"]
            )}
          >
            <Icon data-icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
            <div className="flex-1 text-sm">
              {t.title && <p className="font-medium leading-tight">{t.title}</p>}
              {t.description && (
                <p className={cn("text-ink-muted", t.title && "mt-0.5")}>{t.description}</p>
              )}
              {t.action && (
                <button
                  onClick={t.action.onClick}
                  className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
                >
                  {t.action.label}
                </button>
              )}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
              className="shrink-0 rounded text-ink-subtle hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
