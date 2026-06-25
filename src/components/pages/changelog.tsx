"use client"

import { DocPage, DocSection, P, InlineCode, Callout } from "@/components/docs/doc-page"
import { CodeBlock } from "@/components/docs/code-block"
import { Badge } from "@/components/ui/badge"

const versions = [
  {
    version: "1.0.0",
    date: "2026-06-25",
    changes: [
      "Initial public release.",
      "Added 45+ components across 7 categories: Forms, Layout, Display, Overlays, Navigation, Feedback, and Sidebar.",
      "Added the @journal-ds/cli for adding components to projects.",
      "Added dark mode support via next-themes.",
      "Added full TypeScript types and JSDoc comments for every component.",
    ],
  },
  {
    version: "0.9.0",
    date: "2026-05-01",
    changes: [
      "Beta release. Added Sidebar component with new collapsible mode.",
      "Improved accessibility for Dialog, Sheet, and AlertDialog.",
      "Added Sonner as the recommended toast library.",
    ],
  },
  {
    version: "0.8.0",
    date: "2026-03-15",
    changes: [
      "Added Chart component with built-in chart container and tooltip.",
      "Added Carousel component with embla-carousel-react.",
      "Renamed the project from 'Aurora UI' to 'Journal DS'.",
    ],
  },
]

export function ChangelogPage() {
  return (
    <DocPage
      title="Changelog"
      description="All notable changes to Journal DS are documented on this page."
    >
      <P>
        Journal DS follows <a href="https://semver.org/" target="_blank" rel="noopener noreferrer" className="underline">Semantic Versioning</a>.
        Each release ships with a new minor version for backwards-compatible
        features, and a new patch version for backwards-compatible bug fixes.
      </P>

      <Callout type="tip" title="Subscribe">
        Watch the{" "}
        <a
          href="https://github.com/journal-ds/react/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub releases
        </a>{" "}
        page to get notified when a new version is published.
      </Callout>

      {versions.map((v) => (
        <DocSection key={v.version} title={`${v.version}`}>
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="secondary">{v.date}</Badge>
            {v.version === "1.0.0" && (
              <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                Latest
              </Badge>
            )}
          </div>
          <ul className="ml-4 list-disc space-y-1.5 text-muted-foreground">
            {v.changes.map((change, i) => (
              <li key={i}>{change}</li>
            ))}
          </ul>
        </DocSection>
      ))}
    </DocPage>
  )
}
