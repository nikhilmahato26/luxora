import { useEffect, useState } from 'react';

/**
 * Track whether the page has scrolled past a given threshold.
 * Used to toggle the navbar's glass/solid state.
 * @param {number} threshold pixels
 * @returns {boolean} scrolled
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
