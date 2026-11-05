import { useEffect, useRef, useState } from 'react';

/** Reports once when the element first scrolls into view. */
export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
}: { threshold?: number; rootMargin?: string } = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIsIntersecting(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { elementRef, isIntersecting };
};
