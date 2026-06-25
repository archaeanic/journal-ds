import * as React from "react"
import { cn } from "@/lib/utils"

export type PropRow = {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

type PropTableProps = {
  rows: PropRow[]
  className?: string
}

export function PropTable({ rows, className }: PropTableProps) {
  return (
    <div className={cn("my-6 overflow-hidden rounded-sm border border-journal-rule", className)}>
      <table className="w-full text-sm">
        <thead className="bg-journal-paper-dark border-b border-journal-rule">
          <tr>
            <th className="px-4 py-2.5 text-left journal-eyebrow">Prop</th>
            <th className="px-4 py-2.5 text-left journal-eyebrow">Type</th>
            <th className="px-4 py-2.5 text-left journal-eyebrow">Default</th>
            <th className="px-4 py-2.5 text-left journal-eyebrow">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-journal-rule/50">
          {rows.map((row) => (
            <tr key={row.name} className="align-top">
              <td className="px-4 py-3 whitespace-nowrap">
                <code className="font-mono text-[12px] font-semibold text-journal-burgundy">
                  {row.name}
                </code>
                {row.required && (
                  <span className="ml-1 text-journal-burgundy">*</span>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <code className="font-mono text-[12px] text-journal-sepia">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {row.default ? (
                  <code className="font-mono text-[12px] text-journal-sepia/80">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-xs text-journal-sepia/50">—</span>
                )}
              </td>
              <td className="px-4 py-3 font-serif text-journal-ink-light leading-relaxed">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
