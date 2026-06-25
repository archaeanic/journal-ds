"use client"

import * as React from "react"
import { Copy, Check, Code, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./code-block"

type ComponentPreviewProps = {
  /** The preview JSX element. */
  children: React.ReactNode
  /** The source code shown in the Code tab. */
  code: string
  /** Optional className for the preview container. */
  className?: string
  /** Optional alignment of the preview content. */
  align?: "center" | "start"
}

/**
 * A live preview block with two tabs: Preview and Code.
 * Mirrors the shadcn/ui docs preview component.
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
    <div className="group relative overflow-hidden rounded-lg border">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b bg-muted/40 px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition",
              tab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="size-3.5" />
            Preview
          </button>
          <button
            type="button"
            onClick={() => setTab("code")}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition",
              tab === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code className="size-3.5" />
            Code
          </button>
        </div>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium text-muted-foreground transition hover:text-foreground"
          aria-label="Copy source"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-emerald-500" />
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
            "relative flex min-h-[280px] w-full justify-center overflow-x-hidden p-8",
            align === "center" ? "items-center" : "items-start",
            className
          )}
        >
          {/* Subtle grid background */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
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
