'use client'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const about = aboutRef.current;
    
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

      // Animate title opacity when the site loads
      if (title) {
        gsap.fromTo(title, 
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate About Me section
    if (about && contact) {
      gsap.fromTo(about.children, 
        { 
          opacity: 0, 
          y: 50,
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.5,
          stagger: 0.2, // This will create a slight delay between each child element's animation
          scrollTrigger: {
            trigger: about,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 ref={titleRef} id="title" className="text-6xl font-roboto font-thin tracking-wider text-dark-accent">
            Welcome to My Portfolio
          </h1>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-secondary/10">
          <div ref={aboutRef} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4">About Me</h2>
            <p>Here you can write a brief introduction about yourself and your skills.</p>
          </div>
        </section>
        <section  id="projects" className="min-h-screen flex items-center justify-center">
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