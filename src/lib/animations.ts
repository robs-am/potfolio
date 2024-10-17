// animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const animateTitle = (title: HTMLHeadingElement | null) => {
  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0 }, 
      { opacity: 1, duration: 4, ease: 'power2.out' } 
    );
  }
};


export const animateAboutSection = (about: HTMLDivElement | null) => {
  if (about) {
    gsap.fromTo(
      about,
      { opacity: 0 }, 
      { opacity: 1, duration: 4, ease: 'power2.out' } 
    );
  }
};
