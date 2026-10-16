import { useEffect, useState } from 'react';

/**
 * CountUpNumber — animates a numeric value from 0 to its target.
 * Supports suffixes like "+" and "K".
 *
 * @param {{ value: string, delay?: number, duration?: number }} props
 */
export default function CountUpNumber({ value, delay = 0, duration = 1800 }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    // Parse numeric part and suffix
    const raw    = String(value);
    const num    = parseFloat(raw.replace(/[^0-9.]/g, '')) || 0;
    const suffix = raw.replace(/[0-9.]/g, '');

    const timer = setTimeout(() => {
      const start    = performance.now();
      const animate  = (now) => {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased    = 1 - Math.pow(1 - progress, 3);
        const current  = Math.floor(eased * num);

        setDisplay(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(animate);
        else setDisplay(value); // ensure exact final value
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, duration]);

  return <span>{display}</span>;
}
