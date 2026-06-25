/**
 * `journal list` — print all available components.
 */

import { registry } from "../lib/registry.js"
import { log } from "../lib/log.js"

export function listCommand(): void {
  log.banner()

  const byCategory: Record<string, string[]> = {}
  for (const [slug, entry] of Object.entries(registry)) {
    if (!byCategory[entry.category]) byCategory[entry.category] = []
    byCategory[entry.category].push(slug)
  }

  const categoryOrder = [
    "forms",
    "layout",
    "display",
    "overlays",
    "navigation",
    "feedback",
    "hooks",
    "utilities",
  ]

  for (const cat of categoryOrder) {
    const slugs = byCategory[cat]
    if (!slugs || slugs.length === 0) continue
    log.group(`${cat} (${slugs.length})`)
    console.log(`  ${slugs.sort().join(",  ")}`)
    console.log()
  }

  log.dim(`Total: ${Object.keys(registry).length} components.`)
  console.log()
  log.dim("Install with: npx @journal-ds/cli add <slug>")
}
