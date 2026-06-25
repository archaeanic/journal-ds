/**
 * Registry of all documentation pages. This drives the sidebar navigation,
 * the search index, and the route → page component mapping.
 */

export type NavItem = {
  title: string
  slug: string
  /** path relative to docs root, e.g. /docs/button */
  path: string
  status?: "new" | "updated" | "beta"
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const gettingStartedNav: NavSection = {
  title: "Getting Started",
  items: [
    { title: "Introduction", slug: "introduction", path: "/docs/introduction" },
    { title: "Installation", slug: "installation", path: "/docs/installation" },
    { title: "Components CLI", slug: "cli", path: "/docs/cli", status: "new" },
    { title: "Theming", slug: "theming", path: "/docs/theming" },
    { title: "Dark Mode", slug: "dark-mode", path: "/docs/dark-mode" },
    { title: "Typography", slug: "typography", path: "/docs/typography" },
    { title: "Figma", slug: "figma", path: "/docs/figma", status: "new" },
    { title: "Changelog", slug: "changelog", path: "/docs/changelog" },
  ],
}

export const formComponentsNav: NavSection = {
  title: "Forms",
  items: [
    { title: "Button", slug: "button", path: "/docs/button" },
    { title: "Input", slug: "input", path: "/docs/input" },
    { title: "Textarea", slug: "textarea", path: "/docs/textarea" },
    { title: "Label", slug: "label", path: "/docs/label" },
    { title: "Checkbox", slug: "checkbox", path: "/docs/checkbox" },
    { title: "Switch", slug: "switch", path: "/docs/switch" },
    { title: "Radio Group", slug: "radio-group", path: "/docs/radio-group" },
    { title: "Select", slug: "select", path: "/docs/select" },
    { title: "Slider", slug: "slider", path: "/docs/slider" },
    { title: "Toggle", slug: "toggle", path: "/docs/toggle" },
    { title: "Toggle Group", slug: "toggle-group", path: "/docs/toggle-group" },
    { title: "Input OTP", slug: "input-otp", path: "/docs/input-otp" },
    { title: "Form", slug: "form", path: "/docs/form" },
  ],
}

export const layoutComponentsNav: NavSection = {
  title: "Layout",
  items: [
    { title: "Card", slug: "card", path: "/docs/card" },
    { title: "Separator", slug: "separator", path: "/docs/separator" },
    { title: "Aspect Ratio", slug: "aspect-ratio", path: "/docs/aspect-ratio" },
    { title: "Resizable", slug: "resizable", path: "/docs/resizable" },
    { title: "Scroll Area", slug: "scroll-area", path: "/docs/scroll-area" },
  ],
}

export const displayComponentsNav: NavSection = {
  title: "Display",
  items: [
    { title: "Badge", slug: "badge", path: "/docs/badge" },
    { title: "Avatar", slug: "avatar", path: "/docs/avatar" },
    { title: "Skeleton", slug: "skeleton", path: "/docs/skeleton" },
    { title: "Progress", slug: "progress", path: "/docs/progress" },
    { title: "Table", slug: "table", path: "/docs/table" },
    { title: "Alert", slug: "alert", path: "/docs/alert" },
    { title: "Accordion", slug: "accordion", path: "/docs/accordion" },
    { title: "Collapsible", slug: "collapsible", path: "/docs/collapsible" },
    { title: "Tabs", slug: "tabs", path: "/docs/tabs" },
  ],
}

export const overlayComponentsNav: NavSection = {
  title: "Overlays",
  items: [
    { title: "Dialog", slug: "dialog", path: "/docs/dialog" },
    { title: "Sheet", slug: "sheet", path: "/docs/sheet" },
    { title: "Drawer", slug: "drawer", path: "/docs/drawer" },
    { title: "Popover", slug: "popover", path: "/docs/popover" },
    { title: "Tooltip", slug: "tooltip", path: "/docs/tooltip" },
    { title: "Hover Card", slug: "hover-card", path: "/docs/hover-card" },
    { title: "Alert Dialog", slug: "alert-dialog", path: "/docs/alert-dialog" },
  ],
}

export const navigationComponentsNav: NavSection = {
  title: "Navigation",
  items: [
    { title: "Navigation Menu", slug: "navigation-menu", path: "/docs/navigation-menu" },
    { title: "Breadcrumb", slug: "breadcrumb", path: "/docs/breadcrumb" },
    { title: "Pagination", slug: "pagination", path: "/docs/pagination" },
    { title: "Dropdown Menu", slug: "dropdown-menu", path: "/docs/dropdown-menu" },
    { title: "Context Menu", slug: "context-menu", path: "/docs/context-menu" },
    { title: "Menubar", slug: "menubar", path: "/docs/menubar" },
    { title: "Command", slug: "command", path: "/docs/command" },
  ],
}

export const feedbackComponentsNav: NavSection = {
  title: "Feedback",
  items: [
    { title: "Toast", slug: "toast", path: "/docs/toast" },
    { title: "Sonner", slug: "sonner", path: "/docs/sonner" },
    { title: "Calendar", slug: "calendar", path: "/docs/calendar" },
    { title: "Carousel", slug: "carousel", path: "/docs/carousel" },
    { title: "Chart", slug: "chart", path: "/docs/chart" },
    { title: "Sidebar", slug: "sidebar", path: "/docs/sidebar", status: "new" },
  ],
}

export const navSections: NavSection[] = [
  gettingStartedNav,
  formComponentsNav,
  layoutComponentsNav,
  displayComponentsNav,
  overlayComponentsNav,
  navigationComponentsNav,
  feedbackComponentsNav,
]

export const allNavItems: NavItem[] = navSections.flatMap((s) => s.items)

export function findNavItem(path: string): NavItem | undefined {
  return allNavItems.find((item) => item.path === path)
}

export function getAdjacentItems(path: string): {
  previous?: NavItem
  next?: NavItem
} {
  const index = allNavItems.findIndex((item) => item.path === path)
  if (index === -1) return {}
  return {
    previous: index > 0 ? allNavItems[index - 1] : undefined,
    next: index < allNavItems.length - 1 ? allNavItems[index + 1] : undefined,
  }
}
