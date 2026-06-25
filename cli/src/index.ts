/**
 * Journal Design System — CLI
 *
 * Usage:
 *   journal init                          Create journal.json + theme
 *   journal add <slug> [<slug> ...]       Add components
 *   journal add --all                     Add all components
 *   journal list                          List available components
 *   journal --help                        Show help
 *   journal --version                     Show version
 *
 * Flags:
 *   -o, --overwrite                       Overwrite existing files
 *   -y, --yes                             Skip confirmation prompts
 *   -d, --dry-run                         Don't write files, just print
 *       --cwd <path>                      Run in a different directory
 *       --defaults                        Use default config (skip prompts)
 */

import { initCommand } from "./commands/init.js"
import { addCommand } from "./commands/add.js"
import { listCommand } from "./commands/list.js"
import { log } from "./lib/log.js"

type ParsedArgs = {
  command: string | null
  positional: string[]
  flags: {
    overwrite: boolean
    yes: boolean
    dryRun: boolean
    all: boolean
    defaults: boolean
    cwd: string
  }
}

const VERSION = "1.0.0"

function parseArgs(argv: string[]): ParsedArgs {
  const args = argv.slice(2) // strip "node" and script path
  const positional: string[] = []
  let command: string | null = null
  const flags = {
    overwrite: false,
    yes: false,
    dryRun: false,
    all: false,
    defaults: false,
    cwd: process.cwd(),
  }

  let i = 0
  while (i < args.length) {
    const arg = args[i]

    if (arg === "--help" || arg === "-h") {
      printHelp()
      process.exit(0)
    } else if (arg === "--version" || arg === "-v") {
      console.log(VERSION)
      process.exit(0)
    } else if (arg === "--overwrite" || arg === "-o") {
      flags.overwrite = true
    } else if (arg === "--yes" || arg === "-y") {
      flags.yes = true
    } else if (arg === "--dry-run" || arg === "-d") {
      flags.dryRun = true
    } else if (arg === "--all" || arg === "-a") {
      flags.all = true
    } else if (arg === "--defaults") {
      flags.defaults = true
    } else if (arg === "--cwd") {
      i++
      if (i < args.length) {
        flags.cwd = args[i]
      }
    } else if (arg.startsWith("--cwd=")) {
      flags.cwd = arg.slice("--cwd=".length)
    } else if (arg && !arg.startsWith("-") && command === null) {
      command = arg
    } else if (arg && !arg.startsWith("-")) {
      positional.push(arg)
    } else {
      log.warn(`Unknown flag: ${arg}`)
    }
    i++
  }

  return { command, positional, flags }
}

function printHelp(): void {
  log.banner()
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
`)
}

async function main(): Promise<void> {
  const { command, positional, flags } = parseArgs(process.argv)

  if (!command) {
    printHelp()
    process.exit(0)
  }

  try {
    switch (command) {
      case "init":
        await initCommand({
          cwd: flags.cwd,
          yes: flags.yes,
          defaults: flags.defaults,
        })
        break

      case "add":
        await addCommand({
          cwd: flags.cwd,
          slugs: positional,
          all: flags.all,
          overwrite: flags.overwrite,
          yes: flags.yes,
          dryRun: flags.dryRun,
        })
        break

      case "list":
        listCommand()
        break

      case "help":
        printHelp()
        break

      default:
        log.error(`Unknown command: ${command}`)
        console.log()
        printHelp()
        process.exit(1)
    }
  } catch (err) {
    log.error((err as Error).message)
    console.log()
    process.exit(1)
  }
}

main()
