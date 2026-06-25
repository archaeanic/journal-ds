/**
 * Transform import paths in component source code.
 *
 * The registry files use generic aliases:
 *   @/lib/utils        → user's utils alias
 *   @/components/ui/*   → user's ui alias
 *   @/hooks/*           → user's hooks alias
 *
 * This module rewrites those to match the user's journal.json config.
 */

import type { JournalConfig } from "./config.js"

/**
 * Rewrite import paths in the given source code to match the user's config.
 *
 * Also converts relative imports (../lib/utils, ./label) to alias imports
 * using the user's aliases. This makes the output cleaner and avoids
 * path issues when the user's directory structure differs from ours.
 */
export function transformSource(source: string, config: JournalConfig): string {
  const { aliases } = config

  let out = source

  // ── Rewrite alias imports ──
  // @/lib/utils → <utils alias>
  out = out.replace(
    /from\s+["']@\/lib\/utils["']/g,
    `from "${aliases.utils}"`
  )

  // @/components/ui/<name> → <ui alias>/<name>
  out = out.replace(
    /from\s+["']@\/components\/ui\/([^"']+)["']/g,
    (_, name) => `from "${aliases.ui}/${name}"`
  )

  // @/hooks/<name> → <hooks alias>/<name>
  out = out.replace(
    /from\s+["']@\/hooks\/([^"']+)["']/g,
    (_, name) => `from "${aliases.hooks}/${name}"`
  )

  // @/components/<name> → <components alias>/<name>
  out = out.replace(
    /from\s+["']@\/components\/([^"']+)["']/g,
    (_, name) => `from "${aliases.components}/${name}"`
  )

  // @/lib/<name> → <lib alias>/<name>
  out = out.replace(
    /from\s+["']@\/lib\/([^"']+)["']/g,
    (_, name) => `from "${aliases.lib}/${name}"`
  )

  // ── Rewrite relative imports ──
  // ../lib/utils → <utils alias>
  out = out.replace(
    /from\s+["']\.\.\/lib\/utils["']/g,
    `from "${aliases.utils}"`
  )

  // ./<name> (within ui/) → <ui alias>/<name>
  // Only do this for relative imports that don't go up a level.
  out = out.replace(
    /from\s+["']\.\/([^"']+)["']/g,
    (_, name) => {
      // Don't rewrite if it looks like a file extension (e.g. "./styles.css")
      if (name.includes(".")) return `from "./${name}"`
      return `from "${aliases.ui}/${name}"`
    }
  )

  // ../hooks/<name> → <hooks alias>/<name>
  out = out.replace(
    /from\s+["']\.\.\/hooks\/([^"']+)["']/g,
    (_, name) => `from "${aliases.hooks}/${name}"`
  )

  // ../components/ui/<name> → <ui alias>/<name>
  out = out.replace(
    /from\s+["']\.\.\/components\/ui\/([^"']+)["']/g,
    (_, name) => `from "${aliases.ui}/${name}"`
  )

  // ../components/<name> → <components alias>/<name>
  out = out.replace(
    /from\s+["']\.\.\/components\/([^"']+)["']/g,
    (_, name) => `from "${aliases.components}/${name}"`
  )

  return out
}
