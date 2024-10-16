'use client'

import { useState, useEffect } from 'react'
import headerData from '../data/headerData.json'
import Link from 'next/link'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
    <header
      className={`fixed w-full bg-background/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        isVisible ? 'top-0' : '-top-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Your Name
        </Link>
        <nav>
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
      </div>
    </header>
  )
}