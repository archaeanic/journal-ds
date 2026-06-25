"use client"
import * as React from "react"
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Check,
  Copy,
  Github,
  Layers,
  Moon,
  Palette,
  Sparkles,
  Terminal,
  Type as TypeIcon,
  Quote,
  PenLine,
} from "lucide-react"
import Link from "next/link"
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
import { JournalLogo } from "@/components/docs/site-header"
import { cn } from "@/lib/utils"
const installCode = `npm install @journal-ds/react`
const usageCode = `import { Button } from "@journal-ds/react"
export default function Entry() {
  return (
    <Button variant="default">
      New Entry
    </Button>
  )
}`
const cliCode = `npx @journal-ds/cli add button
# or pick multiple components
npx @journal-ds/cli add button card dialog`
const themingCode = `:root {
  --journal-paper: #FDFAF5;
  --journal-ink: #2C1810;
  --journal-burgundy: #5C1A1B;
  --journal-gold: #B8860B;
  --journal-forest: #2D5F3E;
  --journal-sepia: #8B7355;
  --journal-rule: #D9CBBA;
}`
export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-journal-paper">
      {/* Hero — editorial spread */}
      <section className="relative overflow-hidden border-b border-journal-rule">
        {/* Subtle paper texture */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, var(--journal-stain) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--journal-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--journal-rule) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:py-28 lg:py-32">
          <p className="journal-eyebrow mb-5 text-journal-burgundy">
            Open Source · MIT Licensed · Archaeanic
          </p>
          <h1 className="font-serif text-5xl font-bold tracking-tight text-journal-ink leading-[1.05] md:text-6xl lg:text-7xl">
            Journal Design
            <br />
            <span className="text-journal-burgundy">System</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg md:text-xl leading-relaxed text-journal-ink-light">
            A warm, editorial component library for Tailwind CSS. Inspired by
            the art of journaling and print publishing — serif typography,
            paper textures, and thoughtful details. Built on Radix UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-sm">
              <Link href="/docs/introduction">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm border-journal-ink text-journal-ink hover:bg-journal-ink hover:text-journal-paper">
              <Link href="/docs/button">
                <Boxes className="size-4" />
                Browse Components
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-sm text-journal-ink-light hover:text-journal-ink">
              <a
                href="https://github.com/archaeanic/journal-ds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
          {/* Stats — editorial byline style */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-journal-rule pt-8 max-w-2xl">
            <div>
              <p className="font-serif text-4xl font-bold text-journal-ink">47</p>
              <p className="journal-eyebrow mt-1.5">Components</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-journal-ink">7</p>
              <p className="journal-eyebrow mt-1.5">Categories</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-bold text-journal-ink">9</p>
              <p className="journal-eyebrow mt-1.5">CSS Utilities</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features — editorial cards */}
      <section className="border-b border-journal-rule">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <p className="journal-eyebrow mb-3">Why Journal?</p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
              Built for thoughtful interfaces
            </h2>
            <p className="mt-3 font-serif text-journal-ink-light">
              Everything you need to build warm, readable, editorial-style apps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="border-journal-rule bg-journal-paper/50 rounded-sm">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-sm bg-journal-paper-dark text-journal-burgundy">
                    <f.icon className="size-5" />
                  </div>
                  <CardTitle className="font-serif text-lg text-journal-ink">
                    {f.title}
                  </CardTitle>
                  <CardDescription className="font-serif text-journal-ink-light">
                    {f.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CLI section — two-column editorial */}
      <section className="border-b border-journal-rule bg-journal-paper-dark/40">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="journal-eyebrow mb-3 text-journal-burgundy">
              <Terminal className="inline mr-1 size-3" /> CLI
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
              Add components with one command
            </h2>
            <p className="mt-3 font-serif text-journal-ink-light leading-relaxed">
              Use the Journal CLI to add components to your project. The source
              code is copied directly into your{" "}
              <code className="rounded-sm bg-journal-paper-dark px-1.5 py-0.5 font-mono text-sm text-journal-burgundy">
                components/ui
              </code>{" "}
              folder, so you have full ownership and can customize every detail.
            </p>
            <ul className="mt-6 space-y-2">
              {cliBenefits.map((b) => (
                <li key={b} className="flex items-center gap-2 font-serif text-sm text-journal-ink-light">
                  <Check className="size-4 text-journal-forest" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <CodeBlock code={cliCode} language="bash" />
        </div>
      </section>
      {/* Usage — sample with drop cap */}
      <section className="border-b border-journal-rule">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <CodeBlock code={usageCode} language="tsx" />
          <div>
            <p className="journal-eyebrow mb-3 text-journal-burgundy">
              <PenLine className="inline mr-1 size-3" /> Developer Experience
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
              Designed for writers and builders
            </h2>
            <p className="mt-3 font-serif text-journal-ink-light leading-relaxed">
              Each component is fully typed, accessible, and composable. The
              design system ships with editorial typography, paper textures,
              and burgundy accents — perfect for journals, blogs, docs, and
              content-rich apps.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-sm border-journal-ink text-journal-ink hover:bg-journal-ink hover:text-journal-paper">
              <Link href="/docs/typography">
                Read the docs
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Theming preview — color palette */}
      <section className="border-b border-journal-rule">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="mb-10 text-center">
            <p className="journal-eyebrow mb-3 text-journal-burgundy">
              <Palette className="inline mr-1 size-3" /> Palette
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
              A warm, editorial color system
            </h2>
            <p className="mt-3 font-serif text-journal-ink-light">
              Every color is a CSS variable — theme it once, apply it everywhere.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {palette.map((c) => (
              <div key={c.name} className="text-center">
                <div
                  className={cn(
                    "h-16 rounded-sm border border-journal-rule/50",
                    c.className
                  )}
                />
                <p className="journal-eyebrow mt-1.5">{c.name}</p>
                <p className="font-mono text-[10px] text-journal-sepia/70">{c.hex}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CodeBlock code={themingCode} language="css" />
          </div>
        </div>
      </section>
      {/* Component showcase grid */}
      <section className="border-b border-journal-rule">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <p className="journal-eyebrow mb-3 text-journal-burgundy">
              <BookOpen className="inline mr-1 size-3" /> Library
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
              {allComponents.length}+ Components
            </h2>
            <p className="mt-3 font-serif text-journal-ink-light">
              Every component is documented with live previews, code snippets,
              and a full API reference.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {allComponents.map((c) => (
              <Link
                key={c.path}
                href={c.path}
                className="group flex flex-col gap-2 rounded-sm border border-journal-rule p-4 transition hover:bg-journal-paper-dark"
              >
                <div className="flex h-12 items-center justify-center rounded-sm bg-journal-paper-dark text-journal-burgundy">
                  <c.icon className="size-5 transition group-hover:scale-110" />
                </div>
                <span className="text-center font-serif text-sm font-medium text-journal-ink">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Editorial pull quote */}
      <section className="border-b border-journal-rule bg-journal-paper-dark/30">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20 text-center">
          <div className="text-journal-burgundy font-serif text-5xl leading-none select-none mb-2">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-journal-ink leading-snug tracking-tight">
            Typography is the craft of endowing human language with a durable
            visual form.
          </blockquote>
          <p className="mt-4 journal-eyebrow">
            — Robert Bringhurst, The Elements of Typographic Style
          </p>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <Card className="overflow-hidden border-2 border-journal-rule bg-journal-paper rounded-sm journal-vignette">
            <CardContent className="relative flex flex-col items-center gap-6 p-10 text-center md:p-16">
              <JournalLogo className="size-14 text-journal-burgundy" />
              <h2 className="font-serif text-3xl font-bold tracking-tight text-journal-ink md:text-4xl">
                Start your next chapter
              </h2>
              <p className="max-w-xl font-serif text-journal-ink-light leading-relaxed">
                Journal Design System is free, open source, and MIT licensed.
                Use it in personal projects, commercial products, and
                everything in between.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-sm">
                  <Link href="/docs/installation">
                    Install Journal DS
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-sm border-journal-ink text-journal-ink hover:bg-journal-ink hover:text-journal-paper">
                  <a
                    href="https://github.com/archaeanic/journal-ds"
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
    icon: BookOpen,
    title: "Editorial Typography",
    description:
      "Playfair Display for headings, Lora for body. Drop caps, pull quotes, and editorial blockquotes baked in.",
  },
  {
    icon: Palette,
    title: "Warm Palette",
    description:
      "Cream paper, deep ink, burgundy accents, sepia tones, gold highlights. Designed for long-form reading.",
  },
  {
    icon: Layers,
    title: "Paper Textures",
    description:
      "Built-in utilities for lined paper, margin rules, vignettes, and spiral-bound notebook effects.",
  },
  {
    icon: Boxes,
    title: "Accessible",
    description:
      "Built on Radix UI. Every component follows WAI-ARIA patterns and is fully keyboard navigable.",
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description:
      "Own your code. No runtime dependency. Just clean, readable TypeScript you can customize.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "First-class dark mode with a warm, low-contrast dark palette — like reading by candlelight.",
  },
]
const cliBenefits = [
  "Zero runtime dependencies",
  "Full TypeScript support",
  "Customizable theming via CSS variables",
  "Tree-shakeable",
]
const palette = [
  { name: "paper", hex: "#FDFAF5", className: "bg-journal-paper" },
  { name: "ink", hex: "#2C1810", className: "bg-journal-ink" },
  { name: "ink-light", hex: "#5A4636", className: "bg-journal-ink-light" },
  { name: "sepia", hex: "#8B7355", className: "bg-journal-sepia" },
  { name: "burgundy", hex: "#5C1A1B", className: "bg-journal-burgundy" },
  { name: "forest", hex: "#2D5F3E", className: "bg-journal-forest" },
  { name: "gold", hex: "#B8860B", className: "bg-journal-gold" },
  { name: "warm", hex: "#D4C5A9", className: "bg-journal-warm" },
  { name: "rule", hex: "#D9CBBA", className: "bg-journal-rule" },
  { name: "stain", hex: "#E8DCC8", className: "bg-journal-stain" },
  { name: "margin", hex: "#C9B99A", className: "bg-journal-margin" },
  { name: "paper-dark", hex: "#F0E6D3", className: "bg-journal-paper-dark" },
]
import {
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
  { title: "Button", path: "/docs/button", icon: TypeIcon },
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
  { title: "Label", path: "/docs/label", icon: TypeIcon },
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
    <footer className="border-t border-journal-rule bg-journal-paper-dark/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-3">
          <JournalLogo className="size-5 text-journal-burgundy" />
          <span className="font-serif text-sm text-journal-ink-light">
            Built with care · MIT Licensed · Copyright © 2026 Archaeanic
          </span>
        </div>
        <div className="flex items-center gap-6 font-serif text-sm text-journal-ink-light">
          <Link href="/docs/introduction" className="hover:text-journal-burgundy">
            Docs
          </Link>
          <Link href="/docs/changelog" className="hover:text-journal-burgundy">
            Changelog
          </Link>
          <a
            href="https://github.com/archaeanic/journal-ds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-journal-burgundy"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}