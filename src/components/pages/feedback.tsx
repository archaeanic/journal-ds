"use client"

import * as React from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Info,
  Loader2,
  Moon,
  Sun,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { toast as sonnerToast } from "sonner"
import { Calendar } from "@/components/ui/calendar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { ComponentDocPage } from "./_component-doc-template"

/* ============= Toast ============= */
export function ToastPage() {
  const { toast } = useToast()
  return (
    <ComponentDocPage
      title="Toast"
      description="A succinct message that is displayed temporarily."
      slug="toast"
      primary={{
        preview: (
          <Button
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2026 at 5:57 PM",
              })
            }}
          >
            Show Toast
          </Button>
        ),
        code: `const { toast } = useToast()

toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2026 at 5:57 PM",
})`,
      }}
      examples={[
        {
          title: "With Action",
          preview: (
            <Button
              variant="outline"
              onClick={() => {
                toast({
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your request.",
                  action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
              }}
            >
              Show with Action
            </Button>
          ),
          code: `toast({
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
  action: <ToastAction altText="Try again">Try again</ToastAction>,
})`,
        },
        {
          title: "Destructive",
          preview: (
            <Button
              variant="destructive"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Scheduled: Catch up",
                  description: "Friday, February 10, 2026 at 5:57 PM",
                })
              }}
            >
              Show Destructive
            </Button>
          ),
          code: `toast({
  variant: "destructive",
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2026 at 5:57 PM",
})`,
        },
      ]}
      props={[
        { name: "title", type: "string", description: "The title shown in the toast." },
        { name: "description", type: "string", description: "The description shown below the title." },
        { name: "variant", type: '"default" | "destructive"', default: '"default"', description: "The visual style." },
        { name: "action", type: "ReactElement", description: "An optional action button." },
        { name: "duration", type: "number", default: "5000", description: "Time in milliseconds before the toast auto-dismisses." },
      ]}
    />
  )
}

/* ============= Sonner ============= */
export function SonnerPage() {
  return (
    <ComponentDocPage
      title="Sonner"
      description="An opinionated toast notification library for React."
      slug="sonner"
      primary={{
        preview: (
          <Button onClick={() => sonnerToast("Event has been created")}>
            Show Sonner Toast
          </Button>
        ),
        code: `import { toast } from "sonner"

toast("Event has been created")`,
      }}
      examples={[
        {
          title: "With Description",
          preview: (
            <Button
              variant="outline"
              onClick={() =>
                sonnerToast("Event has been created", {
                  description: "Monday, January 1, 2026 at 9:00 AM",
                })
              }
            >
              Show with description
            </Button>
          ),
          code: `toast("Event has been created", {
  description: "Monday, January 1, 2026 at 9:00 AM",
})`,
        },
        {
          title: "Success / Error",
          preview: (
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => sonnerToast.success("Saved successfully!")}
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() => sonnerToast.error("Something went wrong.")}
              >
                Error
              </Button>
            </div>
          ),
          code: `toast.success("Saved successfully!")
toast.error("Something went wrong.")`,
        },
        {
          title: "With Action",
          preview: (
            <Button
              variant="outline"
              onClick={() =>
                sonnerToast("Message sent", {
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Show with action
            </Button>
          ),
          code: `toast("Message sent", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`,
        },
      ]}
    />
  )
}

/* ============= Calendar ============= */
export function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <ComponentDocPage
      title="Calendar"
      description="A date field component that allows users to enter and edit date."
      slug="calendar"
      primary={{
        preview: (
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        ),
        code: `const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
      }}
      props={[
        { name: "mode", type: '"single" | "multiple" | "range"', required: true, description: "The selection mode." },
        { name: "selected", type: "Date | Date[] | DateRange", description: "The controlled selected date(s)." },
        { name: "onSelect", type: "(date) => void", description: "Callback called when the selection changes." },
        { name: "numberOfMonths", type: "number", default: "1", description: "The number of months to display at once." },
      ]}
    />
  )
}

/* ============= Carousel ============= */
export function CarouselPage() {
  const items = [
    { title: "Slide 1", color: "from-rose-500 to-pink-500" },
    { title: "Slide 2", color: "from-amber-500 to-orange-500" },
    { title: "Slide 3", color: "from-emerald-500 to-teal-500" },
    { title: "Slide 4", color: "from-violet-500 to-purple-500" },
    { title: "Slide 5", color: "from-blue-500 to-cyan-500" },
  ]
  return (
    <ComponentDocPage
      title="Carousel"
      description="A carousel with motion and swipe built using Embla."
      slug="carousel"
      primary={{
        preview: (
          <div className="w-full max-w-xs">
            <Carousel>
              <CarouselContent>
                {items.map((item, i) => (
                  <CarouselItem key={i}>
                    <div className={`flex h-32 items-center justify-center rounded-md bg-gradient-to-br ${item.color} p-1`}>
                      <span className="text-lg font-semibold text-white">{item.title}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ),
        code: `<Carousel>
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>
        {/* slide content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
      }}
      props={[
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "The orientation of the carousel." },
        { name: "options", type: "EmblaOptionsType", description: "Embla carousel options." },
      ]}
    />
  )
}

/* ============= Chart ============= */
export function ChartPage() {
  return (
    <ComponentDocPage
      title="Chart"
      description="Beautifully designed charts built with Recharts."
      slug="chart"
      primary={{
        preview: (
          <div className="w-96 rounded-md border p-4">
            <p className="mb-3 text-sm font-medium">Total Visitors</p>
            <div className="flex h-32 items-end gap-2">
              {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-primary/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        ),
        code: `import { Bar, BarChart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@journal-ds/react"

<ChartContainer config={chartConfig}>
  <BarChart data={data}>
    <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
    <ChartTooltip content={<ChartTooltipContent />} />
  </BarChart>
</ChartContainer>`,
      }}
      props={[
        { name: "config", type: "ChartConfig", required: true, description: "The chart configuration object." },
        { name: "children", type: "ReactNode", description: "The Recharts chart component." },
      ]}
    />
  )
}

/* ============= Sidebar ============= */
export function SidebarPage() {
  return (
    <ComponentDocPage
      title="Sidebar"
      description="A composable, themeable and responsive sidebar component."
      slug="sidebar"
      primary={{
        preview: (
          <div className="w-72 overflow-hidden rounded-md border">
            <div className="flex h-72">
              <aside className="flex w-56 flex-col border-r bg-muted/30 p-3">
                <div className="mb-4 flex items-center gap-2 px-2">
                  <div className="size-6 rounded-md bg-primary" />
                  <span className="text-sm font-semibold">Journal DS</span>
                </div>
                <nav className="flex-1 space-y-1">
                  <a className="block rounded-md bg-background px-3 py-1.5 text-sm font-medium">Dashboard</a>
                  <a className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-background/50">Projects</a>
                  <a className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-background/50">Team</a>
                  <a className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-background/50">Settings</a>
                </nav>
                <div className="border-t pt-3">
                  <div className="flex items-center gap-2 px-2">
                    <div className="size-7 rounded-full bg-gradient-to-br from-rose-500 to-amber-500" />
                    <div>
                      <p className="text-xs font-medium">Jane Doe</p>
                      <p className="text-[10px] text-muted-foreground">jane@example.com</p>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="flex flex-1 items-center justify-center p-4">
                <span className="text-sm text-muted-foreground">Main content</span>
              </div>
            </div>
          </div>
        ),
        code: `<Sidebar>
  <SidebarHeader>
    <SidebarMenu>...</SidebarMenu>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>...</SidebarGroup>
  </SidebarContent>
  <SidebarFooter>...</SidebarFooter>
</Sidebar>`,
      }}
      props={[
        { name: "collapsible", type: '"icon" | "offcanvas" | "none"', default: '"offcanvas"', description: "The collapsible mode of the sidebar." },
        { name: "side", type: '"left" | "right"', default: '"left"', description: "The side of the screen the sidebar is on." },
        { name: "variant", type: '"sidebar" | "floating" | "inset"', default: '"sidebar"', description: "The visual variant of the sidebar." },
      ]}
    />
  )
}
