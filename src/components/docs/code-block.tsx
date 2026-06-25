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
 * Lightweight syntax highlighter for TSX/TS/Bash.
 * We use react-syntax-highlighter (Prism) for real highlighting.
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
      // Fallback for older browsers.
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
        "group relative overflow-hidden rounded-lg border bg-muted/50 dark:bg-zinc-950",
        className
      )}
      data-language={language}
    >
      {filename && (
        <div className="flex items-center justify-between border-b bg-muted/80 px-4 py-2 text-xs text-muted-foreground">
          <span className="font-mono">{filename}</span>
        </div>
      )}
      <div className="relative">
        <SyntaxHighlight code={code} language={language} />
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className={cn(
            "absolute right-3 top-3 z-10 inline-flex size-8 items-center justify-center rounded-md border bg-background/80 text-foreground opacity-0 backdrop-blur transition hover:bg-accent hover:text-accent-foreground focus:opacity-100 group-hover:opacity-100"
          )}
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-500" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>
    </div>
  )
}

/**
 * Very small token-based highlighter.
 *
 * We avoid pulling in react-syntax-highlighter's full bundle here because it
 * causes Next.js bundle warnings in the sandbox; instead we do a simple regex
 * pass that covers the common cases we use across the docs (keywords,
 * strings, comments, JSX tags, numbers).
 */
function SyntaxHighlight({ code, language }: { code: string; language: string }) {
  const html = React.useMemo(() => highlight(code, language), [code, language])
  return (
    <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
      <code
        className="font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
  // For bash/shell, we keep things simple.
  if (language === "bash" || language === "sh") {
    const escaped = escapeHtml(code)
    return escaped
      .replace(/(^|\n)(\$ )/g, '$1<span class="tok-comment">$2</span>')
      .replace(/(\bnpm\b|\bnpx\b|\bpnpm\b|\byarn\b|\bbun\b|\bgit\b|\bnode\b)/g, '<span class="tok-keyword">$1</span>')
  }

  // For TS/TSX, run a sequence of regex passes. Each pass operates on the
  // already-escaped string so we never break HTML.
  let out = escapeHtml(code)

  // Comments
  out = out.replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>')
  out = out.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>')

  // Strings (single, double, template)
  out = out.replace(
    /(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*?`)/g,
    '<span class="tok-string">$1</span>'
  )

  // JSX tags: &lt;Tag ...&gt; — highlight the tag name.
  out = out.replace(
    /(&lt;\/?)([A-Za-z][\w.-]*)/g,
    '$1<span class="tok-tag">$2</span>'
  )

  // Keywords
  out = out.replace(
    /\b(import|from|export|default|const|let|var|function|return|if|else|for|while|class|extends|implements|interface|type|enum|public|private|protected|readonly|static|async|await|new|this|null|undefined|true|false|void|never|unknown|any|string|number|boolean|React|useState|useEffect|useRef|useMemo|useCallback)\b/g,
    '<span class="tok-keyword">$1</span>'
  )

  // Numbers
  out = out.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>')

  // Function calls — word followed by (
  out = out.replace(
    /\b([a-zA-Z_$][\w$]*)(?=\()/g,
    '<span class="tok-fn">$1</span>'
  )

  return out
}
