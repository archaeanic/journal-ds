"use client"

import * as React from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, useRouter } from "@/lib/router"
import { getAdjacentItems } from "@/lib/registry"

/**
 * Shell for every documentation page.
 * Handles the title, description, content, and prev/next nav.
 */
export function DocPage({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  const { path } = useRouter()
  const { previous, next } = getAdjacentItems(path)

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 lg:px-8 lg:py-12">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </header>

      <div className="prose-docs">{children}</div>

      {(previous || next) && (
        <nav
          aria-label="Pagination"
          className="mt-12 grid grid-cols-2 gap-4 border-t pt-6"
        >
          {previous ? (
            <Link
              to={previous.path}
              className="group flex flex-col items-start gap-1 rounded-lg border p-4 transition hover:bg-muted/50"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium">{previous.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={next.path}
              className={cn(
                "group flex flex-col items-end gap-1 rounded-lg border p-4 text-right transition hover:bg-muted/50"
              )}
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                Next
                <ArrowRight className="size-3" />
              </span>
              <span className="text-sm font-medium">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  )
}

/**
 * A sub-heading inside a doc page.
 */
export function DocSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-10 scroll-mt-20" id={id}>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

/**
 * An inline callout — used for tips, warnings, notes.
 */
export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "warning" | "tip"
  title?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-4 p-4",
        type === "note" && "border-l-blue-500/50 bg-blue-500/5",
        type === "warning" && "border-l-amber-500/50 bg-amber-500/5",
        type === "tip" && "border-l-emerald-500/50 bg-emerald-500/5"
      )}
    >
      {title && (
        <p className="mb-1 text-sm font-semibold text-foreground">{title}</p>
      )}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}

/**
 * Inline code — used inside paragraphs.
 */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">
      {children}
    </code>
  )
}

/**
 * A simple paragraph wrapper that uses consistent muted foreground color.
 */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 text-muted-foreground">{children}</p>
}
