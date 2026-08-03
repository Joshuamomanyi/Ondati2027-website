import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CAMPAIGN } from "@/lib/campaign-data";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/ondati-cup", label: "Ondati Cup" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/your-area", label: "Your Area" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid header everywhere except the top of the home page (which has a hero).
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-lg font-extrabold transition-colors",
              solid ? "bg-primary text-primary-foreground" : "bg-gold text-gold-foreground",
            )}
          >
            DO
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={cn(
                "truncate font-display text-sm font-bold",
                solid ? "text-foreground" : "text-primary-foreground",
              )}
            >
              Dennis Ondati Omari
            </span>
            <span
              className={cn(
                "truncate text-[11px] font-medium tracking-wide",
                solid ? "text-muted-foreground" : "text-primary-foreground/70",
              )}
            >
              MCA · Gesusu Ward {CAMPAIGN.year}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "bg-accent text-foreground" }}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-foreground/80 hover:bg-accent hover:text-foreground"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" className="hidden sm:inline-flex">
            <Link to="/get-involved">Join Movement</Link>
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-lg lg:hidden transition-colors",
              solid ? "text-gold" : "text-primary-foreground",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-accent" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <Link to="/get-involved" onClick={() => setOpen(false)}>
                Join Movement
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
