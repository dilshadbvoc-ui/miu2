import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  selector: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number;
  start?: string;
};

export function useScrollReveal(reveals: RevealOptions[]) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      reveals.forEach(({ selector, from, to, stagger = 0, start = 'top 82%' }) => {
        gsap.fromTo(
          selector,
          { opacity: 0, y: 40, ...from },
          {
            opacity: 1,
            y: 0,
            ...to,
            duration: 0.7,
            stagger,
            ease: 'expo.out',
            scrollTrigger: { trigger: ref.current, start },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}
