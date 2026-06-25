"use client"

import * as React from "react"

/**
 * Hash-based router.
 *
 * Because the sandbox preview only exposes the `/` route, we route everything
 * client-side via the URL hash. This gives us shareable, bookmarkable URLs
 * like `#/docs/button` while keeping a single Next.js page.
 */

export type RouterContextValue = {
  path: string
  navigate: (to: string) => void
}

const RouterContext = React.createContext<RouterContextValue | null>(null)

function getHashPath(): string {
  if (typeof window === "undefined") return "/"
  const hash = window.location.hash.replace(/^#/, "")
  return hash || "/"
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = React.useState<string>(getHashPath)

  React.useEffect(() => {
    const onHashChange = () => {
      setPath(getHashPath())
      // Scroll to top on every navigation.
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    }
    window.addEventListener("hashchange", onHashChange)
    // Initialize hash if empty
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/")
    }
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const navigate = React.useCallback((to: string) => {
    const target = to.startsWith("#") ? to : `#${to}`
    if (window.location.hash === target) {
      // Same route — still scroll up.
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    window.location.hash = target
  }, [])

  const value = React.useMemo(() => ({ path, navigate }), [path, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const ctx = React.useContext(RouterContext)
  if (!ctx) {
    throw new Error("useRouter must be used inside a RouterProvider")
  }
  return ctx
}

/**
 * A link that uses the hash router. Renders as an `<a>` so it's still
 * accessible and works without JS.
 */
export function Link({
  to,
  className,
  children,
  ...props
}: {
  to: string
  className?: string
  children: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const { navigate } = useRouter()
  const href = to.startsWith("#") ? to : `#${to}`
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // Allow cmd/ctrl + click to open in a new tab.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(to)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
