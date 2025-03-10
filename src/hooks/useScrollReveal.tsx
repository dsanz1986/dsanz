
import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  opacity?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  scale?: number;
  viewFactor?: number;
}

const useScrollReveal = () => {
  const animateElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.section-transition');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    revealElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return { animateElementsRef };
};

export default useScrollReveal;
