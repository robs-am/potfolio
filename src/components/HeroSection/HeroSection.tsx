import React, { useRef, useEffect } from 'react';
import { animateHeroSection } from '../../lib/animations'; // Certifique-se de ajustar o caminho conforme necessário

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const rectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && rectRef.current) {
      animateHeroSection(titleRef.current, subtitleRef.current, rectRef.current);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-start justify-center relative">
      <h1
        ref={titleRef}
        className="text-8xl font-roboto font-light tracking-wider text-dark-accent uppercase"
        style={{ opacity: 0, transform: 'translateX(-200px)' }} // Define a opacidade inicial como 0 e posição fora da tela
      >
        Roberta Amaro
      </h1>
      <div
        ref={rectRef}
        style={{
          position: 'absolute',
          top: '51%',
          left: 0,
          width: '100%',
          backgroundColor: 'currentColor', // Mesma cor do texto
          zIndex: 1,
        }}
      />
      <span
        ref={subtitleRef}
        id="subtitle"
        className="text-7xl font-roboto font-thin tracking-wider uppercase"
        style={{ opacity: 0, position: 'relative', zIndex: 2 }} // Define a opacidade inicial como 0
      >
        Front-End Developer
      </span>
    </section>
  );
};