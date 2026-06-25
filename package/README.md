# Journal Design System

A warm, editorial journal-style component library for Tailwind CSS. Built on Radix UI primitives with Playfair Display + Lora typography. Open source. Copy and paste into your apps.

## Installation

### 1. Install the package

```bash
npm install @journal-ds/react
# or
pnpm add @journal-ds/react
# or
yarn add @journal-ds/react
# or
bun add @journal-ds/react
```

### 2. Import the styles

Add the Journal theme to your global CSS file:

```css
@import "@journal-ds/react/styles";
```

Or copy the [theme variables](https://journal-ds.dev/docs/theming) into your own CSS file.

### 3. Load the fonts

Journal uses three Google Fonts — Lora (body), Playfair Display (headings), and JetBrains Mono (code):

```tsx
import { Lora, Playfair_Display, JetBrains_Mono } from "next/font/google"

const lora = Lora({ variable: "--font-lora", subsets: ["latin"] })
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] })
const mono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
```

### 4. Configure `tailwind.config`

```ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@journal-ds/react/dist/**/*.{js,ts}",
  ],
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

## Usage

```tsx
import { Button } from "@journal-ds/react"

export default function Entry() {
  return <Button>New Entry</Button>
}
```

## CLI

Use the Journal CLI to add components to your project:

```bash
npx @journal-ds/cli add button
```

This will copy the component source code directly into your `components/ui` folder, giving you full ownership of the code.

## Features

- **Editorial Typography** — Playfair Display for headings, Lora for body text. Drop caps and pull quotes baked in.
- **Warm Palette** — Cream paper, deep ink, burgundy accents, sepia tones, gold highlights.
- **Paper Textures** — Built-in CSS utilities for lined paper, margin rules, vignettes, spiral-bound notebooks.
- **Accessible** — Built on Radix UI. Every component follows WAI-ARIA patterns.
- **Themeable** — CSS variables for all colors, radii, and typography.
- **Open Source** — MIT licensed. Use it however you like.

## Documentation

Visit [https://journal-ds.dev](https://journal-ds.dev) to view the full documentation.

## License

MIT © [Journal Design System](https://journal-ds.dev)
