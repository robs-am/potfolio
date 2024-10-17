// components/Header.tsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon, X } from 'lucide-react'; 
import MenuComponent from '../Menu/Menu'; 
import "../../app/globals.css";  

const Header = () =>  {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

      
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header
      className={`fixed flex items-center w-full bg-background/80 backdrop-blur-sm z-50 transition-all duration-300 ${isVisible ? 'top-0' : '-top-full'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:justify-center">
        <Link href="/" className="flex items-center">
          <span className='tracking-widest font-semibold text-2xl'>RA</span>
        </Link>
        <button
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />} 
        </button>
      </div>
      <MenuComponent isMobile={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} /> 
    </header>
  );
}

export default Header;
