/**
 * `journal init` — create journal.json and optionally update CSS + tailwind config.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { DEFAULT_CONFIG, writeConfig, type JournalConfig } from "../lib/config.js"
import { ask, askSelect, askConfirm, closePrompts } from "../lib/prompts.js"
import { log } from "../lib/log.js"

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Locate the templates directory (shipped with the package at the root).
 * In production (running from dist/index.js), templates is a sibling of dist.
 * In dev (running from src/), templates is a sibling of src.
 */
function templatesDir(): string {
  if (__dirname.endsWith("dist")) {
    return resolve(__dirname, "..", "templates")
  }
  return resolve(__dirname, "..", "..", "templates")
}

function readTemplate(name: string): string {
  return readFileSync(resolve(templatesDir(), name), "utf8")
}

export async function initCommand(opts: {
  cwd: string
  yes: boolean
  defaults: boolean
}): Promise<void> {
  const { cwd, yes } = opts

  log.banner()

  const configPath = resolve(cwd, "journal.json")
  if (existsSync(configPath)) {
    if (!yes) {
      const overwrite = await askConfirm(
        "journal.json already exists. Overwrite?",
        false
      )
      if (!overwrite) {
        log.warn("Aborted. Keeping existing journal.json.")
        closePrompts()
        return
      }
    }
  }

  // ── Gather config ──
  let config: JournalConfig = { ...DEFAULT_CONFIG }

  if (!opts.defaults && !yes) {
    log.group("Let's configure your project.")
    console.log()

    config.style = await askSelect(
      "Which style would you like to use?",
      ["default", "new-york"],
      "default"
    )

    config.tailwind.baseColor = await askSelect(
      "Which color would you like to use as the base color?",
      ["neutral", "gray", "slate", "stone", "zinc"],
      "neutral"
    )

    const cssPath = await ask(
      "Where is your global CSS file?",
      config.tailwind.css
    )
    config.tailwind.css = cssPath

    const tailwindConfigPath = await ask(
      "Where is your tailwind.config?",
      config.tailwind.config
    )
    config.tailwind.config = tailwindConfigPath

    config.aliases.components = await ask(
      "Configure the import alias for components:",
      config.aliases.components
    )
    config.aliases.utils = await ask(
      "Configure the import alias for utils:",
      config.aliases.utils
    )
    config.aliases.ui = await ask(
      "Configure the import alias for ui:",
      config.aliases.ui
    )
    config.aliases.hooks = await ask(
      "Configure the import alias for hooks:",
      config.aliases.hooks
    )

    config.iconLibrary = await askSelect(
      "Which icon library would you like to use?",
      ["lucide", "radix"],
      "lucide"
    ) as "lucide" | "radix"

    const isRSC = await askConfirm(
      "Are you using React Server Components?",
      true
    )
    config.rsc = isRSC

    closePrompts()
  }

  // ── Write journal.json ──
  log.group("Writing configuration...")
  writeConfig(config, cwd)
  log.created(configPath)

  // ── Optionally update globals.css ──
  const cssAbs = resolve(cwd, config.tailwind.css)
  if (existsSync(cssAbs)) {
    const existing = readFileSync(cssAbs, "utf8")
    const hasJournalVars = existing.includes("--journal-paper")
    if (hasJournalVars) {
      log.skipped(cssAbs, "already has Journal theme")
    } else if (!opts.defaults && !yes) {
      // Already asked above; just do it.
      appendJournalTheme(cssAbs, existing)
      log.updated(cssAbs)
    } else {
      // In --yes mode, append automatically.
      appendJournalTheme(cssAbs, existing)
      log.updated(cssAbs)
    }
  } else {
    // Create the CSS file if it doesn't exist.
    mkdirSync(dirname(cssAbs), { recursive: true })
    writeFileSync(cssAbs, readTemplate("globals.css"), "utf8")
    log.created(cssAbs)
  }

  // ── Optionally create the cn() utility ──
  const utilsAbs = resolve(cwd, "src/lib/utils.ts")
  const utilsAliasBase = config.aliases.utils.replace(/\/utils$/, "")
  const utilsAbsFromAlias = resolve(cwd, utilsAliasBase.replace(/^@\/?/, "src/"), "utils.ts")
  const utilsTarget = existsSync(utilsAbsFromAlias) ? utilsAbsFromAlias : utilsAbs

  if (existsSync(utilsTarget)) {
    log.skipped(utilsTarget, "already exists")
  } else {
    mkdirSync(dirname(utilsTarget), { recursive: true })
    writeFileSync(utilsTarget, readTemplate("utils.ts"), "utf8")
    log.created(utilsTarget)
  }

  // ── Done ──
  log.group("Done!")
  console.log()
  log.success("Journal Design System is configured.")
  console.log()
  log.dim("Next steps:")
  console.log('  Add a component:  npx @journal-ds/cli add button')
  console.log('  Add multiple:     npx @journal-ds/cli add button card dialog')
  console.log('  Add everything:   npx @journal-ds/cli add --all')
  console.log()
}

/**
 * Append the Journal theme CSS to an existing globals.css.
 * If the file already imports tailwindcss, we insert the Journal
 * variables after that import. Otherwise, we prepend the tailwind import
 * and then add the Journal variables.
 */
function appendJournalTheme(path: string, existing: string): void {
  const journalCss = readTemplate("globals.css")

  // If the existing file already imports tailwindcss, we just append
  // the Journal variables at the end. Otherwise, we prepend the import.
  const hasTailwindImport =
    existing.includes('@import "tailwindcss"') ||
    existing.includes("@import 'tailwindcss'")

  let merged: string
  if (hasTailwindImport) {
    // Strip the @import lines from the Journal template (the user already has them).
    const journalStripped = journalCss
      .replace(/@import\s+["']tailwindcss["'];?\n?/g, "")
      .replace(/@import\s+["']tw-animate-css["'];?\n?/g, "")
    merged = existing.trimEnd() + "\n\n" + journalStripped
  } else {
    merged = journalCss + "\n\n" + existing
  }

  writeFileSync(path, merged, "utf8")
}
