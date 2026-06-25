# @journal-ds/cli

Command-line tool for adding [Journal Design System](https://journal-ds.dev) components to your project.

## Quick start

```bash
# Initialize the config (creates journal.json + theme)
npx @journal-ds/cli init

# Add a single component
npx @journal-ds/cli add button

# Add multiple components
npx @journal-ds/cli add button card dialog input label

# Add every component
npx @journal-ds/cli add --all

# List available components
npx @journal-ds/cli list
```

## Commands

### `init`

Creates a `journal.json` config file in your project root, appends the Journal theme CSS to your global stylesheet, and creates the `cn()` utility if it doesn't exist.

```bash
npx @journal-ds/cli init
```

Flags:
- `--defaults` — use default config without prompts
- `--yes` — skip confirmation prompts
- `--cwd <path>` — run in a different directory

### `add <slug> [<slug> ...]`

Copies one or more components into your project. Automatically resolves and installs transitive dependencies (e.g., `sidebar` pulls in `button`, `separator`, `sheet`, `tooltip`, etc.).

```bash
npx @journal-ds/cli add button
npx @journal-ds/cli add button card dialog
npx @journal-ds/cli add --all
```

Flags:
- `-o, --overwrite` — overwrite existing files
- `-y, --yes` — skip confirmation prompts
- `-d, --dry-run` — print what would happen without writing files
- `-a, --all` — install every component
- `--cwd <path>` — run in a different directory

### `list`

Prints all available components, grouped by category.

```bash
npx @journal-ds/cli list
```

## How it works

The CLI ships with a `registry/` folder containing the source code of every component as plain `.tsx` files. When you run `add`, the CLI:

1. Reads your `journal.json` to learn your path aliases (e.g. `@/components/ui`, `@/lib/utils`)
2. Resolves the transitive dependency tree for the requested component(s)
3. Transforms import paths in the source to match your aliases
4. Writes each file to the correct location (`components/ui/`, `lib/`, or `hooks/`)
5. Prints the npm packages you need to install (it does **not** auto-install to avoid modifying your lockfile)

The result: you own the source code. No runtime dependency on `@journal-ds/react`. You can customize every line.

## journal.json

```json
{
  "$schema": "https://journal-ds.dev/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## License

MIT © [Journal Design System](https://journal-ds.dev)
