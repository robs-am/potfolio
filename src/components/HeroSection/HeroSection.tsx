import React from 'react'
import { useRef, useEffect } from 'react';
import { animateHeroSection } from '../../lib/animations';

export const HeroSection = () => {
   const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (heroRef.current) {
      animateHeroSection(heroRef.current);
    }
  }, []); 
  return (
    <section id="hero" className="min-h-screen flex flex-col items-start justify-center">
    <h1
      ref={heroRef}
      className="text-8xl font-roboto font-light tracking-wider text-dark-accent uppercase"
    >
      Roberta Amaro
    </h1>
    <span id="subtitle" className="text-7xl font-roboto font-thin tracking-wider uppercase">Front-End Developer</span>
  </section>
  )
}
