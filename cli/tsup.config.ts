import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "es2022",
  platform: "node",
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  // Don't bundle the registry files — they're shipped as plain .tsx and read at runtime.
  external: [],
  // Add a shebang so the output is directly executable via `npx`.
  banner: {
    js: "#!/usr/bin/env node",
  },
})
