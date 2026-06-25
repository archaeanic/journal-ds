"use client"

import * as React from "react"
import { Terminal, Package } from "lucide-react"
import { DocPage, DocSection, P, InlineCode } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropTable, type PropRow } from "@/components/docs/prop-table"
import { Callout } from "@/components/docs/doc-page"

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
  /** Custom install command (defaults to `npx @lumen-ui/cli add <slug>`) */
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
  const installCmd =
    config.installCode ?? `npx @lumen-ui/cli add ${config.slug}`
  const importCode =
    config.importCode ??
    `import { ${config.title.replace(/[^A-Za-z]/g, "").replace(/^./, (c) => c.toUpperCase())} } from "@lumen-ui/react"`

  return (
    <DocPage title={config.title} description={config.description}>
      {/* Intro */}
      {config.intro && (
        <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
          {config.intro}
        </div>
      )}

      {/* Install */}
      <DocSection title="Installation">
        <P>
          Add the component to your project using the CLI:
        </P>
        <CodeBlock code={installCmd} language="bash" className="my-4" />
        <P>Then import it in your code:</P>
        <CodeBlock code={importCode} language="tsx" className="my-4" />
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
          code={`import { ${config.title.replace(/[^A-Za-z]/g, "").replace(/^./, (c) => c.toUpperCase())} } from "@lumen-ui/react"

export default function Example() {
  return (
    ${config.primary.code.split("\n")[0].startsWith("<") ? config.primary.code.replace(/<[^>]*>/, (m) => m).split("\n").slice(0, 1).join("\n") : `<${config.title.replace(/[^A-Za-z]/g, "").replace(/^./, (c) => c.toUpperCase())} />`}
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
                <h3 className="mb-3 text-lg font-semibold tracking-tight">
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
          <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
            {config.seeAlso.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground underline underline-offset-4"
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
          href="https://github.com/lumen-ui/react/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub issues
        </a>{" "}
        or open a new one. We&apos;re happy to help.
      </Callout>
    </DocPage>
  )
}
