"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { InlineCode as IC } from "@/components/docs/doc-page"

const npmInstall = `npm install @journal-ds/react`
const pnpmInstall = `pnpm add @journal-ds/react`
const yarnInstall = `yarn add @journal-ds/react`
const bunInstall = `bun add @journal-ds/react`

const tailwindConfig = `import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@journal-ds/react/dist/**/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config`

const cssVariables = `@layer base {
  :root {
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
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}`

const importCss = `@import "@journal-ds/react/styles";`

export function InstallationPage() {
  return (
    <DocPage
      title="Installation"
      description="Install Journal DS in your React or Next.js project in under 5 minutes."
    >
      <DocSection title="Prerequisites">
        <P>
          Journal DS is built for <IC>React 18+</IC> and <IC>TypeScript 5+</IC>.
          It works with any modern bundler (Vite, Next.js, Remix, Webpack, etc.)
          and assumes you&apos;re using Tailwind CSS for styling.
        </P>
        <P>You&apos;ll need the following peer dependencies installed:</P>
        <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
          <li><IC>react@^18</IC> or <IC>react@^19</IC></li>
          <li><IC>react-dom@^18</IC> or <IC>react-dom@^19</IC></li>
          <li><IC>tailwindcss@^3</IC> or <IC>tailwindcss@^4</IC></li>
        </ul>
      </DocSection>

      <DocSection title="1. Install the package">
        <P>Install <InlineCode>@journal-ds/react</InlineCode> with your favorite package manager:</P>
        <div className="my-4 grid gap-3 md:grid-cols-2">
          <CodeBlock code={npmInstall} language="bash" />
          <CodeBlock code={pnpmInstall} language="bash" />
          <CodeBlock code={yarnInstall} language="bash" />
          <CodeBlock code={bunInstall} language="bash" />
        </div>
      </DocSection>

      <DocSection title="2. Import the styles">
        <P>
          Add the Journal DS styles to your global CSS file. This brings in the
          CSS variables that every component uses for theming.
        </P>
        <CodeBlock code={importCss} language="css" className="my-4" filename="src/globals.css" />
        <P>
          Alternatively, copy the CSS variables directly into your own CSS so
          you can customize them:
        </P>
        <CodeBlock code={cssVariables} language="css" className="my-4" filename="src/globals.css" />
      </DocSection>

      <DocSection title="3. Configure Tailwind">
        <P>
          Add the Journal DS theme to your Tailwind config so utility classes
          like <InlineCode>bg-primary</InlineCode> and{" "}
          <InlineCode>text-foreground</InlineCode> work as expected.
        </P>
        <CodeBlock code={tailwindConfig} language="ts" className="my-4" filename="tailwind.config.ts" />

        <Callout type="note" title="Tailwind CSS v4">
          If you&apos;re using Tailwind CSS v4, you don&apos;t need a{" "}
          <InlineCode>tailwind.config.ts</InlineCode> file. The theme is
          configured in CSS via the <InlineCode>@theme</InlineCode> directive.
          See the <a href="#/docs/theming" className="underline">Theming guide</a>{" "}
          for details.
        </Callout>
      </DocSection>

      <DocSection title="4. Set up dark mode (optional)">
        <P>
          To enable dark mode, install <IC>next-themes</IC> and wrap your app
          in a <IC>ThemeProvider</IC>:
        </P>
        <CodeBlock
          code={`npm install next-themes`}
          language="bash"
          className="my-4"
        />
        <CodeBlock
          code={`import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}`}
          language="tsx"
          className="my-4"
          filename="src/app/providers.tsx"
        />
        <P>
          See the <a href="#/docs/dark-mode" className="underline">Dark Mode guide</a>{" "}
          for the full setup.
        </P>
      </DocSection>

      <DocSection title="5. Start using components">
        <P>That&apos;s it. Import any component and start building:</P>
        <CodeBlock
          code={`import { Button } from "@journal-ds/react"

export default function App() {
  return <Button>Hello, Journal!</Button>
}`}
          language="tsx"
          className="my-4"
        />
      </DocSection>

      <DocSection title="CLI alternative">
        <P>
          Prefer to copy the source code into your project instead of using
          the package? Use the Journal DS CLI:
        </P>
        <CodeBlock code={`npx @journal-ds/cli add button`} language="bash" className="my-4" />
        <P>
          The CLI copies the component&apos;s source code directly into your{" "}
          <InlineCode>components/ui</InlineCode> folder, giving you full
          ownership and the ability to customize every line.
        </P>
      </DocSection>

      <Callout type="tip" title="Next steps">
        Once you&apos;re set up, head over to the{" "}
        <a href="#/docs/theming" className="underline">Theming guide</a> to
        learn how to customize colors, radii, and typography. Or jump straight
        to the <a href="#/docs/button" className="underline">Button docs</a>{" "}
        to start building.
      </Callout>
    </DocPage>
  )
}
