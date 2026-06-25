"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"

const initCode = `npx @journal-ds/cli init`

const addCode = `npx @journal-ds/cli add button`

const addMultiple = `npx @journal-ds/cli add button card dialog input label`

const addAll = `npx @journal-ds/cli add --all`

const configFile = `{
  "$schema": "https://journal-ds.dev/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}`

const diffOutput = `Created components/ui/button.tsx.
Updated src/globals.css.
Updated tailwind.config.ts.`

export function CliPage() {
  return (
    <DocPage
      title="Components CLI"
      description="Use the Journal DS CLI to add components to your project. The source code is copied directly into your codebase, so you have full ownership."
    >
      <P>
        The Journal DS CLI is a command-line tool that copies component source
        code directly into your project. This is the recommended way to use
        Journal DS — it gives you full ownership of the code, eliminates the
        runtime dependency, and makes customization trivial.
      </P>

      <Callout type="note" title="Why copy instead of install?">
        When you install a component library as a dependency, you&apos;re
        locked into the library&apos;s API and styling decisions. The CLI
        approach gives you the source code itself — you can rename props,
        restyle components, or even delete parts you don&apos;t need.
      </Callout>

      <DocSection title="1. Initialize the CLI">
        <P>
          Run the <InlineCode>init</InlineCode> command to set up the Journal DS
          configuration file in your project:
        </P>
        <CodeBlock code={initCode} language="bash" className="my-4" />
        <P>
          The CLI will ask you a few questions about your project setup —
          styling preferences, TypeScript aliases, base color, and so on — and
          generate a <InlineCode>journal.json</InlineCode> config file:
        </P>
        <CodeBlock code={configFile} language="json" className="my-4" filename="journal.json" />
      </DocSection>

      <DocSection title="2. Add components">
        <P>
          Use the <InlineCode>add</InlineCode> command to add a single
          component:
        </P>
        <CodeBlock code={addCode} language="bash" className="my-4" />
        <P>
          You can also add multiple components at once:
        </P>
        <CodeBlock code={addMultiple} language="bash" className="my-4" />
        <P>
          Or add every component in the library:
        </P>
        <CodeBlock code={addAll} language="bash" className="my-4" />
      </DocSection>

      <DocSection title="3. What the CLI does">
        <P>
          When you add a component, the CLI:
        </P>
        <ol className="ml-4 list-decimal space-y-1 text-muted-foreground">
          <li>
            Fetches the latest source code from the{" "}
            <InlineCode>@journal-ds/registry</InlineCode> package.
          </li>
          <li>
            Resolves path aliases based on your <InlineCode>journal.json</InlineCode>{" "}
            config.
          </li>
          <li>
            Writes the component file to <InlineCode>components/ui/</InlineCode>.
          </li>
          <li>
            Updates your Tailwind config and global CSS with any required
            theme extensions.
          </li>
          <li>
            Installs any missing dependencies (e.g.{" "}
            <InlineCode>@radix-ui/react-*</InlineCode>).
          </li>
        </ol>
        <P>The CLI output looks something like this:</P>
        <CodeBlock code={diffOutput} language="bash" className="my-4" />
      </DocSection>

      <DocSection title="Options">
        <P>The <InlineCode>add</InlineCode> command supports the following flags:</P>
        <div className="my-4 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr className="border-b">
                <th className="px-4 py-2 text-left font-semibold">Flag</th>
                <th className="px-4 py-2 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2"><code className="font-mono text-xs">-o, --overwrite</code></td>
                <td className="px-4 py-2 text-muted-foreground">Overwrite existing component files.</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><code className="font-mono text-xs">-y, --yes</code></td>
                <td className="px-4 py-2 text-muted-foreground">Skip confirmation prompts.</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><code className="font-mono text-xs">-d, --dry-run</code></td>
                <td className="px-4 py-2 text-muted-foreground">Print the changes that would be made without writing any files.</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><code className="font-mono text-xs">-a, --all</code></td>
                <td className="px-4 py-2 text-muted-foreground">Add every component in the registry.</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><code className="font-mono text-xs">--cwd &lt;path&gt;</code></td>
                <td className="px-4 py-2 text-muted-foreground">Run the CLI in a different working directory.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Styling variants">
        <P>
          Journal DS ships with two styling variants: <InlineCode>default</InlineCode>{" "}
          and <InlineCode>new-york</InlineCode>. The <InlineCode>new-york</InlineCode>{" "}
          style is more compact and uses smaller radii — it&apos;s what we use
          on this website. Set the <InlineCode>style</InlineCode> field in your{" "}
          <InlineCode>journal.json</InlineCode> to switch between them.
        </P>
      </DocSection>

      <Callout type="tip" title="Programmatic usage">
        You can also use the CLI programmatically by importing from{" "}
        <InlineCode>@journal-ds/cli</InlineCode>. This is useful if you want to
        build your own component registry tooling on top of Journal DS.
      </Callout>
    </DocPage>
  )
}
