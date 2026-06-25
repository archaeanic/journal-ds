/**
 * Minimal interactive prompts — no external deps.
 * Uses Node's readline module. Each prompt returns a string.
 */

import * as readline from "node:readline/promises"
import { stdin, stdout } from "node:process"

let rl: readline.Interface | null = null

function getRL(): readline.Interface {
  if (!rl) {
    rl = readline.createInterface({
      input: stdin,
      output: stdout,
      terminal: true,
    })
  }
  return rl
}

export async function ask(question: string, defaultValue?: string): Promise<string> {
  const rl = getRL()
  const suffix = defaultValue ? ` (${defaultValue})` : ""
  const answer = await rl.question(`${question}${suffix}: `)
  const trimmed = answer.trim()
  return trimmed || defaultValue || ""
}

export async function askSelect(
  question: string,
  options: string[],
  defaultValue?: string
): Promise<string> {
  const rl = getRL()
  console.log(question)
  options.forEach((opt, i) => {
    const marker = opt === defaultValue ? " ← default" : ""
    console.log(`  ${i + 1}) ${opt}${marker}`)
  })
  const defaultIndex = defaultValue ? options.indexOf(defaultValue) + 1 : undefined
  const suffix = defaultIndex ? ` (${defaultIndex})` : ""
  const answer = await rl.question(`Choice${suffix}: `)
  const trimmed = answer.trim()
  if (!trimmed && defaultIndex) return defaultValue!
  const idx = parseInt(trimmed, 10)
  if (isNaN(idx) || idx < 1 || idx > options.length) {
    console.log("  Invalid choice, using default.")
    return defaultValue || options[0]
  }
  return options[idx - 1]
}

export async function askConfirm(
  question: string,
  defaultValue: boolean = false
): Promise<boolean> {
  const rl = getRL()
  const hint = defaultValue ? "Y/n" : "y/N"
  const answer = await rl.question(`${question} [${hint}]: `)
  const trimmed = answer.trim().toLowerCase()
  if (!trimmed) return defaultValue
  return trimmed === "y" || trimmed === "yes"
}

export function closePrompts(): void {
  if (rl) {
    rl.close()
    rl = null
  }
}
