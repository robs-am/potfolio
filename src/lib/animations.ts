// animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const animateHeroSection = (hero: HTMLHeadingElement | null) => {
  if (hero) {
    gsap.fromTo(
      hero,
      { opacity: 0, x: -900 }, // Ponto inicial com opacidade 0 e posição X -100
      { opacity: 1, x: 0, duration: 1.5, ease: 'power1.inOut' } // Ponto final com opacidade 1 e posição X 0
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
