import { useEffect, useRef, useCallback } from 'react';

/**
 * Manages the timeline scroll progress bar and dot activation.
 * Returns a ref to attach to the timeline container.
 */
export default function useTimelineProgress() {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  const update = useCallback(() => {
    const timeline = timelineRef.current;
    const bar = progressRef.current;
    if (!timeline || !bar) return;

    const rect = timeline.getBoundingClientRect();
    const scrolled = window.innerHeight * 0.5 - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / rect.height));
    bar.style.height = progress * rect.height + 'px';

    // Activate dots
    const items = timeline.querySelectorAll('.timeline-item');
    items.forEach(item => {
      const dot = item.querySelector('.timeline-dot');
      if (item.getBoundingClientRect().top < window.innerHeight * 0.6) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', update, { passive: true });
    update(); // Initial check
    return () => window.removeEventListener('scroll', update);
  }, [update]);

  return { timelineRef, progressRef };
}
