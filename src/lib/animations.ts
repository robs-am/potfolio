// animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const animateHeroSection = (hero: HTMLHeadingElement | null) => {
  if (hero) {
    gsap.fromTo(
      hero,
      { opacity: 0 }, 
      { opacity: 1, duration: 4, ease: 'power2.out' } 
    );
  }
};


export const animateAboutSection = (about: HTMLDivElement | null) => {
  if (about) {
    gsap.fromTo(
      about.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: about,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
};
