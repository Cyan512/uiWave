import { useContext } from "react"
import { TocContext } from "@/contexts/toc-context"
import { useActiveHeading } from "@/hooks/use-active-heading"
import { cn } from "@/lib/utils"

export default function SidebarRight() {
  const { items } = useContext(TocContext)
  const activeId = useActiveHeading(items.map((i) => i.id))

  if (items.length === 0) return null

  return (
    <nav className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        En esta página
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "text-sm block py-1 border-l-2 pl-3 transition-colors",
                activeId === item.id
                  ? "border-foreground text-foreground font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
