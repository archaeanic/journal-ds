/**
 * `journal add <slug>` — copy a component's source into the user's project.
 *
 * Resolves the transitive dependency tree, transforms import paths,
 * and writes each file to the target directory.
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"

import { readConfig } from "../lib/config.js"
import {
  registry,
  resolveTree,
  targetDir,
  readRegistrySource,
  type RegistryEntry,
} from "../lib/registry.js"
import { transformSource } from "../lib/transform.js"
import { log } from "../lib/log.js"
import { askConfirm, closePrompts } from "../lib/prompts.js"

export async function addCommand(opts: {
  cwd: string
  slugs: string[]
  all: boolean
  overwrite: boolean
  yes: boolean
  dryRun: boolean
}): Promise<void> {
  const { cwd, all, overwrite, yes, dryRun } = opts
  let slugs = opts.slugs

  log.banner()

  // ── Read config ──
  let config
  try {
    config = readConfig(cwd)
  } catch (err) {
    log.error((err as Error).message)
    process.exit(1)
  }

  // ── Resolve slugs ──
  if (all) {
    slugs = Object.keys(registry).filter(
      (s) => s !== "utils" && !s.startsWith("use-")
    )
    log.info(`Installing all ${slugs.length} components.`)
  } else if (slugs.length === 0) {
    log.error("No components specified. Usage: journal add <slug> [<slug> ...]")
    log.dim("  Or use --all to install everything.")
    process.exit(1)
  }

  // ── Validate slugs ──
  const invalid = slugs.filter((s) => !registry[s])
  if (invalid.length > 0) {
    log.error(`Unknown component${invalid.length > 1 ? "s" : ""}: ${invalid.join(", ")}`)
    log.dim("  Run `journal list` to see available components.")
    process.exit(1)
  }

  // ── Resolve transitive deps ──
  const tree = resolveTree(slugs)
  log.group(`Resolving dependencies for ${slugs.length} component${slugs.length > 1 ? "s" : ""}...`)
  console.log()
  log.dim(`  Will install ${tree.length} file${tree.length > 1 ? "s" : ""}: ${tree.join(", ")}`)
  console.log()

  // ── Check for existing files ──
  const existingFiles: string[] = []
  for (const slug of tree) {
    const entry = registry[slug]
    const targetPath = resolveTargetPath(entry, config, cwd)
    if (existsSync(targetPath)) {
      existingFiles.push(targetPath)
    }
  }

  if (existingFiles.length > 0 && !overwrite) {
    if (!yes) {
      const doOverwrite = await askConfirm(
        `\n${existingFiles.length} file(s) already exist. Overwrite?`,
        false
      )
      if (!doOverwrite) {
        log.warn("Aborted. No files were changed.")
        closePrompts()
        return
      }
    } else {
      log.warn(`${existingFiles.length} file(s) already exist. Use --overwrite to replace.`)
      log.warn("Skipping existing files.")
    }
  }

  // ── Install ──
  log.group(dryRun ? "Dry run — no files will be written." : "Installing...")
  console.log()

  const installed: string[] = []
  const skipped: string[] = []

  for (const slug of tree) {
    const entry = registry[slug]
    const targetPath = resolveTargetPath(entry, config, cwd)

    const fileExists = existsSync(targetPath)
    if (fileExists && !overwrite) {
      log.skipped(targetPath, "already exists")
      skipped.push(slug)
      continue
    }

    if (dryRun) {
      log.dryRun(targetPath)
      continue
    }

    // Ensure the directory exists.
    mkdirSync(dirname(targetPath), { recursive: true })

    // Read + transform + write.
    const raw = readRegistrySource(entry.file)
    const transformed = transformSource(raw, config)
    writeFileSync(targetPath, transformed, "utf8")

    if (fileExists) {
      log.updated(targetPath)
    } else {
      log.created(targetPath)
    }
    installed.push(slug)
  }

  // ── Collect npm deps ──
  const allNpmDeps = new Set<string>()
  for (const slug of tree) {
    for (const dep of registry[slug].npmDeps) {
      allNpmDeps.add(dep)
    }
  }

  // ── Summary ──
  console.log()
  if (dryRun) {
    log.info(`Dry run complete. ${tree.length} file(s) would be written.`)
  } else {
    log.success(
      `Installed ${installed.length} file${installed.length !== 1 ? "s" : ""}.` +
        (skipped.length > 0 ? ` (${skipped.length} skipped)` : "")
    )
  }

  if (allNpmDeps.size > 0) {
    console.log()
    log.group("npm dependencies you may need to install:")
    console.log()
    const depList = Array.from(allNpmDeps).sort().join(" ")
    console.log(`  npm install ${depList}`)
    console.log(`  pnpm add ${depList}`)
    console.log(`  yarn add ${depList}`)
    console.log(`  bun add ${depList}`)
    console.log()
    log.dim("  (The CLI doesn't auto-install these to avoid modifying your lockfile.)")
  }

  console.log()
}

/**
 * Resolve the target file path for a registry entry.
 * Components go to <ui alias>, utils go to <lib alias>, hooks go to <hooks alias>.
 */
function resolveTargetPath(
  entry: RegistryEntry,
  config: JournalConfig,
  cwd: string
): string {
  const dir = targetDir(entry.slug)
  let alias: string
  let filename: string

  switch (dir) {
    case "lib":
      alias = config.aliases.lib
      filename = "utils.ts"
      break
    case "hooks":
      alias = config.aliases.hooks
      // use-toast.ts → use-toast.ts (already has .ts extension)
      filename = entry.file
      break
    case "ui":
    default:
      alias = config.aliases.ui
      // button.tsx, input.tsx, etc.
      filename = entry.file
      break
  }

  // Convert alias like "@/components/ui" to a filesystem path.
  // We assume @/ maps to src/ — the standard Next.js convention.
  const fsBase = aliasToFs(alias, cwd)
  return resolve(fsBase, filename)
}

/**
 * Convert an import alias like "@/components/ui" to a filesystem path.
 * Assumes "@/" → "src/" (Next.js convention).
 */
function aliasToFs(alias: string, cwd: string): string {
  const stripped = alias.replace(/^@\//, "").replace(/^@\//, "")
  return resolve(cwd, "src", stripped)
}
