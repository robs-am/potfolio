'use client';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AboutMe from '@/components/AboutMe/AboutMe';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import {Projects} from '@/components/Projects/Projects'; // Verifique aqui se é importado corretamente
import { useEffect } from 'react';
import  Contact  from '../components/Contact/Contact'

const Portfolio = () => {

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
    <div className="bg-dark-card text-dark-primary">
      <Header />
      <main className="px-20">
        <HeroSection />
        <AboutMe />
        <Projects id={''} name={''} description={''} html_url={''} image={''} live={''} /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
