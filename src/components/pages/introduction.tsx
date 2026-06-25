"use client"

import { ArrowRight, Github, Sparkles } from "lucide-react"
import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const installCode = `npm install @journal-ds/react`

const usageCode = `import { Button } from "@journal-ds/react"

export default function App() {
  return (
    <Button variant="outline">
      Get Started
    </Button>
  )
}`

export function IntroductionPage() {
  return (
    <DocPage
      title="Introduction"
      description="Journal Design System is a collection of warm, editorial, accessible components that you can copy and paste into your React apps."
    >
      <P>
        Journal Design System is <strong>not</strong> a component library in
        the traditional sense. It&apos;s a collection of reusable components
        built with <InlineCode>Radix UI</InlineCode> primitives and styled
        with <InlineCode>Tailwind CSS</InlineCode> using a warm, editorial
        design language inspired by the art of journaling and print
        publishing. You copy the source code into your project, which means
        you have full ownership and can customize every detail.
      </P>

      <P>
        The result is a design system that&apos;s accessible, themeable, and
        composable — without the bloat of a runtime dependency on a
        black-box library. Every component is fully typed, follows WAI-ARIA
        patterns, and ships with sensible defaults that you can override with
        utility classes or CSS variables. The typography uses{" "}
        <InlineCode>Playfair Display</InlineCode> for headings and{" "}
        <InlineCode>Lora</InlineCode> for body text — a serif pairing tuned
        for long-form reading.
      </P>

      <Callout type="tip" title="TL;DR">
        Journal DS is a set of <strong>open source</strong> components you
        copy into your project. There&apos;s no runtime dependency. You own
        the code, and you can customize every detail.
      </Callout>

      <DocSection title="Philosophy">
        <P>
          We believe that great design systems should not require you to give
          up control. Most component libraries ship a single, opinionated
          implementation that you have to wrap, override, or fork if it
          doesn&apos;t quite fit your needs. Journal DS takes a different
          approach: the source code is yours to copy and modify.
        </P>
        <P>
          This means you can rename props, restyle components, swap out
          primitives, or even delete parts you don&apos;t need. The trade-off
          is that you also own the maintenance — but for most projects,
          that&apos;s a worthwhile exchange for the flexibility.
        </P>
        <P>
          Every component in Journal DS is built on top of{" "}
          <InlineCode>Radix UI</InlineCode>, which means accessibility is
          baked in. Focus management, keyboard navigation, ARIA attributes,
          and screen reader support all work out of the box.
        </P>
      </DocSection>

      <DocSection title="Quick start">
        <P>
          Install the package and import any component you need:
        </P>
        <CodeBlock code={installCode} language="bash" className="my-4" />
        <CodeBlock code={usageCode} language="tsx" className="my-4" />
        <P>
          Or use the CLI to copy individual component source files into your
          project:
        </P>
        <CodeBlock
          code={`npx @journal-ds/cli add button`}
          language="bash"
          className="my-4"
        />
      </DocSection>

      <DocSection title="A taste of what you get">
        <P>
          Here&apos;s a quick preview of the <InlineCode>Button</InlineCode>{" "}
          component — one of over 47 components in the library.
        </P>
        <ComponentPreview
          code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`}
        >
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </ComponentPreview>
      </DocSection>

      <DocSection title="What&apos;s included">
        <P>
          Journal DS ships with 47+ components across the following
          categories:
        </P>
        <ul className="ml-4 list-disc space-y-1 font-serif text-journal-ink-light">
          <li><strong>Forms</strong> — Button, Input, Select, Checkbox, Switch, Slider, and more.</li>
          <li><strong>Layout</strong> — Card, Separator, AspectRatio, Resizable, ScrollArea.</li>
          <li><strong>Display</strong> — Badge, Avatar, Skeleton, Progress, Table, Alert, Accordion, Tabs.</li>
          <li><strong>Overlays</strong> — Dialog, Sheet, Drawer, Popover, Tooltip, HoverCard, AlertDialog.</li>
          <li><strong>Navigation</strong> — NavigationMenu, Breadcrumb, Pagination, DropdownMenu, Command.</li>
          <li><strong>Feedback</strong> — Toast, Sonner, Calendar, Carousel, Chart, Sidebar.</li>
        </ul>
      </DocSection>

      <DocSection title="Open Source">
        <P>
          Journal DS is <InlineCode>MIT</InlineCode> licensed and free
          forever. The source code is available on{" "}
          <a
            href="https://github.com/journal-ds/react"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-journal-burgundy underline underline-offset-4"
          >
            GitHub
          </a>
          . Contributions, bug reports, and feature requests are welcome.
        </P>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/docs/installation">
              <Sparkles className="size-4" />
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/journal-ds/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </DocSection>
    </DocPage>
  )
}
