"use client"
import * as React from "react"
import { Menu, Search, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { Sidebar } from "./sidebar"
import { SearchDialog } from "./search-dialog"
import Link from "next/link"
export function SiteHeader() {
  const [navOpen, setNavOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-journal-rule bg-journal-paper/85 backdrop-blur supports-[backdrop-filter]:bg-journal-paper/70">
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <div className="flex h-16 items-center gap-4 px-4 lg:px-8">
        {/* Mobile menu */}
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
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
          <SheetContent side="left" className="w-72 p-0 border-journal-rule">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <Sidebar onNavigate={() => setNavOpen(false)} />
          </SheetContent>
        </Sheet>
        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <JournalLogo className="size-8 text-journal-burgundy transition-transform group-hover:rotate-3" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold text-journal-ink tracking-tight">
              Journal
            </span>
            <span className="journal-eyebrow text-[9px] mt-0.5">
              Design System
            </span>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          {/* Search trigger — opens the dialog */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden h-9 gap-2 text-journal-ink-light md:inline-flex hover:text-journal-ink"
            aria-label="Search documentation"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-4" />
            <span className="font-serif text-sm">Search...</span>
            <kbd className="ml-4 hidden rounded border border-journal-rule bg-journal-paper-dark px-1.5 py-0.5 text-[10px] font-medium text-journal-sepia lg:inline">
              ⌘K
            </kbd>
          </Button>
          {/* Mobile search icon button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-journal-ink-light hover:text-journal-ink"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="View on GitHub"
            className="text-journal-ink-light hover:text-journal-ink"
          >
            <a
              href="https://github.com/archaeanic/journal-ds"
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
/**
 * A small journal-style mark: an open book on a circle.
 * Burgundy on paper. Renders crisp at any size.
 */
export function JournalLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Cover */}
      <rect
        x="3"
        y="4"
        width="26"
        height="24"
        rx="2"
        fill="currentColor"
        opacity="0.12"
      />
      {/* Page */}
      <rect
        x="5"
        y="6"
        width="22"
        height="20"
        rx="1"
        fill="var(--journal-paper)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Center binding line */}
      <line
        x1="16"
        y1="6"
        x2="16"
        y2="26"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
      />
      {/* Lines on left page */}
      <line x1="8" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="8" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="8" y1="20" x2="11" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {/* Lines on right page */}
      <line x1="19" y1="11" x2="24" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="19" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="19" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="19" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}