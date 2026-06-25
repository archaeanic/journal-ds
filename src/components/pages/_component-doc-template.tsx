"use client"

import * as React from "react"
import { Terminal, Package } from "lucide-react"
import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropTable, type PropRow } from "@/components/docs/prop-table"
import { InstallCommand } from "@/components/docs/install-command"
import { cn } from "@/lib/utils"

export type ExampleBlock = {
  title?: string
  /** The JSX preview element */
  preview: React.ReactNode
  /** The source code shown in the Code tab */
  code: string
}

export type ComponentDocConfig = {
  title: string
  description: string
  /** Component slug, used for the install command */
  slug: string
  /** Badges to show under the title (e.g. "New", "Updated") */
  badges?: string[]
  /** The main import statement */
  importCode?: string
  /** Custom install command (defaults to `npx @journal-ds/cli add <slug>`) */
  installCode?: string
  /** A short pitch paragraph that goes above the first preview */
  intro?: React.ReactNode
  /** The primary preview block shown at the top */
  primary: ExampleBlock
  /** Additional example blocks (variants, usage patterns, etc.) */
  examples?: ExampleBlock[]
  /** The component's prop table */
  props?: PropRow[]
  /** Optional API reference section content */
  api?: React.ReactNode
  /** Optional "see also" links */
  seeAlso?: { title: string; href: string }[]
}

export function ComponentDocPage(config: ComponentDocConfig) {
  const componentName = config.title.replace(/[^A-Za-z]/g, "").replace(/^./, (c) => c.toUpperCase())
  const cliCommand = config.installCode ?? `npx @journal-ds/cli add ${config.slug}`
  const npmCommand = `npm install @journal-ds/react`
  const importCode =
    config.importCode ??
    `import { ${componentName} } from "@journal-ds/react"`

  return (
    <DocPage title={config.title} description={config.description}>
      {/* Intro */}
      {config.intro && (
        <div className="space-y-4 font-serif text-[15px] leading-[1.8] text-journal-ink-light">
          {config.intro}
        </div>
      )}

      {/* Install */}
      <DocSection title="Installation">
        <P>
          Add the component to your project with the Journal CLI. This copies
          the source code into your <InlineCode>components/ui/</InlineCode>{" "}
          folder — you own the code and can customize every line.
        </P>
        <InstallCommand command={cliCommand} />

        <P className="mt-6">
          Prefer the npm package? Install it and import directly:
        </P>
        <CodeBlock code={npmCommand} language="bash" className="my-4" />
        <CodeBlock code={importCode} language="tsx" className="my-4" />

        <Callout type="note" title="Don't have a journal.json yet?">
          Run <InlineCode>npx @journal-ds/cli init</InlineCode> first to set up
          your path aliases and theme. See the{" "}
          <a href="#/docs/cli" className="text-journal-burgundy underline underline-offset-4">
            CLI docs
          </a>{" "}
          for details.
        </Callout>
      </DocSection>

      {/* Primary preview */}
      <DocSection title="Preview">
        <ComponentPreview code={config.primary.code}>
          {config.primary.preview}
        </ComponentPreview>
      </DocSection>

      {/* Usage */}
      <DocSection title="Usage">
        <CodeBlock
          code={`import { ${componentName} } from "@journal-ds/react"

export default function Example() {
  return (
    ${primaryCodeSnippet(config.primary.code, componentName)}
  )
}`}
          language="tsx"
          className="my-4"
        />
      </DocSection>

      {/* Examples */}
      {config.examples && config.examples.length > 0 && (
        <DocSection title="Examples">
          {config.examples.map((ex, i) => (
            <div key={i} className="my-6">
              {ex.title && (
                <h3 className="mb-3 font-serif text-lg font-semibold tracking-tight text-journal-ink">
                  {ex.title}
                </h3>
              )}
              <ComponentPreview code={ex.code}>{ex.preview}</ComponentPreview>
            </div>
          ))}
        </DocSection>
      )}

      {/* API */}
      {config.props && config.props.length > 0 && (
        <DocSection title="API Reference">
          <P>
            The <InlineCode>{config.title}</InlineCode> component accepts the
            following props:
          </P>
          <PropTable rows={config.props} />
        </DocSection>
      )}

      {/* Custom API content */}
      {config.api}

      {/* See also */}
      {config.seeAlso && config.seeAlso.length > 0 && (
        <DocSection title="See Also">
          <ul className="ml-4 list-disc space-y-1 font-serif text-journal-ink-light">
            {config.seeAlso.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-journal-burgundy underline underline-offset-4"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </DocSection>
      )}

      <Callout type="tip" title="Need help?">
        If you run into issues, check the{" "}
        <a
          href="https://github.com/journal-ds/react/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-journal-burgundy underline underline-offset-4"
        >
          GitHub issues
        </a>{" "}
        or open a new one. We&apos;re happy to help.
      </Callout>
    </DocPage>
  )
}

/**
 * Extract a clean first-line snippet from the preview code for the Usage example.
 * Falls back to a self-closing tag if the code doesn't start with JSX.
 */
function primaryCodeSnippet(code: string, componentName: string): string {
  const firstLine = code.split("\n")[0]
  if (firstLine.trim().startsWith("<")) {
    // Take the first JSX tag only.
    return firstLine.trim()
  }
  return `<${componentName} />`
}
