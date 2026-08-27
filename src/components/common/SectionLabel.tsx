interface SectionLabelProps {
  number: string;
  children: string;
  dark?: boolean;
}

export function SectionLabel({ number, children, dark = false }: SectionLabelProps) {
  return (
    <div className={`mono-font mb-4 text-xs uppercase tracking-[.24em] ${dark ? "text-white/40" : "text-black/40"}`}>
      {number} / {children}
    </div>
  );
}