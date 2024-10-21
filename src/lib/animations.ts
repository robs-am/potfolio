// animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



export const animateHeroSection = (title: HTMLHeadingElement | null, subtitle: HTMLSpanElement | null, current: HTMLDivElement) => {
  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0, x: -200 }, // Ponto inicial com opacidade 0 e posição X -200
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5, 
        ease: 'power1.out',
        onComplete: () => {
          title.style.opacity = '1'; // Garante que a opacidade seja 100% ao final da animação
          const rect = document.createElement('div');
          rect.style.position = 'absolute';
          rect.style.background = '#d4edd9';
          rect.style.width = '100%';
          rect.style.top = '0';
          current.appendChild(rect);

          if (rect && subtitle) {
            gsap.fromTo(
              rect,
              { y: -30, height: 0 }, // Ponto inicial com altura 0
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
                      rect.style.top = `${subtitle.offsetHeight - rect.offsetHeight}px`; // Atualiza a posição do topo
                    },
                    onComplete: () => {
                      subtitle.style.opacity = '1'; // Revela o texto do span
                      subtitle.style.transform = 'translateY(0)'; // Reseta a posição do span
                      current.removeChild(rect); // Remove o retângulo após a animação
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
