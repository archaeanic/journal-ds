/**
 * Tiny logger — no external deps. Uses ANSI escape codes for color.
 * Colors are tuned to match the Journal palette (burgundy, forest, gold, sepia).
 */

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
  // Journal-inspired
  burgundy: "\x1b[38;5;88m",
  forest: "\x1b[38;5;22m",
  gold: "\x1b[38;5;136m",
  sepia: "\x1b[38;5;95m",
}

function paint(color: keyof typeof COLORS, text: string): string {
  return `${COLORS[color]}${text}${COLORS.reset}`
}

export const log = {
  info(msg: string) {
    console.log(msg)
  },

  step(msg: string) {
    console.log(paint("cyan", "◆"), msg)
  },

  success(msg: string) {
    console.log(paint("forest", "✓"), paint("forest", msg))
  },

  warn(msg: string) {
    console.log(paint("gold", "⚠"), paint("gold", msg))
  },

  error(msg: string) {
    console.error(paint("red", "✗"), paint("red", msg))
  },

  created(path: string) {
    console.log(paint("forest", "  ✓ Created"), paint("gray", path))
  },

  updated(path: string) {
    console.log(paint("gold", "  ↻ Updated"), paint("gray", path))
  },

  skipped(path: string, reason: string) {
    console.log(paint("sepia", "  → Skipped"), paint("gray", `${path} (${reason})`))
  },

  dryRun(path: string) {
    console.log(paint("sepia", "  → Would create"), paint("gray", path))
  },

  banner() {
    const line = "─".repeat(52)
    console.log()
    console.log(paint("burgundy", line))
    console.log(
      paint("burgundy", "  Journal Design System"),
      paint("sepia", "· CLI v1.0.0")
    )
    console.log(paint("burgundy", line))
    console.log()
  },

  group(title: string) {
    console.log()
    console.log(paint("bold", title))
  },

  dim(msg: string) {
    console.log(paint("gray", msg))
  },
}
