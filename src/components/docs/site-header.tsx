"use client"

import * as React from "react"
import { Menu, Search, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { Sidebar } from "./sidebar"
import { Link } from "@/lib/router"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <Sidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-2">
          <LumenLogo className="size-6" />
          <span className="text-base font-semibold tracking-tight">
            Lumen UI
          </span>
          <span className="hidden rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground sm:inline">
            v1.0
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-1">
          {/* Search button — non-functional visual placeholder. */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden h-9 gap-2 text-muted-foreground md:inline-flex"
            aria-label="Search documentation"
          >
            <Search className="size-4" />
            <span className="text-sm">Search...</span>
            <kbd className="ml-4 hidden rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium lg:inline">
              ⌘K
            </kbd>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="View on GitHub"
          >
            <a
              href="https://github.com/lumen-ui/react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
            </a>
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export function LumenLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="7"
        fill="currentColor"
        className="text-foreground"
      />
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="none"
        stroke="oklch(0.985 0 0)"
        strokeWidth="2"
      />
      <circle cx="16" cy="16" r="2" fill="oklch(0.985 0 0)" />
    </svg>
  )
}
