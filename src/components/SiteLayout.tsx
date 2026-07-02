import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/available", label: "Available" },
  { to: "/resume", label: "Resumé" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Link to="/" className="inline-block">
          <h1 className="text-3xl md:text-4xl tracking-[0.25em] uppercase font-normal">
            Jill Pierucci Bolakas
          </h1>
        </Link>
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-accent transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 h-px w-full bg-border" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Jill Pierucci Bolakas · Studio Sculpture
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <SiteFooter />
    </div>
  );
}
