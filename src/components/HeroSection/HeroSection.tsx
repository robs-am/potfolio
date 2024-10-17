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
    <section id="hero" className="min-h-screen flex items-center justify-center">
    <h1
      ref={heroRef}
      className="text-6xl font-roboto font-thin tracking-wider text-dark-accent"
    >
      Welcome to My Portfolio
    </h1>
  </section>
  )
}
