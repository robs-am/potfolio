'use client';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutMe from '@/components/AboutMe/AboutMe';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { useEffect, useRef } from 'react';


const Portfolio = () => {
  const heroRef = useRef<HTMLHeadingElement>(null);



  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li button');

    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-primary');
      if (link.textContent?.toLowerCase() === current) {
        link.classList.add('text-primary');
      }
    });
  };

  useEffect(() => {


    window.addEventListener('scroll', handleScroll);



    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <AboutMe />

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-xl mb-2">Project 1</h3>
                <p>Description of your first project.</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="text-xl mb-2">Project 2</h3>
                <p>Description of your second project.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4">Contact Me</h2>
            <p>You can add your contact information or a contact form here.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
