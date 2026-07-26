import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Components",
    href: "/docs/components",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b bg-background">
      <div className="h-full flex items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight"
        >
          uiWave
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive
                    ? "font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground">
            GitHub
          </button>
        </div>
      </div>
    </header>
  );
}