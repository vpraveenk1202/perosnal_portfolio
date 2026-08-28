import { useTypewriter } from "../../hooks/useTypewriter";

interface TypewriterProps {
  words: string[];
}

export function Typewriter({ words }: TypewriterProps) {
  const text = useTypewriter(words);

  return (
    <span className="inline-block min-h-[1.2em] max-w-full break-words text-accent">
      {text}
      <span className="cursor-blink ml-1 inline-block h-[.9em] w-[2px] bg-current" />
    </span>
  );
}