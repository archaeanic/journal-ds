"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Link, useRouter } from "@/lib/router"
import { navSections, type NavItem } from "@/lib/registry"

type SidebarProps = {
  className?: string
  onNavigate?: () => void
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const { path } = useRouter()

  return (
    <nav
      aria-label="Documentation"
      className={cn("flex h-full flex-col", className)}
    >
      <div className="flex-1 overflow-y-auto px-4 py-6 lumen-scroll">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
      to={item.path}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors",
        active
          ? "bg-muted font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
      )}
    >
      <span>{item.title}</span>
      {item.status && (
        <span
          className={cn(
            "rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase",
            item.status === "new" &&
              "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
            item.status === "updated" &&
              "bg-amber-500/15 text-amber-600 dark:text-amber-400",
            item.status === "beta" &&
              "bg-violet-500/15 text-violet-600 dark:text-violet-400"
          )}
        >
          {item.status}
        </span>
      )}
    </Link>
  )
}
