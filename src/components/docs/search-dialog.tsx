"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { searchItems, type SearchResult } from "@/lib/registry"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { CornerDownLeft, FileText, Hash } from "lucide-react"

/**
 * Global search dialog.
 *
 * Controlled by parent via `open` + `onOpenChange`.
 * Listens for Cmd+K / Ctrl+K / "/" globally to open itself.
 */
export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [query, setQuery] = React.useState("")
  const router = useRouter()

  // ── Global keyboard shortcuts ──
  // Always mounted so the shortcut works even when the dialog is closed.
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Cmd+K / Ctrl+K → toggle search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
        return
      }

      // "/" → open search (only when not typing in an input/textarea/contenteditable)
      if (e.key === "/" && !isTypingTarget(e.target) && !open) {
        e.preventDefault()
        onOpenChange(true)
      }
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [open, onOpenChange])

  // ── Reset query when dialog closes ──
  React.useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setQuery(""), 200)
      return () => clearTimeout(t)
    }
  }, [open])

  // ── Run search ──
  const results = React.useMemo(() => {
    if (!query.trim()) return []
    return searchItems(query, 20)
  }, [query])

  // Group results by section for display
  const grouped = React.useMemo(() => {
    const map = new Map<string, SearchResult[]>()
    for (const r of results) {
      const section = r.section ?? "Other"
      if (!map.has(section)) map.set(section, [])
      map.get(section)!.push(r)
    }
    return Array.from(map.entries())
  }, [results])

  // ── Handle selection ──
  const handleSelect = React.useCallback(
    (path: string) => {
      onOpenChange(false)
      setTimeout(() => router.push(path), 50)
    },
    [router, onOpenChange]
  )

  // ── Popular items (shown when no query) ──
  const popular = React.useMemo(() => searchItems("", 6), [])

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      className="max-w-xl"
      commandProps={{
        // cmdk filter — we do our own filtering via searchItems(), so disable
        // the built-in fuzzy match to keep our scoring intact.
        shouldFilter: false,
      }}
    >
      <CommandInput
        placeholder="Search components, docs, guides..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[400px]">
        <CommandEmpty className="py-6 text-center font-serif text-sm text-journal-sepia">
          No results for &ldquo;{query}&rdquo;
        </CommandEmpty>

        {/* No query → show popular */}
        {!query.trim() && (
          <CommandGroup heading="Popular">
            {popular.map((item) => (
              <SearchRow
                key={item.path}
                item={item}
                onSelect={() => handleSelect(item.path)}
              />
            ))}
          </CommandGroup>
        )}

        {/* Query → show grouped results */}
        {query.trim() && grouped.length > 0 && (
          <>
            {grouped.map(([section, items], idx) => (
              <React.Fragment key={section}>
                {idx > 0 && <CommandSeparator />}
                <CommandGroup heading={section}>
                  {items.map((item) => (
                    <SearchRow
                      key={item.path}
                      item={item}
                      onSelect={() => handleSelect(item.path)}
                    />
                  ))}
                </CommandGroup>
              </React.Fragment>
            ))}
          </>
        )}

        {/* Footer hint */}
        <CommandSeparator />
        <CommandGroup>
          <div className="flex items-center justify-between px-2 py-2 font-serif text-xs text-journal-sepia">
            <span className="flex items-center gap-1.5">
              <CornerDownLeft className="size-3" />
              Open
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border border-journal-rule bg-journal-paper-dark px-1 py-0.5 font-mono text-[10px]">
                Esc
              </kbd>
              Close
            </span>
          </div>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

function SearchRow({
  item,
  onSelect,
}: {
  item: SearchResult
  onSelect: () => void
}) {
  const isDoc =
    item.path.startsWith("/docs/introduction") ||
    item.path.startsWith("/docs/installation") ||
    item.path.startsWith("/docs/cli") ||
    item.path.startsWith("/docs/theming") ||
    item.path.startsWith("/docs/dark-mode") ||
    item.path.startsWith("/docs/typography") ||
    item.path.startsWith("/docs/figma") ||
    item.path.startsWith("/docs/changelog")

  return (
    <CommandItem
      value={item.path}
      onSelect={onSelect}
      className="group flex items-start gap-3 py-2.5"
    >
      <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-sm bg-journal-paper-dark text-journal-burgundy">
        {isDoc ? (
          <FileText className="size-3.5" />
        ) : (
          <Hash className="size-3.5" />
        )}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-sm font-medium text-journal-ink">
            {item.title}
          </span>
          {item.status && (
            <span className="journal-eyebrow text-[9px] text-journal-burgundy">
              {item.status}
            </span>
          )}
        </div>
        {item.description && (
          <p className="truncate font-serif text-xs text-journal-ink-light">
            {item.description}
          </p>
        )}
      </div>
      <span className="journal-eyebrow shrink-0 opacity-0 transition group-aria-selected:opacity-100">
        ↵
      </span>
    </CommandItem>
  )
}

/**
 * Check if the keyboard event target is an input/textarea/contenteditable.
 */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  const tag = target.tagName.toLowerCase()
  if (tag === "input" || tag === "textarea" || tag === "select") return true
  if (target.isContentEditable) return true
  return false
}
