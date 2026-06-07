import { useState, useEffect } from 'react';

/**
 * Returns whether the page has been scrolled past a threshold.
 * Used to toggle the navbar background on scroll.
 */
export default function useNavbarScroll(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
