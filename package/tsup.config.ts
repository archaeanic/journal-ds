import { defineConfig } from "tsup"
export default defineConfig({
  entry: [
    "src/index.ts",
    "src/lib/utils.ts",
    "src/styles/globals.css",
    "src/components/**/*.ts",  // Automatically catches hooks or utility files inside components
    "src/components/**/*.tsx"  // Automatically catches your actual React components
  ],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom", "react/jsx-runtime"], 
})