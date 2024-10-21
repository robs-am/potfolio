// animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export const animateHeroSection = (title: HTMLHeadingElement | null, subtitle: HTMLSpanElement | null, current: HTMLDivElement) => {
  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0, x: -200 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5, 
        ease: 'power1.out',
        onComplete: () => {
          title.style.opacity = '1'; 
          const rect = document.createElement('div');
          rect.style.position = 'absolute';
          rect.style.background = '#d4edd9';
          rect.style.width = '100%';
          rect.style.top = '0';
          current.appendChild(rect);

          if (rect && subtitle) {
            gsap.fromTo(
              rect,
              { y: -30, height: 0 }, 
              { 
                y: 0, 
                height: subtitle.offsetHeight, 
                duration: 0.5, 
                ease: 'power1.out',
                onUpdate: () => {
                  subtitle.style.transform = `translateY(${rect.offsetHeight - subtitle.offsetHeight}px)`;
                },
                onComplete: () => {
                  gsap.to(rect, {
                    height: 0,
                    duration: 0.5,
                    ease: 'power1.out',
                    onUpdate: () => {
                      rect.style.top = `${subtitle.offsetHeight - rect.offsetHeight}px`; 
                    },
                    onComplete: () => {
                      subtitle.style.opacity = '1'; 
                      subtitle.style.transform = 'translateY(0)'; 
                      current.removeChild(rect); 
                    }
                  });
                }
              }
            );
          }
        }
      }
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
