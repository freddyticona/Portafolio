/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Hook para animar elementos al hacer scroll
 *
 * @param options - Opciones de configuración
 * @returns {object} - { ref, isVisible }
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          // Add delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasTriggered(true);
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) setHasTriggered(true);
          }
        } else if (!entry.isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  return { ref, isVisible };
}

/**
 * Hook para animar múltiples elementos
 */
export function useScrollAnimationList(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [elements, setElements] = useState<Set<HTMLElement>>(new Set());
  const [visibleElements, setVisibleElements] = useState<Set<HTMLElement>>(new Set());

  const observeElement = (element: HTMLElement | null) => {
    if (element && !elements.has(element)) {
      setElements(prev => new Set(prev).add(element));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target as HTMLElement));
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const next = new Set(prev);
              next.delete(entry.target as HTMLElement);
              return next;
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [elements, threshold, rootMargin, triggerOnce]);

  return {
    observeElement,
    isElementVisible: (element: HTMLElement) => visibleElements.has(element)
  };
}

/**
 * Hook para rastrear scroll depth
 */
export function useScrollDepth(thresholds: number[] = [25, 50, 75, 90, 100]) {
  const [scrollDepths, setScrollDepths] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;

      setScrollDepths(prev => {
        const newDepths = thresholds.filter(threshold => {
          return scrolled >= threshold && !prev.includes(threshold);
        });
        return [...prev, ...newDepths];
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [thresholds]);

  return scrollDepths;
}

/**
 * Hook para parallax effect
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = (rect.top + scrolled) * speed;
      setOffset(rate);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref, offset };
}
