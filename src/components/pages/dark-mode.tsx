"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { ThemeToggle } from "@/components/docs/theme-toggle"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

const installNextThemes = `npm install next-themes`

const themeProvider = `"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`

const wrapRoot = `import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`

const toggleButton = `"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@journal-ds/react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}`

export function DarkModePage() {
  return (
    <DocPage
      title="Dark Mode"
      description="Add dark mode to your Journal DS app with next-themes. Supports system preference, manual toggle, and per-route overrides."
    >
      <P>
        Journal DS ships with first-class dark mode support. The dark theme is
        defined by adding the <InlineCode>.dark</InlineCode> class to the{" "}
        <InlineCode>&lt;html&gt;</InlineCode> element, which overrides all the
        CSS variables to a darker palette.
      </P>

      <ComponentPreview
        code={`<div className="flex items-center gap-2">
  <span>Toggle the theme:</span>
  <ThemeToggle />
</div>`}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">Toggle the theme:</span>
          <ThemeToggle />
        </div>
      </ComponentPreview>

      <DocSection title="1. Install next-themes">
        <P>
          We use <InlineCode>next-themes</InlineCode> because it handles SSR,
          system preference detection, and persistence for you.
        </P>
        <CodeBlock code={installNextThemes} language="bash" className="my-4" />
      </DocSection>

      <DocSection title="2. Add a ThemeProvider">
        <P>
          Create a <InlineCode>ThemeProvider</InlineCode> component that wraps
          the <InlineCode>next-themes</InlineCode> provider:
        </P>
        <CodeBlock code={themeProvider} language="tsx" className="my-4" filename="src/components/theme-provider.tsx" />
      </DocSection>

      <DocSection title="3. Wrap your root layout">
        <P>
          Wrap your application with the <InlineCode>ThemeProvider</InlineCode>{" "}
          and make sure to add <InlineCode>suppressHydrationWarning</InlineCode>{" "}
          to the <InlineCode>&lt;html&gt;</InlineCode> tag — next-themes sets
          the <InlineCode>class</InlineCode> attribute on the client before
          React hydrates.
        </P>
        <CodeBlock code={wrapRoot} language="tsx" className="my-4" filename="src/app/layout.tsx" />
      </DocSection>

      <DocSection title="4. Add a theme toggle">
        <P>
          Create a button that toggles between light and dark mode using the{" "}
          <InlineCode>useTheme</InlineCode> hook:
        </P>
        <CodeBlock code={toggleButton} language="tsx" className="my-4" filename="src/components/theme-toggle.tsx" />
      </DocSection>

      <DocSection title="System preference">
        <P>
          When you set <InlineCode>enableSystem</InlineCode> and{" "}
          <InlineCode>defaultTheme=&quot;system&quot;</InlineCode>, next-themes
          will automatically pick the user&apos;s OS preference on first load.
          If the user changes their OS theme, your app will follow along.
        </P>
        <P>
          You can also force a specific theme by setting the{" "}
          <InlineCode>attribute</InlineCode> prop to{" "}
          <InlineCode>&quot;class&quot;</InlineCode> (default) or{" "}
          <InlineCode>&quot;data-theme&quot;</InlineCode>.
        </P>
      </DocSection>

      <DocSection title="Tailwind configuration">
        <P>
          To enable dark mode via class in Tailwind CSS v3, set{" "}
          <InlineCode>darkMode: [&quot;class&quot;]</InlineCode> in your config:
        </P>
        <CodeBlock
          code={`// tailwind.config.ts
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  // ... rest of your config
} satisfies Config`}
          language="ts"
          className="my-4"
        />
        <P>
          In Tailwind v4, dark mode via class is configured with the{" "}
          <InlineCode>@custom-variant</InlineCode> directive in CSS:
        </P>
        <CodeBlock
          code={`@import "tailwindcss";

@custom-variant dark (&:is(.dark *));`}
          language="css"
          className="my-4"
        />
      </DocSection>

      <Callout type="warning" title="SSR caveat">
        When using <InlineCode>next-themes</InlineCode> with SSR, the server
        doesn&apos;t know the user&apos;s theme preference until the client
        hydrates. This can cause a flash of the wrong theme. To avoid this,
        make sure your <InlineCode>ThemeProvider</InlineCode> uses the{" "}
        <InlineCode>attribute=&quot;class&quot;</InlineCode> prop and that you
        add <InlineCode>suppressHydrationWarning</InlineCode> to the{" "}
        <InlineCode>&lt;html&gt;</InlineCode> tag.
      </Callout>
    </DocPage>
  )
}
