#!/usr/bin/env bash
# Replace all Lumen UI references with Journal Design System across the project.

set -e

DOCS_DIR="/home/z/my-project/src"
PKG_DIR="/home/z/my-project/package"

FILES=(
  "$DOCS_DIR/app/globals.css"
  "$DOCS_DIR/app/layout.tsx"
  "$DOCS_DIR/app/page.tsx"
  "$DOCS_DIR/lib/router.tsx"
  "$DOCS_DIR/lib/registry.ts"
  "$DOCS_DIR/components/docs/code-block.tsx"
  "$DOCS_DIR/components/docs/component-preview.tsx"
  "$DOCS_DIR/components/docs/doc-page.tsx"
  "$DOCS_DIR/components/docs/docs-app.tsx"
  "$DOCS_DIR/components/docs/prop-table.tsx"
  "$DOCS_DIR/components/docs/sidebar.tsx"
  "$DOCS_DIR/components/docs/site-header.tsx"
  "$DOCS_DIR/components/docs/theme-provider.tsx"
  "$DOCS_DIR/components/docs/theme-toggle.tsx"
  "$DOCS_DIR/components/pages/_component-doc-template.tsx"
  "$DOCS_DIR/components/pages/button.tsx"
  "$DOCS_DIR/components/pages/changelog.tsx"
  "$DOCS_DIR/components/pages/cli.tsx"
  "$DOCS_DIR/components/pages/dark-mode.tsx"
  "$DOCS_DIR/components/pages/display.tsx"
  "$DOCS_DIR/components/pages/feedback.tsx"
  "$DOCS_DIR/components/pages/figma.tsx"
  "$DOCS_DIR/components/pages/forms.tsx"
  "$DOCS_DIR/components/pages/home.tsx"
  "$DOCS_DIR/components/pages/installation.tsx"
  "$DOCS_DIR/components/pages/introduction.tsx"
  "$DOCS_DIR/components/pages/layout.tsx"
  "$DOCS_DIR/components/pages/navigation.tsx"
  "$DOCS_DIR/components/pages/overlays.tsx"
  "$DOCS_DIR/components/pages/theming.tsx"
  "$DOCS_DIR/components/pages/typography.tsx"
  "$PKG_DIR/LICENSE"
  "$PKG_DIR/README.md"
  "$PKG_DIR/package.json"
  "$PKG_DIR/src/index.ts"
  "$PKG_DIR/src/styles/globals.css"
)

for f in "${FILES[@]}"; do
  if [[ -f "$f" ]]; then
    perl -i -pe '
      s/\@lumen-ui\/react/\@journal-ds\/react/g;
      s/\@lumen-ui\/cli/\@journal-ds\/cli/g;
      s/\@lumen-ui\/registry/\@journal-ds\/registry/g;
      s/\@lumen-ui/\@journal-ds/g;
      s/lumen-ui\.dev/journal-ds.dev/g;
      s/figma\.com\/lumen-ui/figma.com\/journal-ds/g;
      s/github\.com\/lumen-ui/github.com\/journal-ds/g;
      s/lumen\.json/journal.json/g;
      s/lumen-scroll/journal-scroll/g;
      s/Hello, Lumen!/Hello, Journal!/g;
      s/Lumen UI/Journal DS/g;
      s/Lumen/Journal/g;
    ' "$f"
    echo "patched: $f"
  fi
done

echo ""
echo "Verifying no stragglers remain..."
grep -rn -i "lumen" "$DOCS_DIR" "$PKG_DIR" 2>/dev/null && echo "↑ stragglers above" || echo "OK: no Lumen references remain."
