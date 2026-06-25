"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
  className?: string
}

/**
 * CodeBlock styled to match the Journal design system:
 * ink-colored background, sepia text, paper-dark filename bar,
 * burgundy copy button.
 */
export function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const ta = document.createElement("textarea")
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }, [code])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm border border-journal-rule",
        className
      )}
      data-language={language}
    >
      {filename && (
        <div className="flex items-center justify-between border-b border-journal-rule bg-journal-paper-dark px-4 py-2 text-xs text-journal-sepia">
          <span className="font-mono">{filename}</span>
        </div>
      )}
      <div className="relative bg-journal-ink">
        <SyntaxHighlight code={code} language={language} />
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className={cn(
            "absolute right-3 top-3 z-10 inline-flex size-8 items-center justify-center rounded-sm bg-journal-ink/60 text-[#e8dcc8]/70 backdrop-blur opacity-0 transition hover:bg-journal-ink hover:text-[#e8dcc8] focus:opacity-100 group-hover:opacity-100"
          )}
        >
          {copied ? (
            <Check className="size-3.5 text-journal-forest" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>
    </div>
  )
}

function SyntaxHighlight({ code, language }: { code: string; language: string }) {
  const html = React.useMemo(() => highlight(code, language), [code, language])
  return (
    <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed text-[#e8dcc8]/80 lumen-scroll">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function highlight(code: string, language: string): string {
  if (language === "bash" || language === "sh") {
    const escaped = escapeHtml(code)
    return escaped
      .replace(/(^|\n)(\$ )/g, '$1<span class="tok-comment">$2</span>')
      .replace(/(\bnpm\b|\bnpx\b|\bpnpm\b|\byarn\b|\bbun\b|\bgit\b|\bnode\b)/g, '<span class="tok-keyword">$1</span>')
  }

  let out = escapeHtml(code)

  out = out.replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>')
  out = out.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')

  out = out.replace(
    /(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`)/g,
    '<span class="tok-string">$1</span>'
  )

  out = out.replace(
    /(&lt;\/?)([A-Za-z][\w.-]*)/g,
    '$1<span class="tok-tag">$2</span>'
  )

  out = out.replace(
    /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|class|extends|implements|interface|type|enum|public|private|protected|readonly|static|async|await|new|this|null|undefined|true|false|void|never|unknown|any|string|number|boolean|React|useState|useEffect|useRef|useMemo|useCallback)\b/g,
    '<span class="tok-keyword">$1</span>'
  )

  out = out.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>')

  out = out.replace(
    /\b([a-zA-Z_$][\w$]*)(?=\()/g,
    '<span class="tok-fn">$1</span>'
  )

  return out
}
