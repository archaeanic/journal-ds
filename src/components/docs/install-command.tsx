"use client"

import * as React from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

type InstallCommandProps = {
  /** The CLI command, e.g. "npx @journal-ds/cli add button" */
  command: string
  /** Optional className */
  className?: string
}

/**
 * A prominent install command block — like shadcn/ui uses.
 * Shows the command with a copy button and a Terminal icon.
 * Styled in the Journal palette (paper-dark, burgundy, sepia).
 */
export function InstallCommand({ command, className }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false)

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea")
      ta.value = command
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }, [command])

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-sm border border-journal-rule bg-journal-paper-dark px-4 py-3 font-mono text-sm text-journal-ink my-4",
        className
      )}
    >
      <Terminal className="size-4 shrink-0 text-journal-burgundy" />
      <span className="text-journal-sepia select-none">$</span>
      <code className="flex-1 overflow-x-auto whitespace-nowrap lumen-scroll">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy command"
        className="shrink-0 rounded-sm p-1 text-journal-sepia transition hover:bg-journal-paper hover:text-journal-burgundy"
      >
        {copied ? (
          <Check className="size-4 text-journal-forest" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  )
}
