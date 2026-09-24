import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/aurea";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#inicio"
          className={cn(
            "font-display text-lg leading-none tracking-[0.22em] transition-colors duration-500 md:text-xl",
            scrolled || open ? "text-foreground" : "text-background",
          )}
        >
          ÁUREA
          <span className="ml-2 font-sans text-[0.6rem] tracking-[0.3em] uppercase opacity-70">
            Dermatología
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "link-underline text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500",
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/85",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "btn-base hidden !min-h-0 !px-6 !py-3 md:inline-flex",
              scrolled ? "btn-clay" : "btn-outline-light",
            )}
          >
            Agenda una valoración
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden",
              scrolled || open ? "text-foreground" : "text-background",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-2xl text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-clay mt-6 w-full"
          >
            Agenda una valoración
          </a>
        </nav>
      )}
    </header>
  );
}
