import { useEffect, useRef, useState } from 'react';

type Options = IntersectionObserverInit;

export default function useScrollReveal(options?: Options) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, ...(options || {}) }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref, revealed } as const;
}
