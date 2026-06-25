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
  /** Short description shown in search results */
  description?: string
  /** Extra keywords for fuzzy search (e.g. "modal", "popup", "alert") */
  keywords?: string[]
  /** Section label this item belongs to (auto-populated below) */
  section?: string
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const gettingStartedNav: NavSection = {
  title: "Getting Started",
  items: [
    {
      title: "Introduction",
      slug: "introduction",
      path: "/docs/introduction",
      description: "What Journal Design System is and how to use it.",
      keywords: ["start", "about", "overview", "what", "why"],
    },
    {
      title: "Installation",
      slug: "installation",
      path: "/docs/installation",
      description: "Install Journal DS in your React or Next.js project.",
      keywords: ["install", "setup", "npm", "pnpm", "yarn", "bun"],
    },
    {
      title: "Components CLI",
      slug: "cli",
      path: "/docs/cli",
      status: "new",
      description: "Add components to your project with the Journal CLI.",
      keywords: ["cli", "command", "terminal", "npx", "init", "add"],
    },
    {
      title: "Theming",
      slug: "theming",
      path: "/docs/theming",
      description: "Customize colors, radii, and typography with CSS variables.",
      keywords: ["theme", "colors", "css", "variables", "customize"],
    },
    {
      title: "Dark Mode",
      slug: "dark-mode",
      path: "/docs/dark-mode",
      description: "Add dark mode support with next-themes.",
      keywords: ["dark", "light", "theme", "night", "mode"],
    },
    {
      title: "Typography",
      slug: "typography",
      path: "/docs/typography",
      description: "Set up Lora, Playfair Display, and JetBrains Mono.",
      keywords: ["fonts", "type", "lora", "playfair", "serif", "text"],
    },
    {
      title: "Figma",
      slug: "figma",
      path: "/docs/figma",
      status: "new",
      description: "Design with Journal DS in Figma.",
      keywords: ["figma", "design", "kit", "ui"],
    },
    {
      title: "Changelog",
      slug: "changelog",
      path: "/docs/changelog",
      description: "All notable changes to Journal DS.",
      keywords: ["changelog", "release", "version", "update"],
    },
  ],
}

export const formComponentsNav: NavSection = {
  title: "Forms",
  items: [
    {
      title: "Button",
      slug: "button",
      path: "/docs/button",
      description: "Trigger actions with multiple variants and sizes.",
      keywords: ["btn", "submit", "click", "action", "cta", "primary"],
    },
    {
      title: "Input",
      slug: "input",
      path: "/docs/input",
      description: "Single-line text field for forms.",
      keywords: ["text", "field", "type", "email", "password", "form"],
    },
    {
      title: "Textarea",
      slug: "textarea",
      path: "/docs/textarea",
      description: "Multi-line text input.",
      keywords: ["multiline", "text", "field", "message", "form"],
    },
    {
      title: "Label",
      slug: "label",
      path: "/docs/label",
      description: "Accessible label for form controls.",
      keywords: ["caption", "field", "form", "htmlfor"],
    },
    {
      title: "Checkbox",
      slug: "checkbox",
      path: "/docs/checkbox",
      description: "Toggle a single boolean value.",
      keywords: ["check", "tick", "select", "boolean", "form"],
    },
    {
      title: "Switch",
      slug: "switch",
      path: "/docs/switch",
      description: "Toggle between on and off states.",
      keywords: ["toggle", "on", "off", "boolean", "form", "ios"],
    },
    {
      title: "Radio Group",
      slug: "radio-group",
      path: "/docs/radio-group",
      description: "Select one option from a list.",
      keywords: ["radio", "choice", "single", "select", "option"],
    },
    {
      title: "Select",
      slug: "select",
      path: "/docs/select",
      description: "Dropdown picker for a list of options.",
      keywords: ["dropdown", "picker", "choose", "option", "select"],
    },
    {
      title: "Slider",
      slug: "slider",
      path: "/docs/slider",
      description: "Pick a value from a range.",
      keywords: ["range", "value", "number", "scrub", "track"],
    },
    {
      title: "Toggle",
      slug: "toggle",
      path: "/docs/toggle",
      description: "Two-state button for on/off.",
      keywords: ["button", "press", "active", "boolean", "bold", "italic"],
    },
    {
      title: "Toggle Group",
      slug: "toggle-group",
      path: "/docs/toggle-group",
      description: "Group of toggles for single or multiple selection.",
      keywords: ["group", "toolbar", "alignment", "segmented", "control"],
    },
    {
      title: "Input OTP",
      slug: "input-otp",
      path: "/docs/input-otp",
      description: "One-time password input.",
      keywords: ["otp", "code", "verification", "auth", "2fa", "sms"],
    },
    {
      title: "Form",
      slug: "form",
      path: "/docs/form",
      description: "Build accessible forms with react-hook-form.",
      keywords: ["react-hook-form", "zod", "validation", "submit", "field"],
    },
  ],
}

export const layoutComponentsNav: NavSection = {
  title: "Layout",
  items: [
    {
      title: "Card",
      slug: "card",
      path: "/docs/card",
      description: "Container with header, content, and footer sections.",
      keywords: ["container", "panel", "box", "section", "paper"],
    },
    {
      title: "Separator",
      slug: "separator",
      path: "/docs/separator",
      description: "Visually divide content horizontally or vertically.",
      keywords: ["divider", "hr", "rule", "line", "split"],
    },
    {
      title: "Aspect Ratio",
      slug: "aspect-ratio",
      path: "/docs/aspect-ratio",
      description: "Maintain a consistent width-to-height ratio.",
      keywords: ["ratio", "responsive", "image", "video", "16-9", "square"],
    },
    {
      title: "Resizable",
      slug: "resizable",
      path: "/docs/resizable",
      description: "Draggable, resizable layout panels.",
      keywords: ["resize", "panel", "drag", "split", "layout"],
    },
    {
      title: "Scroll Area",
      slug: "scroll-area",
      path: "/docs/scroll-area",
      description: "Custom-styled scrollable container.",
      keywords: ["scroll", "overflow", "custom", "scrollbar"],
    },
  ],
}

export const displayComponentsNav: NavSection = {
  title: "Display",
  items: [
    {
      title: "Badge",
      slug: "badge",
      path: "/docs/badge",
      description: "Small status or count indicator.",
      keywords: ["pill", "tag", "label", "count", "status", "new"],
    },
    {
      title: "Avatar",
      slug: "avatar",
      path: "/docs/avatar",
      description: "User profile image with fallback initials.",
      keywords: ["profile", "user", "image", "picture", "photo"],
    },
    {
      title: "Skeleton",
      slug: "skeleton",
      path: "/docs/skeleton",
      description: "Loading placeholder while content fetches.",
      keywords: ["loading", "placeholder", "shimmer", "spinner", "fetch"],
    },
    {
      title: "Progress",
      slug: "progress",
      path: "/docs/progress",
      description: "Bar showing completion percentage.",
      keywords: ["bar", "percent", "loading", "complete", "track"],
    },
    {
      title: "Table",
      slug: "table",
      path: "/docs/table",
      description: "Tabular data with headers and rows.",
      keywords: ["grid", "data", "rows", "columns", "spreadsheet"],
    },
    {
      title: "Alert",
      slug: "alert",
      path: "/docs/alert",
      description: "Inline callout for user attention.",
      keywords: ["callout", "notice", "warning", "info", "banner", "message"],
    },
    {
      title: "Accordion",
      slug: "accordion",
      path: "/docs/accordion",
      description: "Collapsible stacked content sections.",
      keywords: ["collapse", "expand", "faq", "disclosure", "fold"],
    },
    {
      title: "Collapsible",
      slug: "collapsible",
      path: "/docs/collapsible",
      description: "Single expandable panel.",
      keywords: ["expand", "collapse", "toggle", "disclosure", "show", "hide"],
    },
    {
      title: "Tabs",
      slug: "tabs",
      path: "/docs/tabs",
      description: "Switch between panels of content.",
      keywords: ["tabbed", "switch", "panel", "section", "view"],
    },
  ],
}

export const overlayComponentsNav: NavSection = {
  title: "Overlays",
  items: [
    {
      title: "Dialog",
      slug: "dialog",
      path: "/docs/dialog",
      description: "Modal window that overlays the page.",
      keywords: ["modal", "popup", "window", "overlay", "dialog"],
    },
    {
      title: "Sheet",
      slug: "sheet",
      path: "/docs/sheet",
      description: "Slide-in panel from any screen edge.",
      keywords: ["panel", "slide", "drawer", "sidebar", "modal"],
    },
    {
      title: "Drawer",
      slug: "drawer",
      path: "/docs/drawer",
      description: "Mobile-friendly bottom sheet drawer.",
      keywords: ["bottom", "sheet", "mobile", "slide", "panel"],
    },
    {
      title: "Popover",
      slug: "popover",
      path: "/docs/popover",
      description: "Floating content anchored to a trigger.",
      keywords: ["floating", "anchored", "popup", "dropdown", "tooltip"],
    },
    {
      title: "Tooltip",
      slug: "tooltip",
      path: "/docs/tooltip",
      description: "Small label shown on hover or focus.",
      keywords: ["hint", "label", "hover", "info", "title"],
    },
    {
      title: "Hover Card",
      slug: "hover-card",
      path: "/docs/hover-card",
      description: "Preview card shown on hover, like Twitter profiles.",
      keywords: ["hover", "preview", "card", "profile", "twitter"],
    },
    {
      title: "Alert Dialog",
      slug: "alert-dialog",
      path: "/docs/alert-dialog",
      description: "Modal that demands a user response.",
      keywords: ["confirm", "modal", "danger", "delete", "warning"],
    },
  ],
}

export const navigationComponentsNav: NavSection = {
  title: "Navigation",
  items: [
    {
      title: "Navigation Menu",
      slug: "navigation-menu",
      path: "/docs/navigation-menu",
      description: "Multi-level site navigation with dropdowns.",
      keywords: ["nav", "menu", "mega", "header", "links"],
    },
    {
      title: "Breadcrumb",
      slug: "breadcrumb",
      path: "/docs/breadcrumb",
      description: "Trail showing the current page location.",
      keywords: ["trail", "path", "crumb", "location", "hierarchy"],
    },
    {
      title: "Pagination",
      slug: "pagination",
      path: "/docs/pagination",
      description: "Navigate between pages of results.",
      keywords: ["pages", "next", "previous", "page", "numbers"],
    },
    {
      title: "Dropdown Menu",
      slug: "dropdown-menu",
      path: "/docs/dropdown-menu",
      description: "Menu of actions triggered by a button.",
      keywords: ["menu", "dropdown", "actions", "context", "popup"],
    },
    {
      title: "Context Menu",
      slug: "context-menu",
      path: "/docs/context-menu",
      description: "Right-click menu of actions.",
      keywords: ["right", "click", "menu", "actions", "contextual"],
    },
    {
      title: "Menubar",
      slug: "menubar",
      path: "/docs/menubar",
      description: "Persistent horizontal menu bar like desktop apps.",
      keywords: ["menu", "bar", "desktop", "horizontal", "app"],
    },
    {
      title: "Command",
      slug: "command",
      path: "/docs/command",
      description: "Command palette for quick actions and search.",
      keywords: ["palette", "search", "quick", "cmdk", "spotlight", "command"],
    },
  ],
}

export const feedbackComponentsNav: NavSection = {
  title: "Feedback",
  items: [
    {
      title: "Toast",
      slug: "toast",
      path: "/docs/toast",
      description: "Temporary notification that auto-dismisses.",
      keywords: ["notification", "alert", "snackbar", "popup", "message"],
    },
    {
      title: "Sonner",
      slug: "sonner",
      path: "/docs/sonner",
      description: "Modern toast library by Emil Kowalski.",
      keywords: ["toast", "notification", "snackbar", "sonner"],
    },
    {
      title: "Calendar",
      slug: "calendar",
      path: "/docs/calendar",
      description: "Date picker with single, multiple, and range modes.",
      keywords: ["date", "picker", "day", "month", "schedule"],
    },
    {
      title: "Carousel",
      slug: "carousel",
      path: "/docs/carousel",
      description: "Slideshow for cycling through content.",
      keywords: ["slider", "slides", "embla", "gallery", "image"],
    },
    {
      title: "Chart",
      slug: "chart",
      path: "/docs/chart",
      description: "Data visualization built on Recharts.",
      keywords: ["graph", "recharts", "bar", "line", "pie", "data"],
    },
    {
      title: "Sidebar",
      slug: "sidebar",
      path: "/docs/sidebar",
      status: "new",
      description: "Composable, collapsible navigation sidebar.",
      keywords: ["nav", "side", "panel", "rail", "menu", "composable"],
    },
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

export const allNavItems: NavItem[] = navSections.flatMap((s) =>
  s.items.map((item) => ({ ...item, section: s.title }))
)

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

/**
 * Search the registry for items matching a query.
 *
 * Scoring (higher = more relevant):
 *   - title exact match:        +100
 *   - title starts with query:  +50
 *   - title contains query:     +25
 *   - slug exact match:         +40
 *   - slug contains query:      +15
 *   - keyword exact match:      +20
 *   - keyword contains query:   +10
 *   - description contains:     +5
 *
 * Returns items sorted by score desc, then alphabetically by title.
 */
export type SearchResult = NavItem & { score: number }

export function searchItems(query: string, limit: number = 12): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) {
    // No query: return a curated set of popular items.
    const popular = ["button", "card", "dialog", "input", "tabs", "introduction"]
    return allNavItems
      .filter((item) => popular.includes(item.slug))
      .map((item) => ({ ...item, score: 0 }))
      .slice(0, limit)
  }

  const results: SearchResult[] = []

  for (const item of allNavItems) {
    const title = item.title.toLowerCase()
    const slug = item.slug.toLowerCase()
    const description = (item.description ?? "").toLowerCase()
    const keywords = item.keywords ?? []
    const section = (item.section ?? "").toLowerCase()

    let score = 0

    if (title === q) score += 100
    else if (title.startsWith(q)) score += 50
    else if (title.includes(q)) score += 25

    if (slug === q) score += 40
    else if (slug.includes(q)) score += 15

    for (const kw of keywords) {
      if (kw === q) score += 20
      else if (kw.includes(q)) score += 10
    }

    if (description.includes(q)) score += 5
    if (section.includes(q)) score += 3

    if (score > 0) {
      results.push({ ...item, score })
    }
  }

  return results
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return a.title.localeCompare(b.title)
    })
    .slice(0, limit)
}
