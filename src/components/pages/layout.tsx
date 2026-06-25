"use client"

import { Star, Bell, Settings, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ComponentDocPage } from "./_component-doc-template"

/* ============= Card ============= */
export function CardPage() {
  return (
    <ComponentDocPage
      title="Card"
      description="Displays a card with header, content, and footer."
      slug="card"
      primary={{
        preview: (
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. You can put anything in a card.</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Save</Button>
              <Button size="sm" variant="ghost">Cancel</Button>
            </CardFooter>
          </Card>
        ),
        code: `<Card className="w-80">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. You can put anything in a card.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">Save</Button>
    <Button size="sm" variant="ghost">Cancel</Button>
  </CardFooter>
</Card>`,
      }}
      examples={[
        {
          title: "With Avatar and Badge",
          preview: (
            <Card className="w-80">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base">@shadcn</CardTitle>
                    <CardDescription>Frontend developer</CardDescription>
                  </div>
                  <Badge variant="secondary">Online</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building beautiful, accessible components for the web.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="w-80">
  <CardHeader>
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="..." alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <CardTitle className="text-base">@shadcn</CardTitle>
        <CardDescription>Frontend developer</CardDescription>
      </div>
      <Badge variant="secondary">Online</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Building beautiful, accessible components for the web.
    </p>
  </CardContent>
</Card>`,
        },
        {
          title: "Stats Card",
          preview: (
            <Card className="w-72">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center gap-1 text-xs text-emerald-600">
                  <ArrowRight className="size-3 -rotate-45" />
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="w-72">
  <CardHeader>
    <CardDescription>Total Revenue</CardDescription>
    <CardTitle className="text-3xl">$45,231.89</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="flex items-center gap-1 text-xs text-emerald-600">
      <ArrowRight className="size-3 -rotate-45" />
      +20.1% from last month
    </p>
  </CardContent>
</Card>`,
        },
      ]}
      props={[
        { name: "className", type: "string", description: "Additional Tailwind classes for the Card root." },
      ]}
    />
  )
}

/* ============= Separator ============= */
export function SeparatorPage() {
  return (
    <ComponentDocPage
      title="Separator"
      description="Visually or semantically separates content."
      slug="separator"
      primary={{
        preview: (
          <div className="flex h-12 items-center gap-4">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        ),
        code: `<div className="flex h-12 items-center gap-4">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>`,
      }}
      examples={[
        {
          title: "Horizontal",
          preview: (
            <div className="w-72">
              <p className="text-sm">First section</p>
              <Separator className="my-3" />
              <p className="text-sm">Second section</p>
            </div>
          ),
          code: `<div>
  <p>First section</p>
  <Separator className="my-3" />
  <p>Second section</p>
</div>`,
        },
      ]}
      props={[
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "The orientation of the separator." },
        { name: "decorative", type: "boolean", default: "true", description: "When true, the separator is purely decorative (aria-hidden)." },
      ]}
    />
  )
}

/* ============= AspectRatio ============= */
export function AspectRatioPage() {
  return (
    <ComponentDocPage
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
      slug="aspect-ratio"
      primary={{
        preview: (
          <AspectRatio ratio={16 / 9} className="w-72 overflow-hidden rounded-md bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&h=400&fit=crop"
              alt="Landscape"
              className="size-full object-cover"
            />
          </AspectRatio>
        ),
        code: `<AspectRatio ratio={16 / 9} className="bg-muted">
  <img src="..." alt="Landscape" className="size-full object-cover" />
</AspectRatio>`,
      }}
      examples={[
        {
          title: "Square (1:1)",
          preview: (
            <AspectRatio ratio={1} className="w-48 overflow-hidden rounded-md bg-muted">
              <img
                src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=400&fit=crop"
                alt="Square"
                className="size-full object-cover"
              />
            </AspectRatio>
          ),
          code: `<AspectRatio ratio={1} className="bg-muted">
  <img src="..." alt="Square" className="size-full object-cover" />
</AspectRatio>`,
        },
      ]}
      props={[
        { name: "ratio", type: "number", required: true, description: "The desired aspect ratio (width / height)." },
      ]}
    />
  )
}

/* ============= Resizable ============= */
export function ResizablePage() {
  return (
    <ComponentDocPage
      title="Resizable"
      description="Accessible resizable panels with keyboard support."
      slug="resizable"
      primary={{
        preview: (
          <div className="flex h-48 w-96 max-w-full items-center justify-center">
            <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
              <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                <span className="text-sm">Panel A</span>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                <span className="text-sm">Panel B</span>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        ),
        code: `<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
    <span className="text-sm">Panel A</span>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
    <span className="text-sm">Panel B</span>
  </ResizablePanel>
</ResizablePanelGroup>`,
      }}
      examples={[
        {
          title: "Vertical",
          preview: (
            <div className="flex h-72 w-96 max-w-full items-center justify-center">
              <ResizablePanelGroup direction="vertical" className="rounded-lg border">
                <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                  <span className="text-sm">Top Panel</span>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50} className="flex items-center justify-center p-4">
                  <span className="text-sm">Bottom Panel</span>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          ),
          code: `<ResizablePanelGroup direction="vertical" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    Top
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Bottom
  </ResizablePanel>
</ResizablePanelGroup>`,
        },
      ]}
      props={[
        { name: "direction", type: '"horizontal" | "vertical"', required: true, description: "The layout direction of the panels." },
        { name: "defaultSize", type: "number", description: "The default size of the panel as a percentage (0-100)." },
      ]}
    />
  )
}

/* ============= ScrollArea ============= */
export function ScrollAreaPage() {
  return (
    <ComponentDocPage
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      slug="scroll-area"
      primary={{
        preview: (
          <ScrollArea className="h-48 w-72 rounded-md border p-4">
            <p className="text-sm">
              Lumen UI is built on top of Radix UI primitives and styled with Tailwind CSS.
            </p>
            <p className="mt-4 text-sm">
              The ScrollArea component augments native scroll functionality with
              custom, cross-browser styling.
            </p>
            <p className="mt-4 text-sm">
              Use it to replace the browser&apos;s default scrollbar with a
              custom one that matches your design system.
            </p>
            <p className="mt-4 text-sm">
              You can also use it to clip overflowing content without showing
              the scrollbar at all.
            </p>
            <p className="mt-4 text-sm">
              Try scrolling this content to see the custom scrollbar in action.
            </p>
          </ScrollArea>
        ),
        code: `<ScrollArea className="h-48 w-72 rounded-md border p-4">
  <p>Lumen UI is built on top of Radix UI...</p>
</ScrollArea>`,
      }}
      props={[
        { name: "className", type: "string", description: "Additional Tailwind classes." },
        { name: "orientation", type: '"vertical" | "horizontal" | "both"', default: '"vertical"', description: "The scroll orientation." },
      ]}
    />
  )
}
