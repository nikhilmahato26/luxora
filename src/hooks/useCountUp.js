import { useEffect, useRef, useState } from 'react';

/**
 * Animate a number from 0 -> target when the element scrolls into view.
 * @param {number} target  final value
 * @param {object} opts    { duration (ms), decimals }
 * @returns {[number, React.RefObject]} [currentValue, ref]
 */
export function useCountUp(target, { duration = 1800, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            setValue(
              decimals > 0
                ? Number(current.toFixed(decimals))
                : Math.round(current)
            );
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return [value, ref];
}
