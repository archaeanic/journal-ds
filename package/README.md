# Lumen UI

Beautifully designed components that you can copy and paste into your apps. Built with Radix UI, Tailwind CSS, and TypeScript. Open source. Fully accessible.

## Installation

### 1. Install the package

```bash
npm install @lumen-ui/react
# or
pnpm add @lumen-ui/react
# or
yarn add @lumen-ui/react
# or
bun add @lumen-ui/react
```

### 2. Configure your project

Add the Lumen UI CSS variables to your global CSS file:

```css
@import "@lumen-ui/react/styles";
```

Or copy the [theme variables](https://lumen-ui.dev/theming) into your own CSS file.

### 3. Configure `tailwind.config`

```ts
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@lumen-ui/react/dist/**/*.{js,ts}",
  ],
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

## Usage

```tsx
import { Button } from "@lumen-ui/react"

export default function Example() {
  return <Button>Click me</Button>
}
```

## CLI

Use the Lumen UI CLI to add components to your project:

```bash
npx @lumen-ui/cli add button
```

This will copy the component source code directly into your `components/ui` folder, giving you full ownership of the code.

## Features

- **Accessible** — Built on top of Radix UI primitives.
- **Themeable** — CSS variables for colors, radii, and spacing.
- **Composable** — Built with a constrained design system using `cva`.
- **Open Source** — MIT licensed. Use it however you like.
- **Copy & Paste** — Own the code. No vendor lock-in.

## Documentation

Visit [https://lumen-ui.dev](https://lumen-ui.dev) to view the full documentation.

## License

MIT © [Lumen UI](https://lumen-ui.dev)
