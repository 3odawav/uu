import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimateOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimate = <T extends HTMLElement>(options: ScrollAnimateOptions = {}): RefObject<T> => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  // We are stringifying the options to prevent re-running the effect on every render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(options)]);

  return elementRef;
};
