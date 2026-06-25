"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navSections, type NavItem } from "@/lib/registry"

type SidebarProps = {
  className?: string
  onNavigate?: () => void
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const path = usePathname()

  return (
    <nav
      aria-label="Documentation"
      className={cn("flex h-full flex-col bg-journal-paper", className)}
    >
      <div className="flex-1 overflow-y-auto px-4 py-6 journal-scroll">
        {navSections.map((section) => (
          <div key={section.title} className="mb-7">
            <h4 className="mb-2.5 px-2 journal-eyebrow">
              {section.title}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.path}>
                  <SidebarLink
                    item={item}
                    active={path === item.path}
                    onClick={onNavigate}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}

function SidebarLink({
  item,
  active,
  onClick,
}: {
  item: NavItem
  active: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={item.path}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between rounded-sm px-2 py-1.5 font-serif text-sm transition-colors",
        active
          ? "bg-journal-burgundy/10 text-journal-burgundy font-medium border-l-2 border-journal-burgundy -ml-[2px] pl-[calc(0.5rem-2px)]"
          : "text-journal-ink-light hover:bg-journal-paper-dark hover:text-journal-ink"
      )}
    >
      <span>{item.title}</span>
      {item.status && (
        <span
          className={cn(
            "rounded-sm px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider",
            item.status === "new" &&
              "bg-journal-forest/15 text-journal-forest",
            item.status === "updated" &&
              "bg-journal-gold/15 text-journal-gold",
            item.status === "beta" &&
              "bg-journal-burgundy/15 text-journal-burgundy"
          )}
        >
          {item.status}
        </span>
      )}
    </Link>
  )
}
