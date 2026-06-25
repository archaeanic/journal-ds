"use client"

import * as React from "react"
import {
  ArrowRight,
  Blocks,
  Boxes,
  Check,
  Copy,
  Github,
  Layers,
  Moon,
  Palette,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"
import { Link } from "@/lib/router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodeBlock } from "@/components/docs/code-block"
import { LumenLogo } from "@/components/docs/site-header"
import { cn } from "@/lib/utils"

const installCode = `npm install @lumen-ui/react`

const usageCode = `import { Button } from "@lumen-ui/react"

export default function Example() {
  return (
    <Button variant="default">
      Get Started
    </Button>
  )
}`

const cliCode = `npx @lumen-ui/cli add button
# or pick multiple components
npx @lumen-ui/cli add button card dialog`

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        {/* Decorative background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, oklch(0.92 0 0) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:py-28 lg:py-32">
          <Link
            to="/docs/introduction"
            className="group mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition hover:bg-muted"
          >
            <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              New
            </Badge>
            Lumen UI v1.0 is here
            <ArrowRight className="size-3 transition group-hover:translate-x-0.5" />
          </Link>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build your component
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              library
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Beautifully designed, accessible components built with Radix UI and
            Tailwind CSS. Open source. Copy and paste into your apps. Own the
            code.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/docs/introduction">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/docs/button">
                <Blocks className="size-4" />
                Browse Components
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a
                href="https://github.com/lumen-ui/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Install command */}
          <div className="mt-10 w-full max-w-md">
            <CodeBlock code={installCode} language="bash" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Lumen UI?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to build modern web applications. Nothing you don&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="border-border/60">
                <CardHeader>
                  <div className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <f.icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CLI section */}
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Badge variant="secondary" className="mb-3">
              <Terminal className="mr-1 size-3" /> CLI
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Add components with one command
            </h2>
            <p className="mt-3 text-muted-foreground">
              Use the Lumen UI CLI to add components to your project. The
              source code is copied directly into your <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">components/ui</code> folder,
              so you have full ownership and can customize every detail.
            </p>
            <ul className="mt-6 space-y-2">
              {cliBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-emerald-500" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <CodeBlock code={cliCode} language="bash" />
        </div>
      </section>

      {/* Usage */}
      <section className="border-b">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <CodeBlock code={usageCode} language="tsx" />
          <div>
            <Badge variant="secondary" className="mb-3">
              <Zap className="mr-1 size-3" /> DX
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Designed for developers
            </h2>
            <p className="mt-3 text-muted-foreground">
              Each component is fully typed, accessible, and composable. Use the
              props you already know. Style with utility classes. Theme with CSS
              variables.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/docs/typography">
                Read the docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component showcase grid */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {allComponents.length}+ Components
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every component is documented with live previews, code snippets,
              and a full API reference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {allComponents.map((c) => (
              <Link
                key={c.path}
                to={c.path}
                className="group flex flex-col gap-2 rounded-lg border p-4 transition hover:bg-muted/50"
              >
                <div className="flex h-12 items-center justify-center rounded-md bg-muted/50">
                  <c.icon className="size-5 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <span className="text-center text-sm font-medium">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <Card className="overflow-hidden border-2">
            <CardContent className="relative flex flex-col items-center gap-6 p-10 text-center md:p-16">
              <LumenLogo className="size-12" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Start building today
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Lumen UI is free, open source, and MIT licensed. Use it in
                personal projects, commercial products, and everything in
                between.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/docs/installation">
                    Install Lumen UI
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://github.com/lumen-ui/react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

const features = [
  {
    icon: Boxes,
    title: "Accessible",
    description:
      "Built on top of Radix UI. Every component follows WAI-ARIA patterns and is fully keyboard navigable.",
  },
  {
    icon: Palette,
    title: "Themeable",
    description:
      "Built with CSS variables. Switch themes, customize colors, and support dark mode out of the box.",
  },
  {
    icon: Layers,
    title: "Composable",
    description:
      "Built with class-variance-authority. Components are easy to compose, extend, and customize.",
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description:
      "Own your code. No runtime dependency on a black-box library. Just clean, readable TypeScript.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "First-class dark mode support via next-themes. Toggle per component or globally.",
  },
  {
    icon: Sparkles,
    title: "Open Source",
    description:
      "MIT licensed and free forever. Use it in personal projects, commercial products, and everything in between.",
  },
]

const cliBenefits = [
  "Zero runtime dependencies",
  "Full TypeScript support",
  "Customizable theming",
  "Tree-shakeable",
]

import {
  Type,
  Square,
  ListChecks,
  ToggleLeft,
  Columns2,
  LayoutGrid,
  PanelTop,
  CircleDot,
  Table2,
  AlertCircle,
  ChevronDown,
  ListOrdered,
  Calendar,
  Image as ImageIcon,
  LineChart,
  Menu,
  Bell,
  Lock,
  MoreHorizontal,
  ChevronRight,
  ArrowLeftRight,
  Plus,
  Trash2,
  Pencil,
  Eye,
  Settings,
} from "lucide-react"

const allComponents: { title: string; path: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { title: "Button", path: "/docs/button", icon: Type },
  { title: "Input", path: "/docs/input", icon: Pencil },
  { title: "Card", path: "/docs/card", icon: LayoutGrid },
  { title: "Dialog", path: "/docs/dialog", icon: PanelTop },
  { title: "Tabs", path: "/docs/tabs", icon: Columns2 },
  { title: "Badge", path: "/docs/badge", icon: CircleDot },
  { title: "Table", path: "/docs/table", icon: Table2 },
  { title: "Alert", path: "/docs/alert", icon: AlertCircle },
  { title: "Accordion", path: "/docs/accordion", icon: ChevronDown },
  { title: "Select", path: "/docs/select", icon: ChevronRight },
  { title: "Dropdown", path: "/docs/dropdown-menu", icon: MoreHorizontal },
  { title: "Command", path: "/docs/command", icon: Terminal },
  { title: "Tooltip", path: "/docs/tooltip", icon: Plus },
  { title: "Toast", path: "/docs/toast", icon: Bell },
  { title: "Calendar", path: "/docs/calendar", icon: Calendar },
  { title: "Carousel", path: "/docs/carousel", icon: ImageIcon },
  { title: "Chart", path: "/docs/chart", icon: LineChart },
  { title: "Sidebar", path: "/docs/sidebar", icon: Menu },
  { title: "Switch", path: "/docs/switch", icon: ToggleLeft },
  { title: "Slider", path: "/docs/slider", icon: ArrowLeftRight },
  { title: "Checkbox", path: "/docs/checkbox", icon: Check },
  { title: "Form", path: "/docs/form", icon: ListChecks },
  { title: "Avatar", path: "/docs/avatar", icon: CircleDot },
  { title: "Skeleton", path: "/docs/skeleton", icon: LayoutGrid },
  { title: "Progress", path: "/docs/progress", icon: ListOrdered },
  { title: "Separator", path: "/docs/separator", icon: Settings },
  { title: "Sheet", path: "/docs/sheet", icon: PanelTop },
  { title: "Drawer", path: "/docs/drawer", icon: PanelTop },
  { title: "Popover", path: "/docs/popover", icon: Plus },
  { title: "Hover Card", path: "/docs/hover-card", icon: Eye },
  { title: "Alert Dialog", path: "/docs/alert-dialog", icon: Lock },
  { title: "Aspect Ratio", path: "/docs/aspect-ratio", icon: ImageIcon },
  { title: "Resizable", path: "/docs/resizable", icon: ArrowLeftRight },
  { title: "Scroll Area", path: "/docs/scroll-area", icon: Settings },
  { title: "Radio Group", path: "/docs/radio-group", icon: ListOrdered },
  { title: "Toggle", path: "/docs/toggle", icon: ToggleLeft },
  { title: "Toggle Group", path: "/docs/toggle-group", icon: ToggleLeft },
  { title: "Input OTP", path: "/docs/input-otp", icon: Lock },
  { title: "Label", path: "/docs/label", icon: Type },
  { title: "Textarea", path: "/docs/textarea", icon: Pencil },
  { title: "Collapsible", path: "/docs/collapsible", icon: ChevronDown },
  { title: "Navigation Menu", path: "/docs/navigation-menu", icon: Menu },
  { title: "Breadcrumb", path: "/docs/breadcrumb", icon: ChevronRight },
  { title: "Pagination", path: "/docs/pagination", icon: ChevronRight },
  { title: "Context Menu", path: "/docs/context-menu", icon: MoreHorizontal },
  { title: "Menubar", path: "/docs/menubar", icon: Menu },
  { title: "Sonner", path: "/docs/sonner", icon: Bell },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <LumenLogo className="size-4" />
          <span>Built by the Lumen UI team.</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/docs/introduction" className="hover:text-foreground">
            Docs
          </Link>
          <Link to="/docs/changelog" className="hover:text-foreground">
            Changelog
          </Link>
          <a
            href="https://github.com/lumen-ui/react"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
