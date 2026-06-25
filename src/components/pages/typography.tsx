"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { cn } from "@/lib/utils"

const fontSetup = `import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Journal DS",
  description: "Beautifully designed components.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans")}>
        {children}
      </body>
    </html>
  )
}`

const tailwindFonts = `theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
  },
}`

const proseStyles = `@layer base {
  body {
    @apply font-sans text-base leading-7 text-foreground antialiased;
  }

  h1 {
    @apply text-4xl font-bold tracking-tight;
  }

  h2 {
    @apply text-2xl font-semibold tracking-tight mt-10;
  }

  h3 {
    @apply text-xl font-semibold tracking-tight mt-8;
  }

  p {
    @apply text-muted-foreground;
  }

  a {
    @apply text-foreground underline underline-offset-4;
  }

  code {
    @apply rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em];
  }

  pre {
    @apply overflow-x-auto rounded-lg border bg-muted/50 p-4 font-mono text-sm;
  }
}`

const scales = [
  { name: "text-xs", size: "0.75rem", line: "1rem", className: "text-xs" },
  { name: "text-sm", size: "0.875rem", line: "1.25rem", className: "text-sm" },
  { name: "text-base", size: "1rem", line: "1.5rem", className: "text-base" },
  { name: "text-lg", size: "1.125rem", line: "1.75rem", className: "text-lg" },
  { name: "text-xl", size: "1.25rem", line: "1.75rem", className: "text-xl" },
  { name: "text-2xl", size: "1.5rem", line: "2rem", className: "text-2xl" },
  { name: "text-3xl", size: "1.875rem", line: "2.25rem", className: "text-3xl" },
  { name: "text-4xl", size: "2.25rem", line: "2.5rem", className: "text-4xl" },
]

export function TypographyPage() {
  return (
    <DocPage
      title="Typography"
      description="Set up a consistent type scale for your Journal DS app with next/font and Tailwind's font family utilities."
    >
      <P>
        Journal DS doesn&apos;t ship with a font — it uses the system font stack
        by default. Most projects will want to install a custom font like{" "}
        <InlineCode>Inter</InlineCode>, <InlineCode>Geist</InlineCode>, or{" "}
        <InlineCode>Roboto</InlineCode>. Here&apos;s how to wire that up.
      </P>

      <DocSection title="Setting up next/font">
        <P>
          If you&apos;re using Next.js, the easiest way to add a custom font
          is with <InlineCode>next/font</InlineCode>. It handles optimization,
          self-hosting, and CSS variable generation for you:
        </P>
        <CodeBlock code={fontSetup} language="tsx" className="my-4" filename="src/app/layout.tsx" />
      </DocSection>

      <DocSection title="Wiring the font to Tailwind">
        <P>
          Add the CSS variable to your Tailwind config so utility classes like{" "}
          <InlineCode>font-sans</InlineCode> resolve to your custom font:
        </P>
        <CodeBlock code={tailwindFonts} language="ts" className="my-4" filename="tailwind.config.ts" />
      </DocSection>

      <DocSection title="Type scale">
        <P>
          Journal DS uses Tailwind&apos;s default type scale. Here&apos;s a
          reference of the available sizes and their pixel equivalents:
        </P>
        <div className="my-4 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">Class</th>
                <th className="px-4 py-2 text-left font-semibold">Size</th>
                <th className="px-4 py-2 text-left font-semibold">Line height</th>
                <th className="px-4 py-2 text-left font-semibold">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {scales.map((s) => (
                <tr key={s.name}>
                  <td className="px-4 py-2">
                    <code className="font-mono text-xs">{s.name}</code>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">{s.size}</td>
                  <td className="px-4 py-2 text-muted-foreground">{s.line}</td>
                  <td className={cn("px-4 py-2", s.className)}>The quick brown fox</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Prose styles">
        <P>
          For long-form content (like this documentation), Journal DS recommends
          a set of base prose styles that work well with the default theme:
        </P>
        <CodeBlock code={proseStyles} language="css" className="my-4" filename="src/globals.css" />
      </DocSection>

      <Callout type="tip" title="Recommended fonts">
        We recommend the following fonts for Journal DS projects:{" "}
        <strong>Inter</strong> for body text,{" "}
        <strong>Geist</strong> for a modern, geometric look,{" "}
        <strong>Geist Mono</strong> or{" "}
        <strong>JetBrains Mono</strong> for code blocks, and{" "}
        <strong>Playfair Display</strong> or{" "}
        <strong>Newsreader</strong> for editorial-style headings.
      </Callout>
    </DocPage>
  )
}
