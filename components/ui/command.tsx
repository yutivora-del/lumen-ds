"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Context to share state between subcomponents.
interface CommandContextValue {
  query: string;
  setQuery: (q: string) => void;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  registerItem: (id: string, value: string) => () => void;
  itemValues: Map<string, string>;
  onSelect: (id: string) => void;
}

const CommandContext = React.createContext<CommandContextValue | null>(null);

function useCommand() {
  const ctx = React.useContext(CommandContext);
  if (!ctx) throw new Error("Command components must be used within <Command>");
  return ctx;
}

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  onItemSelect?: (id: string) => void;
}

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, children, onItemSelect, ...props }, ref) => {
    const [query, setQuery] = React.useState("");
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [itemValues] = React.useState<Map<string, string>>(() => new Map());

    const registerItem = React.useCallback(
      (id: string, value: string) => {
        itemValues.set(id, value);
        return () => {
          itemValues.delete(id);
        };
      },
      [itemValues]
    );

    const handleSelect = React.useCallback(
      (id: string) => {
        onItemSelect?.(id);
      },
      [onItemSelect]
    );

    return (
      <CommandContext.Provider
        value={{
          query,
          setQuery,
          activeIndex,
          setActiveIndex,
          registerItem,
          itemValues,
          onSelect: handleSelect,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "flex w-full flex-col overflow-hidden rounded-lg border border-line bg-paper-raised",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </CommandContext.Provider>
    );
  }
);
Command.displayName = "Command";

export const CommandInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">
>(({ className, placeholder = "Type a command or search…", ...props }, ref) => {
  const { query, setQuery, setActiveIndex } = useCommand();
  return (
    <div className="flex items-center gap-2 border-b border-line px-3">
      <Search className="h-4 w-4 shrink-0 text-ink-subtle" />
      <input
        ref={ref}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(0);
        }}
        placeholder={placeholder}
        className={cn(
          "flex h-11 w-full bg-transparent text-sm outline-none placeholder:text-ink-subtle disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
});
CommandInput.displayName = "CommandInput";

export const CommandList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { query, activeIndex, setActiveIndex, itemValues, onSelect } = useCommand();

    // Build the list of *visible* item ids in DOM order from the registered values.
    const visibleIds = React.useMemo(() => {
      const q = query.trim().toLowerCase();
      const ids: string[] = [];
      itemValues.forEach((value, id) => {
        if (!q || value.toLowerCase().includes(q)) ids.push(id);
      });
      return ids;
    }, [query, itemValues]);

    React.useEffect(() => {
      if (activeIndex >= visibleIds.length) setActiveIndex(Math.max(0, visibleIds.length - 1));
    }, [visibleIds.length, activeIndex, setActiveIndex]);

    const onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex(Math.min(activeIndex + 1, visibleIds.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(Math.max(activeIndex - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const id = visibleIds[activeIndex];
        if (id) onSelect(id);
      }
    };

    return (
      <div
        ref={ref}
        role="listbox"
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className={cn("max-h-[320px] overflow-y-auto overflow-x-hidden p-1", className)}
        {...props}
      >
        {children}
        {visibleIds.length === 0 && query.trim().length > 0 && (
          <div className="py-6 text-center text-sm text-ink-subtle">No results.</div>
        )}
      </div>
    );
  }
);
CommandList.displayName = "CommandList";

export const CommandGroup = ({
  heading,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { heading?: string }) => {
  return (
    <div className={cn("overflow-hidden p-1", className)} {...props}>
      {heading && (
        <div className="px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
          {heading}
        </div>
      )}
      {children}
    </div>
  );
};
CommandGroup.displayName = "CommandGroup";

export const CommandSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("-mx-1 my-1 h-px bg-line", className)} {...props} />
);

export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  id: string;
  shortcut?: string;
}

export const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(
  ({ className, value, id, shortcut, children, ...props }, ref) => {
    const { query, activeIndex, setActiveIndex, registerItem, itemValues, onSelect } = useCommand();

    React.useEffect(() => registerItem(id, value), [id, value, registerItem]);

    const q = query.trim().toLowerCase();
    const isVisible = !q || value.toLowerCase().includes(q);

    // Determine this item's index among currently visible items.
    const indexAmongVisible = React.useMemo(() => {
      if (!isVisible) return -1;
      let i = 0;
      let found = -1;
      itemValues.forEach((v, otherId) => {
        if (q && !v.toLowerCase().includes(q)) return;
        if (otherId === id) found = i;
        i++;
      });
      return found;
    }, [id, isVisible, itemValues, q]);

    if (!isVisible) return null;

    const isActive = indexAmongVisible === activeIndex;

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isActive}
        onMouseEnter={() => setActiveIndex(indexAmongVisible)}
        onClick={() => onSelect(id)}
        className={cn(
          "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
          isActive ? "bg-paper-sunken text-ink" : "text-ink-muted",
          className
        )}
        {...props}
      >
        {children}
        {shortcut && (
          <span className="ml-auto font-mono text-[10px] tracking-widest text-ink-subtle">
            {shortcut}
          </span>
        )}
      </div>
    );
  }
);
CommandItem.displayName = "CommandItem";
