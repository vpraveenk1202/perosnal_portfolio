import { ArrowUp } from "lucide-react";
import { scrollToSection } from "../../lib/scroll";

export function Footer() {
  return (
    <footer className="bg-black px-5 py-7 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="mono-font text-[10px] uppercase tracking-[.15em] text-white/40">
          © {new Date().getFullYear()} Praveen Kumar V
        </p>

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-white/60 transition hover:text-white"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}