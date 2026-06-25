"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function FigmaPage() {
  return (
    <DocPage
      title="Figma"
      description="Design with Lumen UI in Figma. The official Figma kit mirrors every component, variant, and token in the codebase."
    >
      <P>
        The Lumen UI Figma kit is a pixel-perfect mirror of the React
        components. It&apos;s designed to be used by both designers and
        developers — every component in the kit has a 1:1 mapping to a
        component in the codebase, so designs can be handed off without
        translation.
      </P>

      <ComponentPreview
        code={`<Button>
  <Download className="size-4" />
  Download Figma Kit
</Button>`}
      >
        <Button asChild>
          <a
            href="https://figma.com/lumen-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="size-4" />
            Download Figma Kit
          </a>
        </Button>
      </ComponentPreview>

      <DocSection title="What&apos;s included">
        <P>
          The Figma kit includes:
        </P>
        <ul className="ml-4 list-disc space-y-1.5 text-muted-foreground">
          <li>Every component in the Lumen UI library, with all variants and sizes.</li>
          <li>Auto-layout and component properties for easy composition.</li>
          <li>Color styles for every theme token, including dark mode.</li>
          <li>Typography styles for headings, body, and code.</li>
          <li>Iconography from the Lucide icon library.</li>
          <li>Pre-built page templates for common layouts (auth, dashboard, settings).</li>
        </ul>
      </DocSection>

      <DocSection title="Usage">
        <P>
          To use the kit, duplicate the file into your own Figma workspace.
          You can then customize the theme tokens (colors, radii, typography)
          to match your brand, and the changes will propagate to every
          component automatically.
        </P>
        <CodeBlock
          code={`1. Open the Lumen UI Figma file.
2. Click "Duplicate" to copy it into your workspace.
3. Edit the color styles in the "Tokens" page.
4. Use components from the "Library" page in your designs.`}
          language="bash"
          className="my-4"
        />
      </DocSection>

      <DocSection title="Design tokens">
        <P>
          The Figma kit uses Figma&apos;s variables feature to mirror the CSS
          variables in the codebase. This means if you change a color in the
          Figma file, you can apply the same change to your codebase by
          updating the corresponding CSS variable.
        </P>
        <P>
          The following tokens are available:
        </P>
        <ul className="ml-4 list-disc space-y-1.5 text-muted-foreground">
          <li><InlineCode>background</InlineCode>, <InlineCode>foreground</InlineCode></li>
          <li><InlineCode>primary</InlineCode>, <InlineCode>primary-foreground</InlineCode></li>
          <li><InlineCode>secondary</InlineCode>, <InlineCode>secondary-foreground</InlineCode></li>
          <li><InlineCode>muted</InlineCode>, <InlineCode>muted-foreground</InlineCode></li>
          <li><InlineCode>accent</InlineCode>, <InlineCode>accent-foreground</InlineCode></li>
          <li><InlineCode>destructive</InlineCode>, <InlineCode>destructive-foreground</InlineCode></li>
          <li><InlineCode>border</InlineCode>, <InlineCode>input</InlineCode>, <InlineCode>ring</InlineCode></li>
          <li><InlineCode>radius</InlineCode> and the derived <InlineCode>radius-sm</InlineCode>, <InlineCode>radius-md</InlineCode>, <InlineCode>radius-lg</InlineCode></li>
        </ul>
      </DocSection>

      <Callout type="note" title="License">
        The Lumen UI Figma kit is free to use for both personal and commercial
        projects, under the same MIT license as the codebase. Attribution is
        appreciated but not required.
      </Callout>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href="https://figma.com/lumen-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-4" />
            Open in Figma
          </a>
        </Button>
      </div>
    </DocPage>
  )
}
