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
    <div className={cn("my-6 overflow-hidden rounded-lg border", className)}>
      <table className="w-full text-sm">
        <thead className="bg-muted/40">
          <tr className="border-b">
            <th className="px-4 py-3 text-left font-semibold">Prop</th>
            <th className="px-4 py-3 text-left font-semibold">Type</th>
            <th className="px-4 py-3 text-left font-semibold">Default</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row) => (
            <tr key={row.name} className="align-top">
              <td className="px-4 py-3">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] font-medium">
                  {row.name}
                </code>
                {row.required && (
                  <span className="ml-2 text-xs text-destructive">*</span>
                )}
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {row.description}
                </p>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[12px] text-muted-foreground">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {row.default ? (
                  <code className="font-mono text-[12px] text-muted-foreground">
                    {row.default}
                  </code>
                ) : (
                  <span className="text-xs text-muted-foreground/60">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
