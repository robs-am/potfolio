'use client'

import { useState, useEffect } from 'react'
import headerData from '../data/headerData.json'
import Link from 'next/link'
import {Menu, X} from 'lucide-react'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed w-full bg-background/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        isVisible ? 'top-0' : '-top-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          {title}
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {headerData.links.map((item) => (
              <li key={item.url}>
                <Link href={item.url} className="text-secondary-foreground hover:text-primary transition-colors hover:underline hover:underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {headerData.links.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-secondary-foreground hover:text-primary transition-colors hover:underline hover:underline-offset-4 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}