/**
 * journal.json config schema + read/write helpers.
 *
 * This file is what `journal init` creates and what `journal add` reads.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"

export type JournalConfig = {
  $schema?: string
  style: "default" | "new-york"
  rsc: boolean
  tsx: boolean
  tailwind: {
    config: string
    css: string
    baseColor: "neutral" | "gray" | "slate" | "stone" | "zinc"
    cssVariables: boolean
  }
  aliases: {
    components: string
    utils: string
    ui: string
    lib: string
    hooks: string
  }
  iconLibrary: "lucide" | "radix"
}

export const DEFAULT_CONFIG: JournalConfig = {
  $schema: "https://journal-ds.dev/schema.json",
  style: "default",
  rsc: true,
  tsx: true,
  tailwind: {
    config: "tailwind.config.ts",
    css: "src/app/globals.css",
    baseColor: "neutral",
    cssVariables: true,
  },
  aliases: {
    components: "@/components",
    utils: "@/lib/utils",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks",
  },
  iconLibrary: "lucide",
}

/**
 * Path to journal.json, relative to cwd.
 */
export function configPath(cwd: string = process.cwd()): string {
  return resolve(cwd, "journal.json")
}

/**
 * Read journal.json. Throws if it doesn't exist.
 */
export function readConfig(cwd: string = process.cwd()): JournalConfig {
  const path = configPath(cwd)
  if (!existsSync(path)) {
    throw new ConfigError(
      `journal.json not found at ${path}.\n` +
        `Run \`npx @journal-ds/cli init\` first to create one.`
    )
  }
  const raw = readFileSync(path, "utf8")
  try {
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) } as JournalConfig
  } catch {
    throw new ConfigError(`Failed to parse journal.json at ${path}.`)
  }
}

/**
 * Write journal.json.
 */
export function writeConfig(config: JournalConfig, cwd: string = process.cwd()): void {
  const path = configPath(cwd)
  const json = JSON.stringify(config, null, 2) + "\n"
  writeFileSync(path, json, "utf8")
}

/**
 * Check if journal.json exists.
 */
export function hasConfig(cwd: string = process.cwd()): boolean {
  return existsSync(configPath(cwd))
}

export class ConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ConfigError"
  }
}
