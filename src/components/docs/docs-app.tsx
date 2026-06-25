"use client"

import * as React from "react"
import { useRouter } from "@/lib/router"
import { Sidebar } from "@/components/docs/sidebar"
import { HomePage } from "@/components/pages/home"
import { IntroductionPage } from "@/components/pages/introduction"
import { InstallationPage } from "@/components/pages/installation"
import { CliPage } from "@/components/pages/cli"
import { ThemingPage } from "@/components/pages/theming"
import { DarkModePage } from "@/components/pages/dark-mode"
import { TypographyPage } from "@/components/pages/typography"
import { FigmaPage } from "@/components/pages/figma"
import { ChangelogPage } from "@/components/pages/changelog"
import { ButtonPage } from "@/components/pages/button"
import {
  InputPage,
  TextareaPage,
  LabelPage,
  CheckboxPage,
  SwitchPage,
  RadioGroupPage,
  SelectPage,
  SliderPage,
  TogglePage,
  ToggleGroupPage,
  InputOTPPage,
  FormPage,
} from "@/components/pages/forms"
import {
  CardPage,
  SeparatorPage,
  AspectRatioPage,
  ResizablePage,
  ScrollAreaPage,
} from "@/components/pages/layout"
import {
  BadgePage,
  AvatarPage,
  SkeletonPage,
  ProgressPage,
  TablePage,
  AlertPage,
  AccordionPage,
  CollapsiblePage,
  TabsPage,
} from "@/components/pages/display"
import {
  DialogPage,
  SheetPage,
  DrawerPage,
  PopoverPage,
  TooltipPage,
  HoverCardPage,
  AlertDialogPage,
} from "@/components/pages/overlays"
import {
  NavigationMenuPage,
  BreadcrumbDocPage,
  PaginationPage,
  DropdownMenuPage,
  ContextMenuPage,
  MenubarPage,
  CommandPage,
} from "@/components/pages/navigation"
import {
  ToastPage,
  SonnerPage,
  CalendarPage,
  CarouselPage,
  ChartPage,
  SidebarPage,
} from "@/components/pages/feedback"
import { SiteHeader } from "@/components/docs/site-header"

const pageRegistry: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/docs/introduction": IntroductionPage,
  "/docs/installation": InstallationPage,
  "/docs/cli": CliPage,
  "/docs/theming": ThemingPage,
  "/docs/dark-mode": DarkModePage,
  "/docs/typography": TypographyPage,
  "/docs/figma": FigmaPage,
  "/docs/changelog": ChangelogPage,
  "/docs/button": ButtonPage,
  "/docs/input": InputPage,
  "/docs/textarea": TextareaPage,
  "/docs/label": LabelPage,
  "/docs/checkbox": CheckboxPage,
  "/docs/switch": SwitchPage,
  "/docs/radio-group": RadioGroupPage,
  "/docs/select": SelectPage,
  "/docs/slider": SliderPage,
  "/docs/toggle": TogglePage,
  "/docs/toggle-group": ToggleGroupPage,
  "/docs/input-otp": InputOTPPage,
  "/docs/form": FormPage,
  "/docs/card": CardPage,
  "/docs/separator": SeparatorPage,
  "/docs/aspect-ratio": AspectRatioPage,
  "/docs/resizable": ResizablePage,
  "/docs/scroll-area": ScrollAreaPage,
  "/docs/badge": BadgePage,
  "/docs/avatar": AvatarPage,
  "/docs/skeleton": SkeletonPage,
  "/docs/progress": ProgressPage,
  "/docs/table": TablePage,
  "/docs/alert": AlertPage,
  "/docs/accordion": AccordionPage,
  "/docs/collapsible": CollapsiblePage,
  "/docs/tabs": TabsPage,
  "/docs/dialog": DialogPage,
  "/docs/sheet": SheetPage,
  "/docs/drawer": DrawerPage,
  "/docs/popover": PopoverPage,
  "/docs/tooltip": TooltipPage,
  "/docs/hover-card": HoverCardPage,
  "/docs/alert-dialog": AlertDialogPage,
  "/docs/navigation-menu": NavigationMenuPage,
  "/docs/breadcrumb": BreadcrumbDocPage,
  "/docs/pagination": PaginationPage,
  "/docs/dropdown-menu": DropdownMenuPage,
  "/docs/context-menu": ContextMenuPage,
  "/docs/menubar": MenubarPage,
  "/docs/command": CommandPage,
  "/docs/toast": ToastPage,
  "/docs/sonner": SonnerPage,
  "/docs/calendar": CalendarPage,
  "/docs/carousel": CarouselPage,
  "/docs/chart": ChartPage,
  "/docs/sidebar": SidebarPage,
}

export function DocsApp() {
  const { path } = useRouter()

  const isHome = path === "/" || path === ""

  const PageComponent = pageRegistry[path] ?? NotFoundPage

  if (isHome) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HomePage />
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r lg:block">
          <Sidebar />
        </aside>

        {/* Page content */}
        <main className="min-w-0 flex-1">
          <PageComponent />
        </main>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Page not found. Use the sidebar to navigate to a docs page.
      </p>
    </div>
  )
}
