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

/**
 * Registry mapping slug → page component.
 * Used by the dynamic route at /docs/[slug]/page.tsx.
 */
export const pageRegistry: Record<string, React.ComponentType> = {
  "introduction": IntroductionPage,
  "installation": InstallationPage,
  "cli": CliPage,
  "theming": ThemingPage,
  "dark-mode": DarkModePage,
  "typography": TypographyPage,
  "figma": FigmaPage,
  "changelog": ChangelogPage,
  "button": ButtonPage,
  "input": InputPage,
  "textarea": TextareaPage,
  "label": LabelPage,
  "checkbox": CheckboxPage,
  "switch": SwitchPage,
  "radio-group": RadioGroupPage,
  "select": SelectPage,
  "slider": SliderPage,
  "toggle": TogglePage,
  "toggle-group": ToggleGroupPage,
  "input-otp": InputOTPPage,
  "form": FormPage,
  "card": CardPage,
  "separator": SeparatorPage,
  "aspect-ratio": AspectRatioPage,
  "resizable": ResizablePage,
  "scroll-area": ScrollAreaPage,
  "badge": BadgePage,
  "avatar": AvatarPage,
  "skeleton": SkeletonPage,
  "progress": ProgressPage,
  "table": TablePage,
  "alert": AlertPage,
  "accordion": AccordionPage,
  "collapsible": CollapsiblePage,
  "tabs": TabsPage,
  "dialog": DialogPage,
  "sheet": SheetPage,
  "drawer": DrawerPage,
  "popover": PopoverPage,
  "tooltip": TooltipPage,
  "hover-card": HoverCardPage,
  "alert-dialog": AlertDialogPage,
  "navigation-menu": NavigationMenuPage,
  "breadcrumb": BreadcrumbDocPage,
  "pagination": PaginationPage,
  "dropdown-menu": DropdownMenuPage,
  "context-menu": ContextMenuPage,
  "menubar": MenubarPage,
  "command": CommandPage,
  "toast": ToastPage,
  "sonner": SonnerPage,
  "calendar": CalendarPage,
  "carousel": CarouselPage,
  "chart": ChartPage,
  "sidebar": SidebarPage,
}
