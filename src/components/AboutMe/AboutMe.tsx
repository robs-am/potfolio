import React, { useEffect, useRef } from 'react';
import { animateAboutSection } from '../../lib/animations'; 

const AboutMe = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      animateAboutSection(aboutRef.current);
    }
  }, []); 

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-secondary/10">
      <div ref={aboutRef} className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl mb-4">About Me</h2>
        <p>Here you can write a brief introduction about yourself and your skills.</p>
      </div>
    </section>
  );
}

export default AboutMe;
