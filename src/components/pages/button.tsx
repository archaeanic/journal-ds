"use client"

import {
  ArrowRight,
  ChevronRight,
  Download,
  Loader2,
  Mail,
  Plus,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComponentDocPage } from "./_component-doc-template"

export function ButtonPage() {
  return (
    <ComponentDocPage
      title="Button"
      description="Displays a button or a component that looks like a button."
      slug="button"
      intro={
        <>
          <p>
            The <strong>Button</strong> component is the most-used component in
            any UI library. It supports multiple variants, sizes, and an icon
            slot. Built with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">
              class-variance-authority
            </code>
            , it&apos;s fully typed and easy to customize.
          </p>
        </>
      }
      primary={{
        preview: <Button>Button</Button>,
        code: `<Button>Button</Button>`,
      }}
      examples={[
        {
          title: "Variants",
          preview: (
            <>
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </>
          ),
          code: `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
        },
        {
          title: "Sizes",
          preview: (
            <>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add">
                <Plus className="size-4" />
              </Button>
            </>
          ),
          code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Add">
  <Plus className="size-4" />
</Button>`,
        },
        {
          title: "With Icon",
          preview: (
            <>
              <Button>
                <Mail className="size-4" />
                Login with Email
              </Button>
              <Button variant="outline">
                <Download className="size-4" />
                Download
              </Button>
              <Button variant="secondary">
                Continue
                <ArrowRight className="size-4" />
              </Button>
            </>
          ),
          code: `<Button>
  <Mail className="size-4" />
  Login with Email
</Button>
<Button variant="outline">
  <Download className="size-4" />
  Download
</Button>
<Button variant="secondary">
  Continue
  <ArrowRight className="size-4" />
</Button>`,
        },
        {
          title: "Loading",
          preview: (
            <>
              <Button disabled>
                <Loader2 className="size-4 animate-spin" />
                Please wait
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="size-4 animate-spin" />
                Loading
              </Button>
            </>
          ),
          code: `<Button disabled>
  <Loader2 className="size-4 animate-spin" />
  Please wait
</Button>
<Button variant="outline" disabled>
  <Loader2 className="size-4 animate-spin" />
  Loading
</Button>`,
        },
        {
          title: "With Link (asChild)",
          preview: (
            <Button asChild>
              <a href="https://journal-ds.dev" target="_blank" rel="noreferrer">
                Open Journal DS
                <ChevronRight className="size-4" />
              </a>
            </Button>
          ),
          code: `<Button asChild>
  <a href="https://journal-ds.dev" target="_blank" rel="noreferrer">
    Open Journal DS
    <ChevronRight className="size-4" />
  </a>
</Button>`,
        },
        {
          title: "Icon-only (destructive)",
          preview: (
            <Button variant="destructive" size="icon" aria-label="Delete">
              <Trash2 className="size-4" />
            </Button>
          ),
          code: `<Button variant="destructive" size="icon" aria-label="Delete">
  <Trash2 className="size-4" />
</Button>`,
        },
      ]}
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
          default: '"default"',
          description: "The visual style of the button.",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          default: '"default"',
          description: "The size of the button.",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description:
            "When true, the Button will merge its props into its single child element. Useful for rendering as a link.",
        },
        {
          name: "className",
          type: "string",
          description: "Additional Tailwind classes to apply.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "When true, the button is disabled and non-interactive.",
        },
        {
          name: "...props",
          type: "ButtonHTMLAttributes<HTMLButtonElement>",
          description: "All standard button HTML attributes are supported.",
        },
      ]}
    />
  )
}
