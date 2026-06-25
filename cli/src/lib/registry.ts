/**
 * Component registry — maps component slugs to their source files and deps.
 *
 * The actual .tsx source files live in the `registry/` folder at the package
 * root (shipped as plain files, not bundled). The CLI reads them at runtime.
 */

import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"
import { readFileSync } from "node:fs"

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Resolve the registry directory. In dev (running from src), it's at the
 * package root. In production (running from dist/), it's one level up.
 */
function registryDir(): string {
  // When running from dist/index.js, __dirname is dist/
  // When running from src/index.ts via tsx, __dirname is src/
  if (__dirname.endsWith("dist")) {
    return resolve(__dirname, "..", "registry")
  }
  if (__dirname.endsWith("src") || __dirname.endsWith("src/lib") || __dirname.endsWith("src/commands")) {
    return resolve(__dirname, "..", "..", "registry")
  }
  // Fallback: assume registry is a sibling of dist.
  return resolve(__dirname, "..", "registry")
}

export type RegistryEntry = {
  /** Slug used in the CLI: `journal add <slug>` */
  slug: string
  /** Component name as exported from the source file */
  name: string
  /** File name in the registry folder */
  file: string
  /** Category for grouping in the docs */
  category: string
  /** npm packages the user needs installed (informational only — we don't auto-install) */
  npmDeps: string[]
  /** Other registry slugs this component depends on */
  registryDeps: string[]
}

/**
 * The full registry. This is the single source of truth for what's installable.
 */
export const registry: Record<string, RegistryEntry> = {
  // ── Forms ──
  button: {
    slug: "button",
    name: "Button",
    file: "button.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-slot", "class-variance-authority"],
    registryDeps: ["utils"],
  },
  input: {
    slug: "input",
    name: "Input",
    file: "input.tsx",
    category: "forms",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  textarea: {
    slug: "textarea",
    name: "Textarea",
    file: "textarea.tsx",
    category: "forms",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  label: {
    slug: "label",
    name: "Label",
    file: "label.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-label"],
    registryDeps: ["utils"],
  },
  checkbox: {
    slug: "checkbox",
    name: "Checkbox",
    file: "checkbox.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-checkbox"],
    registryDeps: ["utils"],
  },
  switch: {
    slug: "switch",
    name: "Switch",
    file: "switch.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-switch"],
    registryDeps: ["utils"],
  },
  "radio-group": {
    slug: "radio-group",
    name: "RadioGroup",
    file: "radio-group.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-radio-group"],
    registryDeps: ["utils"],
  },
  select: {
    slug: "select",
    name: "Select",
    file: "select.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-select"],
    registryDeps: ["utils"],
  },
  slider: {
    slug: "slider",
    name: "Slider",
    file: "slider.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-slider"],
    registryDeps: ["utils"],
  },
  toggle: {
    slug: "toggle",
    name: "Toggle",
    file: "toggle.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-toggle", "class-variance-authority"],
    registryDeps: ["utils"],
  },
  "toggle-group": {
    slug: "toggle-group",
    name: "ToggleGroup",
    file: "toggle-group.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-toggle-group"],
    registryDeps: ["toggle", "utils"],
  },
  "input-otp": {
    slug: "input-otp",
    name: "InputOTP",
    file: "input-otp.tsx",
    category: "forms",
    npmDeps: ["input-otp"],
    registryDeps: ["utils"],
  },
  form: {
    slug: "form",
    name: "Form",
    file: "form.tsx",
    category: "forms",
    npmDeps: ["react-hook-form", "@radix-ui/react-label", "@radix-ui/react-slot"],
    registryDeps: ["label", "utils"],
  },

  // ── Layout ──
  card: {
    slug: "card",
    name: "Card",
    file: "card.tsx",
    category: "layout",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  separator: {
    slug: "separator",
    name: "Separator",
    file: "separator.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-separator"],
    registryDeps: ["utils"],
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    name: "AspectRatio",
    file: "aspect-ratio.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-aspect-ratio"],
    registryDeps: ["utils"],
  },
  resizable: {
    slug: "resizable",
    name: "Resizable",
    file: "resizable.tsx",
    category: "layout",
    npmDeps: ["react-resizable-panels"],
    registryDeps: ["utils"],
  },
  "scroll-area": {
    slug: "scroll-area",
    name: "ScrollArea",
    file: "scroll-area.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-scroll-area"],
    registryDeps: ["utils"],
  },

  // ── Display ──
  badge: {
    slug: "badge",
    name: "Badge",
    file: "badge.tsx",
    category: "display",
    npmDeps: ["class-variance-authority"],
    registryDeps: ["utils"],
  },
  avatar: {
    slug: "avatar",
    name: "Avatar",
    file: "avatar.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-avatar"],
    registryDeps: ["utils"],
  },
  skeleton: {
    slug: "skeleton",
    name: "Skeleton",
    file: "skeleton.tsx",
    category: "display",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  progress: {
    slug: "progress",
    name: "Progress",
    file: "progress.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-progress"],
    registryDeps: ["utils"],
  },
  table: {
    slug: "table",
    name: "Table",
    file: "table.tsx",
    category: "display",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  alert: {
    slug: "alert",
    name: "Alert",
    file: "alert.tsx",
    category: "display",
    npmDeps: ["class-variance-authority"],
    registryDeps: ["utils"],
  },
  accordion: {
    slug: "accordion",
    name: "Accordion",
    file: "accordion.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-accordion"],
    registryDeps: ["utils"],
  },
  collapsible: {
    slug: "collapsible",
    name: "Collapsible",
    file: "collapsible.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-collapsible"],
    registryDeps: ["utils"],
  },
  tabs: {
    slug: "tabs",
    name: "Tabs",
    file: "tabs.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-tabs"],
    registryDeps: ["utils"],
  },

  // ── Overlays ──
  dialog: {
    slug: "dialog",
    name: "Dialog",
    file: "dialog.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-dialog"],
    registryDeps: ["utils"],
  },
  sheet: {
    slug: "sheet",
    name: "Sheet",
    file: "sheet.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-dialog"],
    registryDeps: ["utils"],
  },
  drawer: {
    slug: "drawer",
    name: "Drawer",
    file: "drawer.tsx",
    category: "overlays",
    npmDeps: ["vaul"],
    registryDeps: ["utils"],
  },
  popover: {
    slug: "popover",
    name: "Popover",
    file: "popover.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-popover"],
    registryDeps: ["utils"],
  },
  tooltip: {
    slug: "tooltip",
    name: "Tooltip",
    file: "tooltip.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-tooltip"],
    registryDeps: ["utils"],
  },
  "hover-card": {
    slug: "hover-card",
    name: "HoverCard",
    file: "hover-card.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-hover-card"],
    registryDeps: ["utils"],
  },
  "alert-dialog": {
    slug: "alert-dialog",
    name: "AlertDialog",
    file: "alert-dialog.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-alert-dialog"],
    registryDeps: ["utils"],
  },

  // ── Navigation ──
  "navigation-menu": {
    slug: "navigation-menu",
    name: "NavigationMenu",
    file: "navigation-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-navigation-menu"],
    registryDeps: ["utils"],
  },
  breadcrumb: {
    slug: "breadcrumb",
    name: "Breadcrumb",
    file: "breadcrumb.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-slot"],
    registryDeps: ["utils"],
  },
  pagination: {
    slug: "pagination",
    name: "Pagination",
    file: "pagination.tsx",
    category: "navigation",
    npmDeps: [],
    registryDeps: ["utils"],
  },
  "dropdown-menu": {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    file: "dropdown-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-dropdown-menu"],
    registryDeps: ["utils"],
  },
  "context-menu": {
    slug: "context-menu",
    name: "ContextMenu",
    file: "context-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-context-menu"],
    registryDeps: ["utils"],
  },
  menubar: {
    slug: "menubar",
    name: "Menubar",
    file: "menubar.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-menubar"],
    registryDeps: ["utils"],
  },
  command: {
    slug: "command",
    name: "Command",
    file: "command.tsx",
    category: "navigation",
    npmDeps: ["cmdk"],
    registryDeps: ["dialog", "utils"],
  },

  // ── Feedback ──
  toast: {
    slug: "toast",
    name: "Toast",
    file: "toast.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: ["utils"],
  },
  toaster: {
    slug: "toaster",
    name: "Toaster",
    file: "toaster.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: ["toast", "utils", "use-toast"],
  },
  sonner: {
    slug: "sonner",
    name: "Sonner",
    file: "sonner.tsx",
    category: "feedback",
    npmDeps: ["sonner", "next-themes"],
    registryDeps: ["utils"],
  },
  calendar: {
    slug: "calendar",
    name: "Calendar",
    file: "calendar.tsx",
    category: "feedback",
    npmDeps: ["react-day-picker"],
    registryDeps: ["button", "utils"],
  },
  carousel: {
    slug: "carousel",
    name: "Carousel",
    file: "carousel.tsx",
    category: "feedback",
    npmDeps: ["embla-carousel-react"],
    registryDeps: ["button", "utils"],
  },
  chart: {
    slug: "chart",
    name: "Chart",
    file: "chart.tsx",
    category: "feedback",
    npmDeps: ["recharts"],
    registryDeps: ["utils"],
  },
  sidebar: {
    slug: "sidebar",
    name: "Sidebar",
    file: "sidebar.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-slot", "class-variance-authority", "lucide-react"],
    registryDeps: ["button", "separator", "sheet", "tooltip", "utils", "use-mobile"],
  },

  // ── Hooks ──
  "use-toast": {
    slug: "use-toast",
    name: "use-toast",
    file: "use-toast.ts",
    category: "hooks",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: [],
  },
  "use-mobile": {
    slug: "use-mobile",
    name: "use-mobile",
    file: "use-mobile.ts",
    category: "hooks",
    npmDeps: [],
    registryDeps: [],
  },

  // ── Utilities ──
  utils: {
    slug: "utils",
    name: "cn",
    file: "utils.ts",
    category: "utilities",
    npmDeps: ["clsx", "tailwind-merge"],
    registryDeps: [],
  },
}

/**
 * The virtual `utils` entry — special-cased because it goes to lib/, not ui/.
 */
export const UTILS_SLUG = "utils"

/**
 * Slugs that should be written to lib/ or hooks/ instead of ui/.
 */
export function targetDir(slug: string): "ui" | "lib" | "hooks" {
  if (slug === UTILS_SLUG) return "lib"
  if (slug.startsWith("use-")) return "hooks"
  return "ui"
}

/**
 * Read a component's source code from the registry folder.
 */
export function readRegistrySource(file: string): string {
  const path = resolve(registryDir(), file)
  return readFileSync(path, "utf8")
}

/**
 * List all available slugs.
 */
export function listSlugs(): string[] {
  return Object.keys(registry)
}

/**
 * Resolve the full transitive dependency tree for a set of slugs.
 * Returns slugs in install order (deps first).
 */
export function resolveTree(slugs: string[]): string[] {
  const visited = new Set<string>()
  const ordered: string[] = []

  function visit(slug: string) {
    if (visited.has(slug)) return
    visited.add(slug)
    const entry = registry[slug]
    if (!entry) return
    // Visit deps first so they're installed before the dependent.
    for (const dep of entry.registryDeps) {
      visit(dep)
    }
    ordered.push(slug)
  }

  for (const slug of slugs) visit(slug)
  return ordered
}
