import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1. Fade-in sections on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-fade').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });

      // 2. Stagger fade children
      gsap.utils.toArray<HTMLElement>('.gsap-stagger').forEach((parent) => {
        const children = parent.children;
        if (children.length) {
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0,
              duration: 0.6,
              stagger: 0.12,
              scrollTrigger: {
                trigger: parent,
                start: 'top 80%',
              },
            }
          );
        }
      });

      // 3. Scale-in elements
      gsap.utils.toArray<HTMLElement>('.gsap-scale').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });

      // 4. Counter animation for stat numbers
      gsap.utils.toArray<HTMLElement>('.gsap-counter').forEach((el) => {
        const text = el.textContent || '';
        const target = parseInt(text.replace(/[^0-9]/g, '')) || 0;
        const suffix = text.replace(/[0-9]/g, '');
        if (target === 0) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);
}
