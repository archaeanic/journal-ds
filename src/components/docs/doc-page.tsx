"use client"

import * as React from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getAdjacentItems } from "@/lib/registry"

/**
 * Shell for every documentation page — Journal style.
 * Headings are in Playfair Display; body in Lora.
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
  const path = usePathname()
  const { previous, next } = getAdjacentItems(path)

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 lg:px-8 lg:py-14">
      <header className="mb-10 border-b border-journal-rule pb-6">
        <p className="journal-eyebrow mb-3">
          {path.startsWith("/docs/") && !path.includes("introduction") && !path.includes("installation") && !path.includes("theming") && !path.includes("dark-mode") && !path.includes("typography") && !path.includes("cli") && !path.includes("changelog") && !path.includes("figma")
            ? "Component"
            : "Documentation"}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-journal-ink tracking-tight leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 font-serif text-lg md:text-xl leading-relaxed text-journal-ink-light">
            {description}
          </p>
        )}
      </header>

      <div className="prose-docs">{children}</div>

      {(previous || next) && (
        <nav
          aria-label="Pagination"
          className="mt-14 grid grid-cols-2 gap-4 border-t border-journal-rule pt-6"
        >
          {previous ? (
            <Link
              href={previous.path}
              className="group flex flex-col items-start gap-1 rounded-sm border border-journal-rule p-4 transition hover:bg-journal-paper-dark"
            >
              <span className="flex items-center gap-1 journal-eyebrow">
                <ArrowLeft className="size-3" />
                Previous
              </span>
              <span className="font-serif text-sm font-medium text-journal-ink">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next.path}
              className={cn(
                "group flex flex-col items-end gap-1 rounded-sm border border-journal-rule p-4 text-right transition hover:bg-journal-paper-dark"
              )}
            >
              <span className="flex items-center gap-1 journal-eyebrow">
                Next
                <ArrowRight className="size-3" />
              </span>
              <span className="font-serif text-sm font-medium text-journal-ink">
                {next.title}
              </span>
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
      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-journal-ink tracking-tight pb-2 border-b border-journal-rule">
        {title}
      </h2>
      <div className="mt-4 space-y-4 font-serif text-[15px] leading-[1.8] text-journal-ink-light">
        {children}
      </div>
    </section>
  )
}

/**
 * An inline callout — Journal note style.
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
        "my-6 rounded-sm border-l-2 p-4 font-serif text-sm",
        type === "note" &&
          "border-l-journal-burgundy bg-journal-stain/30 text-journal-ink-light",
        type === "warning" &&
          "border-l-journal-gold bg-journal-gold/10 text-journal-ink-light",
        type === "tip" &&
          "border-l-journal-forest bg-journal-forest/10 text-journal-ink-light"
      )}
    >
      {title && (
        <p className="mb-1.5 font-serif text-sm font-semibold text-journal-ink">
          {title}
        </p>
      )}
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}

/**
 * Inline code — paper-dark chip.
 */
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-sm bg-journal-paper-dark px-1.5 py-0.5 font-mono text-[13px] text-journal-burgundy">
      {children}
    </code>
  )
}

/**
 * A simple paragraph wrapper.
 */
export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.8] text-journal-ink-light">{children}</p>
  )
}
