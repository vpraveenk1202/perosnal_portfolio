import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "../../data/navigation";
import type { SectionId } from "../../types/portfolio";
import { scrollToSection } from "../../lib/scroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id: SectionId) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl">
        <button
          type="button"
          onClick={() => navigate("home")}
          className="display-font text-lg font-bold tracking-tight"
          aria-label="Go to home"
        >
          codeswithpr<span className="text-accent">.</span>
        </button>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => navigate(item.id)}
              className="capitalize transition hover:text-accent"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-black/10 bg-white p-5 shadow-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id)}
                className="block w-full border-b border-black/10 py-3 text-left font-semibold last:border-0"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}