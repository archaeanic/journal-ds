#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'readline/promises';
import { stdout, stdin } from 'process';

var DEFAULT_CONFIG = {
  $schema: "https://journal-ds.dev/schema.json",
  style: "default",
  rsc: true,
  tsx: true,
  tailwind: {
    config: "tailwind.config.ts",
    css: "src/app/globals.css",
    baseColor: "neutral",
    cssVariables: true
  },
  aliases: {
    components: "@/components",
    utils: "@/lib/utils",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks"
  },
  iconLibrary: "lucide"
};
function configPath(cwd = process.cwd()) {
  return resolve(cwd, "journal.json");
}
function readConfig(cwd = process.cwd()) {
  const path = configPath(cwd);
  if (!existsSync(path)) {
    throw new ConfigError(
      `journal.json not found at ${path}.
Run \`npx @journal-ds/cli init\` first to create one.`
    );
  }
  const raw = readFileSync(path, "utf8");
  try {
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
  } catch {
    throw new ConfigError(`Failed to parse journal.json at ${path}.`);
  }
}
function writeConfig(config, cwd = process.cwd()) {
  const path = configPath(cwd);
  const json = JSON.stringify(config, null, 2) + "\n";
  writeFileSync(path, json, "utf8");
}
var ConfigError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
};
var rl = null;
function getRL() {
  if (!rl) {
    rl = readline.createInterface({
      input: stdin,
      output: stdout,
      terminal: true
    });
  }
  return rl;
}
async function ask(question, defaultValue) {
  const rl2 = getRL();
  const suffix = defaultValue ? ` (${defaultValue})` : "";
  const answer = await rl2.question(`${question}${suffix}: `);
  const trimmed = answer.trim();
  return trimmed || defaultValue || "";
}
async function askSelect(question, options, defaultValue) {
  const rl2 = getRL();
  console.log(question);
  options.forEach((opt, i) => {
    const marker = opt === defaultValue ? " \u2190 default" : "";
    console.log(`  ${i + 1}) ${opt}${marker}`);
  });
  const defaultIndex = defaultValue ? options.indexOf(defaultValue) + 1 : void 0;
  const suffix = defaultIndex ? ` (${defaultIndex})` : "";
  const answer = await rl2.question(`Choice${suffix}: `);
  const trimmed = answer.trim();
  if (!trimmed && defaultIndex) return defaultValue;
  const idx = parseInt(trimmed, 10);
  if (isNaN(idx) || idx < 1 || idx > options.length) {
    console.log("  Invalid choice, using default.");
    return defaultValue || options[0];
  }
  return options[idx - 1];
}
async function askConfirm(question, defaultValue = false) {
  const rl2 = getRL();
  const hint = defaultValue ? "Y/n" : "y/N";
  const answer = await rl2.question(`${question} [${hint}]: `);
  const trimmed = answer.trim().toLowerCase();
  if (!trimmed) return defaultValue;
  return trimmed === "y" || trimmed === "yes";
}
function closePrompts() {
  if (rl) {
    rl.close();
    rl = null;
  }
}

// src/lib/log.ts
var COLORS = {
  reset: "\x1B[0m",
  bold: "\x1B[1m",
  dim: "\x1B[2m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  gray: "\x1B[90m",
  // Journal-inspired
  burgundy: "\x1B[38;5;88m",
  forest: "\x1B[38;5;22m",
  gold: "\x1B[38;5;136m",
  sepia: "\x1B[38;5;95m"
};
function paint(color, text) {
  return `${COLORS[color]}${text}${COLORS.reset}`;
}
var log = {
  info(msg) {
    console.log(msg);
  },
  step(msg) {
    console.log(paint("cyan", "\u25C6"), msg);
  },
  success(msg) {
    console.log(paint("forest", "\u2713"), paint("forest", msg));
  },
  warn(msg) {
    console.log(paint("gold", "\u26A0"), paint("gold", msg));
  },
  error(msg) {
    console.error(paint("red", "\u2717"), paint("red", msg));
  },
  created(path) {
    console.log(paint("forest", "  \u2713 Created"), paint("gray", path));
  },
  updated(path) {
    console.log(paint("gold", "  \u21BB Updated"), paint("gray", path));
  },
  skipped(path, reason) {
    console.log(paint("sepia", "  \u2192 Skipped"), paint("gray", `${path} (${reason})`));
  },
  dryRun(path) {
    console.log(paint("sepia", "  \u2192 Would create"), paint("gray", path));
  },
  banner() {
    const line = "\u2500".repeat(52);
    console.log();
    console.log(paint("burgundy", line));
    console.log(
      paint("burgundy", "  Journal Design System"),
      paint("sepia", "\xB7 CLI v1.0.0")
    );
    console.log(paint("burgundy", line));
    console.log();
  },
  group(title) {
    console.log();
    console.log(paint("bold", title));
  },
  dim(msg) {
    console.log(paint("gray", msg));
  }
};

// src/commands/init.ts
var __dirname$1 = dirname(fileURLToPath(import.meta.url));
function templatesDir() {
  if (__dirname$1.endsWith("dist")) {
    return resolve(__dirname$1, "..", "templates");
  }
  return resolve(__dirname$1, "..", "..", "templates");
}
function readTemplate(name) {
  return readFileSync(resolve(templatesDir(), name), "utf8");
}
async function initCommand(opts) {
  const { cwd, yes } = opts;
  log.banner();
  const configPath2 = resolve(cwd, "journal.json");
  if (existsSync(configPath2)) {
    if (!yes) {
      const overwrite = await askConfirm(
        "journal.json already exists. Overwrite?",
        false
      );
      if (!overwrite) {
        log.warn("Aborted. Keeping existing journal.json.");
        closePrompts();
        return;
      }
    }
  }
  let config = { ...DEFAULT_CONFIG };
  if (!opts.defaults && !yes) {
    log.group("Let's configure your project.");
    console.log();
    config.style = await askSelect(
      "Which style would you like to use?",
      ["default", "new-york"],
      "default"
    );
    config.tailwind.baseColor = await askSelect(
      "Which color would you like to use as the base color?",
      ["neutral", "gray", "slate", "stone", "zinc"],
      "neutral"
    );
    const cssPath = await ask(
      "Where is your global CSS file?",
      config.tailwind.css
    );
    config.tailwind.css = cssPath;
    const tailwindConfigPath = await ask(
      "Where is your tailwind.config?",
      config.tailwind.config
    );
    config.tailwind.config = tailwindConfigPath;
    config.aliases.components = await ask(
      "Configure the import alias for components:",
      config.aliases.components
    );
    config.aliases.utils = await ask(
      "Configure the import alias for utils:",
      config.aliases.utils
    );
    config.aliases.ui = await ask(
      "Configure the import alias for ui:",
      config.aliases.ui
    );
    config.aliases.hooks = await ask(
      "Configure the import alias for hooks:",
      config.aliases.hooks
    );
    config.iconLibrary = await askSelect(
      "Which icon library would you like to use?",
      ["lucide", "radix"],
      "lucide"
    );
    const isRSC = await askConfirm(
      "Are you using React Server Components?",
      true
    );
    config.rsc = isRSC;
    closePrompts();
  }
  log.group("Writing configuration...");
  writeConfig(config, cwd);
  log.created(configPath2);
  const cssAbs = resolve(cwd, config.tailwind.css);
  if (existsSync(cssAbs)) {
    const existing = readFileSync(cssAbs, "utf8");
    const hasJournalVars = existing.includes("--journal-paper");
    if (hasJournalVars) {
      log.skipped(cssAbs, "already has Journal theme");
    } else if (!opts.defaults && !yes) {
      appendJournalTheme(cssAbs, existing);
      log.updated(cssAbs);
    } else {
      appendJournalTheme(cssAbs, existing);
      log.updated(cssAbs);
    }
  } else {
    mkdirSync(dirname(cssAbs), { recursive: true });
    writeFileSync(cssAbs, readTemplate("globals.css"), "utf8");
    log.created(cssAbs);
  }
  const utilsAbs = resolve(cwd, "src/lib/utils.ts");
  const utilsAliasBase = config.aliases.utils.replace(/\/utils$/, "");
  const utilsAbsFromAlias = resolve(cwd, utilsAliasBase.replace(/^@\/?/, "src/"), "utils.ts");
  const utilsTarget = existsSync(utilsAbsFromAlias) ? utilsAbsFromAlias : utilsAbs;
  if (existsSync(utilsTarget)) {
    log.skipped(utilsTarget, "already exists");
  } else {
    mkdirSync(dirname(utilsTarget), { recursive: true });
    writeFileSync(utilsTarget, readTemplate("utils.ts"), "utf8");
    log.created(utilsTarget);
  }
  log.group("Done!");
  console.log();
  log.success("Journal Design System is configured.");
  console.log();
  log.dim("Next steps:");
  console.log("  Add a component:  npx @journal-ds/cli add button");
  console.log("  Add multiple:     npx @journal-ds/cli add button card dialog");
  console.log("  Add everything:   npx @journal-ds/cli add --all");
  console.log();
}
function appendJournalTheme(path, existing) {
  const journalCss = readTemplate("globals.css");
  const hasTailwindImport = existing.includes('@import "tailwindcss"') || existing.includes("@import 'tailwindcss'");
  let merged;
  if (hasTailwindImport) {
    const journalStripped = journalCss.replace(/@import\s+["']tailwindcss["'];?\n?/g, "").replace(/@import\s+["']tw-animate-css["'];?\n?/g, "");
    merged = existing.trimEnd() + "\n\n" + journalStripped;
  } else {
    merged = journalCss + "\n\n" + existing;
  }
  writeFileSync(path, merged, "utf8");
}
var __dirname2 = dirname(fileURLToPath(import.meta.url));
function registryDir() {
  if (__dirname2.endsWith("dist")) {
    return resolve(__dirname2, "..", "registry");
  }
  if (__dirname2.endsWith("src") || __dirname2.endsWith("src/lib") || __dirname2.endsWith("src/commands")) {
    return resolve(__dirname2, "..", "..", "registry");
  }
  return resolve(__dirname2, "..", "registry");
}
var registry = {
  // ── Forms ──
  button: {
    slug: "button",
    name: "Button",
    file: "button.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-slot", "class-variance-authority"],
    registryDeps: ["utils"]
  },
  input: {
    slug: "input",
    name: "Input",
    file: "input.tsx",
    category: "forms",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  textarea: {
    slug: "textarea",
    name: "Textarea",
    file: "textarea.tsx",
    category: "forms",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  label: {
    slug: "label",
    name: "Label",
    file: "label.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-label"],
    registryDeps: ["utils"]
  },
  checkbox: {
    slug: "checkbox",
    name: "Checkbox",
    file: "checkbox.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-checkbox"],
    registryDeps: ["utils"]
  },
  switch: {
    slug: "switch",
    name: "Switch",
    file: "switch.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-switch"],
    registryDeps: ["utils"]
  },
  "radio-group": {
    slug: "radio-group",
    name: "RadioGroup",
    file: "radio-group.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-radio-group"],
    registryDeps: ["utils"]
  },
  select: {
    slug: "select",
    name: "Select",
    file: "select.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-select"],
    registryDeps: ["utils"]
  },
  slider: {
    slug: "slider",
    name: "Slider",
    file: "slider.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-slider"],
    registryDeps: ["utils"]
  },
  toggle: {
    slug: "toggle",
    name: "Toggle",
    file: "toggle.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-toggle", "class-variance-authority"],
    registryDeps: ["utils"]
  },
  "toggle-group": {
    slug: "toggle-group",
    name: "ToggleGroup",
    file: "toggle-group.tsx",
    category: "forms",
    npmDeps: ["@radix-ui/react-toggle-group"],
    registryDeps: ["toggle", "utils"]
  },
  "input-otp": {
    slug: "input-otp",
    name: "InputOTP",
    file: "input-otp.tsx",
    category: "forms",
    npmDeps: ["input-otp"],
    registryDeps: ["utils"]
  },
  form: {
    slug: "form",
    name: "Form",
    file: "form.tsx",
    category: "forms",
    npmDeps: ["react-hook-form", "@radix-ui/react-label", "@radix-ui/react-slot"],
    registryDeps: ["label", "utils"]
  },
  // ── Layout ──
  card: {
    slug: "card",
    name: "Card",
    file: "card.tsx",
    category: "layout",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  separator: {
    slug: "separator",
    name: "Separator",
    file: "separator.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-separator"],
    registryDeps: ["utils"]
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    name: "AspectRatio",
    file: "aspect-ratio.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-aspect-ratio"],
    registryDeps: ["utils"]
  },
  resizable: {
    slug: "resizable",
    name: "Resizable",
    file: "resizable.tsx",
    category: "layout",
    npmDeps: ["react-resizable-panels"],
    registryDeps: ["utils"]
  },
  "scroll-area": {
    slug: "scroll-area",
    name: "ScrollArea",
    file: "scroll-area.tsx",
    category: "layout",
    npmDeps: ["@radix-ui/react-scroll-area"],
    registryDeps: ["utils"]
  },
  // ── Display ──
  badge: {
    slug: "badge",
    name: "Badge",
    file: "badge.tsx",
    category: "display",
    npmDeps: ["class-variance-authority"],
    registryDeps: ["utils"]
  },
  avatar: {
    slug: "avatar",
    name: "Avatar",
    file: "avatar.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-avatar"],
    registryDeps: ["utils"]
  },
  skeleton: {
    slug: "skeleton",
    name: "Skeleton",
    file: "skeleton.tsx",
    category: "display",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  progress: {
    slug: "progress",
    name: "Progress",
    file: "progress.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-progress"],
    registryDeps: ["utils"]
  },
  table: {
    slug: "table",
    name: "Table",
    file: "table.tsx",
    category: "display",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  alert: {
    slug: "alert",
    name: "Alert",
    file: "alert.tsx",
    category: "display",
    npmDeps: ["class-variance-authority"],
    registryDeps: ["utils"]
  },
  accordion: {
    slug: "accordion",
    name: "Accordion",
    file: "accordion.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-accordion"],
    registryDeps: ["utils"]
  },
  collapsible: {
    slug: "collapsible",
    name: "Collapsible",
    file: "collapsible.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-collapsible"],
    registryDeps: ["utils"]
  },
  tabs: {
    slug: "tabs",
    name: "Tabs",
    file: "tabs.tsx",
    category: "display",
    npmDeps: ["@radix-ui/react-tabs"],
    registryDeps: ["utils"]
  },
  // ── Overlays ──
  dialog: {
    slug: "dialog",
    name: "Dialog",
    file: "dialog.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-dialog"],
    registryDeps: ["utils"]
  },
  sheet: {
    slug: "sheet",
    name: "Sheet",
    file: "sheet.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-dialog"],
    registryDeps: ["utils"]
  },
  drawer: {
    slug: "drawer",
    name: "Drawer",
    file: "drawer.tsx",
    category: "overlays",
    npmDeps: ["vaul"],
    registryDeps: ["utils"]
  },
  popover: {
    slug: "popover",
    name: "Popover",
    file: "popover.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-popover"],
    registryDeps: ["utils"]
  },
  tooltip: {
    slug: "tooltip",
    name: "Tooltip",
    file: "tooltip.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-tooltip"],
    registryDeps: ["utils"]
  },
  "hover-card": {
    slug: "hover-card",
    name: "HoverCard",
    file: "hover-card.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-hover-card"],
    registryDeps: ["utils"]
  },
  "alert-dialog": {
    slug: "alert-dialog",
    name: "AlertDialog",
    file: "alert-dialog.tsx",
    category: "overlays",
    npmDeps: ["@radix-ui/react-alert-dialog"],
    registryDeps: ["utils"]
  },
  // ── Navigation ──
  "navigation-menu": {
    slug: "navigation-menu",
    name: "NavigationMenu",
    file: "navigation-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-navigation-menu"],
    registryDeps: ["utils"]
  },
  breadcrumb: {
    slug: "breadcrumb",
    name: "Breadcrumb",
    file: "breadcrumb.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-slot"],
    registryDeps: ["utils"]
  },
  pagination: {
    slug: "pagination",
    name: "Pagination",
    file: "pagination.tsx",
    category: "navigation",
    npmDeps: [],
    registryDeps: ["utils"]
  },
  "dropdown-menu": {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    file: "dropdown-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-dropdown-menu"],
    registryDeps: ["utils"]
  },
  "context-menu": {
    slug: "context-menu",
    name: "ContextMenu",
    file: "context-menu.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-context-menu"],
    registryDeps: ["utils"]
  },
  menubar: {
    slug: "menubar",
    name: "Menubar",
    file: "menubar.tsx",
    category: "navigation",
    npmDeps: ["@radix-ui/react-menubar"],
    registryDeps: ["utils"]
  },
  command: {
    slug: "command",
    name: "Command",
    file: "command.tsx",
    category: "navigation",
    npmDeps: ["cmdk"],
    registryDeps: ["dialog", "utils"]
  },
  // ── Feedback ──
  toast: {
    slug: "toast",
    name: "Toast",
    file: "toast.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: ["utils"]
  },
  toaster: {
    slug: "toaster",
    name: "Toaster",
    file: "toaster.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: ["toast", "utils", "use-toast"]
  },
  sonner: {
    slug: "sonner",
    name: "Sonner",
    file: "sonner.tsx",
    category: "feedback",
    npmDeps: ["sonner", "next-themes"],
    registryDeps: ["utils"]
  },
  calendar: {
    slug: "calendar",
    name: "Calendar",
    file: "calendar.tsx",
    category: "feedback",
    npmDeps: ["react-day-picker"],
    registryDeps: ["button", "utils"]
  },
  carousel: {
    slug: "carousel",
    name: "Carousel",
    file: "carousel.tsx",
    category: "feedback",
    npmDeps: ["embla-carousel-react"],
    registryDeps: ["button", "utils"]
  },
  chart: {
    slug: "chart",
    name: "Chart",
    file: "chart.tsx",
    category: "feedback",
    npmDeps: ["recharts"],
    registryDeps: ["utils"]
  },
  sidebar: {
    slug: "sidebar",
    name: "Sidebar",
    file: "sidebar.tsx",
    category: "feedback",
    npmDeps: ["@radix-ui/react-slot", "class-variance-authority", "lucide-react"],
    registryDeps: ["button", "separator", "sheet", "tooltip", "utils", "use-mobile"]
  },
  // ── Hooks ──
  "use-toast": {
    slug: "use-toast",
    name: "use-toast",
    file: "use-toast.ts",
    category: "hooks",
    npmDeps: ["@radix-ui/react-toast"],
    registryDeps: []
  },
  "use-mobile": {
    slug: "use-mobile",
    name: "use-mobile",
    file: "use-mobile.ts",
    category: "hooks",
    npmDeps: [],
    registryDeps: []
  },
  // ── Utilities ──
  utils: {
    slug: "utils",
    name: "cn",
    file: "utils.ts",
    category: "utilities",
    npmDeps: ["clsx", "tailwind-merge"],
    registryDeps: []
  }
};
var UTILS_SLUG = "utils";
function targetDir(slug) {
  if (slug === UTILS_SLUG) return "lib";
  if (slug.startsWith("use-")) return "hooks";
  return "ui";
}
function readRegistrySource(file) {
  const path = resolve(registryDir(), file);
  return readFileSync(path, "utf8");
}
function resolveTree(slugs) {
  const visited = /* @__PURE__ */ new Set();
  const ordered = [];
  function visit(slug) {
    if (visited.has(slug)) return;
    visited.add(slug);
    const entry = registry[slug];
    if (!entry) return;
    for (const dep of entry.registryDeps) {
      visit(dep);
    }
    ordered.push(slug);
  }
  for (const slug of slugs) visit(slug);
  return ordered;
}

// src/lib/transform.ts
function transformSource(source, config) {
  const { aliases } = config;
  let out = source;
  out = out.replace(
    /from\s+["']@\/lib\/utils["']/g,
    `from "${aliases.utils}"`
  );
  out = out.replace(
    /from\s+["']@\/components\/ui\/([^"']+)["']/g,
    (_, name) => `from "${aliases.ui}/${name}"`
  );
  out = out.replace(
    /from\s+["']@\/hooks\/([^"']+)["']/g,
    (_, name) => `from "${aliases.hooks}/${name}"`
  );
  out = out.replace(
    /from\s+["']@\/components\/([^"']+)["']/g,
    (_, name) => `from "${aliases.components}/${name}"`
  );
  out = out.replace(
    /from\s+["']@\/lib\/([^"']+)["']/g,
    (_, name) => `from "${aliases.lib}/${name}"`
  );
  out = out.replace(
    /from\s+["']\.\.\/lib\/utils["']/g,
    `from "${aliases.utils}"`
  );
  out = out.replace(
    /from\s+["']\.\/([^"']+)["']/g,
    (_, name) => {
      if (name.includes(".")) return `from "./${name}"`;
      return `from "${aliases.ui}/${name}"`;
    }
  );
  out = out.replace(
    /from\s+["']\.\.\/hooks\/([^"']+)["']/g,
    (_, name) => `from "${aliases.hooks}/${name}"`
  );
  out = out.replace(
    /from\s+["']\.\.\/components\/ui\/([^"']+)["']/g,
    (_, name) => `from "${aliases.ui}/${name}"`
  );
  out = out.replace(
    /from\s+["']\.\.\/components\/([^"']+)["']/g,
    (_, name) => `from "${aliases.components}/${name}"`
  );
  return out;
}

// src/commands/add.ts
async function addCommand(opts) {
  const { cwd, all, overwrite, yes, dryRun } = opts;
  let slugs = opts.slugs;
  log.banner();
  let config;
  try {
    config = readConfig(cwd);
  } catch (err) {
    log.error(err.message);
    process.exit(1);
  }
  if (all) {
    slugs = Object.keys(registry).filter(
      (s) => s !== "utils" && !s.startsWith("use-")
    );
    log.info(`Installing all ${slugs.length} components.`);
  } else if (slugs.length === 0) {
    log.error("No components specified. Usage: journal add <slug> [<slug> ...]");
    log.dim("  Or use --all to install everything.");
    process.exit(1);
  }
  const invalid = slugs.filter((s) => !registry[s]);
  if (invalid.length > 0) {
    log.error(`Unknown component${invalid.length > 1 ? "s" : ""}: ${invalid.join(", ")}`);
    log.dim("  Run `journal list` to see available components.");
    process.exit(1);
  }
  const tree = resolveTree(slugs);
  log.group(`Resolving dependencies for ${slugs.length} component${slugs.length > 1 ? "s" : ""}...`);
  console.log();
  log.dim(`  Will install ${tree.length} file${tree.length > 1 ? "s" : ""}: ${tree.join(", ")}`);
  console.log();
  const existingFiles = [];
  for (const slug of tree) {
    const entry = registry[slug];
    const targetPath = resolveTargetPath(entry, config, cwd);
    if (existsSync(targetPath)) {
      existingFiles.push(targetPath);
    }
  }
  if (existingFiles.length > 0 && !overwrite) {
    if (!yes) {
      const doOverwrite = await askConfirm(
        `
${existingFiles.length} file(s) already exist. Overwrite?`,
        false
      );
      if (!doOverwrite) {
        log.warn("Aborted. No files were changed.");
        closePrompts();
        return;
      }
    } else {
      log.warn(`${existingFiles.length} file(s) already exist. Use --overwrite to replace.`);
      log.warn("Skipping existing files.");
    }
  }
  log.group(dryRun ? "Dry run \u2014 no files will be written." : "Installing...");
  console.log();
  const installed = [];
  const skipped = [];
  for (const slug of tree) {
    const entry = registry[slug];
    const targetPath = resolveTargetPath(entry, config, cwd);
    const fileExists = existsSync(targetPath);
    if (fileExists && !overwrite) {
      log.skipped(targetPath, "already exists");
      skipped.push(slug);
      continue;
    }
    if (dryRun) {
      log.dryRun(targetPath);
      continue;
    }
    mkdirSync(dirname(targetPath), { recursive: true });
    const raw = readRegistrySource(entry.file);
    const transformed = transformSource(raw, config);
    writeFileSync(targetPath, transformed, "utf8");
    if (fileExists) {
      log.updated(targetPath);
    } else {
      log.created(targetPath);
    }
    installed.push(slug);
  }
  const allNpmDeps = /* @__PURE__ */ new Set();
  for (const slug of tree) {
    for (const dep of registry[slug].npmDeps) {
      allNpmDeps.add(dep);
    }
  }
  console.log();
  if (dryRun) {
    log.info(`Dry run complete. ${tree.length} file(s) would be written.`);
  } else {
    log.success(
      `Installed ${installed.length} file${installed.length !== 1 ? "s" : ""}.` + (skipped.length > 0 ? ` (${skipped.length} skipped)` : "")
    );
  }
  if (allNpmDeps.size > 0) {
    console.log();
    log.group("npm dependencies you may need to install:");
    console.log();
    const depList = Array.from(allNpmDeps).sort().join(" ");
    console.log(`  npm install ${depList}`);
    console.log(`  pnpm add ${depList}`);
    console.log(`  yarn add ${depList}`);
    console.log(`  bun add ${depList}`);
    console.log();
    log.dim("  (The CLI doesn't auto-install these to avoid modifying your lockfile.)");
  }
  console.log();
}
function resolveTargetPath(entry, config, cwd) {
  const dir = targetDir(entry.slug);
  let alias;
  let filename;
  switch (dir) {
    case "lib":
      alias = config.aliases.lib;
      filename = "utils.ts";
      break;
    case "hooks":
      alias = config.aliases.hooks;
      filename = entry.file;
      break;
    case "ui":
    default:
      alias = config.aliases.ui;
      filename = entry.file;
      break;
  }
  const fsBase = aliasToFs(alias, cwd);
  return resolve(fsBase, filename);
}
function aliasToFs(alias, cwd) {
  const stripped = alias.replace(/^@\//, "").replace(/^@\//, "");
  return resolve(cwd, "src", stripped);
}

// src/commands/list.ts
function listCommand() {
  log.banner();
  const byCategory = {};
  for (const [slug, entry] of Object.entries(registry)) {
    if (!byCategory[entry.category]) byCategory[entry.category] = [];
    byCategory[entry.category].push(slug);
  }
  const categoryOrder = [
    "forms",
    "layout",
    "display",
    "overlays",
    "navigation",
    "feedback",
    "hooks",
    "utilities"
  ];
  for (const cat of categoryOrder) {
    const slugs = byCategory[cat];
    if (!slugs || slugs.length === 0) continue;
    log.group(`${cat} (${slugs.length})`);
    console.log(`  ${slugs.sort().join(",  ")}`);
    console.log();
  }
  log.dim(`Total: ${Object.keys(registry).length} components.`);
  console.log();
  log.dim("Install with: npx @journal-ds/cli add <slug>");
}

// src/index.ts
var VERSION = "1.0.0";
function parseArgs(argv) {
  const args = argv.slice(2);
  const positional = [];
  let command = null;
  const flags = {
    overwrite: false,
    yes: false,
    dryRun: false,
    all: false,
    defaults: false,
    cwd: process.cwd()
  };
  let i = 0;
  while (i < args.length) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else if (arg === "--version" || arg === "-v") {
      console.log(VERSION);
      process.exit(0);
    } else if (arg === "--overwrite" || arg === "-o") {
      flags.overwrite = true;
    } else if (arg === "--yes" || arg === "-y") {
      flags.yes = true;
    } else if (arg === "--dry-run" || arg === "-d") {
      flags.dryRun = true;
    } else if (arg === "--all" || arg === "-a") {
      flags.all = true;
    } else if (arg === "--defaults") {
      flags.defaults = true;
    } else if (arg === "--cwd") {
      i++;
      if (i < args.length) {
        flags.cwd = args[i];
      }
    } else if (arg.startsWith("--cwd=")) {
      flags.cwd = arg.slice("--cwd=".length);
    } else if (arg && !arg.startsWith("-") && command === null) {
      command = arg;
    } else if (arg && !arg.startsWith("-")) {
      positional.push(arg);
    } else {
      log.warn(`Unknown flag: ${arg}`);
    }
    i++;
  }
  return { command, positional, flags };
}
function printHelp() {
  log.banner();
  console.log(`
Usage:
  journal init                          Create journal.json + theme
  journal add <slug> [<slug> ...]       Add components to your project
  journal add --all                     Add every component
  journal list                          List available components
  journal --help                        Show this help
  journal --version                     Show CLI version

Flags:
  -o, --overwrite                       Overwrite existing files
  -y, --yes                             Skip confirmation prompts
  -d, --dry-run                         Don't write files, just print what would happen
      --cwd <path>                      Run in a different directory
      --defaults                        Use default config (skip init prompts)

Examples:
  npx @journal-ds/cli init
  npx @journal-ds/cli add button
  npx @journal-ds/cli add button card dialog input label
  npx @journal-ds/cli add --all --yes
  npx @journal-ds/cli list
`);
}
async function main() {
  const { command, positional, flags } = parseArgs(process.argv);
  if (!command) {
    printHelp();
    process.exit(0);
  }
  try {
    switch (command) {
      case "init":
        await initCommand({
          cwd: flags.cwd,
          yes: flags.yes,
          defaults: flags.defaults
        });
        break;
      case "add":
        await addCommand({
          cwd: flags.cwd,
          slugs: positional,
          all: flags.all,
          overwrite: flags.overwrite,
          yes: flags.yes,
          dryRun: flags.dryRun
        });
        break;
      case "list":
        listCommand();
        break;
      case "help":
        printHelp();
        break;
      default:
        log.error(`Unknown command: ${command}`);
        console.log();
        printHelp();
        process.exit(1);
    }
  } catch (err) {
    log.error(err.message);
    console.log();
    process.exit(1);
  }
}
main();
