import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 150,
  deletingSpeed = 90,
  pause = 1800
): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = window.setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = text.length + (deleting ? -1 : 1);
      setText(currentWord.slice(0, nextLength));
    }, text === currentWord && !deleting ? pause : deleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [deleting, pause, text, typingSpeed, deletingSpeed, wordIndex, words]);

  return text;
}