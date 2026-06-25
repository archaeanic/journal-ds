"use client"

import * as React from "react"
import { Copy, Check, Code, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./code-block"

type ComponentPreviewProps = {
  children: React.ReactNode
  code: string
  className?: string
  align?: "center" | "start"
}

/**
 * Journal-styled preview block with two tabs: Preview and Code.
 * Preview pane uses the journal-vignette paper effect.
 */
export function ComponentPreview({
  children,
  code,
  className,
  align = "center",
}: ComponentPreviewProps) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview")
  const [copied, setCopied] = React.useState(false)

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // no-op
    }
  }, [code])

  return (
    <div className="group relative overflow-hidden rounded-sm border border-journal-rule">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-journal-rule bg-journal-paper-dark px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-sm px-3 font-serif text-xs transition",
              tab === "preview"
                ? "bg-journal-paper text-journal-ink shadow-sm"
                : "text-journal-sepia hover:text-journal-ink"
            )}
          >
            <Eye className="size-3.5" />
            Preview
          </button>
          <button
            type="button"
            onClick={() => setTab("code")}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-sm px-3 font-serif text-xs transition",
              tab === "code"
                ? "bg-journal-paper text-journal-ink shadow-sm"
                : "text-journal-sepia hover:text-journal-ink"
            )}
          >
            <Code className="size-3.5" />
            Code
          </button>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-7 items-center gap-1.5 rounded-sm px-2.5 font-serif text-xs text-journal-sepia transition hover:text-journal-ink"
          aria-label="Copy source"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-journal-forest" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Body */}
      {tab === "preview" ? (
        <div
          className={cn(
            "relative flex min-h-[280px] w-full justify-center overflow-x-hidden p-8 bg-journal-paper journal-vignette",
            align === "center" ? "items-center" : "items-start",
            className
          )}
        >
          <div className="relative z-10 flex w-full flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </div>
      ) : (
        <CodeBlock code={code} language="tsx" className="rounded-none border-0" />
      )}
    </div>
  )
}
