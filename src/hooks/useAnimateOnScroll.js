import { useInView } from 'react-intersection-observer';

/**
 * Custom hook that returns a ref and a boolean indicating if the element
 * has entered the viewport. Triggers a one-time animation.
 *
 * @param {Object} options - react-intersection-observer options
 * @returns {{ ref: Function, inView: boolean }}
 */
export function useAnimateOnScroll(options = {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  });

  return { ref, inView };
}
