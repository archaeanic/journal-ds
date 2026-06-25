"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"

const themeVars = `:root {
  --radius: 0.5rem;
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
}`

const tailwindTheme = `theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // ...and so on
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
}`

const customTheme = `:root {
  /* Override the default primary color with a custom one. */
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;

  /* Make the radius larger for a more rounded look. */
  --radius: 0.75rem;

  /* Custom accent color for callouts and highlights. */
  --accent: 199 89% 48%;
  --accent-foreground: 0 0% 100%;
}`

export function ThemingPage() {
  return (
    <DocPage
      title="Theming"
      description="Customize the look and feel of Lumen UI with CSS variables. Change colors, radii, spacing, and typography without touching component source code."
    >
      <P>
        Every component in Lumen UI is styled using CSS variables. This means
        you can theme the entire design system by changing a handful of
        variables in your global CSS — no need to override individual
        components or fight against opinionated styles.
      </P>

      <DocSection title="How it works">
        <P>
          Lumen UI uses HSL color values (e.g. <InlineCode>240 5.9% 10%</InlineCode>)
          stored as CSS variables. Tailwind CSS reads these variables via the{" "}
          <InlineCode>hsl(var(--variable))</InlineCode> syntax, which means
          utility classes like <InlineCode>bg-primary</InlineCode>,{" "}
          <InlineCode>text-muted-foreground</InlineCode>, and{" "}
          <InlineCode>border-border</InlineCode> all reference the same theme.
        </P>
        <P>
          To customize the theme, override any of the variables in your global
          CSS file:
        </P>
        <CodeBlock code={themeVars} language="css" className="my-4" filename="src/globals.css" />
      </DocSection>

      <DocSection title="Tailwind configuration">
        <P>
          For the variables to be picked up by Tailwind utilities, you need to
          map them in your <InlineCode>tailwind.config.ts</InlineCode>:
        </P>
        <CodeBlock code={tailwindTheme} language="ts" className="my-4" filename="tailwind.config.ts" />
      </DocSection>

      <DocSection title="Customizing the primary color">
        <P>
          The most common customization is changing the primary color. Just
          override the <InlineCode>--primary</InlineCode> and{" "}
          <InlineCode>--primary-foreground</InlineCode> variables:
        </P>
        <CodeBlock code={customTheme} language="css" className="my-4" filename="src/globals.css" />
        <P>
          The new color will automatically apply to every component that uses{" "}
          <InlineCode>bg-primary</InlineCode>, including buttons, switches, and
          progress bars.
        </P>
      </DocSection>

      <DocSection title="Color tokens">
        <P>
          Lumen UI ships with the following color tokens, all of which support
          light and dark mode out of the box:
        </P>
        <div className="my-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {colorTokens.map((token) => (
            <div
              key={token.name}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div
                className="size-10 shrink-0 rounded-md border"
                style={{ background: token.swatch }}
                aria-hidden
              />
              <div>
                <code className="text-[13px] font-medium">{token.name}</code>
                <p className="text-xs text-muted-foreground">{token.description}</p>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Radius">
        <P>
          The <InlineCode>--radius</InlineCode> variable controls the corner
          radius of every component. Lumen UI uses three derived radius
          values:
        </P>
        <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
          <li><InlineCode>--radius-sm</InlineCode>: <code className="font-mono text-xs">calc(var(--radius) - 4px)</code></li>
          <li><InlineCode>--radius-md</InlineCode>: <code className="font-mono text-xs">calc(var(--radius) - 2px)</code></li>
          <li><InlineCode>--radius-lg</InlineCode>: <code className="font-mono text-xs">var(--radius)</code></li>
          <li><InlineCode>--radius-xl</InlineCode>: <code className="font-mono text-xs">calc(var(--radius) + 4px)</code></li>
        </ul>
        <P>
          Set <InlineCode>--radius</InlineCode> to <InlineCode>0</InlineCode> for
          sharp corners, <InlineCode>0.5rem</InlineCode> for the default
          rounded look, or <InlineCode>1rem</InlineCode> for a softer feel.
        </P>
      </DocSection>

      <DocSection title="Tailwind CSS v4">
        <P>
          If you&apos;re using Tailwind CSS v4, you can configure the theme
          directly in CSS using the <InlineCode>@theme</InlineCode> directive,
          without a <InlineCode>tailwind.config.ts</InlineCode> file:
        </P>
        <CodeBlock
          code={`@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ... etc */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}`}
          language="css"
          className="my-4"
        />
      </DocSection>

      <Callout type="tip" title="Convention">
        We recommend using HSL values for your color tokens because they&apos;re
        easier to reason about (hue, saturation, lightness) and they work
        seamlessly with Tailwind&apos;s <InlineCode>hsl(var(--x))</InlineCode>{" "}
        syntax. If you prefer OKLCH or hex, you&apos;ll need to adjust the
        Tailwind config to use the right color function.
      </Callout>
    </DocPage>
  )
}

const colorTokens = [
  { name: "background", description: "Page background", swatch: "oklch(1 0 0)" },
  { name: "foreground", description: "Default text", swatch: "oklch(0.145 0 0)" },
  { name: "primary", description: "Primary actions", swatch: "oklch(0.205 0 0)" },
  { name: "secondary", description: "Subtle actions", swatch: "oklch(0.97 0 0)" },
  { name: "muted", description: "Muted backgrounds", swatch: "oklch(0.97 0 0)" },
  { name: "accent", description: "Highlights & hovers", swatch: "oklch(0.97 0 0)" },
  { name: "destructive", description: "Errors & danger", swatch: "oklch(0.577 0.245 27.325)" },
  { name: "card", description: "Card backgrounds", swatch: "oklch(1 0 0)" },
  { name: "popover", description: "Floating panels", swatch: "oklch(1 0 0)" },
  { name: "border", description: "Borders & dividers", swatch: "oklch(0.922 0 0)" },
  { name: "input", description: "Form input borders", swatch: "oklch(0.922 0 0)" },
  { name: "ring", description: "Focus rings", swatch: "oklch(0.708 0 0)" },
]
